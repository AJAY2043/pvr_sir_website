import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import LandingPage from './Components/Project/LandingPage'
import Myskills from './Pages/MySkills/MySkills'
import MyIntrests from './Pages/MyIntrests/MyIntrests'
import CollabrateWithMe from './Pages/Collabrate/CollabrateWithMe'
import MyInstitue from './Pages/MyInstitue/MyInstitue'
import AboutMe from './Pages/AboutMe/AboutMe'
import MyStartups from './Pages/MyStartups/MyStartups'
import Blog from './Components/Blog/Blog'
import Contact from './Components/Contact/Contact'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/aboutme' element={<AboutMe/>}/>
      <Route path='/myskills' element={<Myskills/>}/>
      <Route path='/myinterests' element={<MyIntrests/>}/>
      <Route path='/collabratewithme' element={<CollabrateWithMe/>}/>
      <Route path='/myinstitute' element={<MyInstitue/>}/>
      <Route path='/mystartups' element={<MyStartups/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App