import { fetchJournalEntries, newEntryObject, postJournalEntry } from "./data.js";
import { journalContainer } from "./entryComponent.js";

const submitJournalEntry = document.querySelector("#recordJournalEntry");
submitJournalEntry.addEventListener("click", () => {
  event.preventDefault();
  const journalDateInput = document.getElementById("journalDate").value;
  const journalConceptsInput = document.getElementById("concepts").value;
  const journalEntryInput = document.getElementById("journalEntryInput").value;
  const journalMoodInput = document.getElementById("mood").value;

  const regex = /^[0-9a-zA-Z();.'!]+$/;
  const badWords = /crap|fool|fuck|fucking|f\*cking|f\*ck|bitch|b\*tch|shit|sh\*t|asshole|\*ssh\*l\*|\*\*\*\*|c\*ck|\*\*\*\*sucker|c\*cks\*ck\*r|\*\*\*\*|c\*nt|dickhead|d\*c\*h\*a\*|\*\*\*\*|f\*c\*|\*\*\*\*wit|f\*ckw\*t|fuk|f\*k|fuking|f\*k\*ng|mother\*\*\*\*er|m\*th\*rf\*ck\*r|\*\*\*\*\*\*|n\*gg\*r|pussy|p\*ssy|\*\*\*\*|sh\*t|wanker|w\*nk\*r|wankers|w\*nk\*rs|whore|wh\*r\*|slag| sl\*g|\*\*\*\*\*|b\*tch|f u c k|f\*c\*|b.i.t.c.h|b\*tch|d-i-c-k|d\*\*\*/gi

  if (journalConceptsInput.length > 30) {
    alert("Concepts input has to be less than 30 characters.");
  } else if (badWords.test(journalEntryInput)) {
    alert("Don't f*cking cuss");
  } else if (//regex.test(journalEntryInput) &&
    journalDateInput != "" && journalConceptsInput != "" && journalEntryInput != "" &&
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
