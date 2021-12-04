import { Typography } from "antd";
import Link from "next/link";

import Head from "next/head";
import styles from "../styles/Home.module.css";

const { Title } = Typography;

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Glowing Potato</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Title>👋 Hey, there!</Title>
        <Title level={2}>
          <Link href="/login">Login</Link> to continue
        </Title>
      </main>
    </div>
  );
}
