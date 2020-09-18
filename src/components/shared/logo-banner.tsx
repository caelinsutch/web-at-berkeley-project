import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import GatsbyImage from "gatsby-image"

const Container = styled.div`
	background-color: white;
	display: flex;
	align-items: center;
	padding: 1rem;
`

const LogoWrapper = styled.div`
	flex-grow: 1;	
  padding: 1rem;
  height: 85px;
  width: 350px;
`

const SubredditNameWrapper = styled.div`
  padding: 1rem;
  flex-grow: 1;
`

const SubredditName = styled.h1`
	font-family: Calistoga,serif !important;
  font-style: normal;
  font-weight: normal;
  font-size: 26px;
  line-height: 34px;
  /* identical to box height */
  
  letter-spacing: 0.19em;
  text-transform: uppercase;
  
  color: #003262;
`

const SubredditTagLineWrapper = styled.div`
  flex-grow: 2;
  padding: 1rem;
`

const SubredditTagLine = styled.h1`
  font-family: Calistoga, serif !important;
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  line-height: 42px;
  text-align: right;
  letter-spacing: 0.19em;
  text-transform: uppercase;
  color: #003262;
`

// Top Level Logo Banner with subreddit name and tagline
const LogoBanner: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "berkeley-logo.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Container>
      <LogoWrapper>
        <GatsbyImage fluid={data.file.childImageSharp.fluid} />
      </LogoWrapper>
      <SubredditNameWrapper>
        <SubredditName>r/Berkeley</SubredditName>
      </SubredditNameWrapper>
      <SubredditTagLineWrapper>
        <SubredditTagLine>
          # 1 Public University <br />
          In the world</SubredditTagLine>
      </SubredditTagLineWrapper>
    </Container>
  )
}

export default LogoBanner;
