import React, { Component } from 'react'
import Features from './Features'
import './featuresStyle.css'

export class Body extends Component {
  render() {
    return (
    <div className='div-body' style={{backgroundColor:'black',color:'white'}}>
        <div className='desc-div' style={{paddingTop:'100px',fontFamily:'Arial',display:'grid', color:'white',gridTemplateColumns:'0.5fr 1fr 0.5fr',whiteSpace:'nowrap'}}>
            <div></div>
            <div><b><p className='description' style={{fontSize:'40px'}}>Your Friend that helps in Exam preparation</p></b></div>
            <div></div>
        </div>

        <div className='second-body-div' style={{paddingTop:'10px',fontFamily:'Arial',display:'grid', color:'white',gridTemplateColumns:'0.8fr 1fr 0.8fr'}}>
            <div></div>
            <div><p className='second-div-desc' style={{lineHeight:'35px',fontSize:'20px',textAlign:'justify'}}>To center the "About Us" and "Usage" section more effectively and reduce the space between them, you can adjust the styles for better alignment and spacing. Here is the revised code with the necessary adjustments:</p></div>
            <div></div>
        </div>

        <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <b><p className='third-div-heading' style={{paddingTop:'70px',fontFamily:'Arial', color:'white',whiteSpace:'nowrap',fontSize:'40px'}}>Models</p></b>
        </div>

        <Features/>
    </div>
    )
  }
}

export default Body
