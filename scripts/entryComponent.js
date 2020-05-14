const journalContainer = document.querySelector(".entryLog");

// HTML structure for a journal entry
const makeJournalEntryComponent = (journalEntry) => {
  journalContainer.innerHTML = "";
  console.log(journalEntry)
  if (journalEntry.moodId === 1) {
    journalEntry.moodId = "happy"
  } else if (journalEntry.moodId === 2) {
    journalEntry.moodId = "sad"
  } else {
    journalEntry.moodId = "tired"
  }
  return `
    <div class="entryContainer">On ${journalEntry.date}, I learned about ${journalEntry.concepts}. 
    ${journalEntry.entry} I am ${journalEntry.moodId}.</div>
    <button id="editEntry--${journalEntry.id}">
      Edit Entry
    </button>
    <button id="deleteEntry--${journalEntry.id}">
            Delete Entry
    </button>
  `
}

export { makeJournalEntryComponent, journalContainer };