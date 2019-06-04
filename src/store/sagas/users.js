import { call, put } from 'redux-saga/effects'

import api from '../../services/api'

import { Types as UserTypes } from '../ducks/users'

export function* userDataRequest(action) {
	try {
		const { data } = yield call(api.get, action.payload.user)

		const userData = {
			login: data.login,
			avatar_url: data.avatar_url,
			id: data.id,
		}

		yield put({
			type: UserTypes.USER_DATA_SUCCESS,
			payload: {
				data: userData,
			},
		})
	} catch (e) {
		yield put({
			type: UserTypes.USER_DATA_FAILURE,
			payload: {
				error: e.message,
			},
		})
	}
}
