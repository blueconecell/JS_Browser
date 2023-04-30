const soccerRecords = [
  {
    records: "Everything is practice.",
    author: "Pele",
  },
  {
    records: "God gives gifts to everyone, some can write, some can dance. He gave me the skill to play football and I am making the most of it.",
    author: "Ronaldinho",
  },
  {
    records: "11",
    author: "22",
  },
];
const records = document.querySelector("#records span:first-child");
const author = document.querySelector("#records span:last-child");
const todaysrecords = soccerRecords[Math.floor(Math.random() * soccerRecords.length)];

records.innerText = todaysrecords.records;
author.innerText = todaysrecords.author;
