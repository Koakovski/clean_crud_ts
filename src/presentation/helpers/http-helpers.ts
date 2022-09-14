import { HttpResponse } from '../protocols'

// 2.X.X
export const ok = (data: any): HttpResponse => {
  return {
    statusCode: 200,
    body: data
  }
}

export const noContent = (): HttpResponse => {
  return {
    statusCode: 204,
    body: null
  }
}

// 4.X.X
export const badRequest = (error: Error): HttpResponse => {
  return {
    statusCode: 400,
    body: error
  }
}

export const notFound = (error: Error): HttpResponse => {
  return {
    statusCode: 404,
    body: error
  }
}

// 5.X.X
export const serverError = (error: any): HttpResponse => {
  return {
    statusCode: 500,
    body: error
  }
}

