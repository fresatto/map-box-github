import styled from 'styled-components'

export const Container = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.9);
	display: flex;
	align-items: center;
	justify-content: center;
	visibility: ${props => props.visibility};
`
export const Form = styled.form`
	background: white;
	border-radius: 3px;
	padding: 20px;
	width: 100%;
	max-width: 290px;
`
export const Input = styled.input`
	width: 100%;
	margin-bottom: 0.4rem;
	padding: 5px;
	border-radius: 3px;
	border: 1px solid #9b9b9b;
`

export const ContainerButtons = styled.div`
	display: flex;
`
export const SaveButton = styled.button`
	flex: 1;
	margin-right: 0.2rem;
	border: none;
	padding: 8px;
	border-radius: 3px;
	background-color: #99c0f8;
	color: #fff;
	text-shadow: -1px 1px 1px #939393;
	cursor: pointer;
`
export const CancelButton = styled.button`
	flex: 1;
	margin-left: 0.2rem;
	border: none;
	padding: 8px;
	border-radius: 3px;
	background-color: #ff5d5d;
	color: #fff;
	text-shadow: -1px 1px 1px #939393;
	cursor: pointer;
`
