var color1 = document.getElementById('color1');
var color2 = document.getElementById('color2');
var displayCssCode = document.querySelector('h1');

document.body.style.background = 'linear-gradient( to right,'+color1.value,+',' + color2.value +');';
displayCssCode.innerHTML = "" + color1.value + "," + color2.value;
console.log("script is linked");



