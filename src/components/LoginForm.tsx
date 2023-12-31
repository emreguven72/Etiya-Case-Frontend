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
          label="Kullanıcı adı"
          name="username"
          rules={[{ required: true, message: 'Kullanıcı adınızı giriniz!' }]}
        >
          <Input />
        </Form.Item>
    
        <Form.Item<FieldType>
          label="Şifre"
          name="password"
          rules={[{ required: true, message: 'Şifrenizi giriniz!' }]}
        >
          <Input.Password />
        </Form.Item>
    
        <Form.Item wrapperCol={{ offset: 12, span: 16 }}>
          <Button type="primary" htmlType="submit" className='bg-blue-600 w-[120px] h-[40px]'>
            Giriş Yap
          </Button>
        </Form.Item>
      </Form>
    );

    return (
        <LoginForm />
    );

}


export default LoginFormComponent;