import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CategoryNav from './categories/CategoryNav'
import Business from './categories/Business'
import Entertainment from './categories/Entertainment'
import General from './categories/General'
import Health from './categories/Health'
import Science from './categories/Science'
import Sports from './categories/Sports'
import Technology from './categories/Technology'
import Fashion from './categories/Fashion'
import Food from './categories/Food'
import Politics from './categories/Politics'

const Categories = () => {
  return (
    <div id='categories' className='h-fit w-screen pt-0 md:pt-20'>
      <CategoryNav/>
      <Routes>
        <Route path="" element={<General/>} />
        <Route path="business" element={<Business/>} />
        <Route path="entertainment" element={<Entertainment/>} />
        <Route path="health" element={<Health/>} />
        <Route path="science" element={<Science/>} />
        <Route path="sports" element={<Sports/>} />
        <Route path="technology" element={<Technology/>} />
        <Route path="fashion" element={<Fashion/>} />
        <Route path="food" element={<Food/>} />
        <Route path="politics" element={<Politics/>} />
      </Routes>

    </div>
  )
}

export default Categories
