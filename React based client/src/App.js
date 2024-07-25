import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Navbar from './components/Navbar';
import Model2 from './components/Model2/Model2';

import Body from './components/Body';
import animationData from './uploading.json'
import './index.css'
import { useState } from 'react';
import FinalPage from './components/FinalPage/FinalPage';

function App() {
  const response = { "System Analysis": { "probability": "90%", "importance": "VERYHIGH", "subtopic": "Importance, What it is, Why it is used", "repeated": "4", "question_number": [ "What is the difference between system analysis and system design?", "Why is the role of the system analyst is crucial? What characteristics should system analysts possess?", "Discuss in detail the functionality of each state of SDLC.", "What is the importance of SDLC? Write in detail all its phases." ] }, "System Design": { "probability": "85%", "importance": "VERYHIGH", "subtopic": "Importance, What it is, Why it is used", "repeated": "3", "question_number": [ "What is the difference between system analysis and system design?", "Describe in detail the role of System Design.", "What is the importance of SDLC? Write in detail all its phases." ] }, "System Testing": { "probability": "75%", "importance": "HIGH", "subtopic": "Types, Importance, When it is used", "repeated": "3", "question_number": [ "What is testing and its characteristics?", "Differentiate between the following: Unit testing and system testing Alpha testing and Beta testing", "What are the main characteristics of a training manual?" ] }, "SDLC (Software Development Life Cycle)": { "probability": "70%", "importance": "HIGH", "subtopic": "Phases, Importance, Functionality of each phase", "repeated": "2", "question_number": [ "Discuss in detail the functionality of each state of SDLC.", "What is the importance of SDLC? Write in detail all its phases." ] }, "System Implementation": { "probability": "65%", "importance": "HIGH", "subtopic": "Process, Methods, Post-Implementation Maintenance", "repeated": "2", "question_number": [ "What is the significance of Post Implementation maintenance? How is it carried? Discuss.", "What is the system implementation process? Explain various system implementation methods." ] }, "Documentation": { "probability": "60%", "importance": "MEDIUM", "subtopic": "Importance, Types, Comparison between types", "repeated": "2", "question_number": [ "What is documentation and why is it done?", "What is the difference between open-ended and close-ended user documentation?" ] } }
  const [nothing,setResponse] = useState(null)

  const heading2="Syllabus Analyser"
  const desc1 = 'To center the "About Us" and "Usage" section more effectively and reduce the space between them, you can adjust the styles for better alignment and spacing. Here is the revised code with the necessary adjustments:'
  const heading1 = 'Question Paper Analyser'
  const desc2 = 'To center the "About Us" and "Usage" section more effectively and reduce the space between them, you can adjust the styles for better alignment and spacing. Here is the revised code with the necessary adjustments:'
  return (
    <>
    <Router>
    <Navbar/>
    {/* <Navboot/> */}
    <Routes>
      <Route exact path='/' element={<Body animationData={animationData}/>}/>
      <Route exact path='/model1' element={<Model2 setResponse={setResponse} desc={desc1} heading={heading1} endpoint="model1"/>}/>
      <Route exact path='/model2' element={<Model2 setResponse={setResponse} desc={desc2} heading={heading2} endpoint="model2"/>}/>
      <Route exact path='/result' element={<FinalPage data={response}/>}/>
    </Routes>
    </Router>
    </>
  );
}

export default App;
