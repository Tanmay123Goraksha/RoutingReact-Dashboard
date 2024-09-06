import React, { useState } from 'react';
import "./Feedback.css"
const FeedbackForm = () => {
    const [rating, setRating] = useState(0);
    const [feedback, setFeedback] = useState({
        expectation: '',
        improvement: '',
        suggestions: ''
    });

    const handleRating = (rate) => {
        setRating(rate);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFeedback({ ...feedback, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Feedback Submitted: ', rating, feedback);
    };

    return (
        <div className="form-container">
            <h3 className="title">Feedback</h3>
            <form onSubmit={handleSubmit}>
                <div className="rating-section">
                    <p>How was your experience?</p>
                    <div className="stars">
                        {[...Array(5)].map((_, index) => (
                            <span
                                key={index}
                                className={`star ${rating > index ? 'active' : ''}`}
                                onClick={() => handleRating(index + 1)}
                            >
                                ★
                            </span>
                        ))}
                    </div>
                </div>

                <div className="input-group">
                    <label>How well did our service meet your expectations?</label>
                    <input
                        type="text"
                        name="expectation"
                        value={feedback.expectation}
                        onChange={handleChange}
                        placeholder="Type here"
                    />
                </div>

                <div className="input-group">
                    <label>What can we improve?</label>
                    <input
                        type="text"
                        name="improvement"
                        value={feedback.improvement}
                        onChange={handleChange}
                        placeholder="Type here"
                    />
                </div>

                <div className="input-group">
                    <label>Any additional thoughts or suggestions?</label>
                    <input
                        type="text"
                        name="suggestions"
                        value={feedback.suggestions}
                        onChange={handleChange}
                        placeholder="Type here"
                    />
                </div>

                <button type="submit" className="submit-btn">Submit</button>
            </form>
            <p className="thanks-message">We appreciate your time and feedback!</p>
        </div>
    );
};

export default FeedbackForm;
