import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Footer from './Footer'
import styled from "styled-components"


export default function Layout({ children }) {
    return (
        <Wrapper>
            <Navbar />
            <Hero />
            <div className="content">
                {children}
            </div>
            <Footer />
        </Wrapper>
    )
}


const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
`