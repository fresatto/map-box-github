import styled from 'styled-components'

export const Container = styled.div`
	position: fixed;
	bottom: 35px;
	width: 100%;
	display: flex;
	justify-content: center;
	visibility: ${props => (props.visible ? 'visible' : 'hidden')};

	span {
		opacity: ${props => (props.visible ? 1 : 0)};
		background: #ff00008a;
		border-radius: 5px;
		padding: 10px 20px;
		width: 100%;
		max-width: 400px;
		text-align: center;
		color: #fff;
		text-shadow: -2px 1px 2px black;
		transition: 1s ease-in-out;
	}
`
