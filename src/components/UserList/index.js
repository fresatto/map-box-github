import React from 'react'
import { Container, List, ListItem } from './styles'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import PropTypes from 'prop-types'
import { Creators as UserActions } from '../../store/ducks/users'
import { MdDelete } from 'react-icons/md'

const UserList = ({ users, removeUser }) => (
	<Container>
		<List>
			{!!users.length ? (
				users.map(user => (
					<ListItem key={user.data.id}>
						<img src={user.data.avatar_url} alt="avatar github" />
						<h3>{user.data.login}</h3>
						<button onClick={() => removeUser(user)}>
							<MdDelete />
						</button>
					</ListItem>
				))
			) : (
				<p>Nenhum usuário cadastrado.</p>
			)}
		</List>
	</Container>
)

const mapStateToProps = state => ({
	users: state.users.all,
})

const mapDispatchToProps = dispatch => bindActionCreators(UserActions, dispatch)

UserList.propTypes = {
	users: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number,
			login: PropTypes.string,
			position: PropTypes.shape({
				lat: PropTypes.number,
				lng: PropTypes.number,
			}),
			avatar_url: PropTypes.string,
		})
	).isRequired,
	removeUser: PropTypes.func.isRequired,
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(UserList)
