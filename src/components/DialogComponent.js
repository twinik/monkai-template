import React, { useState } from "react";
import { Dialog } from "@mantine/core";
import "./DialogComponent.css";
import gif from "../images/confusedhead.gif";

export default function DialogComponent() {
  const [opened, setOpened] = useState(true);

  return (
    <Dialog
      classNames={{
        root: "dialog-root",
        closeButton: "your-closeButton-class",
      }}
      opened={opened}
      size="xl"
      radius="lg"
      p={0}
      m={0}
    >
      <div className="dialog-content">
        <div className="img-container">
          <img src={gif} alt="confused head" className="img" />
        </div>

        <div className="text-container">
          <p className="subtitle">BEBU IS HERE</p>
          <h4 className="title">AVAILABLE ON OPENSEA</h4>
        </div>

        <div className="btn-container">
          <div className="btn">
            <p className="text-in-btn">VIEW</p>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
