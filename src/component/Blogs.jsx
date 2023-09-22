import {useEffect, useState} from "react";


function Blogs() {
    const [blogs, setBlogs] = useState(null);

    useEffect(() => {
        fetch("http://localhost:8000/blogs")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setBlogs(data)
            })
    }, []);

    return (
        <>
            <h1>Blogs</h1>
            {blogs?.map((blog) => (
                <>
                    <h2>{blog.title}</h2>
                    <p>{blog.body}</p>
                </>
            ))}
        </>
    )
}

export default Blogs




