import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Footer from './Footer'

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            <Hero />
            <div className="content">
                {children}
            </div>
            <Footer />
        </>
    )
}
