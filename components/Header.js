import Link from 'next/link'

const linkStyle = {
    marginRight: 15
}

const Header = () => (
    <div>
        <Link href="/about">
            <a style={linkStyle}>About Page</a>
        </Link>
        <Link href="/">
            <a style={linkStyle}>Home Page</a>
        </Link>
    </div>
)

export default Header;