import Layout from '../components/Layout'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch';

function Index(props) {
  return (
    <Layout>
      <h1>Batman Show</h1>
      <ul>
      {props.shows.map(show => (
        <li key={show.key}>
          <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
      </ul>
    </Layout>
  )
}

Index.getInitialProps = async function (){
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const data = await res.json();
  return {
    shows: data.map(entry => entry.show)
  }
}

export default Index;