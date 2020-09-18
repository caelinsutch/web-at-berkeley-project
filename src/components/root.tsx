import React from "react"
import SEO from "./seo"

import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
export const GlobalStyle = createGlobalStyle`
  ${reset}
	 * {
	    font-family: Rubik,serif !important;
	}
`

const Root: React.FC = ({children}) => (
	<>
		<GlobalStyle/>
		<SEO/>
		{children}
	</>
)

export default Root
