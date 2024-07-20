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

function App() {
  return (
    <>
    <Router>
    <Navbar/>
    {/* <Navboot/> */}
    <Routes>
      <Route exact path='/' element={<Body animationData={animationData}/>}/>
      <Route exact path='/model1' element={<Model1/>}/>
      <Route exact path='/model2' element={<Model2/>}/>
    </Routes>
    </Router>
    </>
  );
}

export default App;
