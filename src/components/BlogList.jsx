import React from 'react'
import { Card } from "react-bootstrap"
import BlogCard from './BlogCard'
import { useState } from 'react'
import { useEffect } from 'react'

const BlogList = () => {

    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    const styles ={
        gird: {
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gridGap: '1rem'
        }
    }

    return (
        <div style={styles.gird}>

            {blogs.map(blog => (
                <BlogCard
                    key={blog.id}
                    title={blog.title}
                    body={blog.body}
                />))}

            <BlogCard />


        </div>




    )
}

export default BlogList