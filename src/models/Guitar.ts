import { CommonImage } from './CommonImage'

export interface Guitar {
  name: string
  createdAt: Date
  updatedAt: Date
  publishedAt: Date
  description: string
  price: number
  url: string
  image: CommonImage
}

export interface GuitarResponse {
  data: Array<{
    id: number
    attributes: Guitar
  }>
}
