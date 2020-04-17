/*
    Define the keys and value for a JavaScript object that
    represents a journal entry about what you learned today
*/
const journalEntry1 = {
  "Date of Entry": "04/17/2020",
  "Concepts covered": "Manipulating the DOM",
  "Journal Entry": "It was great learning how to make websites a little more dynamic, goodbye static websites!",
  "Mood of the day": "Excited"
}
const journalEntry2 = {
  "Date of Entry": "04/17/2020",
  "Concepts covered": "JavaScript Objects",
  "Journal Entry": "Good review for objects, it's slowly coming back",
  "Mood of the day": "Satisfied"
}
const journalEntry3 = {
  "Date of Entry": "04/16/2020",
  "Concepts covered": "Intro to Javascript",
  "Journal Entry": "Today we covered so much. I feel like I learned so much and it's excited getting into Javascript!",
  "Mood of the day": "Excited"
}

const journalCollection = [];
journalCollection.push(journalEntry1);
journalCollection.push(journalEntry2);
journalCollection.push(journalEntry3);

console.log(journalCollection);