import { useEffect } from "react";
import { Image, Space, Typography } from "antd";
import { useRouter } from "next/router";
import { useFetchPost } from "../hooks/useFetchPost";
import styles from "../styles/Home.module.css";

import LoginForm from "../components/LoginForm";

const LOGIN_URL = "/api/login";
const DASHBOARD_URL = "/dashboard";

const { Title } = Typography;
const Login = () => {
  const { send, loading, apiData } = useFetchPost(LOGIN_URL, {});
  const router = useRouter();
  const handleFormSubmit = (values) => {
    send(values);
  };
  useEffect(() => {
    if (apiData && apiData.success) {
      router.push(DASHBOARD_URL);
    }
  }, [apiData, router]);

  return (
    <Space className={styles.main}>
      <Title>Login to continue</Title>
      <Image alt="" preview={false} height={200} src="/bg1.svg" />
      <LoginForm loading={loading} handleSubmit={handleFormSubmit} />
    </Space>
  );
};

export default Login;
