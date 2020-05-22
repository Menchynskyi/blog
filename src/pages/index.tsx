import Head from 'next/head'

const Home: React.FC = () => {
  return (
    <div className="container">
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        Blog
      </main>
    </div>
  )
}

export default Home;
