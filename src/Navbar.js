import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav className="navbar">
                <h1>Blog</h1>
                <div>
                    <Link to="/">Anasayfa</Link>
                    <Link to="/create" style={{
                        color: 'white',
                        backgroundColor: '#ff793f',
                        borderRadius: '8px'
                    }}>Yeni Yazı</Link>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;