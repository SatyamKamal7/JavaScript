# Projects related to Dom

# projects link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=1-colorChanger%2Findex.html)


# solution code


# project 1
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

