import * as idb from 'idb'

type DatabaseProperties = {
  name: string
  version?: number
}

const open = async ({ name, version = 1 }: DatabaseProperties) => {
  return idb.openDB(name, version, {
    upgrade(db) {
      console.log('aqui ele fez')

      db.createObjectStore('locations', { autoIncrement: true })
    },
  })
}

export default {
  open,
}
