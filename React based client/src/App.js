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
import Model3 from './components/Model3/Model3';

import Body from './components/Body';
import animationData from './uploading.json'
import './index.css'
import { useState } from 'react';
import FinalPage from './components/FinalPage/FinalPage';
import FinalPage2 from './components/FinalPage/FinalPage2';

function App() {
  
  const [response,setResponse] = useState(null)

  const heading2="Syllabus Analyser"
  const desc1 = 'To center the "About Us" and "Usage" section more effectively and reduce the space between them, you can adjust the styles for better alignment and spacing. Here is the revised code with the necessary adjustments:'
  const heading1 = 'Question Paper Analyser'
  const desc2 = 'To center the "About Us" and "Usage" section more effectively and reduce the space between them, you can adjust the styles for better alignment and spacing. Here is the revised code with the necessary adjustments:'
  const heading3="Quiz generator"
  const desc3='To center the "About Us" and "Usage" section more effectively and reduce the space between them, you can adjust the styles for better alignment and spacing. Here is the revised code with the necessary adjustments:'

  return (
    <>
    <Router>
    <Navbar/>
    {/* <Navboot/> */}
    <Routes>
      <Route exact path='/' element={<Body animationData={animationData}/>}/>
      <Route exact path='/model1' element={<Model2 currentModel='model1' setResponse={setResponse} desc={desc1} heading={heading1} endpoint="model1"/>}/>
      <Route exact path='/model2' element={<Model2 currentModel='model2' setResponse={setResponse} desc={desc2} heading={heading2} endpoint="model2"/>}/>
      <Route exact path='/model3' element={<Model3 currentModel='model3' setResponse={setResponse} desc={desc3} heading={heading3} endpoint="model3"/>}/>
      <Route exact path='/result/model1' element={<FinalPage data={response}/>}/>
      <Route exact path='/result/model2' element={<FinalPage2 data={response}/>}/>
      <Route exact path='/result/model3' element={<FinalPage2 data={response}/>}/>
    </Routes>
    </Router>
    </>
  );
}

export default App;
