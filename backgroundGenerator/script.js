var color1 = document.getElementById('color1');
var color2 = document.getElementById('color2');
var circles = document.querySelectorAll('.circle');
var displayCssCode = document.querySelector('h3');
var title = document.querySelector('h1');
var body = document.querySelector('body');

color1.addEventListener("input", updateBackgroundGradient);

color2.addEventListener("input", updateBackgroundGradient);

function updateBackgroundGradient() {
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

  title.style.background =
  "linear-gradient(to left, "
    +color1.value
    +","
    + color2.value
    +")";
  title.style.backgroundClip = "text";
  title.style.color="transparent";
    circles[0].style.backgroundColor = color1.value;
    circles[1].style.backgroundColor = color2.value;

}

