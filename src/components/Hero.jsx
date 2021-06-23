
/**
 * This is navbar component!
 */

import React, { useState } from 'react'
import styled from "styled-components"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby"

const HeroSection = () => {
  const data = useStaticQuery(graphql`query myQueryAndMyQuery {
  file(relativePath: {eq: "jk-vaskehjelp-hero.jpg"}) {
    childImageSharp {
      gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
    }
  }
}
`)

  console.log(data);

  function sayHello() {
    alert('Hello')
  }

  return <>

    <Wrapper>
      <Title>La profesjonelle ta renholdet!</Title>
      <ContactButton>
        <Link to="#">Kontakt oss</Link>
      </ContactButton>
      <DarkOverlay />
      <HeroImage
        image={data.file.childImageSharp.gatsbyImageData}
        alt="JK renhold vaskehjelp hero">
      </HeroImage>
    </Wrapper>
  </>;
}
const Wrapper = styled.div`
 
      /* --yellow: #0E3C7B;
      --blue: #FEEA2B; */


      display: flex;
      align-items: center;
      align-items: flex-start;
      min-width: 100%;
      & > * {
        flex-grow: 1;
      }
      `;

const DarkOverlay = styled.div`

background-color: rgba(0, 0, 0, 0.35);
  position: absolute;
      max-height: calc(100vh - 5rem);
          
      @media screen and (max-width: 750px) {
          max-height: calc(100vh - 5rem);
          height: 80vh;
      }
  width: 100%;
  height: 100%;
  z-index: 2;
`;

const HeroImage = styled(GatsbyImage)`

      position: relative;
      max-height: calc(100vh - 5rem);
          
      @media screen and (max-width: 750px) {
          max-height: calc(100vh - 5rem);
          height: 80vh;
      }
      `;


const Title = styled.h1`
    position: absolute;
    opacity: 1;
    top: 25%;
    left: 5%;
    font-size: 4.5em;
    word-wrap: break-word;
    color: white;
    z-index: 3;

    @media screen and (max-width: 750px) {
         font-size: 3.5em;
         width: 65%;
      }
      @media screen and (max-width: 1280px) {
        top: 5%;
         font-size: 5.5em;
         width: 90%;
      }
      @media screen and (max-width: 550px) {
          top: 15%;
         font-size: 3.5em;
         width: 90%;
      }
`;

const ContactButton = styled.button`
  position: absolute;
  display: flex;
  align-self: center;
  bottom: 40%;
  left: 5%;
  background-color: #FEEA2B;
  color: #0E3C7B;
  font-size: 32px;
  padding: 10px 60px;
  border-radius: 15px;
  margin: 10px 0px;
  cursor: pointer;
  z-index: 3;
  & a{
    text-decoration: none;
  }
  & a:active{
    color: white;
  }
  &:hover{
    background-color: #153C7B; 
    a{
      color: white;
    }
  }
  @media screen and (max-width: 750px) {
        bottom:35%;
        font-size: 1.5em;
        max-width: 90%;
      }

      @media screen and (max-width: 1250px) {
        bottom:75%;
        font-size: 1.5em;
        max-width: 90%;
      }
      @media screen and (max-width: 350px) {
        bottom:20%;
        font-size: 1.5em;
        max-width: 90%;
      }
`;






export default HeroSection;