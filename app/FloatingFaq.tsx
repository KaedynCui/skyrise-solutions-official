"use client";

import { useState } from "react";
import type { FormEvent } from "react";

type FloatingFaqProps = {
  email: string;
};

const faqItems = [
  {
    question: "What services do you offer?",
    answer:
      "We assist with home loans, refinancing, investment loans, commercial finance and asset finance.",
    keywords: ["service", "offer", "home loan", "investment", "commercial", "asset finance", "服务", "贷款"],
  },
  {
    question: "Is the first consultation free?",
    answer:
      "Yes. The initial discovery conversation is complimentary. Any fees relevant to your situation will be disclosed before you proceed.",
    keywords: ["consultation", "cost", "fee", "free", "charge", "咨询", "费用", "免费"],
  },
  {
    question: "Can you help clients outside Sydney?",
    answer:
      "Yes. We can assist clients across Australia through email and video meetings, subject to service coverage and lending requirements.",
    keywords: ["outside sydney", "australia", "remote", "location", "悉尼", "澳洲", "远程"],
  },
  {
    question: "How does the finance process work?",
    answer:
      "Our process has four stages: discover your goals, compare suitable options, prepare the application, and support you through settlement.",
    keywords: ["process", "how it works", "apply", "application", "settlement", "step", "流程", "申请", "结算"],
  },
  {
    question: "Can you help me refinance?",
    answer:
      "Yes. We can review your current loan and compare alternatives for your rate, loan structure and cash-flow goals.",
    keywords: ["refinance", "refinancing", "current loan", "interest rate", "rate", "再融资", "利率"],
  },
];

export default function FloatingFaq({ email }: FloatingFaqProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState(
    "Hi! Choose a common question below or type your own question."
  );
  const [showEmail, setShowEmail] = useState(false);

  function answerQuestion(answer: string) {
    setResponse(answer);
    setShowEmail(false);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const normalizedQuestion = question.trim().toLowerCase();
    if (!normalizedQuestion) return;

    const matchedFaq = faqItems.find((item) =>
      item.keywords.some((keyword) => normalizedQuestion.includes(keyword))
    );

    if (matchedFaq) {
      answerQuestion(matchedFaq.answer);
    } else {
      setResponse(
        "I don't have a confirmed answer for that question. Please email our team and we will get back to you."
      );
      setShowEmail(true);
    }

    setQuestion("");
  }

  return (
    <div className="floating-faq">
      {isOpen && (
        <section
          className="floating-faq-panel"
          role="dialog"
          aria-label="The Vault frequently asked questions"
        >
          <div className="floating-faq-header">
            <div>
              <strong>The Vault FAQ</strong>
              <span>Quick answers</span>
            </div>
            <button
              type="button"
              className="floating-faq-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close FAQ"
            >
              ×
            </button>
          </div>

          <div className="floating-faq-body">
            <div className="floating-faq-response">
              <span>FAQ</span>
              <p>{response}</p>
              {showEmail && (
                <a
                  href={`mailto:${email}?subject=${encodeURIComponent("Website FAQ enquiry")}`}
                >
                  Email {email}
                </a>
              )}
            </div>

            <div className="floating-faq-options" aria-label="Common questions">
              {faqItems.map((item) => (
                <button
                  type="button"
                  key={item.question}
                  onClick={() => answerQuestion(item.answer)}
                >
                  {item.question}
                </button>
              ))}
            </div>
          </div>

          <form className="floating-faq-form" onSubmit={handleSubmit}>
            <label className="sr-only" htmlFor="floating-faq-question">
              Ask a question
            </label>
            <input
              id="floating-faq-question"
              value={question}
              onChange={(event) => setQuestion(event.target.value)}
              placeholder="Ask a question..."
              autoComplete="off"
            />
            <button type="submit" aria-label="Submit question">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </button>
          </form>
        </section>
      )}

      <button
        type="button"
        className="floating-faq-launcher"
        onClick={() => setIsOpen((currentState) => !currentState)}
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close FAQ" : "Open FAQ"}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M8.8 9a3.2 3.2 0 1 1 4.6 2.9c-.9.45-1.4 1-1.4 2.1" />
          <path d="M12 16h.01" />
        </svg>
      </button>
    </div>
  );
}
