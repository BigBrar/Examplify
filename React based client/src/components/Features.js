import React, { Component, useEffect, useState } from 'react'
import './featuresStyle.css'
import Working from './Working';
import { Link } from 'react-router-dom';

const Features = () => {
    const para1 = 'To center the "About Us" and "Usage" section more effectively and reduce the space between them, you can adjust the styles for better alignment and spacing. Here is the revised code with the necessary adjustments:To center the "About Us" and "Usage" section more effectively and reduce the space between them, you can adjust the styles for better alignment and spacing. Here is the revised code with the necessary adjustment:'

    const para2 = 'fajflkajfTo center the "About Us" and "Usage" section more effectively and reduce the space between them, you can adjust the styles for better alignment and spacing. Here is the revised code with the necessary adjustments:To center the "About Us" and "Usage" section more effectively and reduce the space between them, you can adjust the styles for better alignment and spacing. Here is the revised code with the necessary :'

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
                        <p className='model-div-para' style={{ color: 'black', fontSize: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '10px', paddingRight: '40px', paddingLeft: '60px', paddingBottom: '50px', lineHeight: '40px', opacity: `${state.opacity1}`, transition: `${state.opacityP1}` }}>
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
