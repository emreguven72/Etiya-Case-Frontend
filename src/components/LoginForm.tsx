import React from 'react';
import { Button, Form, Input } from 'antd';
import { useAuth } from '../providers/AuthProvider';

const LoginFormComponent = () => {
    const { login }: any = useAuth();

    const OnFinish = (values: any) => {
        login(values.username, values.password);
    };
    
    const OnFinishFailed = (errorInfo: any) => {
      console.log('Failed:', errorInfo);
    };
    
    type FieldType = {
      username?: string;
      password?: string;
    };
    
    const LoginForm: React.FC = () => (
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={OnFinish}
        onFinishFailed={OnFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>
    
        <Form.Item<FieldType>
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>
    
        <Form.Item wrapperCol={{ offset: 12, span: 16 }}>
          <Button type="primary" htmlType="submit" className='bg-blue-600 w-[120px] h-[40px]'>
            Login
          </Button>
        </Form.Item>
      </Form>
    );

    return (
        <LoginForm />
    );

}


export default LoginFormComponent;