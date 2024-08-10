import React, { useEffect, useState } from 'react'
import TopicDisplay3 from './TopicDisplay3'
import './FinalPage3.css'
import { useNavigate } from 'react-router-dom'

const FinalPage = (props) => {
    const [shuffledData, setShuffledData] = useState([]);
    const [index, setIndex] = useState(0);
    const navigate = useNavigate();

    console.log("Final page 3 is working...")

    const incrementIndex = () => {
        if (index + 1 === shuffledData.length) {
            alert("You've reached the end of the quiz...")
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }

    useEffect(() => {
        const shuffleOptions = (question) => {
            const options = ['option1', 'option2', 'option3', 'option4'];
            const shuffledIndices = [0, 1, 2, 3].sort(() => Math.random() - 0.5);
            
            const newQuestion = { ...question };
            const correctAnswer = question.answer;
            
            shuffledIndices.forEach((newIndex, oldIndex) => {
                const oldOption = options[oldIndex];
                const newOption = options[newIndex];
                
                newQuestion[newOption] = question[oldOption];
                newQuestion[`explanation_${newOption}`] = question[`explanation_${oldOption}`];
                
                if (oldOption === correctAnswer) {
                    newQuestion.answer = newOption;
                }
            });
            
            return newQuestion;
        };

        const shuffleAllQuestions = (data) => {
            return data.map(shuffleOptions);
        };

        setShuffledData(shuffleAllQuestions(props.data));
    }, [props.data]);

    return (
        <>
            {shuffledData.length > 0 && (
                <TopicDisplay3 
                    setIndex={incrementIndex} 
                    index={index + 1} 
                    element={shuffledData[index]}
                />
            )}
        </>
    )
}

export default FinalPage