import { journalContainer, makeJournalEntryComponent } from "./entryComponent.js";
import API from "./data.js";
import { entryIdInput, dateInput, conceptsInput, journalEntryInput, moodInput, clearForm, prepopulateForm } from "./entriesDOM.js";


const submitJournalEntry = document.querySelector("#recordJournalEntry");

const listener = {
  registerPostListener() {
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
        const newJournalEntry = API.newEntryObject(journalDateInput, journalConceptsInput, journalEntryInput, journalMoodInput);

        API.postJournalEntry(newJournalEntry)
          .then(entries => {
            journalContainer.innerHTML = "";
            API.fetchJournalEntries();
          })
      } else {
        alert("Only characters acceptable are: a-z, A-Z, 0-9, and ();.! Also, make sure you leave no empty inputs.")
      }
    })
  },
  registerDeleteListener() {
    document.querySelector(".entryLog").addEventListener("click", (event) => {
      if (event.target.id.startsWith("deleteEntry--")) {
        const entryId = event.target.id.split("--")[1];
        API.deleteEntry(entryId)
          .then(API.fetchJournalEntries)
      }
    })
  },
  registerEditListener() {
    document.querySelector(".entryLog").addEventListener("click", event => {
      if (event.target.id.startsWith("editEntry--")) {
        const entryId = event.target.id.split("--")[1];
        API.getEntryById(entryId)
          .then(entry => {
            prepopulateForm(entry);
          })
      }
    })
  },
  registerRadioListenerHappy() {
    document.querySelector("#moodChoice1").addEventListener("click", (event => {
      const mood = event.target.value;
      fetch('http://localhost:8088/entries')
        .then(journalEntries => journalEntries.json())
        .then(entries => {
          const happy = []
          for (let entry of entries) {
            if (entry.mood === 'happy') {
              happy.push(entry);
            }
          }
          journalContainer.innerHTML = "";
          for (let hap of happy) {
            journalContainer.innerHTML += makeJournalEntryComponent(hap);
          }
        })
    }))
  },
  registerRadioListenerSad() {
    document.querySelector("#moodChoice2").addEventListener("click", (event => {
      const mood = event.target.value;
      fetch('http://localhost:8088/entries')
        .then(journalEntries => journalEntries.json())
        .then(entries => {
          const sad = []
          for (let entry of entries) {
            if (entry.mood === 'sad') {
              sad.push(entry);
            }
          }
          journalContainer.innerHTML = "";
          for (let s of sad) {
            journalContainer.innerHTML += makeJournalEntryComponent(s);
          }
        })
    }))
  },
  registerRadioListenerTired() {
    document.querySelector("#moodChoice3").addEventListener("click", (event => {
      const mood = event.target.value;
      fetch('http://localhost:8088/entries')
        .then(journalEntries => journalEntries.json())
        .then(entries => {
          const tired = []
          for (let entry of entries) {
            if (entry.mood === 'tired') {
              tired.push(entry);
            }
          }
          journalContainer.innerHTML = "";
          for (let t of tired) {
            journalContainer.innerHTML += makeJournalEntryComponent(t);
          }
        })
    }))
  },
  registerSubmitListener() {
    const submitFormBtn = document.getElementById("form-submit")
    submitFormBtn.addEventListener("click", event => {
      event.preventDefault();
      const entryId = entryIdInput.value

      const entryFormValues = {
        "date": dateInput.value,
        "concepts": conceptsInput.value,
        "entry": journalEntryInput.value,
        "mood": moodInput.value
      }

      if (entryId != "") {
        API.updateEntry(entryFormValues, entryId)
          .then(API.fetchJournalEntries);
        clearForm()
      }
      // } else {
      //   API.createSong(entryFormValues)
      //     .then(fetchJournalEntries)
      //   clearForm()
      // }

    })
  }
}

export default listener;
