import Head from 'next/head'
import { useMoralis } from 'react-moralis';
import Login from '../components/Login'

export default function Home() {

  const {isAuthenticated, logout} = useMoralis();

  if(!isAuthenticated) return <Login />

  return (
    <div className="">
      <Head>
        <title>Metaverse Challenge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Welcome to dApp</h1>
      <button className="btn bg-red-200"onClick={logout}>Logout</button>
     
    </div>
  )
}
