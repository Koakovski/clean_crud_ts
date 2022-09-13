export class FieldInUseError extends Error {
  constructor (fieldName: string) {
    super(`Field '${fieldName}' is already in use`)
    this.name = 'FieldInUseEror'
  }
}
