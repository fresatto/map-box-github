const INITIAL_STATE = {
	all: [],
	modalVisible: false,
	userToAdd: {},
	loading: false,
	error: false,
}

export const Types = {
	SET_POSITION: '@users/SET_POSITION',
	CLOSE_MODAL: '@users/CLOSE_MODAL',
	CLOSE_ERROR_MSG: '@users/CLOSE_ERROR_MSG',
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

		case Types.CLOSE_MODAL:
			return {
				...state,
				modalVisible: false,
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
				error: true,
				loading: false,
				modalVisible: false,
			}

		case Types.CLOSE_ERROR_MSG:
			return { ...state, error: false }
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
	closeModal: () => ({
		type: Types.CLOSE_MODAL,
	}),

	closeErrorMsg: () => ({
		type: Types.CLOSE_ERROR_MSG,
	}),
}
