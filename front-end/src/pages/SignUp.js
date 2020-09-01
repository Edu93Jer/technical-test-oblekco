import React, { Component } from 'react';
import AUTH_SERVICE from '../services/auth';

import { Form, Input, Button, DatePicker } from 'antd';
import moment from 'moment';

const layout = {
   wrapperCol: { offset: 8, span: 8 },
};

const tailLayout = {
   wrapperCol: { offset: 14, span: 16 },
};

export default class SignUp extends Component {

   onFinish = async (values) => {
      await AUTH_SERVICE.SIGNUP(values)
      this.props.history.push("/login")
   };

   disabledDate = current => {
      return current && current > moment().endOf('day')
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
                  name="name"
                  rules={[
                     {
                        required: true,
                        message: 'Please input your full name!',
                     },
                  ]}
               >
                  <Input placeholder="Full Name" />
               </Form.Item>
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
               <Form.Item
                  name="phone"
                  rules={[
                     {
                        required: true,
                        message: 'Please input cellphone number',
                     },
                  ]}
               >
                  <Input placeholder="Mobile Number" />
               </Form.Item>
               <Form.Item
                  name="birthday"
                  rules={[
                     {
                        required: true,
                        message: 'Please input your birthday',
                     },
                  ]}
               >
                  <DatePicker style={{ width: '100%' }} disabledDate={this.disabledDate} />
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



