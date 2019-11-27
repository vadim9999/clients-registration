import React from 'react';
import { Table, Divider, Tag, Row, Col } from 'antd';
// import data from './clients'
import {connect} from 'react-redux'


const mapStateToProps =(state:{users:object[]}) =>{

  return{
    users: state.users
  }
}

interface ClientListProps {
  users: object[];
  getUsers: any
}

const columns = [
  {
    title:'First Name',
    dataIndex:'firstName',
    key:'firstName'
  },
  {
    title: 'Last Name',
    dataIndex: 'lastName',
    key:'lastName'
  },
  {
    title: 'Registration date',
    dataIndex: 'date',
    key:'date'
  }
]



class ConnectedClientList extends React.Component<ClientListProps, {} >{
  
  componentDidMount(){
    console.log("component did mount");
    // this.props.getUsers()
  }
  getDataForTable = (users:object[]) =>{
    

    return users.map((user, index)=>{
        return {
          ...user,
          key:index
        }
    })
  }

  render() {
    
    
    return (
      <div style={{marginTop:'25px'}}>
        <Row type="flex" justify="center" >
          <Col span={12}>
            <Table columns = {columns} dataSource={this.getDataForTable(this.props.users)}/>
          </Col>
        </Row>
          
      </div>
      
    )
  }
}

const ClientList = connect(mapStateToProps)(ConnectedClientList)
export default ClientList;