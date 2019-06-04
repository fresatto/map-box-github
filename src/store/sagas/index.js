import { all, takeLatest } from 'redux-saga/effects'
// Types
import { Types as UserTypes } from '../ducks/users'
import { userDataRequest } from './users'
export default function* rootSaga() {
	all([yield takeLatest(UserTypes.USER_DATA_REQUEST, userDataRequest)])
}
