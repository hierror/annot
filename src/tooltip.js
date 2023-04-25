import database from './database'

async function add() {
  const db = await database.open({ name: 'teste2131231' })

  const tabs = await chrome.tabs.query({
    active: true,
    lastFocusedWindow: true,
  })

  const tab = tabs[0]

  const transaction = db.transaction(['locations'], 'readwrite')

  const locations = transaction.objectStore('locations')

  const location = {
    title: tab.title,
    url: tab.url,
    created_at: new Date().toISOString(),
  }

  locations.add(location)

  transaction.oncomplete = () => {
    console.log('All done!')
  }
}

document.addEventListener('DOMContentLoaded', function () {
  add()
})
