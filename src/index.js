import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import createHashHistory from 'history/createHashHistory';
import './style/index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

const HASH_HISTORY = createHashHistory({ basename: process.env.PUBLIC_URL });

ReactDOM.render(
	<Router history={HASH_HISTORY}>
		<App />
	</Router>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
