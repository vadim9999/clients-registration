import React from 'react'
import {connect} from 'react-redux'
import {addUser} from '../../actions/index'

const mapDispatchToProps = (dispatch:any) =>{
  return{
    addUser: (user:object) =>dispatch(addUser(user))
  }
}

interface RegistrationUserProps {
  addUser: any
}

class ConnectedRegistrationUser extends React.Component<RegistrationUserProps,{}>{

  onClick = () =>{
    console.log("click");
    this.props.addUser({})
  }

  render(){
    return(
      <button onClick={this.onClick}>
        registrate
      </button>
    )
  }
}

const RegistrationUser = connect(null, mapDispatchToProps)(ConnectedRegistrationUser)
export default RegistrationUser