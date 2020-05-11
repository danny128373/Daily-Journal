import { journalContainer, makeJournalEntryComponent } from "./entryComponent.js";


const API = {
  fetchJournalEntries() {
    return fetch("http://localhost:8088/entries")
      .then(journalEntries => journalEntries.json())  // Parse as JSON
      .then(entries => {
        //Iterating through my entries from json that now is in JS and adding
        //every entry by calling makeJournalEntryComponent
        journalContainer.innerHTML = "";
        for (let entry of entries) {
          journalContainer.innerHTML += makeJournalEntryComponent(entry);
        }
      })
  },
  postJournalEntry(newJournalEntry) {
    return fetch(`http://localhost:8088/entries`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newJournalEntry)
    }).then(data => data.json())
  },
  newEntryObject(date, concepts, entry, mood) {
    return {
      date,
      concepts,
      entry,
      mood
    }
  },
  deleteEntry(entryId) {
    return fetch(`http://localhost:8088/entries/${entryId}`, {
      method: "DELETE"
    })
  },
  updateEntry(entryObject, id) {
    return fetch(`http://localhost:8088/entries/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(entryObject)
    })
      .then(data => data.json())
  }
}

export default API;

// { fetchJournalEntries, newEntryObject, postJournalEntry };