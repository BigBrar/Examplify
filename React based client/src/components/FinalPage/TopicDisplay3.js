import React, { useState } from 'react';
import './FinalPage3.css';

const TopicDisplay = (props) => {
    const { question, option1, option2, option3, option4, explanation_option1, explanation_option2, explanation_option3, explanation_option4, answer, source } = props.element;

    const [correctAnswers, setcorrectAnswers] = useState(0)
    
    const [incorrectAnswers, setincorrectAnswers] = useState(0)

    const [questionAttempt, setquestionAttempt] = useState(false)

    const [explanationHeading,setexplanationHeading] = useState(null)

    const nextQuestion = ()=>{
        if (questionAttempt){
            console.log("next question is working..")
            props.setIndex(props.index)
            setquestionAttempt(false)
            setBackground({
                option1:'white',
                option2:'white',
                option3:'white',
                option4:'white',
            })
            setcurrentExplanation(null)
            setexplanationHeading(null)
        }
        else{
            alert("please attempt the question first")
        }
    }

    const [currentExplanation,setcurrentExplanation] = useState(null)

    // const setDefaultColor = ()=>{
    //     setBackground()
    // }

    const setColor = (correctOption)=>{
        if (correctOption === answer){
            
            let correct_key = ''
            let incorrect_keys = []
            for (let key in background){
                if (key === correctOption){
                    correct_key = key
                    setcorrectAnswers(correctAnswers+1)
                    // console.log('setting green background')
                    // setBackground({key:'#81de82'})
                }
                // console.log('setting red background')
                // setBackground({key:'#e36666'})
                else{

                    incorrect_keys.push(key)
                }
            }
            setBackground({
                [correct_key]:'#a0faa1',
                [incorrect_keys[0]]:'#ed9898',
                [incorrect_keys[1]]:'#ed9898',
                [incorrect_keys[2]]:'#ed9898',
            })
            console.log("correct key is ",correct_key)
        }
        else{
            let correct_key = ''
            let incorrect_keys = []
            for (let key in background){
                if (key === answer){
                    correct_key = key
                    setcorrectAnswers(correctAnswers+1)
                    // console.log('setting green background')
                    // setBackground({key:'#81de82'})
                }
                // console.log('setting red background')
                // setBackground({key:'#e36666'})
                else{

                    incorrect_keys.push(key)
                }
            }
            setBackground({
                [correct_key]:'#a0faa1',
                [incorrect_keys[0]]:'#ed9898',
                [incorrect_keys[1]]:'#ed9898',
                [incorrect_keys[2]]:'#ed9898',
            })
            console.log("correct key is ",correct_key)
        }
    }

    const [background,setBackground] = useState({
        option1:'white',
        option2:'white',
        option3:'white',
        option4:'white'
    })

    const checkAnswer = (clickedOption)=>{
        setquestionAttempt(true)
        if(clickedOption === 'option1'){
            setcurrentExplanation(explanation_option1)
            setexplanationHeading('Explanation about your selection - ')
            setColor(clickedOption)
        }
        else if(clickedOption === 'option2'){
            setcurrentExplanation(explanation_option2)
            setexplanationHeading('Explanation about your selection - ')
            setColor(clickedOption)
            
            // console.log("Wha the hell...")
        }
        else if(clickedOption === 'option3'){
            setcurrentExplanation(explanation_option3)
            setexplanationHeading('Explanation about your selection - ')
            setColor(clickedOption)
            
            // console.log("Wha the hell...")
        }
        else if(clickedOption === 'option4'){
            setcurrentExplanation(explanation_option4)
            setexplanationHeading('Explanation about your selection - ')
            setColor(clickedOption)
            
            console.log("Wha the hell...")
        }
    }
    // console.log("Props element 0 value is - ",props.element[0]['subtopic'])
    // const { heading, probability, importance, question_number, repeated, subtopic } = props.element[0];

    // {question:key['question'],
    //     option1:key['option1'],
    //     option2:key['option2'],
    //     option3:key['option3'],
    //     option4:key['option4'],
    //     explanation_option1:key['explanation_option1'],
    //     explanation_option2:key['explanation_option2'],
    //     explanation_option3:key['explanation_option3'],
    //     explanation_option4:key['explanation_option4'],
    //     answer:key['answer'],
    //     source:key['source']
    //   }

    

    return (
        <div className='main-topic-div'>
            <div className='main-question'>
                <div></div>
                {props.index} {question}
                <div></div>
            </div>

            <div className='main-options'>
                <div style={{backgroundColor:`${background['option1']}`}} onClick={()=>checkAnswer('option1')} className='option'>{option1}</div>
                <div style={{backgroundColor:`${background['option2']}`}} onClick={()=>checkAnswer('option2')} className='option'>{option2}</div>
                <div style={{backgroundColor:`${background['option3']}`}} onClick={()=>checkAnswer('option3')} className='option'>{option3}</div>
                <div style={{backgroundColor:`${background['option4']}`}} onClick={()=>checkAnswer('option4')} className='option'>{option4}</div>
            </div>

            <div className='answer-explanation'>
                <div className='explanation-heading'>
                    {explanationHeading}
                </div>
                <div className='explanation-desc'>
                    {currentExplanation}
                </div>
            </div>
        
            <div className='next-button-div'>
                    <button onClick={()=>nextQuestion()} className='next-button'>&#8594;</button>
                </div>

            <div className='show-result'>
                {/* implement code to show result of user's quiz attempt... */}
            </div>

        </div>
    );
};

export default TopicDisplay;