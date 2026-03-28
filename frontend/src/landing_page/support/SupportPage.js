import React, { useState } from 'react';
import RaiseTicketModal from './RaiseTicketModal';
import './SupportPage.css';

const FAQS = [
    {
        question: "Why is my order getting rejected?",
        answer: "It could be due to insufficient margin, incorrect order type, or trading restrictions."
    },
    {
        question: "How do I activate the F&O segment?",
        answer: "Go to Console → Segment activation and submit the necessary documents."
    },
    // Add more FAQs here if you want
];

function SupportPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    // Filter FAQs based on search term (case insensitive)
    const filteredFAQs = FAQS.filter(faq =>
        faq.question.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="support-container">
            <section className="hero-section">
                <h1>Need Help?</h1>
                <p>Find answers or raise a support ticket.</p>
                <input
                    className="search-bar"
                    placeholder="Search a question or keyword..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button onClick={() => setIsModalOpen(true)} className="raise-ticket-btn">Raise a Ticket</button>
            </section>

            <section className="faq-section">
                <h2>Frequently Asked Questions</h2>
                {filteredFAQs.length > 0 ? (
                    filteredFAQs.map((faq, idx) => (
                        <details key={idx}>
                            <summary>{faq.question}</summary>
                            <p>{faq.answer}</p>
                        </details>
                    ))
                ) : (
                    <p>No matching FAQs found.</p>
                )}
            </section>

            <RaiseTicketModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
}

export default SupportPage;
