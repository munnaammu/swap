var a = prompt("enter frist number")
var b = prompt("enter second number")
function setup() { 




  var button  = createButton("click here to swap")
  button.mousePressed(swap)
}

function draw() {
  
}
function swap (){
  [a,b] = [b,a]
  console.log("a="+a)
  console.log("b="+b)
}