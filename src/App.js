import React from 'react'
import './App.css'
import { Provider } from 'react-redux'
import store from './store'
import Map from './components/Map'
import UserList from './components/UserList'
import InsertUserModal from './components/InsertUserModal'
import Alert from './components/Alert'

function App() {
	return (
		<Provider store={store}>
			<Map />
			<UserList />
			<InsertUserModal />
			<Alert />
		</Provider>
	)
}

export default App
