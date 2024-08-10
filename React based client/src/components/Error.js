import React from 'react'
import catAnimation from './catAnimation.json';
import Lottie from 'react-lottie-player';

const error = () => {
  return (
    <div style={{paddingTop:'70px'}}>
        <h2 style={{textAlign:'center'}}>Something went wrong with your request</h2>
        <div className='error-animation' style={{display:'flex', justifyContent:'center',alignItems:'center'}}>
            <Lottie loop play style={{ width: 500, height: 260 }} animationData={catAnimation} />
      </div>
      <div style={{textAlign:'center'}}>
        <p>Please check if you submitted the correct file format to the model</p>
        <p>Remember that the files should not contain anything beside the needed info...</p>
        <p>The quality of the response depends greatly on quality of USER INPUT</p>

        <p>If you did all that then don't worry it's pretty normal to get this so just retry and hopefully you won't encounter an error this time.</p>
      </div>
    </div>
  )
}

export default error
