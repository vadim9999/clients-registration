import React from 'react'
import { BrowserRouter, Switch, Route, withRouter } from 'react-router-dom'

import RegistrationUser from './components/RegistrationUser/RegistrationUser'
import { Layout } from 'antd';
import { Provider } from 'react-redux'
import store from './store/index'
// import '../styles/index.css';
import ClientList from './components/ClientList/ClientList'
const { Header, Footer, Sider, Content } = Layout;

import ContentPage from './components/ContentPage/ContentPage'

const ContentPageWithRouter = withRouter(ContentPage)

class Router extends React.Component<{}, {}>{

  render() {
    return (
      <BrowserRouter>

        <Provider store={store}>
          
          <ContentPageWithRouter />
        </Provider>
      </BrowserRouter>
    )
  }
}


export default Router