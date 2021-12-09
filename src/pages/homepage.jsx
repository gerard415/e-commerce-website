import React from 'react'
import Navbar from '../components/navbar'
import Announcements from '../components/announcements'
import Slider from '../components/slider'

const Homepage = () => {
    return (
        <div>
            <Announcements/>
            <Navbar/>
            <Slider/>
        </div>
    )
}

export default Homepage
