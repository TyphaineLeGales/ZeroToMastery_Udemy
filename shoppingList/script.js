var btn = document.getElementById('enter');
var list = document.querySelector('ul');
var input = document.getElementById('userInput');

btn.addEventListener('click', function () {
  if(input.value.length > 0) {
     addListItem(input);
  }
});

input.addEventListener('keypress', function (e) {
  if(input.value.length > 0 && e.keyCode === 13) {
    addListItem(input);
  }

});

function addListItem(input) {
  var li = document.createElement('li');
    li.appendChild(document.createTextNode(input.value));
    list.appendChild(li);
    input.value = "";
}
