import React, { useState, useEffect } from 'react'
import { Container, Postform } from "../components"
import service from '../appwrite/config'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'

function EditPost() {
    const [post, setPosts] = useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (slug) {
            service.getPost(slug).then((post) => {
                if (post) {
                    setPosts(post)
                }
            })
        } else {
            navigate('/')
        }
    }, [slug, navigate])
  return post ? (
    <div className='py-8'>
        <Container>
            <Postform post={post} />
        </Container>
    </div>
  ) : null
}

export default EditPost;
