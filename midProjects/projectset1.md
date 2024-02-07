# Projects related to Dom

# projects link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=1-colorChanger%2Findex.html)


# solution code


# project 1 -> background color changer
```javascript
console.log("me")
const boxes = Document.queryselectorAll(".button")
const body = document.querySelector("body");

boxes.forEach(function (button){
  console.log(button)
  button.addEventListener('click',function(e){// e is event's object
  console.log(e)
  console.log(e.target);
  if(e.target.id==="white"){
    body.style.backgroundColor=e.target.id;
  }
  if(e.target.id==="grey"){
    body.style.backgroundColor=e.target.id;
  }
  if(e.target.id==="blue"){
    body.style.backgroundColor=e.target.id;
  }
  if(e.target.id==="yellow"){
    body.style.backgroundColor=e.target.id;
  }
  })
})

```
# project 2 -> BMI calculator

```javascript
const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault(); // defualt submit ko thodi der ke liye roko
  const height = parseInt(document.querySelector('#height').value); //chuki value string me aayegi isliye use typecast karege
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#result');

  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = `please give valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = `please give valid weight ${weight}`;
  } else {
  const bmi = (weight / ((height * height) / 10000)).toFixed(2);
  //show the result
  result.innerHTML = bmi;
  }
  
  if(result<18.6){
     result.innerHTML = `it's under weight ${result}`
  }else if(result>=18.6 && result<24.9){
    result.innerHTML = `it's normal weight ${result}`
 }else{
  result.innerHTML = `it's over weight ${result}`
}
});

```

# project 3 -> Digital clock

```javascript
const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock')

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

```

# project 4 -> Guess the Number

```javascript

let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}
```
# project 6 -> unlimited colors
```javascript
// generate random color
const randomColor = function(){
  const hex = '0123456789ABCDEF';
  let color = '#';
  for(let i=0;i<6;i++){
    color += hex[Math.floor(Math.random()*16)];
  }
  return color;
};
let interValId;
const startChangingColor = function(){
  if(!intervalId){
  interValId = setInterval(changeBgColor,1000);}

  function changeBgColor(){
    document.body.style.backgroundColor=randomColor();
  }
};
const stopChangingColor = function(){
  clearInterval(interValId)
  intervalId = null;
}
document.querySelector('#start').addEventListener('click',startChangingColor);

document.querySelector('#stop').addEventListener('click',stopChangingColor);
```
# project 5 -> keyBoard magic

```javascript
const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
    <div class='color'>
    <table>
    <tr>
      <th>Key</th>
      <th>Keycode</th> 
      <th>Code</th>
    </tr>
    <tr>
      <td>${e.key === ' ' ? 'Space' : e.key}</td>
      <td>${e.keyCode}</td> 
      <td>${e.code}</td>
    </tr>
    
  </table>
    </div>
  `;
});

```