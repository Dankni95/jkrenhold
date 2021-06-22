import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            <Hero />
            <div className="content">
                {children}
            </div>
            <footer><h2>sup</h2></footer>
        </>
    )
}
