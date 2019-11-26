import React from 'react'

class RegistrationUser extends React.Component<{},{}>{

  onClick = () =>{
    console.log("click");
    
  }

  render(){
    return(
      <button onClick={this.onClick}>
        registrate
      </button>
    )
  }
}

export default RegistrationUser