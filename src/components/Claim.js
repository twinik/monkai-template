import React, { useState, useEffect, useRef } from "react";
import { useWeb3React } from "@web3-react/core";
import { InjectedConnector } from "@web3-react/injected-connector";
import { ethers } from "ethers";
import toast, { Toaster } from "react-hot-toast";
import CryptoJS from "crypto-js";

import auraWebm from "../images/pixel-webm/mysterymonkai1.webm";
import auraMp4 from "../images/pixel-video/mysterymonkai1.mp4";

import contractAbi from "../utils/HolyNFT.json";
import signatures from "../utils/signatures.json";

import "./Claim.css";

const injected = new InjectedConnector({ supportedChainIds: [1] });

const contractAddress = "0x07511e88628f990d0ada3c446da3859833a0798f";
const contractHash =
  "50ac6aedd79d14efa88e4097bdefde819d332a731a9b9f503402979207582b6b";

const unitPrice = 0.0777;

const preSaleMaxSupply = 1000;
const preSaleMaxPerTx = 3;

const publicSaleMaxSupply = 3333;
const publicSaleMaxPerTx = 7;

//timer functions

const handlePreSaleTimeLeft = () => {
  let date = new Date();
  let now_utc = Date.UTC(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate(),
    date.getUTCHours(),
    date.getUTCMinutes(),
    date.getUTCSeconds()
  );
  let difference = +new Date(Date.UTC(2022, 0, 8, 20, 0, 0)) - +now_utc;
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      difference: true,
    };
  } else {
    timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      difference: false,
    };
  }

  return timeLeft;
};

const handlePublicSaleStart = () => {
  let date = new Date();
  let now_utc = Date.UTC(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate(),
    date.getUTCHours(),
    date.getUTCMinutes(),
    date.getUTCSeconds()
  );
  let difference = +new Date(Date.UTC(2022, 0, 8, 21, 0, 0)) - +now_utc;
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      difference: true,
    };
  } else {
    timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      difference: false,
    };
  }

  return timeLeft;
};

