import React, { Component } from 'react'
import ReactMapGL, { Marker } from 'react-map-gl'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// Styles
import { MarkerContent } from './styles'

// Actions
import { Creators as UserActions } from '../../store/ducks/users'

class Map extends Component {
	state = {
		viewport: {
			width: '100vw',
			height: '100vh',
			latitude: 37.7577,
			longitude: -122.4376,
			zoom: 14,
		},
	}

	handleMapClick = e => {
		const arrLngLat = e.lngLat

		const position = {
			lat: arrLngLat[1],
			lng: arrLngLat[0],
		}

		this.props.setPosition(position)
	}

	render() {
		const { users } = this.props
		return (
			<ReactMapGL
				{...this.state.viewport}
				mapboxApiAccessToken={this.props.token}
				onClick={e => this.handleMapClick(e)}
			>
				{users.map(user => (
					<Marker
						key={user.data.id}
						latitude={user.position.lat}
						longitude={user.position.lng}
					>
						<MarkerContent avatar_url={user.data.avatar_url} />
					</Marker>
				))}
			</ReactMapGL>
		)
	}
}

Map.defaultProps = {
	token:
		'pk.eyJ1IjoiZnJlc2F0dG8iLCJhIjoiY2pzOWJ0dTk4MWt4YTQ5dGZlNWh5YjB6YyJ9.WcFJT9u2Vy6CUtsDb7O6HQ',
}

Map.propTypes = {
	token: PropTypes.string.isRequired,
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
	setPosition: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
	users: state.users.all,
})

const mapDispatchToProps = dispatch => bindActionCreators(UserActions, dispatch)

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Map)
