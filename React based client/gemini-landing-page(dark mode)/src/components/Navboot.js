import React, { Component } from 'react'
import logo from './logo.png';

export class Navboot extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg bg-dark " style={{backdropFilter:'blur(10px)',backgroundColor:'transparent',color:'white'}} >
        <div className="container-fluid">
            <a className="navbar-brand" style={{color:'white'}} href="#">ExamPrep</a>
            
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link active" style={{color:'white'}} aria-current="page" href="#">Usage</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" style={{color:'white'}} href="#">About</a>
                </li>
                
            </ul>
            </div>
        <div style={{paddingRight:'10px'}}>
            <p style={{display:'inline',paddingRight:'100px'}}>Made with</p>
            <div style={{position:'relative',backgroundColor:'red'}}>
            <img src={logo} style={{width:'80px',position:'absolute',right:'10px',top:'-38px'}}></img>
            </div>
        </div>
        </div>
        </nav>
    )
  }
}

export default Navboot
