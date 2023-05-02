import { IDBPDatabase } from 'idb'

type Page = {
  uuid: string
  title: string
  created_at: Date
  updated_at: Date
}

const setup = (db: IDBPDatabase<unknown>) => {
  const store = db.createObjectStore('pages', { keyPath: 'uuid' })

  store.createIndex('uuid', 'uuid', { unique: true })
  store.createIndex('title', 'title', { unique: false })
  store.createIndex('created_at', 'created_at', { unique: false })
  store.createIndex('updated_at', 'updated_at', { unique: false })
}

export default {
  setup,
}
