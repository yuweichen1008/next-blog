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
            <div className="container">
              {children}
            </div>
        </main>
    
        <div className="py-8 bg-gray-100 footer-1 sm:py-12">
            <div className="container px-4 mx-auto">
              Footer
            </div>
        </div>
      </div>
    );
}

export default Layout;
