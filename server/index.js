const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
});

app.get("/api/fortune", (req, res) => {
  const fortunes = ["A new perspective will come with the new year.", 
  "A golden egg of opportunity falls into your lap this month.", 
  "A soft voice may be awfully persuasive.", 
  "A person of words and not deeds is like a garden full of weeds.", 
  "Every flower blooms in its own sweet time."
  ];

  let randomValue = Math.floor(Math.random() * fortunes.length)
  let randomFortune = fortunes[randomValue]
  res.status(200).send(randomFortune)
});

app.get("/api/number", (req, res) => {
  const array = [1,2,3,4,5,6,7,8,9,10]
  let randomVal = Math.floor(Math.random() * array.length)
  let num = array[randomVal]
  
  res.status(200).send(`The random number is ${num}`)

});

app.get("/api/guess", (req, res) => {
  const{input} = req.body
  if (input.value === "13") {
  res.status(200).send("Correct!")
  } else {
    res.status(200).send("sorry, wrong number")
  } 
});

app.listen(4000, () => console.log("Server running on 4000"));
