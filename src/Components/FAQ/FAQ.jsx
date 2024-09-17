import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We offer a wide range of software development and training services, including custom software solutions, tech workshops, and coaching."
    },
    {
      question: "How can I get in touch with you?",
      answer: "You can contact us through our PVR Academy or send us an email at support@example.com."
    },
    {
      question: "What are your business hours?",
      answer: "Our business hours are Monday to Friday, 9 AM to 6 PM. We are closed on weekends and public holidays."
    },
    {
      question: "Do you offer online training sessions?",
      answer: "No, we offer only offline training sessions to interact with students one-on-one directly in workshops and training. Please check our training schedule for more details."
    },
    {
      question: "Can I request a custom software solution?",
      answer: "Absolutely! We provide tailored software solutions to meet your specific needs. Please reach out to us to discuss your project."
    }
  ];

  return (
    <div className="faq-container">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <button
              className="faq-question"
              onClick={() => toggleAnswer(index)}
              aria-expanded={openIndex === index}
            >
              <h3>{faq.question}</h3>
              <span>{openIndex === index ? '-' : '+'}</span>
            </button>
            {openIndex === index && <div className="faq-answer"><p>{faq.answer}</p></div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
