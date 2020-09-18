import React from "react"
import { CommentModel } from "../../models/post.model"
import styled from "styled-components"
import { CardBodyText } from "../../styles/shared"

interface Props {
  comment: CommentModel
}

const CommentWrapper = styled.div`
display: flex;
align-items: center;
`

const LeftSection = styled.div`
  flex-grow: 3;
`

const RightSection = styled.div`
  flex-grow: 1;
  text-align: right;
`

// Render a single comment
const Comment: React.FC<Props> = ({comment}) => {
  const {content, author, downvotes, upvotes} = comment;

  return (
    <CommentWrapper>
      <LeftSection>
        <CardBodyText>
          {author}
        </CardBodyText>
        <CardBodyText style={{
          color: 'black',
          paddingTop: 10
        }}>
          {content}
        </CardBodyText>
      </LeftSection>
      <RightSection>
        <CardBodyText>
          +{upvotes}
          <br/>
          -{downvotes}
        </CardBodyText>
      </RightSection>
    </CommentWrapper>
  )
}

export default Comment;
