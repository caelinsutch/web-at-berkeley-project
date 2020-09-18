import React from "react"
import styled from "styled-components";
import PostCard from "./post-card"
import { PostModel } from "../../models/post.model"
import { graphql, Link, useStaticQuery } from "gatsby"


const PostCardWrapper = styled.div`
  padding: 1rem 0;
`

const LinkWrapper = styled(Link)`
  text-decoration: none;
  :hover {
    text-decoration: none;
    color: transparent;
    background-color: transparent;
  }
`
// Container for all the users posts
const PostContainer: React.FC = () => {

  const query = useStaticQuery(graphql`
    query {
      allDataJson {
        nodes {
          posts {
            author
            content
            downvotes
            published
            title
            upvotes
            id
          }
        }
      }
    }
  `)

  const posts: PostModel[] = query.allDataJson.nodes[0].posts;

  return (
    <>
    {
        posts.map(a =>
          <LinkWrapper to={'post-' + a.id.toString()} key={a.id}>
            <PostCardWrapper key={a.id}>
              <PostCard post={a} key={a.id}/>
            </PostCardWrapper>
          </LinkWrapper>
        )
      }
    </>
  )
}

export default PostContainer;
