import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div className='px-28'>
        <div >
      <Navbar/>
        </div>
        <div>
       <Outlet/>     
        </div>


    </div>
  )
}

export default RootLayout