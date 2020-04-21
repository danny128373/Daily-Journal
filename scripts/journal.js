/*
    Define the keys and value for a JavaScript object that
    represents a journal entry about what you learned today
*/
const journalEntry1 = {
  date: "04/17/2020",
  concepts: "Manipulating the DOM",
  entry: "It was great learning how to make websites a little more dynamic, goodbye static websites!",
  mood: "excited"
}
const journalEntry2 = {
  date: "04/17/2020",
  concepts: "JavaScript Objects",
  entry: "Good review for objects, it's slowly coming back.",
  mood: "satisfied"
}
const journalEntry3 = {
  date: "04/16/2020",
  concepts: "Intro to Javascript",
  entry: "Today we covered so much. I feel like I learned so much and it's excited getting into Javascript!",
  mood: "excited"
}

//Adds all my journal entries and adds them to journalCollection
const journalCollection = [];
journalCollection.push(journalEntry1);
journalCollection.push(journalEntry2);
journalCollection.push(journalEntry3);

//In html my first entryLog(and only) gets assigned journalContainer
const journalContainer = document.querySelector(".entryLog");

const makeJournalEntryComponent = (journalEntry) => {
  // HTML structure for a journal entry
  return `
    <div>On ${journalEntry.date}, I learned about ${journalEntry.concepts}. 
    ${journalEntry.entry} I am ${journalEntry.mood}.</div>
  `
}

/*
    Purpose: To render all journal entries to the DOM
    Arguments: entries (array of objects)
*/
const renderJournalEntries = (entries) => {
  for (let entry of journalCollection) {
    journalContainer.innerHTML += makeJournalEntryComponent(entry);
  }
}

// Invoke the render function
renderJournalEntries(journalCollection);