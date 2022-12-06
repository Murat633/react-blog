import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";



const Home = () => {
    const { veri, error, loading, setVeri } = useFetch("http://localhost:8000/yazilar")
    return (
        <div className="home">
            {loading.on == true ? (error || <span className="loading">{loading.text}</span>) : <BlogList blogs={veri} title="Bütün Yazılar" />}
        </div>
    );
}

export default Home;