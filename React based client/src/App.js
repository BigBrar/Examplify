import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Navbar from './components/Navbar';
import Model1 from './components/Model1/Model1';
import Model2 from './components/Model2/Model2';

import Body from './components/Body';
import animationData from './uploading.json'
import './index.css'
import { useState } from 'react';
import FinalPage from './components/FinalPage/FinalPage';

function App() {
  const [response,setResponse] = useState(null)

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
