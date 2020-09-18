import React from "react"
import styled from "styled-components"
import Img from 'gatsby-image'

const Container = styled.div`
	background-color: white;
	display: flex;
	align-items: stretch;
`

const Logo = styled(Img)`
	flex-grow: 1;	
`

const SubredditName = styled.h1`
	flex-grow: 1;
`

const SubredditTagLine = styled.h1`
flex-grow: 2;
`

const LogoBanner: React.FC = () => (
	<Container>

	</Container>
)

export default LogoBanner;
