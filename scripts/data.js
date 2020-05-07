import { journalContainer, makeJournalEntryComponent } from "./entryComponent.js";

const fetchJournalEntries = () => {
  return fetch("http://localhost:8088/entries")
    .then(journalEntries => journalEntries.json())  // Parse as JSON
    .then(entries => {
      //Iterating through my entries from json that now is in JS and adding
      //every entry by calling makeJournalEntryComponent
      for (let entry of entries) {
        journalContainer.innerHTML += makeJournalEntryComponent(entry);
      }
    })
}

const newEntryObject = (date, concepts, entry, mood) => {
  return {
    date,
    concepts,
    entry,
    mood
  }
}

const postJournalEntry = (newJournalEntry) => {
  return fetch(`http://localhost:8088/entries`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newJournalEntry)
  }).then(data => data.json())
}


export { fetchJournalEntries, newEntryObject, postJournalEntry };