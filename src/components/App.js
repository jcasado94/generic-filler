import React, { Component } from 'react';
import '../styles/App.css';
import '../styles/reactTags.css';
import UserHandler from '../handlers/UserHandler';
import Prod from './Prod'

class App extends Component {

	constructor() {
		super();
		setUsername();
	}
	
	render() {
		return (
			<div className="App">
				<div className="App-main">
					<Prod/>
				</div>
			</div>
		);
	}
}

const setUsername = () => {
	if (!window.cookieStorage.getCookie('username')) {
		UserHandler.createUser(new Date().getTime()).then(
			username => window.cookieStorage.setCookie('username', username)
		)
	}
}

export default App;
