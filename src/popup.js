async function add() {
  const request = window.indexedDB.open('test-inside', 2)

  const tabs = await chrome.tabs.query({
    active: true,
    lastFocusedWindow: true,
  })

  const tab = tabs[0]

  request.onerror = (event) => {
    console.log('Error!', event)
  }

  request.onupgradeneeded = (event) => {
    // @ts-ignore
    const db = event?.target?.result

    db.createObjectStore('locations', { autoIncrement: true })
  }

  request.onsuccess = (event) => {
    // @ts-ignore
    const db = event.target.result

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
}

document.addEventListener('DOMContentLoaded', function () {
  add()
})
