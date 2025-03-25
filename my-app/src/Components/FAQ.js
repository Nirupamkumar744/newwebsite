import React, { useState } from "react";
import "./FAQ.css";

const FAQ = () => {
  const faqs = [
    { question: "Whom is this training suitable for?", answer: "Anyone interested in learning stock market from scratch is welcome to join the course." },
    { question: "Is laptop mandatory to attend the training?", answer: "No, a laptop is not mandatory to attend the training. However, having a laptop is highly recommended as it enhances your learning experience." },
    { question: "Do I need to pay entire fees at once?", answer: "Yes, you need to pay the entire fees at once." },
    { question: "How long will this training last?", answer: "The training duration is of 45 days, excluding weekends, with one year of handholding support." },
    { question: "Will I be able to trade independently after this training ends?", answer: "Absolutely Yes, many individuals successfully pursue trading as a full-time career after this course." },
    { question: "Will I receive a certificate of course completion?", answer: "Yes, you will." },
    
  ];

  return (
    <div className="faq-container">
      <h2>Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item">
      <button className="faq-question" onClick={() => setIsOpen(!isOpen)}>
        {question} <span>{isOpen ? "−" : "+"}</span>
      </button>
      {isOpen && <p className="faq-answer">{answer}</p>}
    </div>
  );
};

export default FAQ;
