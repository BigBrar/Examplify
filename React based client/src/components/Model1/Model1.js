import React from 'react'
import './Model1.css'

const questionAnalyser = () => {
  return (
    <>
    <div className='heading-div'>
      <b><p className='heading-text'>Question Paper Analyser</p></b>
    </div>
    
    <div className='upload-div'>
        <form enctype="multipart/form-data" className='main-form' action='http://127.0.0.1:5000' method='post'>
        
      <input className='choose-files' name='file' type="file" multiple="multiple"></input>

      <div className='submit-button'>
      <button type='submit' class="upload-button">Upload File</button>
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
  </>
  )
}

export default questionAnalyser
