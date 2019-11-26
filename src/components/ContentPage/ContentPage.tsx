import React from 'react'
import RegistrationUser from '../RegistrationUser/RegistrationUser'
import ClientList from '../ClientList/ClientList'
import { BrowserRouter, Switch, Route, withRouter } from 'react-router-dom'
import { Layout, Button } from 'antd';
import { connect } from 'react-redux'
import { getUsers } from '../../actions'

const { Header, Footer, Sider, Content } = Layout;


const mapDispatchToProps = (dispatch: any) => {

  return {
    getUsers: () => dispatch(getUsers())
  }
}

interface ContentPageProps {
  getUsers: any;
  location:any,
  history: any
}
class ConnectedContentPage extends React.Component<ContentPageProps, {}>{

  componentDidMount = () => {
    this.props.getUsers()
  }


  onClick = () =>{
    
  }
  render() {
    const {history, location} = this.props;

    // if(location.pathname != undefined &&  location.pathname !== '' ){
    //   path = '/registration'
    // }
    
    return (
      <Layout style={{ height: '100vh' }}>
        <Header>

      
          
          {location.pathname === '/' ? (
              <Button onClick={()=> history.push('/registration')}>RegisterUser</Button>
          ):(
            location.pathname === '/registration' ? (
              <Button onClick={()=>history.push('/')}>List all users</Button>
            ):(<div>
               <Button onClick={()=>history.push('/registration')}>RegisterUser</Button>
              <Button onClick={()=> history.push('/')} >List all users</Button>
            </div>
           
            )
          )}
          <Button onClick={()=> history.push('/')}>About</Button>
        </Header>
        <Content>
          <Switch>
            <Route exact path='/' component={ClientList} />


            <Route path='/registration' component={RegistrationUser} />


          </Switch>
        </Content>
        <Footer>Footer</Footer>
      </Layout>


    )
  }
}

const ContentPage = connect(null, mapDispatchToProps)(ConnectedContentPage)
export default ContentPage
