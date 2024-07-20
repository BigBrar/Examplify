import React from 'react'
import './working.css'
// import myPhoto from './my-image.png'
import Lottie from 'react-lottie-player'
import imageToText from './imageToText.json'
import analysis_json from './analysis.json'
import result_json from './result.json'

const Working = (props) => {
    return (
        <div>
            <div className='main-div'>
                <b><p className='div-heading'>How it works?</p></b>
            </div>

            <div className='creators-main-div'>
                <div className='upload-div'>
                    <div className='upload-animation'>
                        <Lottie loop play style={{ width: 150, height: 150 }} animationData={props.animationData} />
                        <div style={{ display: 'flex', alignItems: 'center' }}><b><p style={{ fontSize: '20px' }}>1. Upload</p></b>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='upload-animation'>
                        <Lottie loop play style={{ width: 150, height: 150 }} animationData={imageToText} />
                        <div style={{ display: 'flex', alignItems: 'center' }}><b><p style={{ fontSize: '20px' }}>2. Image to text</p></b>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='upload-animation'>
                        <Lottie loop play style={{ width: 90, height: 150 }} animationData={analysis_json} />
                        <div style={{ display: 'flex', alignItems: 'center' }}><b><p style={{ fontSize: '20px',paddingLeft:'10px' }}>3. Analysis & Processing</p></b>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='upload-animation'>
                        <Lottie loop play style={{ width: 150, height: 160 }} animationData={result_json} />
                        <div style={{ display: 'flex', alignItems: 'center' }}><b><p style={{ fontSize: '20px' }}>4. Result</p></b>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Working
