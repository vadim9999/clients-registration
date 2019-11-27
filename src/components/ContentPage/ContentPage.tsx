import React from 'react'
import RegistrationUser from '../RegistrationUser/RegistrationUser'
import ClientList from '../ClientList/ClientList'
import { Switch, Route } from 'react-router-dom'
import { Layout, Button } from 'antd';
import { connect } from 'react-redux'
import { getUsers } from '../../actions'
import About from '../About/About'

const { Header, Footer, Content } = Layout;


const mapDispatchToProps = (dispatch: any) => {

  return {
    getUsers: () => dispatch(getUsers()),

  }
}

interface ContentPageProps {
  getUsers: any;
  location: any,
  history: any
}

const stylesBtn = {
  marginLeft: '15px',
}

class ConnectedContentPage extends React.Component<ContentPageProps, {}>{

  componentDidMount = () => {
    this.props.getUsers()
  }

  render() {
    const { history, location } = this.props;

    return (
      <Layout style={{ height: '100vh' }}>
        <Header style={{ display: 'flex', justifyContent: 'space-between' }}>

          {location.pathname === '/' ? (
            <div >
              <Button onClick={() => history.push('/registration')}>RegisterUser</Button>
            </div>

          ) : (
              location.pathname === '/registration' ? (
                <div>
                  <Button onClick={() => history.push('/')}>List all users</Button>
                </div>

              ) : (<div>
                <Button onClick={() => history.push('/registration')}>RegisterUser</Button>
                <Button style={stylesBtn} onClick={() => history.push('/')} >List all users</Button>
              </div>

                )
            )}
          <div>
            <Button onClick={() => history.push('/about')}>About</Button>
          </div>

        </Header>
        <Content >
          <Switch>
            <Route exact path='/' component={ClientList} />
            <Route path='/registration' component={RegistrationUser} />
            <Route path='/about' component={About} />
          </Switch>
        </Content>
        <Footer style={{ display: 'flex', justifyContent: 'center' }}><p>2019</p></Footer>
      </Layout>

    )
  }
}

const ContentPage = connect(null, mapDispatchToProps)(ConnectedContentPage)
export default ContentPage
