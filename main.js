var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'esperanza.jpg') {
      myImage.setAttribute ('src','esperanza-2.jpg');
    } else {
      myImage.setAttribute ('src','esperanza.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'You are such a jazzy boi, ' + myName;
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'You are such a jazzy boi, ' + storedName;
  }
  myButton.onclick = function() {
    setUserName();
  }
