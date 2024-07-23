import React from 'react'
import './Model1.css'
import HeadingDesc from '../HeadingDesc'

const questionAnalyser = (props) => {
  const supported_extensions = ['.png','.jpg']
    const uploadFile = (e)=>{
        e.preventDefault()
        let files = e.target.file.files
        // console.log(file[0]['name'].endsWith(".png"))
        let formData = new FormData()
        for(let i=0; i<files.length; i++){
          console.log(files[i]['name'])
          formData.append('file',files[i])
          console.log("Is this file supported ? - ",supported_extensions.includes(files[i]['name'].slice(-4)));
        }
        
    
        fetch(`http://127.0.0.1:5000/${props.endpoint}`, {
          method: 'POST',
          body: formData
       })
       .then(resp => resp.json())
       .then(data => {
          if (data.errors) {
             alert(data.errors)
          }
          else {
             console.log(data)
          }
       })
      }
  return (
    <>
    <div className='heading-div'>
      <b><p className='heading-text'>{props.heading}</p></b>
    </div>
    
    <div className='upload-div'>
    <form onSubmit={uploadFile} encType="multipart/form-data" className='main-form' action='http://127.0.0.1:5000' method='post'>
        
      <input className='choose-files' required accept=".jpg,.jpeg,.png"  name='file' type="file" multiple="multiple"></input>

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

    <HeadingDesc heading={props.heading} desc={props.desc}/>
    
  </>
  )

}

export default questionAnalyser
