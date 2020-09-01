import React, { Component } from 'react';
import AUTH_SERVICE from '../services/auth';

import { Form, Input, Button } from 'antd';

const layout = {
 wrapperCol: { offset: 8, span: 8 },
};

const tailLayout = {
 wrapperCol: { offset: 14, span: 16 },
};

export default class LogIn extends Component {

 onFinish = async (values) => {
  const { data } = await AUTH_SERVICE.LOGIN(values)
  const { token } = data
  localStorage.setItem("token", token)
  this.props.history.push("/profile")
 };

 render() {
  return (
   <div >
    <Form
     {...layout}
     name="basic"
     onFinish={this.onFinish}
    >

     <Form.Item
      name="email"
      rules={[
       {
        type: 'email',
        message: 'The input is not a valid e-mail',
       },
       {
        required: true,
        message: 'Please input your e-mail!',
       },
      ]}
     >
      <Input placeholder="E-mail" />
     </Form.Item>
     <Form.Item
      name="password"
      rules={[
       {
        required: true,
        message: 'Please input your password!',
       },
      ]}
     >
      <Input.Password placeholder="Password" />
     </Form.Item>

     <Form.Item {...tailLayout}>
      <Button type="primary" htmlType="submit">
       Submit
                  </Button>
     </Form.Item>
    </Form>
   </div>
  )
 }
}