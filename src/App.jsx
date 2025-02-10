import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar/Navbar'
import { Routes, Route } from 'react-router'
import Homepage from './pages/homepage'
import Saved from './pages/saved'
import MealInfo from './pages/mealInfo'


function App() {
  // const [count, setCount] = useState(0)

  return (

    <div>    
      <Navbar/>

      <Routes>
        <Route index element={<Homepage/>} />
        <Route path='saveditems' element={<Saved/>} />
        <Route path='/:mealid' element={<MealInfo/>} />
      </Routes>
    </div>
  )
}

export default App
