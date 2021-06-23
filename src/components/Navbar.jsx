
/**
 * This is navbar component!
 */

import React, { useState } from 'react'
import styled from "styled-components"
import { Link } from "gatsby"
import { FaBars } from "react-icons/fa";
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby"


const Navbar = () => {
  const data = useStaticQuery(graphql`query MyQuery {
  file(relativePath: {eq: "icon.png"}) {
    childImageSharp {
      gatsbyImageData(width: 150, placeholder: BLURRED, layout: FIXED)
    }
  }
}`)

  const [showPages, setState] = useState(false);

  function isActive({ isCurrent }) {
    return isCurrent ? { id: "onPage" } : null
  }




  return <>
    <MobileLogo>
      <Bars onClick={() => setState(!showPages)}></Bars>
    </MobileLogo>
    <Nav className={showPages ? "active" : "hidden"} id="mainNavBar">
      <Page to="/"><Logo className="logo"
        image={data.file.childImageSharp.gatsbyImageData}
        alt="JK renhold logo"
      /></Page>
      <Page to="/" getProps={isActive}>FORSIDE</Page>
      <Page to="/om-oss/" getProps={isActive}>OM OSS</Page>
      <Page to="#" getProps={isActive}>RENGJØRING</Page>
      <Page to="#" getProps={isActive}>AVDELINGER</Page>
      <Page to="/kontakt-oss/" getProps={isActive}>KONTAKT OSS</Page>
    </Nav>
  </>;
}



const Nav = styled.div`


/* Desktop view */

  height: 4em;
  font-size: 1.3rem;
  background: transparent;
  display: flex;
  border-bottom: solid 1px black;

  #onPage{
    background-color: #FEEA2B;
}

  /* Mobile view */

  @media (max-width: 750px) {
    a{
      height: 15%
    }
    &{
      position: absolute;
      display: flex;
      width: 100%;
      height: 50%;
      top: 75px;
      flex-direction: column;
      list-style-type: none;
      grid-gap: 0px;
    } 
    
  
      &.active{
        background: #9899d1;
        left: 0;
        transition: all 0.5s ease;
        z-index: 4;
      }

  }

  @media (max-width: 1100px) {
      &{
      font-size: 1rem;
      }
    }
    @media (max-width: 910px) {
      &{
      font-size: 0.7rem;
      }
    }

`;
const Bars = styled(FaBars)`

  /* Desktop view */
  display: none;
  color: #808080;


  /* Mobile view  */
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
/* Desktop view */
  color: #0E3C7B;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  font-size: 1rem;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
    &:hover {
      background-color:#FEEA2B;
    }

// logo
//Mobile view 
  @media (max-width: 750px) {
    &:first-child  {
      position:absolute;
      top:-21%;
      left:0;
      z-index:3;

    }
  }
`;

const Logo = styled(GatsbyImage)`
  position:relative;
`;

const MobileLogo = styled.div`
  display: none;

  @media (max-width: 750px) {
    display: block;
    position: absolute;
    border-bottom: solid 1px black;
    background-color: white;
    height: 9%;
    width: 100vw;
    z-index: 3;
  }
`;


export default Navbar