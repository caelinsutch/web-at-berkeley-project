import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const ImageBanner: React.FC<Props> = () => {
  const data = useStaticQuery(graphql`
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
  `)
  return (
    <Img fluid={data.file.childImageSharp.fluid} />
  )
}

export default ImageBanner;
