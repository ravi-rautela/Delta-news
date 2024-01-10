import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

// Create a class based components. 
export default class App extends Component {


  render() {
    return (
      <div>

        {/* React router version above V-6 Switch repalce by Routes*/}
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<News key="general" category="general" pageSize={12} country="in" />} />
            <Route path="/general" element={<News key="general" category="general" pageSize={12} country="in" />} />
            <Route path="/business" element={<News key="business" category="business" pageSize={12} country="in" />} />
            <Route path="/entertainment" element={<News key="entertainment" category="entertainment" pageSize={12} country="in" />} />
            <Route path="/health" element={<News key="health" category="health" pageSize={12} country="in" />} />
            <Route path="/science" element={<News key="science" category="science" pageSize={12} country="in" />} />
            <Route path="/sports" element={<News key="sports" category="sports" pageSize={12} country="in" />} />
            <Route path="/technology" element={<News key="technology" category="technology" pageSize={12} country="in" />} />
          </Routes>
        </BrowserRouter>

      </div>
    )
  }
}

