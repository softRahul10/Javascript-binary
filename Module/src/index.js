import _ from 'lodash';
import './style.css';
import Picture from './pic.jpg';
import fileOne from './module/fileOne';
import fileTwo from './module/fileTwo';
import myName from './module/myName';


function component() {
   fileOne();
   fileTwo();
  const element = document.createElement('div');

  //Lodash, now imported by this script
  element.innerHTML = myName('Rahul Keshri');
  element.classList.add('special');

  // Add the image to our existing div.
  const myIcon = new Image();
  myIcon.src = Picture;

  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());