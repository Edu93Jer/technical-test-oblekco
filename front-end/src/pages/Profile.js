import React, { Component } from 'react'
import { Descriptions, Button, Spin } from 'antd';
import AUTH_SERVICE from '../services/auth'
import '../index.css'

export default class Profile extends Component {
 state = {
  user: {},
  loading: false,
 }

 componentDidMount = async () => {
  if (localStorage.getItem("token") == null) {
   this.props.history.push("/login")
  }
  const token = localStorage.getItem("token")
  this.setState({ loading: true })
  const { data } = await AUTH_SERVICE.PROFILE(token)
  const { user } = data
  this.setState({ user, loading: false })
 }

 logOut = () => {
  localStorage.removeItem("token")
  this.props.history.push('/login')
 }

 render() {
  const { user } = this.state
  return (
   <>
    {this.state.loading && <div className="spiner" > <Spin tip="Loading... Please wait 30 seconds before you try again" size="large" /> </div>}
    {!this.state.loading &&
     <div className="profile_container">
      <Descriptions title="User Info" bordered>
       <Descriptions.Item label="Full Name"> {user.name} </Descriptions.Item>
       <Descriptions.Item label="Mobile Number">{user.phone}</Descriptions.Item>
       <Descriptions.Item label="Birthday">{user.birthday}</Descriptions.Item>
       <Descriptions.Item label="E-mail">{user.email}</Descriptions.Item>
      </Descriptions>
      <br />
      <Button type="primary" danger onClick={this.logOut}>
       Log Out
      </Button>
     </div>
    }
   </>
  )
 }
}
