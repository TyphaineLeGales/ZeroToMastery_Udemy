var btn = document.getElementById('enter');
var list = document.querySelector('ul');
var input = document.getElementById('userInput');
var listItems = document.querySelectorAll('li');

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

function getEventTarget(e){
  e = e || window.event;
  return e.target || e.srcElement;
}

list.onclick = function(event){
  var target = getEventTarget(event);
  if(target.tagName !== "BUTTON") {
    markAsDone(target);
  } else {
    deleteItem(target);
  }
}

function addListItem(input) {
  var li = document.createElement('li');
  li.appendChild(document.createTextNode(input.value));
  list.appendChild(li);
  input.value = "";
  var deleteBtn = document.createElement('button');
  deleteBtn.appendChild(document.createTextNode('delete'));
  li.appendChild(deleteBtn);
}

function markAsDone (el) {
  el.classList.toggle('done');
}

function deleteItem(el) {
  el.parentElement.remove();
}
