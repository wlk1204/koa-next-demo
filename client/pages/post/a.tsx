import React from 'react'

class HelloUA extends React.Component<any, any> {
  static async getInitialProps({ req }) {
    console.log(111)
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
    return { userAgent }
  }

  render() {
    return <div>Hello World {this.props.userAgent}</div>
  }
}

export default HelloUA