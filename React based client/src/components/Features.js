import React, { Component, useEffect, useState } from 'react'
import './featuresStyle.css'
import Working from './Working';
import { Link } from 'react-router-dom';

const Features = () => {
    const para1 = "Our Question Paper Analyzer is your data-driven companion. It analyzes your previous year question papers to identify recurring themes & patterns, revealing the most important topics for your next exam. The model calculates the probability of each topic appearing , allowing you to prioritize your study time and focus on what matters most. The more question papers you input, the more accurate and personalized your study plan becomes."
    // const para1 = 'This model takes your previous year question papers as an input. It scans the inputted question papers and based on the repeatability of the topics it returns what topics are important, how many times a certain topic has been repeated, the probability of that topic to appear in future exams and other parameters. This model helps you determine the topics that are actually important for your next exam based on your previous exams. The more question papers you submit the better the output'

    const para2 = 'The Syllabus Analyzer helps you conquer your syllabus, one topic at a time. It analyzes your subject syllabus, identifying key topics and providing insights like estimated study time, difficulty level, and crucial subtopics.  This allows you to create a personalized study plan, prioritize challenging areas, and allocate your time effectively for maximum learning.  Get ready to tackle your syllabus with confidence and efficiency!'

    const heading1 = 'Question Paper Analyser'
    const [heading2,setHeading] = useState('Syllabus analyser')


    const [state, setState] = useState({
        opacity1: '1',
        opacity2: '0',
        opacityHead1: 'opacity 0.5s',
        opacityHead2: 'opacity 0.5s',
        opacityP1: 'opacity 1s',
        opacityP2: 'opacity 2.5s',
        para: para1,
        heading: heading1,
        link:'/model1'
    })

    const handleClick = () => {
        if (state.heading == 'Question Paper Analyser') {
            setState({
                opacity1: '0',
                opacityHead1: 'opacity 0.5s',
                opacityP1: 'opacity 1s',
                para: para1,
                heading: heading1,
                link:'/model2'

            })
            setTimeout(() => {
                // setHeading('loading...')
                const words = para2.split(' ')
                setState({
                        opacity1: '1',
                        opacityHead1: 'opacity 0.2s',
                        opacityP1: 'opacity 0.4s',
                        para: para2,
                        heading: heading2,
                        link:'/model2'
                })
                
              }, "500");
              
            console.log("Set the state to none")
        }

        else {
            setState({
                opacity1: '0',
                opacityHead1: 'opacity 0.2s',
                opacityP1: 'opacity 0.4s',
                para: para2,
                heading: heading2,
                link:'/model1'

            })
            setTimeout(() => {
                // setHeading('loading...')
                setState({
                    opacity1: '1',
                    opacityHead1: 'opacity 0.5s',
                    opacityP1: 'opacity 1s',
                    para: para1,
                    heading: heading1,
                    link:'/model1'
                });
              }, "500");
              
            console.log("Set the state to none")
        }
    }

    return (

        <div style={{ fontFamily: 'Arial', paddingTop: '10px', position: 'relative', backgroundColor: 'white' }}>

            <div className='first-feature-div' style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 1fr', marginBottom: '10px', position: 'relative', backgroundColor: 'white', transition: 'opacity 0.5s' }}>
                <div></div>
                <div className='model-div' style={{ background: 'linear-gradient(38deg, rgba(255,255,255,1) 64%, rgba(20,114,246,1) 100%)', backgroundSize: '300% 300%', animation: 'color 5s ease-in-out infinite', position: 'relative', borderRadius: '10px', borderStyle: 'solid', borderColor: 'black' }}>
                    <b> <p className='model-div-heading' style={{ color: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '30px', paddingTop: '20px', opacity: `${state.opacity1}`, transition: `${state.opacityHead1}` }}>
                        {state.heading}
                    </p></b>
                    <div>
                        <p className='model-div-para' style={{ color: 'black', fontSize: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '10px', paddingRight: '40px', paddingLeft: '60px', paddingBottom: '50px', lineHeight: '40px', opacity: `${state.opacity1}`, transition: `${state.opacityP1}`, textAlign:'center' }}>
                            {state.para}</p>
                        <div className='div-next-button-small' style={{ cursor: 'pointer', opacity: `${state.opacity1}`, backgroundColor: 'black', transition: `${state.opacityP1}` }} >
                            <button className='div-button' style={{ color: 'black', cursor: 'pointer' }} onClick={() => { handleClick() }}>{'>'}</button>
                        </div>
                        <div className='try-it-div'>
                            <Link  type='button' to={state.link} className='try-it-button'>Try it</Link>
                        </div>
                    </div>
                    <div className='div-next-button' style={{ position: 'absolute', right: '-200px', top: "45%", opacity: `${state.opacity1}`, transition: `${state.opacityP1}` }}>
                        <button style={{ color: 'black' }} className='next-button' onClick={() => { handleClick() }}>{'>'}</button>
                    </div>
                </div>
            </div>



        </div>
    )
}


export default Features
