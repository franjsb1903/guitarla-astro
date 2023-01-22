import { CommonImage } from './CommonImage'

export interface Course {
  title: string
  content: string
  createdAt: Date
  updatedAt: Date
  publishedAt: Date
  image: CommonImage
}

export interface CourseResponse {
  data: {
    id: number
    attributes: Course
  }
}
