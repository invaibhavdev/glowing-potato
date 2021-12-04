import { Form, Input, Space, Button } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { useFetchPost } from "../hooks/useFetchPost";
import { useEffect } from "react";

const LOGIN_URL = "/api/login";
const Login = () => {
  const { send, loading, apiData } = useFetchPost(LOGIN_URL, {});
  const onFinish = (values) => {
    send(values);
  };

  useEffect(() => {
    if (apiData.success) {
    }
  }, [apiData]);

  return (
    <Form name="login" className="login-form" onFinish={onFinish}>
      <Form.Item
        name="username"
        rules={[{ required: true, message: "Please enter your Username!" }]}
      >
        <Input placeholder="Enter username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "Please enter your Password!" }]}
      >
        <Input.Password
          placeholder="Enter password"
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
        />
      </Form.Item>
      <Form.Item>
        <Button loading={loading} block type="primary" htmlType="submit">
          Sign in
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Login;
