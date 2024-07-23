import React from 'react'

const TopicDisplay=(props)=>{
    console.log("props",props.element[0]['heading'])
    return(
    <div style={{color:'black', display:'grid',alignItems:'center',justifyContent:'center'}}>
        <p className='topic-name' style={{fontSize:'30px', textAlign:'center'}}>{props.element[0]['heading']}</p>
        <div style={{display:'grid',alignItems:'center',justifyContent:'center', textAlign:'center'}}>
            <p>probability - {props.element[0]['probability']}</p>
            <p>importance - {props.element[0]['importance']}</p>
            <p>question_number - {props.element[0]['question_number']}</p>
            <p>repeated - {props.element[0]['repeated']}</p>
            <p>subtopic - {props.element[0]['subtopic']}</p>
            
        </div>

    </div>
    )
}

export default TopicDisplay;