import { HttpReponse } from '../protocols'

// 2.X.X
export const ok = (data: any): HttpReponse => {
  return {
    statusCode: 200,
    body: data
  }
}

// 4.X.X
export const badRequest = (error: Error): HttpReponse => {
  return {
    statusCode: 404,
    body: error
  }
}

// 5.X.X
export const serverError = (error: any): HttpReponse => {
  return {
    statusCode: 500,
    body: error
  }
}