const Claim = () => {
  const { active, account, library, connector, activate, deactivate } =
    useWeb3React();

  const [isLoading, setIsLoading] = useState(true);
  const [isMinting, setIsMinting] = useState(false);
  const [isWhitelisted, setIsWhitelisted] = useState(false);

  const signer = useRef();
  const contract = useRef();

  const [balance, setBalance] = useState();
  const [totalSupply, setTotalSupply] = useState();
  const [preSaleStart, setPreSaleStart] = useState(handlePreSaleTimeLeft());
  const [publicSaleStart, setPublicSaleStart] = useState(
    handlePublicSaleStart()
  );

  const preSaleStartTimeout = useRef();
  const publicSaleStartTimeout = useRef();

  const [preSaleIsActive, setPreSaleIsActive] = useState(false);
  const [publicSaleIsActive, setPublicSaleIsActive] = useState(false);

  const [count, setCount] = useState(1);
  const totalPrice = unitPrice * count;

  const [totalMintedByAddress, setTotalMintedByAddress] = useState();

  const maxPerAccount = publicSaleIsActive
    ? publicSaleMaxPerTx
    : preSaleMaxPerTx;

  const maxAllowed = Math.max(0, maxPerAccount - (totalMintedByAddress ?? 0));

  const contractIsValid = async () => {
    // Contract was not recognized

    const code = await library.getCode(contractAddress);
    const codeHash = CryptoJS.SHA256(code).toString();

    return codeHash === contractHash;
  };

  const getMintedByUser = async () => {
    const fromBlock = 13692602;
    let count = 0;

    const transferSingleEvents = await contract.current.queryFilter(
      "TransferSingle",
      fromBlock,
      "latest"
    );

    for (const event of transferSingleEvents) {
      if (event.args.operator.toLowerCase() === account.toLowerCase()) count++;
    }

    const transferBatchEvents = await contract.current.queryFilter(
      "TransferBatch",
      fromBlock,
      "latest"
    );

    for (const event of transferBatchEvents) {
      if (event.args.operator.toLowerCase() === account.toLowerCase())
        count += event.args.ids.length;
    }

    setTotalMintedByAddress(count);

    return count;
  };

  const fetchState = async () => {
    setIsLoading(true);

    // TODO: Only call when contract is updated
    // await contractIsValid();

    setBalance(await library.getBalance(account));

    setTotalSupply(await contract.current.totalSupply());
    /* 
    setPreSaleStart((await contract.current.preSaleStart()) * 1000);
    setPublicSaleStart((await contract.current.publicSaleStart()) * 1000);
 */
    await getMintedByUser();

    setIsLoading(false);
  };

  const handleDecrease = () => {
    if (count > 1) setCount(count - 1);
  };

  const handleIncrease = () => {
    if (count < maxAllowed) setCount(count + 1);
  };

  const handleConnectWallet = async () => {
    await activate(injected);
  };

  const handlePreSaleMint = async () => {
    console.log("Pre-sale mint");

    setIsMinting(true);

    // // Make sure user hasn't minted more than what's allowed
    // const mintedByUser = await getMintedByUser();

    // if (mintedByUser >= preSaleMaxPerTx) {
    //   toast.error("You've reached the maximum limit.");
    //   setIsMinting(false);
    //   return;
    // }

    try {
      const [v, r, s] = signatures[account.toLowerCase()];

      const tx = await contract.current.preSaleMint(v, r, s, count, {
        value: ethers.utils.parseUnits(totalPrice.toString(), 18),
      });

      await tx.wait();

      // setTotalMintedByAddress(totalMintedByAddress + count);

      toast.success("Minted successfully.");
    } catch (err) {
      console.error(err);
      console.log(err.code, err.message.substring(5));

      if (err.code && err.code === "INSUFFICIENT_FUNDS") {
        toast.error("Insufficient funds.");
      } else if (err.code && err.code === 4001) {
        toast.error("Transaction signature was denied.");
      } else {
        toast.error("Minting failed.");
      }
    }

    setIsMinting(false);
  };

  const handlePublicSaleMint = async () => {
    console.log("Public sale mint");

    setIsMinting(true);

    // // Make sure user hasn't minted more than what's allowed
    // const mintedByUser = await getMintedByUser();

    // if (mintedByUser >= publicSaleMaxPerTx) {
    //   toast.error("You've reached the maximum limit.");
    //   setIsMinting(false);
    //   return;
    // }

    try {
      const tx = await contract.current.publicSaleMint(count, {
        value: ethers.utils.parseUnits(totalPrice.toString(), 18),
      });

      await tx.wait();

      // setTotalMintedByAddress(totalMintedByAddress + count);

      toast.success("Minted successfully.");
    } catch (err) {
      console.error(err);
      console.log(err.code, err.message.substring(5));

      if (err.code && err.code === "INSUFFICIENT_FUNDS") {
        toast.error("Insufficient funds.");
      } else if (err.code && err.code === 4001) {
        toast.error("Transaction signature was denied.");
      } else {
        toast.error("Minting failed.");
      }
    }

    setIsMinting(false);
  };

  const shortenAddress = (address, chars = 4) => {
    return `${address.slice(0, chars)}...${address.slice(-chars)}`;
  };

  useEffect(() => {
    if (!account) return;

    signer.current = library.getSigner();
    contract.current = new ethers.Contract(
      contractAddress,
      contractAbi,
      signer.current
    );

    contract.current.on("TransferSingle", async () => {
      fetchState();
    });

    contract.current.on("TransferBatch", async () => {
      fetchState();
    });

    if (account.toLowerCase() in signatures) setIsWhitelisted(true);

    fetchState();
  }, [account]);

  //timer functions

  useEffect(() => {
    const timer = setTimeout(() => {
      setPreSaleStart(handlePreSaleTimeLeft());
      setPublicSaleStart(handlePublicSaleStart());
    }, 1000);
    setPreSaleIsActive(!preSaleStart.difference);
    setPublicSaleIsActive(!publicSaleStart.difference);
    return () => clearTimeout(timer);
  });

  useEffect(() => {
    if (!preSaleStart) return;

    const now = Date.now();

    // Remove current timeout if there is any
    if (preSaleStartTimeout.current) clearTimeout(preSaleStartTimeout.current);

    // Set timeout for pre-sale start
    preSaleStartTimeout.current = setTimeout(() => {
      setPreSaleIsActive(true);
    }, preSaleStart - now);
  }, [preSaleStart]);

  useEffect(() => {
    if (!publicSaleStart) return;

    const now = Date.now();

    // Remove current timeout if there is any
    if (publicSaleStartTimeout.current)
      clearTimeout(publicSaleStartTimeout.current);

    // Set timeout for public sale start
    publicSaleStartTimeout.current = setTimeout(() => {
      setPublicSaleIsActive(true);
    }, publicSaleStart - now);
  }, [publicSaleStart]);

  useEffect(() => {
    if (!maxAllowed) return;

    if (count > maxAllowed) {
      setCount(Math.max(maxAllowed, 1));
    }
  }, [maxAllowed]);

  return (
    <div id="mint">
      <video id="mint-gif" autoPlay="autoplay" loop muted playsInline>
        <source src={auraWebm} type="video/webm" />
        <source src={auraMp4} type="video/mp4" />
      </video>
      <div id="claim-text-wrapper">
        <div id="payment-modal">
          <div id="payment-header">
            <div id="payment-header-text">
              <h4>BUY YOUR VILLAIN NFT</h4>
              <p className="pt-1.5 italic-grey">Total supply: 3,333 NFTs</p>
            </div>
          </div>
          <div id="payment-info">
            <video id="price-img" autoPlay="autoplay" loop muted playsInline>
              <source src={auraWebm} type="video/webm" />
              <source src={auraMp4} type="video/mp4" />
            </video>
            <div id="payment-info-text">
              <p>Price Per NFT</p>
              <h5>{unitPrice} ETH + gas</h5>
              <p className="launch-date">Public sale available 11.27.2021</p>
            </div>
          </div>
          <div id="ape-number">
            <div id="minus" onClick={handleDecrease}>
              <svg
                width="16"
                height="2"
                viewBox="0 0 16 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 0H1C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1C0 1.26522 0.105357 1.51957 0.292893 1.70711C0.48043 1.89464 0.734784 2 1 2H15C15.2652 2 15.5196 1.89464 15.7071 1.70711C15.8946 1.51957 16 1.26522 16 1C16 0.734784 15.8946 0.48043 15.7071 0.292893C15.5196 0.105357 15.2652 0 15 0Z"
                  fill="black"
                />
              </svg>
            </div>
            <h5>{count}</h5>
            <div id="plus" onClick={handleIncrease}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 7H9V1C9 0.734784 8.89464 0.48043 8.70711 0.292893C8.51957 0.105357 8.26522 0 8 0C7.73478 0 7.48043 0.105357 7.29289 0.292893C7.10536 0.48043 7 0.734784 7 1V7H1C0.734784 7 0.48043 7.10536 0.292893 7.29289C0.105357 7.48043 0 7.73478 0 8C0 8.26522 0.105357 8.51957 0.292893 8.70711C0.48043 8.89464 0.734784 9 1 9H7V15C7 15.2652 7.10536 15.5196 7.29289 15.7071C7.48043 15.8946 7.73478 16 8 16C8.26522 16 8.51957 15.8946 8.70711 15.7071C8.89464 15.5196 9 15.2652 9 15V9H15C15.2652 9 15.5196 8.89464 15.7071 8.70711C15.8946 8.51957 16 8.26522 16 8C16 7.73478 15.8946 7.48043 15.7071 7.29289C15.5196 7.10536 15.2652 7 15 7Z"
                  fill="black"
                />
              </svg>
            </div>
            <h5 id="ape-max">{maxAllowed} Max</h5>
          </div>
          <div id="ape-total">
            <p>Total</p>
            <h5>{totalPrice.toFixed(4)} ETH + gas</h5>
          </div>

          {!publicSaleIsActive && <p>"Public launch at 4pm EST"</p>}

          <button
            className="purchase-button"
            disabled={!preSaleIsActive && !publicSaleIsActive}
          >
            {!publicSaleIsActive ? "Presale" : "Buy Now"}
          </button>

          {/* <Countdown
            date={1638043200 * 1000}
            renderer={({ days, hours, minutes, seconds }) => (
              <button className="purchase-button" disabled>
                {days.toString().padStart(2, 0)}:
                {hours.toString().padStart(2, 0)}:
                {minutes.toString().padStart(2, 0)}:
                {seconds.toString().padStart(2, 0)} time remaining
              </button>
            )}
          /> */}

          {/* {active ? (
            isLoading ? (
              <button className="purchase-button" disabled>
                Loading...
              </button>
            ) : preSaleIsActive ? (
              totalSupply === preSaleMaxSupply ? (
                <button className="purchase-button" disabled>
                  Pre-Sale Sold Out
                </button>
              ) : isWhitelisted ? (
                <button
                  className="purchase-button"
                  onClick={handlePreSaleMint}
                  disabled={
                    isMinting || totalMintedByAddress >= preSaleMaxPerTx
                  }
                >
                  {isMinting
                    ? "Minting..."
                    : totalMintedByAddress >= preSaleMaxPerTx
                    ? "Maximum limit reached"
                    : "Mint"}
                </button>
              ) : (
                <button className="purchase-button" disabled>
                  Not Whitelisted
                </button>
              )
            ) : publicSaleIsActive ? (
              totalSupply === publicSaleMaxSupply ? (
                <button className="purchase-button" disabled>
                  Public Sale Sold Out
                </button>
              ) : (
                <button
                  className="purchase-button"
                  onClick={handlePublicSaleMint}
                  disabled={
                    isMinting || totalMintedByAddress >= publicSaleMaxPerTx
                  }
                >
                  {isMinting
                    ? "Minting..."
                    : totalMintedByAddress >= publicSaleMaxPerTx
                    ? "Maximum limit reached"
                    : "Mint"}
                </button>
              )
            ) : (
              <Countdown
                date={preSaleStart}
                renderer={({ days, hours, minutes, seconds }) => (
                  <button className="purchase-button" disabled>
                    {days.toString().padStart(2, 0)}:
                    {hours.toString().padStart(2, 0)}:
                    {minutes.toString().padStart(2, 0)}:
                    {seconds.toString().padStart(2, 0)} time remaining
                  </button>
                )}
              />
            )
          ) : (
            <button className="purchase-button" onClick={handleConnectWallet}>
              Connect Wallet
            </button>
          )}*/}
        </div>
      </div>

      <Toaster />
    </div>
  );
};

export default Claim;
