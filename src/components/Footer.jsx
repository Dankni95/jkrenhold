
import React from 'react'
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";

const Footer = () => {
  const placeholderImage = useStaticQuery(
    graphql`
    query getFooterImage {
        file(relativePath: {eq: "jk-renhold-footer.jpg"}) {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      } 
      `
  )

  return (
    <DarkOverlay>
      <Box>
        <FooterBackgroundImage image={placeholderImage.file.childImageSharp.gatsbyImageData} alt="Hello" >
        </FooterBackgroundImage>
        <Container>
          <Row>
            <Column>
              <Heading>About Us</Heading>
              <FooterLink href="#">Aim</FooterLink>
              <FooterLink href="#">Vision</FooterLink>
              <FooterLink href="#">Testimonials</FooterLink>
            </Column>
            <Column>
              <Heading>Services</Heading>
              <FooterLink href="#">Writing</FooterLink>
              <FooterLink href="#">Internships</FooterLink>
              <FooterLink href="#">Coding</FooterLink>
              <FooterLink href="#">Teaching</FooterLink>
            </Column>
            <Column>
              <Heading>Contact Us</Heading>
              <FooterLink href="#">Uttar Pradesh</FooterLink>
              <FooterLink href="#">Ahemdabad</FooterLink>
              <FooterLink href="#">Indore</FooterLink>
              <FooterLink href="#">Mumbai</FooterLink>
            </Column>
            <Column>
              <Heading>Social Media</Heading>
              <FooterLink href="#">
                <i className="fab fa-facebook-f">
                  <span style={{ marginLeft: "10px" }}>
                    Facebook
                 </span>
                </i>
              </FooterLink>
              <FooterLink href="#">
                <i className="fab fa-instagram">
                  <span style={{ marginLeft: "10px" }}>
                    Instagram
                 </span>
                </i>
              </FooterLink>
              <FooterLink href="#">
                <i className="fab fa-twitter">
                  <span style={{ marginLeft: "10px" }}>
                    Twitter
                 </span>
                </i>
              </FooterLink>
              <FooterLink href="#">
                <i className="fab fa-youtube">
                  <span style={{ marginLeft: "10px" }}>
                    Youtube
                 </span>
                </i>
              </FooterLink>
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

background: rgb(2,0,36);
background: linear-gradient(90deg, rgba(2,0,36,0.8225490879945728) 0%,
 #0e3b7b 35%, #0e3b7b 100%);
 position: relative;
   
  width: 100%;
`;

const FooterBackgroundImage = styled(GatsbyImage)`
position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  right: 0;
opacity: 0.5;

 @media (max-width: 730px) {
   
  }
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
    justify-content: center;
    max-width: 1000px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  grid-gap: 20px;

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
  margin-bottom: 40px;
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