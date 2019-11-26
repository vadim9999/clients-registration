import React from 'react'
import { connect } from 'react-redux'
import { addUser } from '../../actions/index'

const mapDispatchToProps = (dispatch: any) => {
  return {
    addUser: (user: object) => dispatch(addUser(user))
  }
}

const mapStateToProps = (state: { users: object[] }) => {
  return {
    users: state.users
  }
}

interface RegistrationUserProps {
  addUser: any,
  users: object[]
}

class ConnectedRegistrationUser extends React.Component<RegistrationUserProps, {}>{

  onClick = () => {
    console.log("click");
    const { users } = this.props;
    console.log("length", users.length);
    
    this.props.addUser({ id: users.length + 1, name: "george", time: "44" })
  }

  render() {
    return (
      
      <button onClick={this.onClick}>
        registrate
      </button>
    )
  }
}

const RegistrationUser = connect(mapStateToProps, mapDispatchToProps)(ConnectedRegistrationUser)
export default RegistrationUser