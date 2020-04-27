//In html my first entryLog(and only) gets assigned journalContainer
const journalContainer = document.querySelector(".entryLog");

// HTML structure for a journal entry
const makeJournalEntryComponent = (journalEntry) => {
  return `
    <div>On ${journalEntry.date}, I learned about ${journalEntry.concepts}. 
    ${journalEntry.entry} I am ${journalEntry.mood}.</div>
  `
}

export { journalContainer, makeJournalEntryComponent };