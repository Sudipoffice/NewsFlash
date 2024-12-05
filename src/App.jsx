import React, { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../components/Home'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import TrendingNews from '../components/TrendingNews'
import Categories from '../components/Categories'
import Local from '../components/Local'
import Global from '../components/Global'
import Video from '../components/Video'
import DetailedNews from '../components/DetailedNews'
import DetailedCategoriesNews from '../components/categories/DetailedCategoriesNews'

function App() {

  const [scrollY, setScrollY] = useState(0);

  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home scrollY={scrollY} setScrollY={setScrollY} />}/>
    <Route path="/trending-news" element={<TrendingNews/>}/>
    <Route path="/categories/*" element={<Categories/>}/>
    <Route path="/local" element={<Local/>}/>
    <Route path="/global" element={<Global/>}/>
    <Route path="/video" element={<Video />}/>
    <Route path="/detailedNews" element={<DetailedNews/>}/>
    <Route path="/detailedCategoriesNews" element={<DetailedCategoriesNews/>}/>
    </Routes>
    {/* <Footer/> */}
    </BrowserRouter>
    
  )
}

export default App
