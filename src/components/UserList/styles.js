import styled from 'styled-components'

export const Container = styled.aside`
	position: fixed;
	border-radius: 3px;
	left: 5px;
	top: 5px;
	padding: 10px;
	background: #fff;
	box-shadow: 2px 2px 5px -2px #9b9a9a;
`

export const List = styled.ul`
	list-style: none;
	padding: 0;
	margin: 0;
`

export const ListItem = styled.li`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 0.5rem;
	border-bottom: 1px solid #cccccc73;
	padding-bottom: 0.5rem;

	:last-child {
		margin-bottom: 0;
		border-bottom: none;
		padding-bottom: 0;
	}

	h3 {
		margin: 0;
		line-height: 1;
		font-size: 14px;
		font-weight: 500;
		margin: 0 0.5rem;
	}

	img {
		width: 30px;
		height: 30px;
		border-radius: 100%;
	}

	button {
		border: none;
		background: transparent;
		outline: 0;
		display: flex;
		cursor: pointer;
	}

	svg {
		font-size: 21px;
		color: darkred;
	}
`
