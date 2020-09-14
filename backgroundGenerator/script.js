var color1 = document.getElementById('color1');
var color2 = document.getElementById('color2');
var displayCssCode = document.querySelector('h1');
var body = document.querySelector('body');

color1.addEventListener("input", function() {
  displayCssCode.innerHTML =
  "Current CSS Background : linear-gradient(to right, "
    +color1.value
    +" , "
    + color2.value
    +")";
  body.style.background =
    "linear-gradient(to right, "
    +color1.value
    +","
    + color2.value
    +")";
});

color2.addEventListener("input", function() {
  displayCssCode.innerHTML =
  "Current CSS Background : linear-gradient(to right, "
    +color1.value
    +" , "
    + color2.value
    +")";
  body.style.background =
    "linear-gradient(to right, "
    +color1.value
    +","
    + color2.value
    +")";
});

