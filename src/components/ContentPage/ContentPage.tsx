import React from 'react'
import RegistrationUser from '../RegistrationUser/RegistrationUser'
import ClientList from '../ClientList/ClientList'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Layout } from 'antd';
import {connect} from 'react-redux'
import {getUsers} from '../../actions'

const { Header, Footer, Sider, Content } = Layout;


const mapDispatchToProps = (dispatch: any) =>{

  return {
    getUsers: () =>dispatch(getUsers())
  }
}

interface ContentPageProps{
  getUsers: any
}
class ConnectedContentPage extends React.Component<ContentPageProps,{}>{

  componentDidMount = () =>{
    this.props.getUsers()
  }

  render(){
    return (
     
              <Switch>
                <Route exact path='/' component={ClientList} />
                  
              
                <Route path='/registration' component={RegistrationUser}/>
                  
                  
              </Switch>
          
    )
  }
}

const ContentPage = connect(null, mapDispatchToProps)(ConnectedContentPage)
export default ContentPage
