import React from 'react';
import { Table, Divider, Tag } from 'antd';
// import data from './clients'
import {connect} from 'react-redux'


const mapStateToProps =(state:{users:object[]}) =>{

  return{
    users: state.users
  }
}

interface ClientListProps {
  users: object[]
}

const columns = [
  {
    title:'Name',
    dataIndex:'name',
    key:'name'
  },
  {
    title: 'Registration date',
    dataIndex: 'date',
    key:'date'
  }
]



class ConnectedClientList extends React.Component<ClientListProps, {} >{

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
      <Table columns = {columns} dataSource={this.getDataForTable(this.props.users)}/>
    )
  }
}

const ClientList = connect(mapStateToProps)(ConnectedClientList)
export default ClientList;