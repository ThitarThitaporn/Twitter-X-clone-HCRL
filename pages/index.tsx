import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Sidebar from "../components/Sidebar"
import Feed from "../components/Feed"
import Comment from "../components/Comment"
import Widgets from "../components/Widgets"

// const inter = Inter({ subsets: ['latin'] })
export default function Home() {
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
