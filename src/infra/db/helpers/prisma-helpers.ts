export const PrismaHelper = {
  map (model: any): any {
    const { id, ...modelWithoutId } = model
    const stringId: string = id.toString()
    return Object.assign({}, modelWithoutId, { id: stringId })
  }
}
