import React, { Component } from 'react'
import './featuresStyle.css'

export class Features extends Component {
    constructor(){
        super();   
        console.log("Hello there, I am inside a constructor...")
        this.state = {
            opacity1:'1',
            opacity2:'0',
            opacityHead1:'opacity 0.5s',
            opacityHead2:'opacity 0.5s',
            opacityP1:'opacity 1s',
            opacityP2:'opacity 2.5s'
        }
        console.log('the value of page is ',this.state.page)
    }
    handleClick = ()=>{
        if(this.state.opacity1 =='1'){
            this.setState({
                opacityHead1:'opacity 0.5s',
                opacityHead2:'opacity 1s',
                opacityP1:'opacity 0.5s',
                opacityP2:'opacity 2.5s',
                opacity1:'0',
                opacity2:'1'
                
                
            })
            console.log("Set the state to none")
        }
        else{
            this.setState({
                opacityHead1:'opacity 1s',
                opacityHead2:'opacity 0.5s',
                opacityP1:'opacity 2.5s',
                opacityP2:'opacity 0.5s',
                opacity1:'1',
                opacity2:'0',
            })
            console.log("Set the state to grid")
        }
    }
    render() {
    return (
      <div style={{fontFamily:'Arial',paddingTop:'10px',position:'relative',backgroundColor:'black'}}>
        <div className='first-feature-div' style={{display:'grid',gridTemplateColumns:'1fr 2fr 1fr', marginBottom:'10px',position:'absolute',opacity:`${this.state.opacity1}`,backgroundColor:'black',transition:'opacity 0.5s'}}>
                <div></div>
            <div className='model-div' style={{background: 'linear-gradient(38deg, rgba(0,0,0,1) 45%, rgba(20,114,246,1) 100%)',backgroundSize:'300% 300%',animation: 'color 5s ease-in-out infinite',position:'relative',borderRadius:'10px',borderStyle:'solid',borderColor:'grey'}}>
                <b> <p className='model-div-heading' style={{display:'flex',justifyContent:'center',alignItems:'center',fontSize:'30px',paddingTop:'20px',opacity:`${this.state.opacity1}`,transition:`${this.state.opacityHead1}`}}>Question Paper Analyser</p></b>
                <div>
                    <p className='model-div-para' style={{fontSize:'16px',display:'flex',justifyContent:'center',alignItems:'center',paddingTop:'10px',paddingRight:'40px',paddingLeft:'60px',paddingBottom:'50px',lineHeight:'40px',opacity:`${this.state.opacity1}`,transition:`${this.state.opacityP1}`}}>
                    To center the "About Us" and "Usage" section more effectively and reduce the space between them, you can adjust the styles for better alignment and spacing. Here is the revised code with the necessary adjustments:To center the "About Us" and "Usage" section more effectively and reduce the space between them, you can adjust the styles for better alignment and spacing. Here is the revised code with the necessary adjustment:</p>
                    <div className='div-next-button-small' style={{cursor:'pointer',opacity:`${this.state.opacity1}`,backgroundColor:'white',transition:`${this.state.opacityP1}`}} >
                    <button className='div-button' style={{color:'white',cursor:'pointer'}} onClick={()=>{this.handleClick()}}>{'>'}</button>
                    </div>
                </div>
                    <div className='div-next-button' style={{position:'absolute',right:'-200px',top:"45%",opacity:`${this.state.opacity1}`,transition:`${this.state.opacityP1}`}}>
                        <button className='next-button' onClick={()=>{this.handleClick()}}>{'>'}</button>
                    </div>
                </div>
            </div>
            
            
            <div className='first-feature-div' style={{display:'grid',gridTemplateColumns:'1fr 2fr 1fr', marginBottom:'10px',position:'absolute',opacity:`${this.state.opacity2}`,backgroundColor:'black',transition:'opacity 0.4s'}}>
                <div></div>
            <div className='model-div' style={{background: 'linear-gradient(38deg, rgba(0,0,0,1) 45%, rgba(20,114,246,1) 100%)',backgroundSize:'300% 300%',animation: 'color 5s ease-in-out infinite',position:'relative',borderRadius:'10px',borderStyle:'solid',borderColor:'grey'}}>
                <b> <p className='model-div-heading' style={{display:'flex',justifyContent:'center',alignItems:'center',fontSize:'30px',paddingTop:'20px',opacity:`${this.state.opacity2}`,transition:`${this.state.opacityHead2}`}}>Syllabus analyser</p></b>
                <div>
                    <p className='model-div-para' style={{fontSize:'16px',display:'flex',justifyContent:'center',alignItems:'center',paddingTop:'10px',paddingRight:'40px',paddingLeft:'60px',paddingBottom:'50px',lineHeight:'40px',opacity:`${this.state.opacity2}`,transition:`${this.state.opacityP2}`}}>
                    fajflkajfTo center the "About Us" and "Usage" section more effectively and reduce the space between them, you can adjust the styles for better alignment and spacing. Here is the revised code with the necessary adjustments:To center the "About Us" and "Usage" section more effectively and reduce the space between them, you can adjust the styles for better alignment and spacing. Here is the revised code with the necessary :</p>
                    <div className='div-next-button-small' style={{cursor:'pointer',opacity:`${this.state.opacity2}`,backgroundColor:'transparent',transition:`${this.state.opacityP1}`}} >
                    <button className='div-button' style={{color:'white',cursor:'pointer'}} onClick={()=>{this.handleClick()}}>{'>'}</button>
                    </div>
                </div>
                    <div className='div-next-button' style={{position:'absolute',right:'-200px',top:"45%",opacity:`${this.state.opacity2}`,transition:`${this.state.opacityP1}`}}>
                        <button className='next-button' onClick={()=>{this.handleClick()}}>{'>'}</button>
                    </div>
                </div>
            </div>
      </div>
    )
  }
}

export default Features
