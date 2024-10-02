import React from 'react'
import "./App.css"
import { Route, Routes } from 'react-router-dom'
import RootLayout from './layout/RootLayout'
import Firstpage from './Pages/firstpage'


const App = () => {
  return (
   <Routes>
    <Route  path='/' element={<RootLayout/>}>
       <Route path='/' element={<Firstpage/>}/>
       
    </Route>
   </Routes>
  )
}

export default App