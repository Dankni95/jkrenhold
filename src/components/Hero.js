
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
    return (
        <>
            <Wrapper>
                <Title>Hi, welcome to my site!</Title>
                <HeroImage
                    fluid={data.file.childImageSharp.fluid}
                    alt="JK renhold vaskehjelp hero">
                </HeroImage>
            </Wrapper>
        </>
    )
}

const Title = styled.h1`
    position: absolute;
    font-size: 2em;
    word-wrap: break-word;
    color: #0E3C7B;
    z-index: 1; 
`;



const Wrapper = styled.div`
display: flex;
justify-content: center;
& > * {
  flex-grow: 1;
}
 `;

const HeroImage = styled(Img)`
display: flex;
max-height: calc(100vh - 5rem);
`;

export default HeroSection;