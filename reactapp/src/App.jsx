import React, { useState } from 'react'
import './App.css'
import TopBar from './component/TopBar'
import Article from './component/Article'
import HomePage from './component/HomePage'
import Contact from './component/Contact'
import { Route, Routes } from 'react-router-dom'
import Profile from './component/Profile'
import { UserContext } from './UserContext'
import Search from './component/Search'
import Product from './component/Product'

function App() {

  const [title, setTitle]=useState("Sample Title")
  const name="Alex"
 

  return (
    <>
      <UserContext.Provider value={name}>
        <Routes>
          <Route path="/" element={<><HomePage/></>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/article" element={<Article  title={title}  />} />
          <Route path='/profile/:username' element={<Profile />} />
          <Route path='/search' element={<Search />} />
          <Route path='/products' element={<Product />} />
        </Routes>
      </UserContext.Provider>

    </>
  )
}

export default App
