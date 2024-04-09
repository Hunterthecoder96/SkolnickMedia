import React from "react"
import Nav from "./Components/Nav"
import {Routes,Route} from "react-router-dom"
import Home from './Components/Home'
import Portfolio from "./Components/Portfolio"
import './App.css'
import About from "./Components/About"
import RadioBlog from "./Components/BlogPosts/RadioBlog"
import TvBlog from "./Components/BlogPosts/TvBlog"
import DirectmailBlog from "./Components/BlogPosts/DirectmailBlog"
import SmcHistory from "./Components/BlogPosts/SmcHistory"

function App() {


  return (
    <>
    <Nav/>
    <Routes>
      <Route path="/Radioforyou" element={<RadioBlog/>}/>
      <Route path="/TVforyou" element={<TvBlog />} />
      <Route path="/DirectMail" element={<DirectmailBlog />} />
      <Route path="/SMC" element={<SmcHistory/>}/>

      <Route path="/" element={<Home />}/>
      <Route path="/portfolio" element={<Portfolio/>}/>
      <Route path="/about" element={<About/>}/>
    </Routes>
  
      </>
  )
}

export default App
