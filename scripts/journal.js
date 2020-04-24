//In html my first entryLog(and only) gets assigned journalContainer
const journalContainer = document.querySelector(".entryLog");

// HTML structure for a journal entry
const makeJournalEntryComponent = (journalEntry) => {
  return `
    <div>On ${journalEntry.date}, I learned about ${journalEntry.concepts}. 
    ${journalEntry.entry} I am ${journalEntry.mood}.</div>
  `
}

fetch("http://localhost:3000/journalEntries")
  .then(journalEntries => journalEntries.json())  // Parse as JSON
  .then(entries => {
    //Iterating through my entries from json that now is in JS and adding
    //every entry by calling makeJournalEntryComponent
    for (let entry of entries) {
      journalContainer.innerHTML += makeJournalEntryComponent(entry);
    }
  })