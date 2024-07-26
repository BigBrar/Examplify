import React from 'react';
import './FinalPage.css';

const TopicDisplay = (props) => {
    const { heading, time, importance, difficulty, subtopic } = props.element[0];
    console.log("Props element 0 value is - ",props.element[0]['subtopic'])
    // const { heading, probability, importance, question_number, repeated, subtopic } = props.element[0];

    

    return (
        <div className='div-topic'>
            <div className='topic-header'>
                <h2 className='topic-name'>{heading}</h2>
                <span className={`importance-badge ${importance.toLowerCase()}`}>Importance - <b>{importance}</b></span>
            </div>
            <div className='topic-properties'>
                <div className='property'>
                    <strong>Subtopic:</strong> <span>{subtopic}</span>
                </div>
                <div className='property'>
                    <strong>Difficulty:</strong> <span>{difficulty}</span>
                </div>
                <div className='property'>
                    <strong>Time:</strong> <span>{time}</span>
                </div>
            </div>
        </div>
    );
};

export default TopicDisplay;