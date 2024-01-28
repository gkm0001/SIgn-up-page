import { useState } from 'react'
import './App.css'
import {BrowserRouter , Route, Routes } from 'react-router-dom'
import Layout from '../Layout.jsx'
import UserAuth from './Pages/userAuth'


function App() {
   

  return (
    <>
       
       <BrowserRouter>
           <Routes>
               <Route path='/' element={<Layout/>}>
                   
                  <Route path='signin' element={<UserAuth type="sign-in"/>}/>
                  <Route path='' element={<UserAuth type="sign-up"/>}/>
               </Route>
           </Routes>
       </BrowserRouter>
    </>
  )
}

export default App
