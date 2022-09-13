import { HttpReponse, HttpRequest, IController } from '@/presentation/protocols'
import { Request, Response } from 'express'

export const adaptRoute = (controller: IController) => {
  return async (request: Request, response: Response) => {
    const httpRequest: HttpRequest = {
      body: request.body
    }

    const httpResponse: HttpReponse = await controller.handle(httpRequest)

    if (httpResponse.statusCode >= 200 && httpResponse.statusCode < 300) {
      return response.status(httpResponse.statusCode).json(httpResponse.body)
    } else {
      return response.status(httpResponse.statusCode).json({
        error: httpResponse.body.message
      })
    }
  }
}
