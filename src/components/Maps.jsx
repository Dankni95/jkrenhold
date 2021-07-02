

import * as React from "react"
import styled from 'styled-components'
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby"

function makeIframe() {
  const mapsParent = document.getElementById("maps-parent");
  mapsParent.innerHTML = '';


  const ifrm = document.createElement("iframe");
  ifrm.setAttribute("src", "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4060.830008509752!2d10.45857!3d59.40947200000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xadb5b4a981ea22a9!2sJK%20Renholdsservice%20AS!5e0!3m2!1sno!2sno!4v1625196171287!5m2!1sno!2sno");

  mapsParent.appendChild(ifrm);

}



// markup
const Maps = () => {
  const data = useStaticQuery(graphql`query googleMapsImage {
    file(relativePath: {eq: "jk-maps.png"}) {
      childImageSharp {
        gatsbyImageData( quality:90, layout: FULL_WIDTH)
      }
    }
  }
  `)
  return (
    <>
     <GoogleMaps id="maps-parent">
      <PlaceholderImage onClick={makeIframe} id="placeholder-image" image={data.file.childImageSharp.gatsbyImageData}
          alt="jk google maps" />
     </GoogleMaps>
    </>
  )
}

const PlaceholderImage = styled(GatsbyImage)`
border: none;
width: 100%;
cursor: pointer;
`;

const GoogleMaps = styled.div`
width: 100%;
& iframe{
  width: 100%;
  height: 45vh;
 border: none;
}
& img{
  width: 100%;
  height: 100%;
}
`

export default Maps;
