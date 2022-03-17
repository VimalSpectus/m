import React from 'react';
import './App.css';
import InputField from './Components/InputField';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import AllQues from './Components/FirstQues';
import BasicTable from './Components/BasicTable';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
    <Routes>
      <Route path="/" element={<InputField/>}/>
      <Route path="/allQues" element={<AllQues/>}/>
      <Route path="/report" element={<BasicTable/>}/>
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
