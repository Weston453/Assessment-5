// front end js 

// 1) Get a random compliment function FE
document.getElementById("complimentButton").onclick = function () {
    axios.get("http://localhost:4000/api/compliment/")
        .then(function (response) {
          const data = response.data;
          alert(data);
        })
        .catch(err => console.log(err))
};


// 2) Get a random fortune function FE
document.getElementById("fortuneButton").onclick = function () {
    axios.get("http://localhost:4000/api/fortune/")
        .then(function (response) {
          const data = response.data;
          alert(data);
        })
        .catch(err => console.log(err))
};

// Extra feature 1) Get a random number function FE
document.getElementById("randomNumberButton").onclick = function () {
    axios.get("http://localhost:4000/api/number/")
    .then(function (response) {
          const data = response.data;
          alert(data);
        })
        .catch(err => console.log(err))
};

// Extra feature 2) Guess my number function FE

const guessNumberForm = document.getElementById("guessNumberForm")
const guessNumberInput = document.getElementById("guessNumberInput")  

guessNumberForm.addEventListener('submit', (event)=> {
  event.preventDefault()
  const number = guessNumberInput.value
  console.log(number)
  axios.post('http://localhost:4000/api/guess', {number})
  .then(res => {
    alert(res.data)
  })
  .catch(err => console.log(err))
})

// Extra feature 3) add a fortune to array FE
const addFortuneForm = document.getElementById('addFortuneForm')
const fortuneInput = document.getElementById("fortuneInput")

addFortuneForm.addEventListener('submit', (event)=>{
  event.preventDefault()
  const {value} = fortuneInput
  axios.post('http://localhost:4000/api/fortune', {value})
  .then(res => {
    console.log(res.data)
  })
  .catch(err => console.log(err))
})

// Extra feature 4) add these numbers FE 
const addBtn = document.getElementById("addBtn")

addBtn.addEventListener('click', ()=> {
    axios.get('http://localhost:4000/api/add/')
      .then(res=>{
        alert(res.data)
      })
      .catch(err => console.log(err))
})
    
// Extra feature 5) display ditto from pokeAPI FE
// const getPokemon = ()=> {
//   axios.get('http://localhost:4000/api/pokemon')
//     .then(res => console.log(res.data))
// }

// getPokemon()