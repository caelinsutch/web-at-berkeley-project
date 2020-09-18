import React from "react"
import SEO from "./seo"

import styled, { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import ImageBanner from "./shared/image-banner"
import LogoBanner from "./shared/logo-banner"
export const GlobalStyle = createGlobalStyle`
  ${reset}
	 * {
	    font-family: Rubik,serif !important;
	}
	body {
		  background: #004584;

	}
`

const ContentWrapper = styled.div`
  padding: 2rem 5rem;
`

// Root component to wrap all pages and templates
const Root: React.FC = ({children}) => (
	<>
		<GlobalStyle/>
		<SEO/>
		<ImageBanner/>
		<LogoBanner/>
		<ContentWrapper>
			{children}
		</ContentWrapper>
	</>
)

export default Root
