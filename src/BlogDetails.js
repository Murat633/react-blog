import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";

const BlogDetails = () => {
    const { id } = useParams()
    const { veri: blog, loading, error } = useFetch(`http://localhost:8000/yazilar/${id}`)

    const history = useHistory()

    const handleDelete = () => {
        fetch(`http://localhost:8000/yazilar/${id}`, {
            method: "DELETE"
        }).then(() => {
            history.push('/')
        })
    }

    return (
        <div className="blog-details">
            {loading.on && (<span>{loading.text}</span>)}
            {error && <span>{error.message}</span>}
            {blog && (
                <article>
                    <h2>{blog.ad}</h2>
                    <div>{blog.aciklama}</div>
                    <button onClick={handleDelete}>Delete</button>
                </article>
            )}
        </div>
    );
}

export default BlogDetails;