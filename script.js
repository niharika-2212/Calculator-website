// initialize variables
var last_val = 0;
var cur_val = 0;
var final = 0;
var operation = 0;

/*
on each value and operator click
- display the value in space
- save it
*/

function inputNumber(value){
  if(document.querySelector("p").innerHTML==='0'){
    document.querySelector("p").innerHTML = value;
  }
  else{
    document.querySelector("p").innerHTML += value;
  }
  cur_val = parseInt(value);
}
for (var i = 0; i < 10; i++) {
  document.querySelectorAll(".btn1")[i].addEventListener("click", function () {
    inputNumber(this.innerHTML);
    addClass(this);
  });
}

document.querySelector("body").addEventListener("keydown",function(event){
  if(event.key==="0" || event.key==="1" || event.key==="2" || event.key==="3" || event.key==="4" || event.key==="5" || event.key==="6" || event.key==="7" || event.key==="8" || event.key==="9"){
    inputNumber(event.key);
  }
})

function inputOperations(value){
  document.querySelector("p").innerHTML += value;
  last_val = cur_val;
  operation = value;
}

for (var i = 0; i < 4; i++) {
  document.querySelectorAll(".btn2")[i].addEventListener("click", function () {
    inputOperations(this.innerHTML);
    addClass(this);
  });
}

document.querySelector("body").addEventListener("keydown",function(event){
  if(event.key==="+" || event.key==="-" || event.key==="/" || event.key==="*"){
    inputOperations(event.key);
  }
})

document.querySelector(".equal").addEventListener("click", function () {
  calculate();
  addClass(document.querySelector(".equal"));
});

document.querySelector("body").addEventListener("keydown",function(event){
  if(event.key==="=" || event.key==="Enter"){
    calculate();
    addClass(document.querySelector(".equal"));
  }
})

document.querySelector(".clear").addEventListener("click", function () {
  document.querySelector("p").innerHTML = 0;
  var last_val = 0;
  var cur_val = 0;
  var final = 0;
  var operation = 0;
  addClass(document.querySelector(".clear"));
});

function calculate() {
  if (operation === "+") {
    final = last_val + cur_val;
  } else if (operation === "-") {
    final = last_val - cur_val;
  } else if (operation === "x") {
    final = last_val * cur_val;
  } else if (operation === "/") {
    final = last_val / cur_val;
  }
  last_val = final;
  cur_val = final;
  document.querySelector("p").innerHTML = final;
}

function addClass(element) {
  element.classList.add("pressed");
  setTimeout(() => {
    element.classList.remove("pressed");
  }, 100);
}
