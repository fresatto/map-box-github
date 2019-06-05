import React, { Component } from 'react'
import { Container } from './styles'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { Creators as UsersActions } from '../../store/ducks/users'

class Alert extends Component {
	render() {
		const { error } = this.props

		if (error) {
			setTimeout(() => {
				this.props.closeErrorMsg()
			}, 5000)
		}
		return (
			<Container visible={error}>
				<span>Usuário não encontrado.</span>
			</Container>
		)
	}
}

const mapStateToProps = state => ({
	error: state.users.error,
})

const mapDispatchToProps = dispatch =>
	bindActionCreators(UsersActions, dispatch)
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Alert)
