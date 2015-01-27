/* jshint browser: true */

'use strict';

var i, url, h2s, h3s, target, elementString;

document.querySelector('h1').classList.add('red');

h2s = document.querySelectorAll('h2');
for (i = 0; i < h2s.length; i++) {
  h2s[i].classList.add('blue');
}

h3s = document.querySelectorAll('h3');

// for (i=0; i < h3s.length; i++) {
//   h3s[i].textContent = h3s[i].textContent.toUpperCase();
// }

// [] = Array.prototype
[].forEach.call(h3s, function (el) {
  el.textContent = el.textContent.toUpperCase();
});

target = document.querySelector('.target');
elementString = '<h2>OMG <a href="http://google.com">GOOG</a></h2>';

document.querySelector('#add-element').addEventListener('click', function () {
  target.insertAdjacentHTML('afterend', elementString);
  target.appendChild(createSuperLimeDiv('OMG OMG OMG'));
});

document.querySelector('#add-image').addEventListener('click', function () {
  // this = event.target;
  // var url = 'http://i.imgur.com/nPEDZd1.png';
  url = this.previousElementSibling.value;
  this.previousElementSibling.value = '';
  target.appendChild(createImageElement(url));
});

function createSuperLimeDiv(text) {
  var docFragment     = document.createDocumentFragment(),
      superGreen      = document.createElement('div'),
      superYellow     = document.createElement('div'),
      superYellowText = document.createElement('div');

  superGreen.setAttribute('class', 'supergreen');
  docFragment.appendChild(superGreen);

  superYellow.setAttribute('class', 'superyellow');
  superGreen.appendChild(superYellow);

  superYellowText = document.createTextNode(text);
  superYellow.appendChild(superYellowText);

  return docFragment;
}

function createImageElement(url) {
  var docFragment = document.createDocumentFragment(),
      img         = document.createElement('img');

  img.setAttribute('src', url);
  docFragment.appendChild(img);

  return docFragment;
}

setInterval(function () {
  setRandomColor(document.querySelector('h1'));
}, 1000);

function getRandomColor() {
  return Math.floor(Math.random() * 256);
}

function setRandomColor(element) {
  element.style.backgroundColor = randomColor();
}

function randomColor() {
  var red   = getRandomColor(),
      green = getRandomColor(),
      blue  = getRandomColor();

  return 'rgb(' + red + ',' + green + ',' + blue + ')';
}
