
import React from 'react'
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";
import { FaFacebook, FaGoogle, FaYoutube, FaLinkedin } from "react-icons/fa"

const Footer = () => {
  const placeholderImage = useStaticQuery(
    graphql`
    query getImage {
      background: file(relativePath: {eq: "jk-renhold-footer.jpg"}) {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      logo: file(relativePath: {eq: "icon.png"}) {
        childImageSharp {
          gatsbyImageData(width: 310,height:150, placeholder: BLURRED, layout: FIXED)
        }
    }
    stripe: file(relativePath: {eq: "stripe-logo.png"}) {
      childImageSharp {
        gatsbyImageData(width: 300,height:100, placeholder: BLURRED, layout: FIXED)
      }
  }
  }
      `
  )

  console.log(placeholderImage.logo.childImageSharp.gatsbyImageData.images);

  return (
    <DarkOverlay>
      <Box>
        <FooterBackgroundImage image={placeholderImage.background.childImageSharp.gatsbyImageData} alt="footer background image" >
        </FooterBackgroundImage>
        <Container>
          <Row>
            <Column>
              <Heading>Hovedkontor</Heading>
              <FooterLink href="#">Steenbergs gate 27A 3188 Horten</FooterLink>
              <FooterLink href="#"> +47 980 14 418</FooterLink>
              <FooterLink href="mailto:Kontakt@jkrenhold.no">Kontakt@jkrenhold.no</FooterLink>
              <FooterLink href="#">Kontakt oss</FooterLink>
            </Column>
            <Column>
              <Heading>Lenker</Heading>
              <FooterLink href="#">Flyttevask</FooterLink>
              <FooterLink href="#">Vaskehjelp</FooterLink>
              <FooterLink href="#">Personvern</FooterLink>
              <FooterLink href="#">Avtalevilkår</FooterLink>
              <FooterLink href="#">Lenkesamling</FooterLink>
            </Column>
            <Column>
              <Logo image={placeholderImage.logo.childImageSharp.gatsbyImageData} alt="logo"></Logo>
            </Column>
            
            <Column>
            <SocialMedia>
              <Logo image={placeholderImage.stripe.childImageSharp.gatsbyImageData} alt="stripe logo"></Logo>
            </SocialMedia>
              <Heading>Følg oss</Heading>
              <SocialMedia>
                <FooterLink href="#">
                  <FaFacebook>
                    <span>
                      Facebook
                 </span>
                  </FaFacebook>
                </FooterLink>
                <FooterLink href="#">
                  <FaGoogle>
                    <span>
                      Google
                 </span>
                  </FaGoogle>
                </FooterLink>
                <FooterLink href="#">
                  <FaLinkedin>
                    <span>
                      Linkedin
                 </span>
                  </FaLinkedin>
                </FooterLink>
                <FooterLink href="#">
                  <FaYoutube>
                    <span>
                      Youtube
                 </span>
                  </FaYoutube>
                </FooterLink>
              </SocialMedia>
            </Column>
          </Row>
        </Container>
        <Copyright>
          <p>© 2021 JK Renholdsservice AS | Organisasjonsnummer: 997 819 845</p>
        </Copyright>
      </Box >
    </DarkOverlay>
  );
};
const DarkOverlay = styled.div`

background: #000000;
background: linear-gradient(90deg, rgba(2,0,36,0.8225490879945728) 0%, rgba(14,60,123,0.906582701439951) 35%, rgba(14,60,123,0.3799720571822479) 100%);
position: relative;
  -moz-box-shadow:    inset 0 0 3px #ffffffac;
  -webkit-box-shadow: inset 0 0 3px #ffffffa6;
  box-shadow: inset 0px 0 3px #ffffffb0;
  width: 100%;
`;

// inline links

const SocialMedia = styled.div`
display: flex;
flex-wrap: wrap;

   color: #0E3C7B;
   text-decoration: none;  
  
  justify-content:center;

       & a {
    padding-left: 10px;
    font-size: 2rem;
    filter: invert(1);
  }

`;


const FooterBackgroundImage = styled(GatsbyImage)`
position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  right: 0;
opacity: 0.3;
  box-shadow: 0 0px 3px #000000;

 @media (max-width: 730px) {
   
  }
`
const Logo = styled(GatsbyImage)`
 
`


const Box = styled.div`
  position: relative;
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }

`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;

   justify-content: center;
  
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20%, 1fr));
  grid-gap: 30px;
  & > * {
    justify-self: center;
      }

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill,  minmax(200px, 1fr));
  }
`;

const FooterLink = styled.a`
  color: whitesmoke;
  margin-bottom: 35px;
  text-decoration: none;
  font-size: 1.5em;

  &:hover {
      color: #FEEA2B;
      transition: 200ms ease-in;
  }
  z-index: 2;

`;

const Heading = styled.p`
  color: #0c4088;
  font-weight: bold;
  font-size: 1.8em;
  z-index: 2;
`;

const Copyright = styled.div`

display: flex;
flex-wrap: nowrap;
justify-content: center;

margin-bottom: 20px;
background: rgb(2,0,36);
border-top: 1px aliceblue solid;
& p{
  color: whitesmoke;
  z-index: 2;
  text-align: center;

}
`

export default Footer