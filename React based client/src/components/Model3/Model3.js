import React, { useState } from 'react'
import './Model3.css'
import Heading_desc from '../HeadingDesc'
import { useNavigate } from 'react-router-dom'
import penAnimation from './animation2.json'
import successResponse from './successResponse.json'
import LoadingPage from './loadingPage'
import LoadingBar from 'react-top-loading-bar'

const Model3 = (props) => {
  const [animation,setAnimation] = useState(penAnimation)
  const [loadingOpacity,setloadingOpacity] = useState(1)
  const [loadingText,setloadingText] = useState("Generating Response...")
    const navigate = useNavigate()
    const [progress,setProgress] = useState(0)
    const [response,setResponse] = useState(null)
    const [numberOfQuestions,setnumberOfQuestions] = useState(null)
    const [buttonBackground1,setbuttonBackground1] = useState({
        color:'black',
        backgroundColor:'white'
    })
    const [buttonBackground2,setbuttonBackground2] = useState({
        color:'black',
        backgroundColor:'white'
    })

    const setQuestions = (clickedButton)=>{
        if (clickedButton == 'button1'){
            setbuttonBackground1({
                color:'white',
                backgroundColor:'black'
            })
            setbuttonBackground2({
                color:'black',
                backgroundColor:'white'
            })
            setnumberOfQuestions(20)
        }
        else if (clickedButton == 'button2'){
            setbuttonBackground2({
                color:'white',
                backgroundColor:'black'
            })
            setbuttonBackground1({
                color:'black',
                backgroundColor:'white'
            })
            setnumberOfQuestions(50)
        }
    }
    
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
            alert("File extension not supported.")
            setProgress(0)
            return;
          }
            // window.stop();
            // console.log(`/${props.currentModel}`)
            // navigate(`/${props.currentModel}`)
            // window.location.reload();
            // await new Promise(resolve => setTimeout(resolve, 500));
        }
        setProgress(50)
        
        formData.append('numberOfQuestions',numberOfQuestions)
        setProgress(70)
        await fetch(`http://127.0.0.1:5000/model3`, {
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
          else if(data.hasOwnProperty('status')){
            console.log("number of questions - ",data.numberOfQuestions)
          }
          else {
            console.log(data)
             setResponse(data)
             props.setResponse(data)
             setProgress(95)
            //  setloadingOpacity(0)
            return data
             
             
             
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
    
    <form onSubmit={uploadFile} encType="multipart/form-data" className='main-form'>

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


    <div className='supported-formats'>
        <div className='supported-heading'>
            <div></div>
                <b><p>Number of Questions</p></b>
            <div></div>
        </div>
        <div className='number-of-questions'>
            <button className='length-button-1' style={{borderRightColor:`${buttonBackground1.color === 'black'?'black':'white'}`, color:`${buttonBackground1.color}`,backgroundColor:`${buttonBackground1.backgroundColor}`}} onClick={()=>{setQuestions('button1')}}>20</button>
            
            <button className='length-button-2' style={{borderLeftColor:`${buttonBackground2.color === 'black'?'black':'white'}`,color:`${buttonBackground2.color}`,backgroundColor:`${buttonBackground2.backgroundColor}`}} onClick={()=>{setQuestions('button2')}}>50</button>
        </div>
    </div>

    <Heading_desc heading="Use case of this model" desc={props.desc}/>
    
  </div>
  )
}

export default Model3
