import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Sinin from './pages/Sinin'
import Sinup from './pages/Sinup'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'
import Header from './components/Header'

export default function App() {
  return (
   <BrowserRouter>
   <Header/>
   <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/about' element={<About />}/>
<Route path='/sin-in' element={<Sinin/>}/>
<Route path='/sin-up' element={<Sinup/>}/>
<Route path='/dashboard' element={<Dashboard/>}/>
<Route path='/project' element={<Projects/>}/>

   </Routes>
   
   
   
   </BrowserRouter>
  )
}
