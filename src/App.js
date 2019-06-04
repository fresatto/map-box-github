import React from 'react'
import './App.css'
import { Provider, connect } from 'react-redux'
import store from './store'
import Map from './components/Map'
import UserList from './components/UserList'
import InsertUserModal from './components/InsertUserModal'

function App() {
	return (
		<Provider store={store}>
			<Map />
			<UserList />
			<InsertUserModal />
		</Provider>
	)
}

export default App
