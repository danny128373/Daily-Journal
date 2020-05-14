// references to form inputs
export const entryIdInput = document.getElementById("entryId")
export const dateInput = document.getElementById("dateEdit")
export const conceptsInput = document.getElementById("conceptsEdit")
export const journalEntryInput = document.getElementById("journalEntryEdit")
export const moodInput = document.getElementById("moodEdit")


function prepopulateForm(entry) {
  dateInput.value = entry.date
  entryIdInput.value = entry.id
  conceptsInput.value = entry.concepts
  journalEntryInput.value = entry.entry
  moodInput.value = entry.mood.label
}

function clearForm() {
  dateInput.value = ""
  entryIdInput.value = ""
  conceptsInput.value = ""
  journalEntryInput.value = ""
  moodInput.value = ""
}


export { prepopulateForm, clearForm }