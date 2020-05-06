import { fetchJournalEntries, newEntryObject, postJournalEntry } from "./data.js";
import { journalContainer } from "./entryComponent.js";

const submitJournalEntry = document.querySelector("#recordJournalEntry");
submitJournalEntry.addEventListener("click", () => {
  event.preventDefault();
  const journalDateInput = document.getElementById("journalDate").value;
  const journalConceptsInput = document.getElementById("concepts").value;
  const journalEntryInput = document.getElementById("journalEntryInput").value;
  const journalMoodInput = document.getElementById("mood").value;

  const regex = /^[0-9a-zA-Z();.!]+$/;

  if (journalConceptsInput.length > 30) {
    alert("Concepts input has to be less than 30 characters.");
  } else if (!regex.test(journalEntryInput).value && journalDateInput != "" && journalConceptsInput != "" && journalEntryInput != "" &&
    journalMoodInput != "") {
    const newJournalEntry = newEntryObject(journalDateInput, journalConceptsInput, journalEntryInput, journalMoodInput);

    postJournalEntry(newJournalEntry)
      .then(entries => {
        console.log(entries);
        journalContainer.innerHTML = "";
        fetchJournalEntries();
      })
  } else {
    alert("Only characters acceptable are: a-z, A-Z, 0-9, and ();.! Also, make sure you leave no empty inputs.")
  }

})

fetchJournalEntries();
