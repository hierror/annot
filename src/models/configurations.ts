import { IDBPDatabase } from 'idb'

type Configuration = {
  uuid: string
  label: string
  value: string
  created_at: Date
  updated_at: Date
}

const setup = (db: IDBPDatabase<unknown>) => {
  const store = db.createObjectStore('configurations', { keyPath: 'uuid' })

  store.createIndex('uuid', 'uuid', { unique: true })
  store.createIndex('label', 'label', { unique: true })
  store.createIndex('created_at', 'created_at', { unique: false })
  store.createIndex('updated_at', 'updated_at', { unique: false })
}

export default {
  setup,
}
