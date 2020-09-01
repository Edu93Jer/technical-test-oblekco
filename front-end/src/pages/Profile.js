import React, { Component } from 'react'
import { Descriptions, Spin } from 'antd';
import AUTH_SERVICE from '../services/auth'
import '../index.css'

export default class Profile extends Component {
 state = {
  user: {},
 }

 componentDidMount = async () => {
  if (localStorage.getItem("token") == null) {
   this.props.history.push("/login")
  }
  const token = localStorage.getItem("token")
  const { data } = await AUTH_SERVICE.PROFILE(token)
  const { user } = data
  this.setState({ user })
 }

 render() {
  const { user } = this.state
  return (
   <div className="profile_container">
    <Descriptions title="User Info" bordered>
     <Descriptions.Item label="Full Name"> {user.name} </Descriptions.Item>
     <Descriptions.Item label="Mobile Number">{user.phone}</Descriptions.Item>
     <Descriptions.Item label="Birthday">{user.birthday}</Descriptions.Item>
     <Descriptions.Item label="E-mail">{user.email}</Descriptions.Item>
    </Descriptions>
   </div>
  )
 }
}
