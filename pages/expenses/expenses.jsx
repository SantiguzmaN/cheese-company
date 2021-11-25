import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Sidebar from '../../components/sidebar/sidebar';

const Expenses = () => {
  return (
    <>
      <Sidebar />
      <Head>
        <title>Expenses</title>
      </Head>
      <h1>Expenses</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
      <h2>
        <a>oe</a>
      </h2>
    </>
  )
};


export default Expenses;
