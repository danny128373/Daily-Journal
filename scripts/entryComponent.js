const journalContainer = document.querySelector(".entryLog");

// HTML structure for a journal entry
const makeJournalEntryComponent = (journalEntry) => {

  journalContainer.innerHTML = "";

  return `
    <div>On ${journalEntry.date}, I learned about ${journalEntry.concepts}. 
    ${journalEntry.entry} I am ${journalEntry.mood}.</div>
  `
}

export { makeJournalEntryComponent, journalContainer };