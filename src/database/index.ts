import * as idb from 'idb'
import { Configurations, Contents, Pages, Visits } from '../models'

type DatabaseProperties = {
  name: string
  version?: number
}

const open = async ({ name, version = 1 }: DatabaseProperties) => {
  return idb.openDB(name, version, {
    upgrade(db) {
      Visits.setup(db)
      Pages.setup(db)
      Contents.setup(db)
      Configurations.setup(db)
    },
  })
}

export default {
  open,
}
