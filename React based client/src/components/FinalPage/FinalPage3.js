import React, { useEffect, useState } from 'react'
import TopicDisplay3 from './TopicDisplay3'
import './FinalPage3.css'

const FinalPage = (props) => {
    // const [articles,setArticles] = useState([])

    // const response = JSON.stringify(props.data,null,2)
    const response2 = props.data
    const [currentQuestion, setcurrentQuestion] = useState(null)
    const [index,appendIndex ] = useState(0)
    const setIndex = (nextPage)=>{
      if (index+2 === 21){
        alert("you've reached the end of the life ...")
      }
      else{
        console.log("Value of index - ",index)
        appendIndex(index+1)
      }

    }
    // let array_response = []

    // const update_page = (input)=>{
    //     const accumulatedObject = [];
    //     for (let key in input){
    //         const simpleArray = [
              
    //         ]
    //         // console.log("simple array ",simpleArray)
    //         accumulatedObject.push(simpleArray);
    //     }
        
    //     console.log("loop working",accumulatedObject)
    //     return accumulatedObject
    // }

    useEffect(()=>{

      //  const result = update_page(response2);
      //  setArticles(result)
      //  console.log("Result",articles)

      },[])
        
        


  return (
    <>
            <TopicDisplay3 setIndex={setIndex} index={index+1} element={response2[index]}/>
    </>
  )
}

export default FinalPage
