import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import Root from "../components/root"

const ImageBanner = styled(Img)`
  
`

// @ts-ignore
const IndexPage = ({data}) => (
	<Root>
		<ImageBanner fluid={data.file.childImageSharp.fluid}/>
		<h1>Hi people</h1>
		<p>Welcome to your new Gatsby site.</p>
		<p>Now go build something great.</p>

		<Link to="/page-2/">Go to page 2</Link> <br/>
		<Link to="/using-typescript/">Go to "Using TypeScript"</Link>
	</Root>
)

export const query = graphql`
  query {
    file(relativePath: { eq: "berkeley-skyline.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage
