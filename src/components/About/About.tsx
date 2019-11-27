import React from "react"

class About extends React.Component<{}, {}>{

  render() {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ marginTop: '10%' }}>
          <h3 style={{ textAlign: 'center' }}>About author</h3>
          <p>This project created by Vadim Putrov. <br />ReactJS Developer</p>
        </div>
      </div>
    )
  }
}

export default About