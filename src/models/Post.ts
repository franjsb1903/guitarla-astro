import { CommonImage } from './CommonImage'

export interface Post {
  title: string
  content: string
  url: string
  createdAt: Date
  updatedAt: Date
  publishedAt: Date
  image: CommonImage
}

export interface PostResponse {
  data: Array<{
    id: number
    attributes: Post
  }>
}
