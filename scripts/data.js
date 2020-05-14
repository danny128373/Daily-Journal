import { journalContainer, makeJournalEntryComponent } from "./entryComponent.js";


const API = {
  fetchJournalEntries() {
    return fetch("http://localhost:8088/entries?_expand=mood")
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
    return fetch(`http://localhost:8088/entries?_expand=mood`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newJournalEntry)
    }).then(data => data.json())
  },
  newEntryObject(date, concepts, entry, moodId) {
    if (moodId === 'happy') {
      return {
        date,
        concepts,
        entry,
        moodId: 1
      }
    }
    else if (moodId === 'sad') {
      return {
        date,
        concepts,
        entry,
        moodId: 2
      }
    } else {
      return {
        date,
        concepts,
        entry,
        moodId: 3
      }
    }
  },
  deleteEntry(entryId) {
    return fetch(`http://localhost:8088/entries/${entryId}?_expand=mood`, {
      method: "DELETE"
    })
  },
  updateEntry(entryObject, id) {
    return fetch(`http://localhost:8088/entries/${id}?_expand=mood`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(entryObject)
    })
      .then(data => data.json())
  },
  getEntryById(entryId) {
    return fetch(`http://localhost:8088/entries/${entryId}?_expand=mood`)
      .then(data => data.json())
  }
}

export default API;