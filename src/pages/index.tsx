import Head from 'next/head';
import { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className="container">
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>Blog</main>
    </div>
  );
};

export default Home;
