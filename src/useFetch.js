import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [veri, setVeri] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState({ on: true, text: "Yükleniyor.." })

    useEffect(() => {
        fetch(url)
            // Responsive
            .then(res => {
                if (!res.ok) throw Error('Veriler Çekilemedi Girmiş Olduğunuz API adresini kontrol etmeyi deneyebilirsiniz.')
                return res.json()
            })
            // Data
            .then(data => {
                setVeri(data)
                setLoading({ ...loading, on: false })
                setError(null)
            })
            //errors
            .catch(err => {
                setLoading({ ...loading, on: false })
                setError(err.message)
            })
    }, [])

    return { veri, error, loading, setVeri }
}

export default useFetch