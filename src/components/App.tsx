import React from 'react';
import {Provider} from 'react-redux'
import store from '../store/index'
// import '../styles/index.css';
import ClientList from './ClientList/ClientList'

class App extends React.PureComponent {
	render() {
		return (
			<div>
        <Provider store={store}>
          <ClientList />
        </Provider>
			  
			</div>
		);
	}
}

export default App;