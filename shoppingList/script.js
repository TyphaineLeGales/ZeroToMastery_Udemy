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

// listItems.forEach(function(listItem, index) {
//   listItem.addEventListener("click", function () {
//     markAsDone(listItems[index]);
//   });
// })

//click on a list item and it strikethroughs the text
function getEventTarget(e){
  e = e || window.event;
  return e.target || e.srcElement;
}

list.onclick = function(event){
  var target = getEventTarget(event);
  target.classList.toggle("done");
}

function addListItem(input) {
  var li = document.createElement('li');
    li.appendChild(document.createTextNode(input.value));
    list.appendChild(li);
    input.value = "";
  //   li.addEventListener("click", function () {
  //   markAsDone(li);
  // });
}

function markAsDone (el) {
  el.classList.toggle('done');
}
