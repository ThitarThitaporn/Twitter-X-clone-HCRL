import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Sidebar from "../components/Sidebar"
import Feed from "../components/Feed"
import Comment from "../components/Comment"
import Widgets from "../components/Widgets"
import { getProviders, getSession, useSession } from "next-auth/react";
import Login from "../components/Login"

// const inter = Inter({ subsets: ['latin'] })
export default function Home({ trendingResults, followResults, providers }) {
  const { data: session } = useSession();
  // const [isOpen, setIsOpen] = useRecoilState(modalState);

  if (!session) return <Login providers={providers} />;

  return (
    <div className="">
      <Head>
        <title>X-Twitter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-black min-h-screen flex max-w-[1500px] mx-auto">
        <Sidebar/>
        
        <Feed/>
        
        <Widgets/>

        {/* Modal */}
      </main>

    </div>
  );
}

export async function getServerSideProps(context: any) {
  const trendingResults = await fetch("https://api.twitter.com/1.1/trends/available.json").then(
    (res) => res.json()
    
  );
  const followResults = await fetch("https://api.twitter.com/2/users/{}/following").then(
    (res) => res.json()
  );
  const providers = await getProviders();
  // const session = await getSession(context);

  return {
    props: {
      trendingResults,
      // followResults,
      providers,
      // session,
    },
  };
}