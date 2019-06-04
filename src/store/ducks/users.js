const INITIAL_STATE = {
	all: [],
	modalVisible: false,
	userToAdd: {},
	loading: false,
	requestError: '',
}

export const Types = {
	SET_POSITION: '@users/SET_POSITION',
	USER_DATA_REQUEST: '@users/USER_DATA_REQUEST',
	USER_DATA_SUCCESS: '@users/USER_DATA_SUCCESS',
	USER_DATA_FAILURE: '@users/USER_DATA_FAILURE',
}

export default function users(state = INITIAL_STATE, action) {
	switch (action.type) {
		case Types.SET_POSITION:
			return {
				...state,
				modalVisible: true,
				userToAdd: { position: action.payload.position },
			}
		case Types.USER_DATA_REQUEST:
			return { ...state, loading: true }

		case Types.USER_DATA_SUCCESS:
			const newUser = { ...state.userToAdd }
			newUser.data = action.payload.data

			return {
				...state,
				all: [...state.all, newUser],
				modalVisible: false,
				loading: false,
			}

		case Types.USER_DATA_FAILURE:
			return {
				...state,
				requestError: action.payload.error,
				loading: false,
				modalVisible: false,
			}
		default:
			return state
	}
}

export const Creators = {
	userDataRequest: user => ({
		type: Types.USER_DATA_REQUEST,
		payload: {
			user,
		},
	}),
	userDataSuccess: data => ({
		type: Types.USER_DATA_SUCCESS,
		payload: {
			data,
		},
	}),
	setPosition: position => ({
		type: Types.SET_POSITION,
		payload: {
			position,
		},
	}),
}
