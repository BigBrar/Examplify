import React from 'react'
import './usage.css'

const Usage = () => {
    return (
        <div className='main-div'>
            <div className='heading-div'>
                <b><p className='actual-heading' style={{ fontSize: '40px', color: 'black' }}>Usage</p></b>
            </div>
            <div className='para-div'>
                <div></div>
                <div>
                <p>To use our <b>Models</b>, simply upload the input file in either Image format (JPEG, JPG, PNG) or as a single PDf file conatining images. You can select multiple image files by pressing and holding the Ctrl key(on PC), but only one PDF file is supported at a time. Remember to read the usage instruction of the particular model you desire to use. Just make sure that the images do not have any other content beside the required one. The better the input, the better the result...</p>

                </div>
                <div></div>
            </div>
        </div>
    )
}

export default Usage
