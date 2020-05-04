import { fetchJournalEntries } from "./data.js";

const journalEntryFactoryFunction = (date, concepts, journalEntry, mood) => {
  return {
    date: date,
    concepts: concepts,
    entry: journalEntry,
    mood: mood
  }
}

const submitJournalEntry = document.querySelector("#recordJournalEntry");

submitJournalEntry.addEventListener("click", () => {
  debugger;
  const journalDateInput = document.getElementById("journalDate").value;
  const journalConceptsInput = document.getElementById("concepts").value;
  const journalEntryInput = document.getElementById("journalEntryInput").value;
  const journalMoodInput = document.getElementById("mood").value;
  const newJournalEntry = journalEntryFactoryFunction(journalDateInput, journalConceptsInput, journalEntryInput, journalMoodInput);
  let url = `http://localhost:8088/journalEntries`;
  var request = new XMLHttpRequest(url);
  request.open('POST', url);
  request.setRequestHeader("Content-Type", "application/json");
  request.send(JSON.stringify(newJournalEntry));
})

fetchJournalEntries();