import React from 'react'

const Heading_desc = (props) => {
  return (
  <>
    <div className='desc-div' style={{paddingTop:'100px',fontFamily:'Arial',display:'grid', color:'black',justifyContent:'center',alignItems:'center',whiteSpace:'nowrap'}}>
            <div></div>
            <div><b><p className='description' style={{fontSize:'40px'}}>{props.heading}</p></b></div>
            <div></div>
        </div>

        <div className='second-body-div' style={{paddingTop:'10px',fontFamily:'Arial',display:'grid', color:'black',gridTemplateColumns:'0.7fr 1fr 0.7fr'}}>
            <div></div>
            <div><p className='second-div-desc' style={{lineHeight:'35px',fontSize:'20px',textAlign:'justify'}}>{props.desc}</p></div>
            <div></div>
        </div>
    </>
  )
}

export default Heading_desc
