import React, { useState } from 'react';
import './SupportPage.css';
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";  // adjust path if needed


function RaiseTicketModal({ open, onClose }) {
    // Hooks called unconditionally at the top level
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [issueType, setIssueType] = useState('');
    const [description, setDescription] = useState('');
    const [errors, setErrors] = useState({});

    if (!open) return null;  // Early return after hooks

    // Basic email regex for validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function validate() {
        const newErrors = {};
        if (!name.trim()) newErrors.name = "Name is required.";
        if (!email.trim()) newErrors.email = "Email is required.";
        else if (!emailRegex.test(email)) newErrors.email = "Invalid email address.";
        if (!issueType) newErrors.issueType = "Please select an issue type.";
        if (!description.trim()) newErrors.description = "Please describe your issue.";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }


    async function handleSubmit(e) {
        e.preventDefault();
    
        if (validate()) {
            try {
                await addDoc(collection(db, "supportTickets"), {
                    name,
                    email,
                    issueType,
                    description,
                    createdAt: new Date()
                });
    
                alert("Ticket submitted successfully!");
    
                setName('');
                setEmail('');
                setIssueType('');
                setDescription('');
                setErrors({});
                onClose();
            } catch (error) {
                alert("Failed to submit ticket. Please try again.");
                console.error("Firestore error:", error);
            }
        }
    }
    

    return (
        <div className="modal-overlay">
            <form className="modal-content" onSubmit={handleSubmit} noValidate>
                <h2>Raise a Ticket</h2>

                <input
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                {errors.name && <small className="error-text">{errors.name}</small>}

                <input
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                />
                {errors.email && <small className="error-text">{errors.email}</small>}

                <select
                    value={issueType}
                    onChange={(e) => setIssueType(e.target.value)}
                >
                    <option value="">Issue Type</option>
                    <option value="Login Problem">Login Problem</option>
                    <option value="Order Issue">Order Issue</option>
                    <option value="Account Activation">Account Activation</option>
                </select>
                {errors.issueType && <small className="error-text">{errors.issueType}</small>}

                <textarea
                    placeholder="Describe your issue..."
                    rows={4}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                {errors.description && <small className="error-text">{errors.description}</small>}

                <div className="modal-buttons">
                    <button type="button" onClick={onClose}>Cancel</button>
                    <button className="submit-btn" type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default RaiseTicketModal;
