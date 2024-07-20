import React, { Component } from 'react';
import logo from './logo.png';
import './featuresStyle.css';

export class Navbar extends Component {
  render() {
    return (
      <div className='main-nav' style={{fontFamily:'Arial',backgroundColor:'transparent',padding:'6px',height:'45px',color:'white',display:'flex',justifyContent:'space-around',backdropFilter:'blur(10px)',borderBottom:'1px solid white',position:'fixed',zIndex:'100',top:0,bottom:0,left:0,right:0}}>

          <div className='properties-navbar' style={{display:'flex',justifyContent:'flex-end',maxWidth:'400px'}}>
              <p className='main-heading' style={{fontSize:'20px',marginRight:'30px'}}>ExamPrep</p>
          </div>

          <div style={{display:'flex',justifyContent:'space-between',paddingTop:'6px'}}>
              <p className='second-nav-property'> About Us</p>
          </div>

          <div className='third-div' style={{display:'flex',paddingTop:'20px',alignItems:'center',justifyContent:'flex-start',marginLeft:'30px',whiteSpace:'nowrap'}}>
              <div className='third-div' style={{position:'relative',display:'flex',justifyContent:'right',paddingRight:'40px'}}>
                <p className='third-nav-property' style={{paddingRight:'75px'}}> Made with</p>
              <img className='third-nav-image' src={logo} style={{width:'70px',position:'absolute',bottom:'12px'}}/></div>
          </div>

      </div>
    )
  }
}

export default Navbar
