/*
    Define the keys and value for a JavaScript object that
    represents a journal entry about what you learned today
*/
const journalEntry1 = {
  date: "04/17/2020",
  concepts: "Manipulating the DOM",
  entry: "It was great learning how to make websites a little more dynamic, goodbye static websites!",
  mood: "Excited"
}
const journalEntry2 = {
  date: "04/17/2020",
  concepts: "JavaScript Objects",
  entry: "Good review for objects, it's slowly coming back",
  mood: "Satisfied"
}
const journalEntry3 = {
  date: "04/16/2020",
  concepts: "Intro to Javascript",
  entry: "Today we covered so much. I feel like I learned so much and it's excited getting into Javascript!",
  mood: "Excited"
}

const journalCollection = [];
journalCollection.push(journalEntry1);
journalCollection.push(journalEntry2);
journalCollection.push(journalEntry3);

console.log(journalCollection);