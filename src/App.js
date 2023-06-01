import React from 'react'
import Navbar from './components/Navbar'
import Content from './components/Content'
import Footer from './components/Footer'
import More from './components/More'
import Search from './components/Search'
import NotFound from "../src/components/NotFound"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Car from './components/Car'
export default function App() {
  return (
    <div className='Nav-bar'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
          <><Navbar />
          <Content />
          <Footer /></>}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/more" element={<More />}></Route>
          <Route path="/car" element={<Car />}></Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}
