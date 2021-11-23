const jdata = document.getElementById('json-data').value;
const year = document.getElementById('year').value;
const form = document.querySelector('.b-form')
const boxes = document.querySelectorAll('.box');

for (let box of boxes) {
  let ul = document.createElement('ul');
  ul.setAttribute('class', box.dataset.day);
  box.append(ul);
}

function getInitials(name = "suman sasmal") {  
  let fullName = name.split(' ');
  let initials = fullName.shift().charAt(0) + fullName.shift().charAt(0);
  return initials.toUpperCase();
}

const colorGen =()=> {
  let randomColor = Math.floor(Math.random()*16777215).toString(16);
  return "#" + randomColor;
}

function insertEle(n) {
  let li = document.createElement('li');
  li.innerHTML = getInitials();
  li.style.background = colorGen();
  document.querySelector(`.${n}`).append(li);
}

function replaceYear(data = "20/02/2021") {
  let value = data.split('/');
  let n = value.reverse();
  n.splice(0,1, year);
  let ndate = n.join('/');
  getDaysname(ndate);
}

function getDaysname(n) {
  const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
  const d = new Date(n);
  const dname = days[d.getDay()];
  console.log(dname); 
  insertEle(dname);
}

function onSubmit(e) {
  e.preventDefault();
  replaceYear();
}

form.addEventListener('submit', onSubmit);