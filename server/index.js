const express = require("express");
const cors = require("cors");

const app = express();

const axios = require("axios");


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

// back end js 

// 1) Get a random compliment feature BE
app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
});

// 2) Get a random fortune feature BE
const fortunes = ["A new perspective will come with the new year.", 
"A golden egg of opportunity falls into your lap this month.", 
"A soft voice may be awfully persuasive.", 
"A person of words and not deeds is like a garden full of weeds.", 
"Every flower blooms in its own sweet time."
];

app.get('/api/fortune', (req,res) => {

  const randIndex = Math.floor(Math.random() * fortunes.length)
  let fortune = fortunes[randIndex]
  res.status(200).send(fortune)
});

// Extra feature 1) Get a random number BE
app.get("/api/number", (req, res) => {
  const array = [1,2,3,4,5,6,7,8,9,10]
  let randomVal = Math.floor(Math.random() * array.length)
  let num = array[randomVal]
  res.status(200).send(`The random number is ${num}`)
});

// Extra feature 2) Guess my number BE
app.post("/api/guess", (req, res) => {
  const {number} = req.body
  console.log(req.body)
  if (+number === 13) {
  res.status(200).send("Correct!")
  } else {
    res.status(200).send("Sorry, wrong number")
  } 
});

// Extra feature 3) add a fortune to array BE
app.post('/api/fortune', (req, res)=> {
  const {value} = req.body
  fortunes.push(value)
  res.status(200).send(fortunes)
})

// Extra feature 4) add these numbers BE 
app.get("/api/add/", (req, res)=> {
  let solution = (2 + 2)
  res.status(200).send(`The Answer is ${solution}`)
});

// Extra feature 5) display ditto from pokeAPI BE
// app.get('/api/pokemon', (req,res) => {
//   axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
//   .then(res => {
//     res.status(200).send(res.data)
//   })
//   .catch(err => console.log(err))
// });

app.listen(4000, () => console.log("Server running on 4000"));