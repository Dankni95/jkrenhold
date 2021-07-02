import * as React from "react"
import Layout from "../components/Layout"
import styled from 'styled-components'
import { createGlobalStyle } from "styled-components"
import  Maps from "../components/Maps"


const Main = createGlobalStyle`
  html, body {
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0 auto;
    box-sizing: border-box;
  }
`


// markup
const IndexPage = () => {
  return (
    <>
      <Main />
      <Layout>
        <title>Renhold for bedrifter & private hjem | JK Renholdsservice AS</title>
        <Content>
          <Maps />
        </Content>
      </Layout>
    </>
  )
}
const Content = styled.div`
text-align: center;
`




export default IndexPage
