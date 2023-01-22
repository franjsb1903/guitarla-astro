export interface Post {
  title: string
  content: string
  url: string
  createdAt: Date
  updatedAt: Date
  publishedAt: Date
  image: {
    data: {
      attributes: {
        formats: {
          medium: {
            url: string
          }
        }
        url: string
      }
    }
  }
}

export interface PostResponse {
  data: Array<{
    id: number
    attributes: Post
  }>
}
