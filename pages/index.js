import Head from 'next/head'
import requests from '../utils/Request'
import Header from '../Components/Header'
import Navbar from '../Components/Navbar'
import Results from '../Components/Results'

export default function Home({ results }) {
  return (
    <div>
      <Head>
        <title>Netflix</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <Navbar />
      <Results results={results} />
    </div>
  )
}

export async function getServerSideProps(context) {
  const genre = context.query.genre
  const req = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then((res) => res.json())
  return {
    props: {
      results: req.results,
    },
  }
}
