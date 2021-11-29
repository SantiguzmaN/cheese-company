import React from 'react';
import Head from 'next/head';
import styles from './index.module.scss';
import Layout from '../components/layout/layout';
import Sidebar from "../components/sidebar/sidebar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Layout>
        <a> soy yo yo</a>
      </Layout>
    </>
  )
}
