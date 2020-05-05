import { fetchJournalEntries, newEntryObject, postJournalEntry } from "./data.js";
import { journalContainer } from "./entryComponent.js";

const submitJournalEntry = document.querySelector("#recordJournalEntry");
submitJournalEntry.addEventListener("click", () => {
  event.preventDefault();
  const journalDateInput = document.getElementById("journalDate").value;
  const journalConceptsInput = document.getElementById("concepts").value;
  const journalEntryInput = document.getElementById("journalEntryInput").value;
  const journalMoodInput = document.getElementById("mood").value;

  if (journalConceptsInput.length < 30) {
    const newJournalEntry = newEntryObject(journalDateInput, journalConceptsInput, journalEntryInput, journalMoodInput);

    postJournalEntry(newJournalEntry)
      .then(entries => {
        console.log(entries);
        journalContainer.innerHTML = "";
        fetchJournalEntries();
      })
  } else {
    alert("Concepts input has to be less than 30 characters.")
  }

})

fetchJournalEntries();
