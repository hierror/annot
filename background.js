chrome.runtime.onInstalled.addListener(() => {
  const request = indexedDB.open('teasdasd', 1)

  request.onerror = (event) => {
    console.log('error', event)
  }
  request.onsuccess = (event) => {
    console.log('success', event)
  }
})
