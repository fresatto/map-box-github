import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Creators as UserActions } from '../../store/ducks/users'

import PropTypes from 'prop-types'
// Stylesss
import {
	Container,
	Form,
	Input,
	ContainerButtons,
	SaveButton,
	CancelButton,
} from './styles'

class InsertUserModal extends Component {
	state = {
		query: '',
	}

	handleInputChange = e => {
		this.setState({
			query: e.target.value,
		})
	}

	handleSubmit = e => {
		e.preventDefault()
		this.props.userDataRequest(this.state.query)

		this.setState({ query: '' })
	}
	render() {
		const { modalVisible, loading } = this.props
		return (
			<Container visibility={modalVisible ? 'block' : 'hidden'}>
				<Form onSubmit={e => this.handleSubmit(e)}>
					<Input
						type="text"
						placeholder="Usuário no github"
						value={this.state.query}
						onChange={e => this.handleInputChange(e)}
					/>
					<ContainerButtons>
						<SaveButton type="submit">
							{loading ? 'Carregando...' : 'Salvar'}
						</SaveButton>
						<CancelButton
							type="button"
							onClick={() => this.props.closeModal()}
						>
							Cancelar
						</CancelButton>
					</ContainerButtons>
				</Form>
			</Container>
		)
	}
}

const mapStateToProps = state => ({
	modalVisible: state.users.modalVisible,
	loading: state.users.loading,
})

const mapDispatchToProps = dispatch => bindActionCreators(UserActions, dispatch)

InsertUserModal.propTypes = {
	modalVisible: PropTypes.bool.isRequired,
	loading: PropTypes.bool.isRequired,
	closeModal: PropTypes.func.isRequired,
	userDataRequest: PropTypes.func.isRequired,
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(InsertUserModal)
