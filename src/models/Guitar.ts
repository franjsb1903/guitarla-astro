export interface Guitar {
  name: string
  createdAt: Date
  updatedAt: Date
  publishedAt: Date
  description: string
  price: number
  url: string
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
