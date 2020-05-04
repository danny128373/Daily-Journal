import { journalContainer, makeJournalEntryComponent } from "./entryComponent.js";

const fetchJournalEntries = () => {
  fetch("http://localhost:8088/journalEntries")
    .then(journalEntries => journalEntries.json())  // Parse as JSON
    .then(entries => {
      //Iterating through my entries from json that now is in JS and adding
      //every entry by calling makeJournalEntryComponent
      for (let entry of entries) {
        journalContainer.innerHTML += makeJournalEntryComponent(entry);
      }
    })
}

const saveDataEntry = (date, concepts, journalEntry, mood) => {
  return {
    date: date,
    concepts: concepts,
    entry: journalEntry,
    mood: mood
  }
}

export { fetchJournalEntries, saveDataEntry };