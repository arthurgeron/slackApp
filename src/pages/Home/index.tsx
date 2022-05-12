import Head from 'next/head'
import { UserList } from '@components';


export default function Home(){
  return (<>
    <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <UserList />
    </>);
}