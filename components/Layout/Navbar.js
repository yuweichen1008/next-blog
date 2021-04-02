import Link from "next/link"

const Navbar = () => {
    return (
        <nav className="flex justify-between ">
            <p>My App</p>
            <div className="flex">
                <Link href='/'><a>家目錄</a></Link> |
                <Link href='/about'><a>關於我</a></Link> |
                <Link href='/contact'><a>與我聯絡</a></Link>
                <Link href='/logout'>Logout</Link>
            </div>
        </nav>
    );
}

export default Navbar;