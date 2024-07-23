import React, { Component } from 'react';
import logo from './logo.png';
import './featuresStyle.css';
import { Link } from 'react-router-dom';

export class Navbar extends Component {
  render() {
    return (
      <div className='main-nav' style={{fontFamily:'Arial',backgroundColor:'transparent',padding:'6px',height:'45px',color:'black',display:'grid',gridTemplateColumns:'1fr 2fr 1fr',justifyContent:'space-around',backdropFilter:'blur(10px)',borderBottom:'1px solid black',position:'fixed',zIndex:'100',top:0,bottom:0,left:0,right:0}}>

          <div className='properties-navbar' style={{display:'flex',justifyContent:'flex-end'}}>
              <Link style={{color:'black',textDecoration:'none'}} to={'/'}><p className='main-heading' style={{fontSize:'20px'}}>ExamPrep</p></Link>
          </div>

          <div className='second-nav-div' style={{display:'flex',justifyContent:'center',paddingTop:'6px'}}>
              <p className='second-nav-property'> About Us</p>
          </div>

          <div className='third-div' style={{display:'flex',alignItems:'center',justifyContent:'flex-start',whiteSpace:'nowrap'}}>
              <div className='third-div' style={{position:'relative',display:'flex',justifyContent:'right',paddingRight:'40px'}}>
                <p className='third-nav-property' style={{paddingRight:'75px'}}> Works using</p>
              <img className='third-nav-image' src={logo} style={{width:'70px',position:'absolute',bottom:'12px'}}/></div>
          </div>

      </div>
    )
  }
}

export default Navbar
