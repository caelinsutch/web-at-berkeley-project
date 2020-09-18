export interface PostModel {
  id: number
  title: string,
  content: string,
  author: string,
  published: string,
  upvotes: number,
  downvotes: number,
  comments?: CommentModel[]
}

export interface CommentModel {
  content: string,
  author: string,
  downvotes: number,
  upvotes: number,
}
