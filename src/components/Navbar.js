
/**
 * This is navbar component!
 */

import React, { useState } from 'react'
import styled from "styled-components"
import { Link } from "gatsby"
import { FaBars } from "react-icons/fa";
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"


const Navbar = () => {

  const [showPages, setState] = useState(false);
  const data = useStaticQuery(graphql`
  query MyQuery {
    file(relativePath: {eq: "icon.png"}) {
      childImageSharp {
        fixed(
          width: 150) {
            base64
            width
            height
            src
            srcSet
        }
      }
    }
  }
  `)
  return (
    <>
      <Bars onClick={() => setState(!showPages)}> </Bars>
      <MobileLogo to="/"><Logo
        fixed={data.file.childImageSharp.fixed}
        alt="JK renhold logo"
      /></MobileLogo>
      <Nav className={showPages ? "active" : "hidden"} id="mainNavBar">
        <Page to="/"><Logo
          fixed={data.file.childImageSharp.fixed}
          alt="JK renhold logo"
        /></Page>
        <Page className="" to="/">FORSIDE</Page>
        <Page to="/om-oss/">OM OSS</Page>
        <Page to="#">RENGJØRING</Page>
        <Page to="#">AVDELINGER</Page>
        <Page to="/kontakt-oss/">KONTAKT OSS</Page>
      </Nav>
    </>
  )
}



const Nav = styled.div`


/* Desktop view */

  height: 4em;
  font-size: 1.3rem;
  background: transparent;
  display: flex;
  border-bottom: solid 1px black;




  /* Mobile view */

  @media (max-width: 750px) {
    &:not(:first-child){
      display: flex;
      width: 100%;
      height: 50%;
      position: absolute;
      top: 75px;
      opacity: 0;
      flex-direction: column;
      list-style-type: none;
      grid-gap: 0px;
    } 
    
  
      &.active{
        background: #9899d1;
        left: 0;
        opacity: 1;
        transition: all 0.5s ease;
        z-index: 2;
      }

  }

  @media (max-width: 1000px) {
      &{
      font-size: 1rem;
      }
    }

`;
const Bars = styled(FaBars)`

  /* stylelint-disable */
  display: none;
  color: #808080;


  /* stylelint-disable */
  @media screen and (max-width: 750px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 2rem;
    cursor: pointer;
}
`;

const Page = styled(Link)`

/* stylelint-disable */

  color: #0E3C7B;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
    &:hover {
      background-color:#FEEA2B;
    }
    &:first-child{
      margin: 0rem 2rem;

      @media (max-width: 750px) {
        display: none;
      }
    }

`;

const Logo = styled(Img)`
  display: flex;
  bottom: 15%
  
`;
const MobileLogo = styled(Link)`
  display: none;
  @media (max-width: 750px) {
    display: block;
    border-bottom: solid 1px black;

  }
`;


export default Navbar