import React, { useEffect, useState } from 'react'
import TopicDisplay from './TopicDisplay'
import './FinalPage.css'

const FinalPage = (props) => {
    const [articles,setArticles] = useState([])
    const [highestProbability,sethighestProbability] = useState(null)

    // const sortByProbability = (data)=> {
    //   // Convert probability strings to numbers
    //   for (let topic in data) {
    //     let probability = parseFloat(data[topic].probability);
    //     data[topic].probability = probability;
    //   }
    
    //   // Sort the data based on probability
    //   let sortedData = Object.entries(data).sort((a, b) => {
    //     return b[1].probability - a[1].probability;
    //   });
    
    //   // Convert the sorted data back to an object
    //   let sortedObject = Object.fromEntries(sortedData);
    //   // return sortedObject;
    //   console.log(sortedObject)
    //   console.log(response2)
    //   // sortedObject = update_page(sortedObject)
    //   // setArticles(sortedObject);
    // }

    // const sortByRepeated = (data)=> {
    //   // Sort the data based on the 'repeated' property
    //   let sortedData = Object.entries(data).sort((a, b) => {
    //     let aRepeated = parseInt(a[1].repeated);
    //     let bRepeated = parseInt(b[1].repeated);
    //     return bRepeated - aRepeated;
    //   });
    
    //   // Convert the sorted array back to an object
    //   let sortedObject = Object.fromEntries(sortedData);
    //   // return sortedObject;
    //   setArticles(sortedObject);
    // }

    const response = JSON.stringify(props.data,null,2)
    const response2 = props.data
    let array_response = []

    const update_page = (input)=>{
        const accumulatedObject = [];
        for (let key in input){
            // console.log([{heading:key,probability:input[key]['probability'],importance:input[key]['importance'],subtopic:input[key]['subtopic'],repeated:input[key]['repeated'],question_number:input[key]['question_number']}])
            // console.log("Heading - ",key)
            // console.log("Probability - ",input[key]['probability'])
            // console.log("importance - ",input[key]['importance'])
            // console.log("subtopic - ",input[key]['subtopic'])
            // console.log("repeated - ",input[key]['repeated'])
            // console.log("question_number - ",input[key]['question_number'])
            const simpleArray = [{heading:key,probability:input[key]['probability'],importance:input[key]['importance'],subtopic:input[key]['subtopic'],repeated:input[key]['repeated'],question_number:input[key]['question_number']}]
            // console.log("simple array ",simpleArray)
            accumulatedObject.push(simpleArray);
        }
        
        console.log("loop working",accumulatedObject)
        return accumulatedObject
    }

    useEffect(()=>{

       const result = update_page(response2);
       setArticles(result)
       console.log("Result",articles)
      },[])
        
        


  return (
    <>
      <div className='main-div2' style={{paddingTop:'100px',position:'relative'}}>
      
        {articles.map((element)=>{
          return(
          <div>
              <TopicDisplay heading={element['heading']} element={element}/>
          </div>)
        })}
      </div>
    </>
  )
}

export default FinalPage
