// HTML structure for a journal entry
export const makeJournalEntryComponent = (journalEntry) => {
  return `
    <div>On ${journalEntry.date}, I learned about ${journalEntry.concepts}. 
    ${journalEntry.entry} I am ${journalEntry.mood}.</div>
  `
}