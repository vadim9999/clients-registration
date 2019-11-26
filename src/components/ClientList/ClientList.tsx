import React from 'react';
import { Table, Divider, Tag } from 'antd';
// import data from './clients'
interface ClientListProps {

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


class ClientList extends React.Component<ClientListProps, {} >{

  render() {
    return (
      <Table columns = {columns} dataSource={[]}/>
    )
  }
}

export default ClientList;