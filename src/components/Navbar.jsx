
/**
 * This is navbar component!
 */

import React, { useState } from 'react'
import styled from "styled-components"
import { Link } from "gatsby"
import { FaBars, FaCaretRight } from "react-icons/fa";
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby"
import { FiPhoneCall } from "react-icons/fi"


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
      <Page to="/" getProps={isActive}> FORSIDE</Page>
      <Page to="/om-oss/" getProps={isActive}> OM OSS</Page>
      <Page to="#" getProps={isActive}><FaCaretRight></FaCaretRight> RENGJØRING</Page>
      <Page to="#" getProps={isActive}><FaCaretRight></FaCaretRight> AVDELINGER</Page>
      <Page to="/kontakt-oss/" getProps={isActive}> KONTAKT OSS</Page>
      <Phone href="tel:+4798014418"><PhoneIcon></PhoneIcon><p>  98014418 </p></Phone>
    </Nav>
  </>;
}



const Nav = styled.div`


/* Desktop view */

  display: flex;
  height: 5em;
  font-size: 1.3rem;
  background-color: transparent;



  #onPage{
    border-bottom: 1px solid white;
}

//Phone number

& a:last-child {
      margin-left: auto;
}


  /* Mobile view */

  @media (max-width: 1200px) {
    & > * {
        padding: 0;
        flex-grow: 1;
        justify-content: center;
      }
  }


  @media (max-width: 750px) {
  z-index: 1 !important;
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
        background: white;
        left: 0;
        transition: all 0.5s ease;
        z-index: 5 !important;
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
      z-index: 4;
      }
    }

`;
const Bars = styled(FaBars)`

  /* Desktop view */
  display: none;
  color: black;
  


  /* Mobile view  */
  @media screen and (max-width: 750px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 2rem;
    cursor: pointer;
    z-index: 4;
}

`;

const Page = styled(Link)`
/* Desktop view */
  color: whitesmoke;
  display: flex;
  align-items: center;


  text-decoration: none;
  font-size: 1.2rem;
  height: 100%;
  padding: 0 1rem;
  cursor: pointer;
  z-index: 5;
  

    &:hover {
      transform: translate(0, -2%);
      border-bottom: 1px solid #FEEA2B;
      transition: all 2.5s ease;
    }

// logo
//Mobile view 
  @media (max-width: 750px) {
    color: black;
    &:first-child  {
      position:absolute;
      top:-21%;
      left:0;

    }
  }
`;

const Logo = styled(GatsbyImage)`
  position:relative;

`;

const MobileLogo = styled.div`
z-index: 5 !important;
  display: none;

  @media (max-width: 750px) {
    display: block;
    position: absolute;
    border-bottom: solid 1px black;
    background-color: white;
    height: 9%;
    width: 100vw;
  }
`;

const Phone = styled.a`
 display: flex;
   align-items: center;
   color: whitesmoke;
   text-decoration: none;  
   padding: 0px 60px 0px 40px;
   z-index: 50 !important;

  
   @media (max-width: 1000px) {
     display: none;
   }
  
 `;

const PhoneIcon = styled(FiPhoneCall)`
 padding: 2% 10% 2% 4% ;
 font-size: 2rem;
 z-index: 5 !important;

 `;

export default Navbar