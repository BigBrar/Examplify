import React, { useState } from 'react'
import './Model2.css'
import Heading_desc from '../HeadingDesc'
import { useNavigate } from 'react-router-dom'
import Lottie from 'react-lottie-player'
import penAnimation from './animation2.json'
import successResponse from './successResponse.json'
import LoadingPage from './loadingPage'
import LoadingBar from 'react-top-loading-bar'
// import videoBg from './video.mp4'

const Model2 = (props) => {
  const [animation,setAnimation] = useState(penAnimation)
  const [loadingOpacity,setloadingOpacity] = useState(1)
  const [loadingText,setloadingText] = useState("Generating Response...")
    const navigate = useNavigate()
    const [progress,setProgress] = useState(0)
    const [response,setResponse] = useState(null)
    
    const supported_extensions = ['.png','.jpg','.pdf']
    const [animationvisible,setAnimationVisibility] = useState({
        visibility:'hidden',
        opacity:0,
        display:'block'
    })
    const uploadFile = async (e)=>{
        e.preventDefault()
        let files = e.target.file.files
        setProgress(10)
        // console.log(file[0]['name'].endsWith(".png"))
        let formData = new FormData()
        for(let i=0; i<files.length; i++){
          console.log(files[i]['name'])
          formData.append('file',files[i])
          if (!supported_extensions.includes(files[i]['name'].slice(-4))){
            alert("File extension not supported.")}
            // console.log(`/${props.currentModel}`)
            // navigate(`/${props.currentModel}`)
            window.location.reload();
            await new Promise(resolve => setTimeout(resolve, 500));
        }
        setProgress(50)
        
    
        setProgress(70)
        await fetch(`http://127.0.0.1:5000/${props.endpoint}`, {
        // await fetch(`http://127.0.0.1:5000/test`, {
          method: 'POST',
          body: formData
       })
       .then(setAnimationVisibility({
        visibility:'visible',
        opacity:1,
        display:'block'
       }))
       .then(document.body.style.overflow = 'hidden')
       .then(setProgress(80))
       .then(resp => resp.json())
       .then(data => {
          if (data.errors) {
             alert(data.errors)
          }
          else {
            console.log(data)
             setResponse(data)
             props.setResponse(data)
             setProgress(95)
            //  setloadingOpacity(0)
             
             
             
          }
       })
       setAnimation(successResponse)
       await new Promise(resolve => setTimeout(resolve, 2000));
       setProgress(100)
       console.log("Set response complete...")
       document.body.style.overflow = 'visible'
       if (props.currentModel == 'model1'){
         await navigate('/result/model1')
       }
       else if (props.currentModel == 'model2'){
         await navigate('/result/model2')
       }
       console.log("navigate complete.")
      }
  return (
    <div>
      <LoadingBar color='#000000' height={4} progress={progress} shadow={true} onLoaderFinished={()=>setProgress(0)}/>
    <div className='overlay-div' style={{visibility:`${animationvisible.visibility}`, opacity:`${animationvisible.opacity}`}}>
      <LoadingPage loadingText={loadingText} loadingOpacity={loadingOpacity} status={progress} animation={animation}/>
        {/* <h2>Loading</h2> */}
    </div>
    <div className='heading-div'>
      <b><p className='heading-text'>{props.heading}</p></b>
    </div>
    
    <div className='upload-div'>
    
    <form onSubmit={uploadFile} encType="multipart/form-data" className='main-form' action='http://127.0.0.1:5000' method='post'>

      <input style={{marginLeft:'50px'}} className='choose-files' required accept=".jpg,.jpeg,.png,.pdf"  name='file' type="file" multiple="multiple"></input>

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
        <p>* .jpeg, .png, .jpg, .pdf</p>

      </div>
    </div>

    <Heading_desc heading="Use case of this model" desc={props.desc}/>
    
  </div>
  )
}

export default Model2
