import React from 'react';
import './FinalPage.css';

const TopicDisplay = (props) => {
    const { heading, probability, importance, question_number, repeated, subtopic } = props.element[0];

    // Determine classes for probability
    const probabilityClass = () => {
        const probValue = parseFloat(probability);
        if (probValue >= 80) {
            return 'high';
        } else if (probValue >= 60) {
            return 'medium';
        } else {
            return 'low';
        }
    };

    return (
        <div className='div-topic'>
            <div className='topic-header'>
                <h2 className='topic-name'>{heading}</h2>
                <span className={`importance-badge ${importance.toLowerCase()}`}>Importance - <b>{importance}</b></span>
            </div>
            <div className='topic-properties'>
                <div className='property'>
                    <strong>Probability:</strong> <span className={`probability-badge ${probabilityClass()}`}>{probability}</span>
                </div>
                <div className='property'>
                    <strong>Repeated:</strong> <span>{repeated}</span>
                </div>
                <div className='property'>
                    <strong>Subtopic:</strong> <span>{subtopic}</span>
                </div>
                <div className='property'>
                    <strong>Questions:</strong>
                    <ul className='question-list'>
                        {question_number.map((question, index) => (
                            <li key={index}>{question}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default TopicDisplay;