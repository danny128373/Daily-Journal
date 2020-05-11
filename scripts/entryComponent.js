const journalContainer = document.querySelector(".entryLog");

// HTML structure for a journal entry
const makeJournalEntryComponent = (journalEntry) => {

  journalContainer.innerHTML = "";

  return `
    <div>On ${journalEntry.date}, I learned about ${journalEntry.concepts}. 
    ${journalEntry.entry} I am ${journalEntry.mood}.</div>
    <button id="editEntry--${journalEntry.id}">
      Edit Entry
    </button>
    <button id="deleteEntry--${journalEntry.id}">
            Delete Entry
    </button>
  `
}

export { makeJournalEntryComponent, journalContainer };