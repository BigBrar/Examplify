import React, { useState } from 'react'
import './Model2.css'
import Heading_desc from '../HeadingDesc'
import { useNavigate } from 'react-router-dom'

const Model2 = (props) => {
    const navigate = useNavigate()
    const [response,setResponse] = useState(null)
    // const response = { "System Analysis": { "probability": "90%", "importance": "VERYHIGH", "subtopic": "Importance, What it is, Why it is used", "repeated": "4", "question_number": [ "What is the difference between system analysis and system design?", "Why is the role of the system analyst is crucial? What characteristics should system analysts possess?", "Discuss in detail the functionality of each state of SDLC.", "What is the importance of SDLC? Write in detail all its phases." ] }, "System Design": { "probability": "85%", "importance": "VERYHIGH", "subtopic": "Importance, What it is, Why it is used", "repeated": "3", "question_number": [ "What is the difference between system analysis and system design?", "Describe in detail the role of System Design.", "What is the importance of SDLC? Write in detail all its phases." ] }, "System Testing": { "probability": "75%", "importance": "HIGH", "subtopic": "Types, Importance, When it is used", "repeated": "3", "question_number": [ "What is testing and its characteristics?", "Differentiate between the following: Unit testing and system testing Alpha testing and Beta testing", "What are the main characteristics of a training manual?" ] }, "SDLC (Software Development Life Cycle)": { "probability": "70%", "importance": "HIGH", "subtopic": "Phases, Importance, Functionality of each phase", "repeated": "2", "question_number": [ "Discuss in detail the functionality of each state of SDLC.", "What is the importance of SDLC? Write in detail all its phases." ] }, "System Implementation": { "probability": "65%", "importance": "HIGH", "subtopic": "Process, Methods, Post-Implementation Maintenance", "repeated": "2", "question_number": [ "What is the significance of Post Implementation maintenance? How is it carried? Discuss.", "What is the system implementation process? Explain various system implementation methods." ] }, "Documentation": { "probability": "60%", "importance": "MEDIUM", "subtopic": "Importance, Types, Comparison between types", "repeated": "2", "question_number": [ "What is documentation and why is it done?", "What is the difference between open-ended and close-ended user documentation?" ] } }
    const supported_extensions = ['.png','.jpg']
    const [animationvisible,setAnimationVisibility] = useState({
        visibility:'hidden',
        opacity:0
    })
    const uploadFile = async (e)=>{
        e.preventDefault()
        let files = e.target.file.files
        // console.log(file[0]['name'].endsWith(".png"))
        let formData = new FormData()
        for(let i=0; i<files.length; i++){
          console.log(files[i]['name'])
          formData.append('file',files[i])
          if (!supported_extensions.includes(files[i]['name'].slice(-4))){
            alert("File extension not supported.")}
        }
        
    
        await fetch(`http://127.0.0.1:5000/${props.endpoint}`, {
          method: 'POST',
          body: formData
       })
       .then(setAnimationVisibility({
        visibility:'visible',
        opacity:1
       }))
       .then(resp => resp.json())
       .then(data => {
          if (data.errors) {
             alert(data.errors)
          }
          else {
            console.log(data)
             setResponse(data)
             props.setResponse(data)
          }
       })
       console.log("Set response complete...")
       await navigate('/result')
       console.log("navigate complete.")
      }
  return (
    <>
    <div className='overlay-div' style={{visibility:`${animationvisible.visibility}`, opacity:`${animationvisible.opacity}`}}>
        <h2>Loading</h2>
    </div>
    <div className='heading-div'>
      <b><p className='heading-text'>{props.heading}</p></b>
    </div>
    
    <div className='upload-div'>
    <form onSubmit={uploadFile} encType="multipart/form-data" className='main-form' action='http://127.0.0.1:5000' method='post'>

      <input style={{marginLeft:'50px'}} className='choose-files' required accept=".jpg,.jpeg,.png"  name='file' type="file" multiple="multiple"></input>

      <div className='submit-button'>
      <button type='submit' className="upload-button">Upload File</button>
      </div>
      </form>
    </div>

    <div className='supported-formats'>
      <div className='supported-heading'>
        <div></div>
        <b><p>Supported file formats</p></b>
        <div></div>
      </div>
      <div className='supported-list'>
        <p>* All image files (except webp)</p>

      </div>
    </div>

    <Heading_desc heading="Use case of this model" desc={props.desc}/>
    
  </>
  )
}

export default Model2
