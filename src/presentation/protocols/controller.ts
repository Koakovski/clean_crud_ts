import { HttpReponse, HttpRequest } from './http'

export interface IController {
  handle: (httpRequest: HttpRequest) => Promise<HttpReponse>
}
