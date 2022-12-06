import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>Yanlış Sayfa</h2>
            <p>Sayfa ulunamadı</p>
            <Link to='/'>Anasayfa</Link>
        </div>
    );
}

export default NotFound;