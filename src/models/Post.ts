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
