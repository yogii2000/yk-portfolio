
// import {BrowserRouter as Router,Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import { DefaultHeader } from './components/DefaultHeader'
import SocialLinks from './components/SocialLinks'
import Portfolio from './components/Portfolio'
import Experience from './components/Experience'
import Contact from './components/Contact'

function App() {
  return (
    <>
    <DefaultHeader/>
    <Home/>
    <About/>
    <Portfolio/>
    <Experience/>
    <Contact/>
    <SocialLinks/>
    </>
  )
}

export default App
