import React from 'react';
import Link from "next/link"

const Navbar = () => {

    // const [, { mutate }] = useUser();
    // const handleLogout = async () => {
    //     await fetch('/api/auth', {
    //       method: 'DELETE',
    //     });
    //     // set the user state to null
    //     mutate(null);
    // };
    
    return (
        <nav className="flex items-center justify-between p-6 bg-blue-400">
            <div className="flex items-center flex-shrink-0 mr-6 text-white">
                <Link href='/' className="text-xl font-bold">Coreix</Link>
            </div>
            <div className="flex-grow block w-full ">
                <Link href='/stock'><a className="ml-4 text-gray-800 hover:text-white">股票分析</a></Link>
                <Link href='/crypto'><a className="ml-4 text-gray-800 hover:text-white"> 虛擬貨幣</a></Link>
                <Link href='/hacker'><a className="ml-4 text-gray-800 hover:text-white">HackerNews</a></Link>
                <Link href='/view'><a className="ml-4 text-gray-800 hover:text-white">TW stock</a></Link>
                {/* <button onClick={handleLogout}>Logout</button> */}
            </div>
            <div>
                <Link href='/login'><a className="ml-4 text-gray-800 hover:text-white">Login</a></Link>
            </div>
        </nav>
    );
}

export default Navbar;