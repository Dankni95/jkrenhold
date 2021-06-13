
/**
 * This is navbar component!
 */

import * as React from 'react'
import styled from "styled-components"
import { Link } from "gatsby"
import { FaBars } from "react-icons/fa";
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"


const Navbar = () => {
  const data = useStaticQuery(graphql`
  query MyQuery {
    file(relativePath: {eq: "icon.png"}) {
      childImageSharp {
        fixed(
          width: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
  `)
  return (
    <>
      <Nav className="navBar" id="mainNavBar">
        <Page to="/"><Logo
          fixed={data.file.childImageSharp.fixed}
          alt="A corgi smiling happily"
        /></Page>
        <Page to="/">FORSIDE</Page>
        <Page to="/om-oss/">OM OSS</Page>
        <Page to="#">RENGJØRING</Page>
        <Page to="#">AVDELINGER</Page>
        <Page to="/kontakt-oss/">KONTAKT OSS</Page>
        <i className="burger-icon">
          <Bars />
        </i>
      </Nav>
      <Title>Hi, welcome to my site!</Title>
    </>
  )
}

const Title = styled.h1`
  font-size: 2em;
  text-align: center;
  color: red;
`;
const Nav = styled.div`
  height: 5em;
  background: transparent;
  display: flex;
  flex: 1;
  justify-content: space-between;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  background-color: red;

  Link{
    text-decoration: none;
    font-size: 1.5em;
    align-self: center;
  }
  
`;
const Bars = styled(FaBars)`
  display: none;
  color: #808080;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

const Page = styled(Link)`
  color: #808080;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
    &.active {
      color: #000000;
    }

`;

const Logo = styled(Img)`
  display: flex;
  align-items: center;
`;



export default Navbar