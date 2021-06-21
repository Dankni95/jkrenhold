
/**
 * This is navbar component!
 */

import React, { useState } from 'react'
import styled from "styled-components"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

const HeroSection = () => {
  const data = useStaticQuery(graphql`
    query myQueryAndMyQuery {
        file(relativePath: {eq: "jk-vaskehjelp-hero.jpg"}) {
          childImageSharp {
            fluid {
              base64
              aspectRatio
              src
              srcSet
            }
          }
        }
      }
      
`)
  function sayHello() {
    alert('Hello')
  }

  return (
    <>

      <Title>La profesjonelle ta renholdet!</Title>
      <Wrapper>
        <ContactButton>
          <Link to="#">Kontakt oss</Link>
        </ContactButton>
        <HeroImage
          fluid={data.file.childImageSharp.fluid}
          alt="JK renhold vaskehjelp hero">
        </HeroImage>
      </Wrapper>
    </>
  )
}
const Wrapper = styled.div`
      display: flex;
      justify-content: center;
      background-color: black;
      & > * {
        flex-grow: 1;
      }
      `;

const HeroImage = styled(Img)`
      display: flex;
      opacity: 0.7; 
      max-height: calc(100vh - 5rem);
      
      &{
        background-color: #fff;
      }
      
      
      @media screen and (max-width: 750px) {
          max-height: 100vh;
          height: 60vh;
      }
      `;


const Title = styled.h1`
    position: absolute;
    opacity: 1;
    top: 37%;
    left: 5%;
    font-size: 3em;
    word-wrap: break-word;
    color: white;
    z-index: 1; 

    @media screen and (max-width: 750px) {
    top: 17%;
    left: 5%;
}
`;

const ContactButton = styled.button`
  position: absolute;
  top: 50%;
  left: 250px;
  background-color: #FEEA2B;
  color: #0E3C7B;
  font-size: 32px;
  padding: 10px 60px;
  border-radius: 15px;
  margin: 10px 0px;
  cursor: pointer;
  & a{
    text-decoration: none;
  }
  & a:active{
    color: white;
  }
  z-index: 1;

  
  @media screen and (max-width: 750px) {
    top: 40%;
    left: 30px;
    font-size: 20px;
}
`;






export default HeroSection;