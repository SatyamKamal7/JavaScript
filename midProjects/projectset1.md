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

# project 2 -> Digital clock

```javascript


```

