import { useEffect, useState } from "react";
import { Image, Row, Col, Typography, Space } from "antd";
import styles from "../styles/Home.module.css";

const { Title } = Typography;
const Dashboard = () => {
  const [list, setList] = useState(null);
  useEffect(() => {
    fetch("https://picsum.photos/v2/list")
      .then((res) => res.json())
      .then((list) => {
        setList(list);
      });
  });
  const renderList = (list) => {
    return list.map((item) => (
      <Col key={item.id} span={6}>
        <Image
          alt={`Image by ${item.author}`}
          width={"100%"}
          src={item.download_url}
        />
      </Col>
    ));
  };
  return (
    <div className={styles.container}>
      <Space direction="vertical">
        <Title>Welcome back!</Title>
        <Row>{list ? renderList(list) : null}</Row>
      </Space>
    </div>
  );
};
export default Dashboard;
