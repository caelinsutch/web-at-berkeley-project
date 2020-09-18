import React from "react"
import styled from "styled-components"
import { PostModel } from "../../models/post.model"
import { CardBodyText, CardTitle, PostCardWrapper } from "../../styles/shared"
import { calculateDayDifference } from "../../utils/utils"


const LeftSection = styled.div`
flex-basis: 75%;
`
const RightSection = styled.div`
flex-basis: 25%;
text-align: right;
`

interface Props {
  post: PostModel
}

const PostCard: React.FC<Props> = ({post}) => {

  const differenceInDays = calculateDayDifference(post.published)

  return (
    <PostCardWrapper style={{
      flexDirection: 'row'
    }}>
      <LeftSection>
        <CardBodyText>
          {/*Check whether or not to use the "day" or "days" conjugation*/}
          Posted by {post.author} {differenceInDays} { differenceInDays === 1 ? 'day ago' : 'days ago' }
        </CardBodyText>
        <CardTitle style={{
          paddingTop: 15
        }}>{post.title}</CardTitle>
        {/*Render out the shortened content. If it's being shortened, add an ellipses*/}
        <CardBodyText style={{
          paddingTop: 5
        }}>{post.content.substr(0, 213)} {post.content.length > 213 ? '...' : ''} </CardBodyText>
      </LeftSection>
      <RightSection>
        <CardBodyText>
          upvotes: {post.upvotes}
        </CardBodyText>
        <CardBodyText>
          downvotes: {post.upvotes}
        </CardBodyText>
        <CardBodyText>
          total: {post.upvotes + post.downvotes}
        </CardBodyText>
      </RightSection>
    </PostCardWrapper>
  )
}

export default PostCard;
