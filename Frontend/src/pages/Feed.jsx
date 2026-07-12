import React, { useState,useEffect } from 'react'
import axios from "axios"

const Feed = () => {
    const [posts, setPosts] = useState([
        {
            _id: 1,
            image: "https://i.pinimg.com/1200x/e0/4c/b8/e04cb8a8ac7796b38719e02276c6e3a5.jpg",
            caption: "I AM VENGEANCE"
        }
    ])

    useEffect(()=>{
        axios.get("http://localhost:3000/posts")
        .then((res)=>{
            setPosts(res.data.posts)
        })
    },[])

    return (
        <section className='feed-action'>
            {posts.length > 0 ? (
                posts.map((post) => (
                    <div key={post._id} className='post-card'>
                        {/* Fixed the src quotes bug */}
                        <img src={post.image} alt={post.caption} />
                        <p>{post.caption}</p>
                    </div>
                ))
            ) : (
                <h1 className="no-posts">No Posts Available</h1>
            )}
        </section>
    )
}

export default Feed