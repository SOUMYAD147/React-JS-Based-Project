import Navbar from './component/Navbar';
import New from './component/New';
import React, { useState} from 'react';
import LoadingBar from 'react-top-loading-bar'

import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
 
} from "react-router-dom";

function App() {

 const apikey = process.env.REACT_APP_NEWS_API
  //const apikey='2b0865a5df78437389c5d8d4fb1bcdd0';
const pagesize=8;

const[progress, setprogress]=useState(0);


  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <LoadingBar
        color='#f11946'
        progress={progress}
        height={3}
        
      />
    <Routes>
          <Route exat path="/" element={<New setprogress={setprogress}  apikey={apikey} country='in' category='business' pagesize={pagesize}/>}></Route>
          <Route exat path="/business" element={<New setprogress={setprogress}  apikey={apikey} key ='business' country='in' category='business' pagesize={pagesize}/>}></Route>
          <Route exat path="/entertainment" element={<New setprogress={setprogress}  apikey={apikey} key ='entertainment'country='in' category='entertainment' pagesize={pagesize}/>}></Route>
          <Route exat path="/general" element={<New setprogress={setprogress}  apikey={apikey} key ='general'country='in' category='general' pagesize={pagesize}/>}></Route>
          <Route exat path="/health" element={<New setprogress={setprogress}  apikey={apikey}  key ='health'country='in' category='health' pagesize={pagesize}/>}></Route>
          <Route exat path="/science" element={<New setprogress={setprogress}  apikey={apikey} key ='science'country='in' category='science' pagesize={pagesize}/>}></Route>
          <Route exat path="/sports" element={<New setprogress={setprogress}  apikey={apikey} key ='sports'country='in' category='sports' pagesize={pagesize}/>}></Route>
          <Route exat path="/technology" element={<New setprogress={setprogress}  apikey={apikey} key ='technology'country='in' category='technology' pagesize={pagesize}/>}></Route>
            
          
        </Routes>
    
    </BrowserRouter>
    </>
    
  );
}

export default App;
