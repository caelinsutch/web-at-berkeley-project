import React from "react"
import { graphql } from "gatsby"
import { PostModel } from "../models/post.model"
import Root from "../components/root"
import { CardBodyText, CardTitle, PostCardWrapper } from "../styles/shared"
import { calculateDayDifference } from "../utils/utils"
import styled from "styled-components"
import Comment from "../components/post/comment"

interface Props {
  pageContext: {
    id: number
  },
  data: {
    allDataJson: {
      nodes: [{ posts: PostModel[] }]
    }
  }
}

const TemplateWrapper = styled.div`
  background-color: white;
  border-radius: 10px;
`

const MainSection = styled.div`
  padding: 2rem;
`
const CommentSection = styled.div`
  padding: 2rem;
`

const SectionDivider = styled.hr`
  height: 2px;
  background-color: #B6B8BA;
`

const CommentWrapper = styled.div`
  padding-top: 1rem;
`

const PostTemplate: React.FC<Props> = ({ data, pageContext: {id} }) => {
  const post = data.allDataJson.nodes[0].posts.filter(a => a.id == id)[0];

  console.log(data);

  console.log(post)
  const differenceInDays = calculateDayDifference(post.published)

  return (
    <Root>
      <TemplateWrapper>
        <MainSection>
          <CardBodyText>
            Posted by {post.author} {differenceInDays} { differenceInDays === 1 ? 'day ago' : 'days ago' }
          </CardBodyText>
          <CardTitle
            style={{
              paddingTop: 15
            }}>
            {post.title}
          </CardTitle>
          <CardBodyText
            style={{
              paddingTop: 5
            }}>
            upvotes: {post.upvotes}
          </CardBodyText>
          <CardBodyText>
            downvotes: {post.upvotes}
          </CardBodyText>
          <CardBodyText>
            total: {post.upvotes + post.downvotes}
          </CardBodyText>
          <CardBodyText style={{
            color: 'black',
            paddingTop: 10
          }}>
            {post.content}
          </CardBodyText>
        </MainSection>
        <SectionDivider/>
        <CommentSection>
          {
            post.comments ?
              post.comments.map(comment =>
                <CommentWrapper key={comment.authors}>
                  <Comment key={comment.author} comment={comment}/>
                </CommentWrapper>)
               : <div/>
          }
        </CommentSection>
      </TemplateWrapper>
    </Root>
  )
}

export const query = graphql`
  query {
    allDataJson {
      nodes {
        posts {
          id
          author
          content
          downvotes
          upvotes
          published
          title
          comments {
            author
            content
            downvotes
            upvotes
          }
        }
      }
    }
  }
`

export default PostTemplate;
