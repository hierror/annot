import { IDBPDatabase } from 'idb'

enum ContentType {
  Markdown,
  Paragraph,
  Link,
  Iframe,
}

type Content = {
  uuid: string
  position: number
  data: string
  type: ContentType
  page_uuid: string
  created_at: Date
  updated_at: Date
}

const setup = (db: IDBPDatabase<unknown>) => {
  const store = db.createObjectStore('contents', { keyPath: 'uuid' })

  store.createIndex('uuid', 'uuid', { unique: true })
  store.createIndex('page_uuid', 'page_uuid', { unique: false })
  store.createIndex('created_at', 'created_at', { unique: false })
  store.createIndex('updated_at', 'updated_at', { unique: false })
}

export default {
  setup,
}
