export const PrismaHelper = {
  map (model: any): any {
    const { id, ...modelWithoutId } = model
    const stringId: string = id.toString()
    return Object.assign({}, modelWithoutId, { id: stringId })
  },

  mapAll (model: any[]): any[] {
    return model.map(m => this.map(m))
  }
}
