import { fetchJournalEntries } from "./data.js";

fetchJournalEntries();

const submitJournalEntry = document.getElementById("recordJournalEnry");

submitJournalEntry.addEventListener("click", () => {
  fetch("http://localhost:8088/journalEntries", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newJournalEntry)
  })//create chained promises
})

const journalDateInput = document.getElementById("journalDate").value;
const journalConceptsInput = document.getElementById("concepts").value;
const journalEntryInput = document.getElementById("journalEntryInput").value;
const journalMoodInput = document.getElementById("mood").value;

const journalEntryFactoryFunction = (date, concepts, journalEntry, mood) => {
  return {
    date: date,
    concepts: concepts,
    entry: journalEntry,
    mood: mood
  }
}

// Invoke the factory function, passing along the form field values
const newJournalEntry = journalEntryFactoryFunction(journalDateInput, journalConceptsInput, journalEntryInput, journalMoodInput);

// Use `fetch` with the POST method to add your entry to your API

