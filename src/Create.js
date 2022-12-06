import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [ad, setAd] = useState('')
    const [aciklama, setAciklama] = useState('');
    const [yazar, setYazar] = useState('luffy');

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        setError('')

        const yazi = { ad, aciklama, yazar }

        fetch('http://localhost:8000/yazilar', {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(yazi)
        }).then(() => {
            console.log("yazı eklendi")
            setLoading(false)
            history.push('/')
        }).catch(() => {
            setError('Yükleme İşlemi Başarısız')
            setLoading(false)
        })

    }


    return (
        <div className="create">
            <h2 style={{ color: '#ff793f' }}>Yeni Yazı Ekle</h2>

            <form onSubmit={handleSubmit}>
                <label>Yazı Başlık:</label>
                <input type='text' required value={ad} onChange={(e) => { setAd(e.target.value) }} />
                <label>Yazı Açıklama:</label>
                <textarea required value={aciklama} onChange={(e) => { setAciklama(e.target.value) }}></textarea>
                <label>Yazar:</label>
                <select value={yazar} onChange={(e) => { setYazar(e.target.value) }}>
                    <option value='luffy'>Luffy</option>
                    <option value='zoro'>Zoro</option>
                    <option value='sanji'>Sanji</option>
                </select>
                {!loading && <button>Ekle</button>}
                {loading && <button>Yükleiyor...</button>}
                <div>{error}</div>
            </form>
        </div>
    );
}

export default Create;