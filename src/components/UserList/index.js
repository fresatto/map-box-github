import React from 'react'
import { Container, List, ListItem } from './styles'
import { connect } from 'react-redux'

import PropTypes from 'prop-types'

import { MdDelete } from 'react-icons/md'

const UserList = ({ users }) => (
	<Container>
		<List>
			{!!users.length ? (
				users.map(user => (
					<ListItem key={user.data.id}>
						<img src={user.data.avatar_url} alt="avatar github" />
						<h3>{user.data.login}</h3>
						<MdDelete />
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
}

export default connect(mapStateToProps)(UserList)
