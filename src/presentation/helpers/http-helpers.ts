import { HttpReponse } from '../protocols'

export const ok = (data: any): HttpReponse => {
  return {
    statusCode: 200,
    body: data
  }
}

export const serverError = (error: Error): HttpReponse => {
  return {
    statusCode: 500,
    body: error
  }
}

