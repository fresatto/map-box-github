import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import Reactotron from '../config/ReactotronConfig'

import reducers from './ducks'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
	reducers,
	compose(
		applyMiddleware(sagaMiddleware),
		Reactotron.createEnhancer()
	)
)
sagaMiddleware.run(rootSaga)

export default store
