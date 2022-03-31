import React from 'react'
import { Disclosure, Transition } from '@headlessui/react'
import './AccordionItem.css'
import plusCircle from '../images/plus-circle.svg'

const AccordionItem = ({ question, answer }) => {
 
  return(
    
    <div role="listitem" className="feed-post faq-feed-post w-dyn-item">
    <div className="feed-post-wrapper">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="feed-plus">
                <div className="feed-post--header text-left">
                    <img 
                    src={plusCircle}
                    alt="Plus Circle" className="faq-icon" />
                    <h2 className="feed-post--title">{question}</h2>
                </div>
            </Disclosure.Button>
            <Transition
              enter="transition duration-600 linear"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-600 linear"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
            <Disclosure.Panel className="">
              
            <div className="feed-post--content-wrapper">
                    <div className="feed-post--content-line"></div>
                      {answer}
                </div>
            </Disclosure.Panel>
</Transition>
          </>
        )}
        
</Disclosure>
            </div>
            </div>
  )
}

export default AccordionItem