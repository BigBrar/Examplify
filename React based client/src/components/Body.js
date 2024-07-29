import React, { Component } from 'react'
import Features from './Features'
import './featuresStyle.css'
import Working from './Working'
import Usage from './Usage'

export class Body extends Component {
  render() {
    return (
    <div className='div-body' style={{backgroundColor:'white',color:'black'}}>
      {/* <div style={{width:'150px', position:'absolute', top:'49.4%', right:'60%', zIndex:100,}}><Lottie animationData={this.props.animationData}/></div> */}
        <div className='desc-div' style={{paddingTop:'150px',fontFamily:'Arial',display:'grid', color:'black',gridTemplateColumns:'0.5fr 1fr 0.5fr',whiteSpace:'nowrap'}}>
            <div></div>
            <div><b><p className='description' style={{fontSize:'40px'}}>Your Friend that helps in Exam preparation</p></b></div>
            <div></div>
        </div>

        <div className='second-body-div' style={{paddingTop:'10px',fontFamily:'Arial',display:'grid', color:'black',gridTemplateColumns:'0.6fr 1fr 0.6fr'}}>
            <div></div>
            <div><p className='second-div-desc' style={{lineHeight:'35px',fontSize:'20px',textAlign:'center'}}>Hey there! At <b>ExamPrep</b>, we’re all about making studying easier and smarter for you. Got your exams coming up? <br/>Don't worry we've got bunch of models that can help you focus on correct topics. You’ll get cool insights, so that you can ditch stress and focus on what actually counts ...</p></div>
            <div></div>
        </div>

        <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <b><p className='third-div-heading' style={{paddingTop:'110px',fontFamily:'Arial', color:'black',whiteSpace:'nowrap',fontSize:'40px'}}>Models</p></b>
        </div>

        <Features/>
        <Usage/>
        {/* <Working animationData={this.props.animationData}/> */}
        
    </div>
    )
  }
}

export default Body
