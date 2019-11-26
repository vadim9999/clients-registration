import React from 'react';
import { Provider } from 'react-redux'
import store from '../store/index'
// import '../styles/index.css';
import ClientList from './ClientList/ClientList'
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

import 'antd/dist/antd.css';

class App extends React.PureComponent {
  render() {
    return (
      <div>
        <Provider store={store}>
          <Layout style={{height:'100vh'}}>
            <Header>Header</Header>
            <Content><ClientList /></Content>
            <Footer>Footer</Footer>
          </Layout>
          
        </Provider>

      </div>
    );
  }
}

export default App;