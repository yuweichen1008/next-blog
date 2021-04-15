import Link from 'next/link'
import Head from 'next/head'
import Navbar from './Navbar'

const Layout = ({ children, title = 'This is the default title' }) => {
    return (
        <div className="flex flex-col h-screen">
        <Head>
          <title>{ title }</title>
          <meta charSet='utf-8' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        </Head>
        <header>
          <Navbar />
        </header>
        <main>
            <div className="container">{children}</div>
        </main>
    
        <div className="bg-gray-300">
          {'我是底部'}
        </div>
      </div>
    );
}

export default Layout;
