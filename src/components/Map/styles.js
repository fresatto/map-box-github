import styled from 'styled-components'

export const MarkerContent = styled.div`
	border-radius: 100%;
	box-shadow: -1px 2px 5px black;
	width: 50px;
	height: 50px;
	background-image: url(${props => props.avatar_url});
	background-size: cover;
`
