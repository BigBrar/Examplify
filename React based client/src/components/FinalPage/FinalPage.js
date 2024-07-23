import React, { useEffect, useState } from 'react'
import TopicDisplay from './TopicDisplay'

const FinalPage = (props) => {
    const [articles,setArticles] = useState([])
    const response = JSON.stringify(props.data,null,2)
    const response2 = props.data
    let array_response = []

    const update_page = ()=>{
        const accumulatedObject = [];
        for (let key in response2){
            // console.log([{heading:key,probability:response2[key]['probability'],importance:response2[key]['importance'],subtopic:response2[key]['subtopic'],repeated:response2[key]['repeated'],question_number:response2[key]['question_number']}])
            // console.log("Heading - ",key)
            // console.log("Probability - ",response2[key]['probability'])
            // console.log("importance - ",response2[key]['importance'])
            // console.log("subtopic - ",response2[key]['subtopic'])
            // console.log("repeated - ",response2[key]['repeated'])
            // console.log("question_number - ",response2[key]['question_number'])
            const simpleArray = [{heading:key,probability:response2[key]['probability'],importance:response2[key]['importance'],subtopic:response2[key]['subtopic'],repeated:response2[key]['repeated'],question_number:response2[key]['question_number']}]
            // console.log("simple array ",simpleArray)
            accumulatedObject.push(simpleArray);
        }
        
        console.log("loop working",accumulatedObject)
        return accumulatedObject
    }

    useEffect(()=>{
       const result = update_page();
       setArticles(result)
       console.log("Result",articles)
      },[])
        
        


  return (
    <div style={{paddingTop:'100px'}}>
      {articles.map((element)=>{
        return(
        <div>
            <TopicDisplay heading={element['heading']} element={element}/>
        </div>)
      })}
    </div>
  )
}

export default FinalPage
