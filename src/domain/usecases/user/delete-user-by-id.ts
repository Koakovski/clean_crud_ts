export interface IDeleteUserById {
  delete: (id: string) => Promise<void>
}
