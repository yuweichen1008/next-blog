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
        <nav className="flex justify-between ">
            <p>My App</p>
            <div className="flex">
                <Link href='/'><a>家目錄</a></Link> |
                <Link href='/stock'><a>股票分析</a></Link> |
                <Link href='/crypto'><a>虛擬貨幣</a></Link>
                <Link href='/login'><a>Login</a></Link>
                {/* <button onClick={handleLogout}>Logout</button> */}
            </div>
        </nav>
    );
}

export default Navbar;