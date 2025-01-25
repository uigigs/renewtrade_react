import React from 'react';
import 'react-accessible-accordion/dist/fancy-example.css';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

// FAQ data array
const faqData = [
  {
    id: 1,
    question: 'Q. What is RenewTrade?',
    answer: 'RenewTrade is a revolutionary platform that merges renewable energy with decentralized finance (DeFi), offering the first-ever cryptocurrency token backed by energy production from solar, wind, and hydroelectric power sources.',
  },
  {
    id: 2,
    question: 'Q. What is the RenewTrade token price at presale?',
    answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit eaque nihil numquam vitae dolorum dolores expedita suscipit. Optio repellendus quod architecto ducimus molestias culpa, excepturi dolorum, natus quo voluptatem quisquam.',
  },
  {
    id: 3,
    question: 'Q. When will the RenewTrade presale conclude?',
    answer:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit eaque nihil numquam vitae dolorum dolores expedita suscipit. Optio repellendus quod architecto ducimus molestias culpa, excepturi dolorum, natus quo voluptatem quisquam.',
  },
  {
    id: 4,
    question: 'Q. Has the RenewTrade smart contact ever been audited ?',
    answer:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit eaque nihil numquam vitae dolorum dolores expedita suscipit. Optio repellendus quod architecto ducimus molestias culpa, excepturi dolorum, natus quo voluptatem quisquam.',
  },
  {
    id: 4,
    question: 'Q. What is the smart contract address?',
    answer:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit eaque nihil numquam vitae dolorum dolores expedita suscipit. Optio repellendus quod architecto ducimus molestias culpa, excepturi dolorum, natus quo voluptatem quisquam.',
  },
  // Add more FAQs here if needed
];

const FAQ = () => {
  return (
    <div className="faq-section">
      <div className="container">
        <div className="section-title text-center">
          <h2>Frequently Asked Questions</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since
          </p>
        </div>
        <div className="faq-content">
          <Accordion>
            {faqData.map((faq) => (
              <AccordionItem key={faq.id}>
                <AccordionItemHeading>
                  <AccordionItemButton>{faq.question}</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>{faq.answer}</p>
                </AccordionItemPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
