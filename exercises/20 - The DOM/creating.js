console.log('works');

const myParagraph = document.createElement('p');
myParagraph.textContent = 'I am a P';
myParagraph.classList.add('special');

console.log(myParagraph);

const myImage = document.createElement('img');
myImage.src = 'https://picsum.photos/500';
myImage.alt = 'some image alt';
console.log(myImage);

const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');
console.log(myDiv);

myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage);

document.body.appendChild(myDiv);

// add something to the top like a heading
const heading = document.createElement('h2');
heading.textContent = 'Cool Things';

myDiv.insertAdjacentElement('afterbegin', heading);

// Make this using all methods above
// <ul>
// <li>1</li>
// <li>2/li>
// <li>3</li>
// <li>4</li>
// <li>5</li>
// <ul>

// const myListItems = document.createElement('li');
// for (i = 0; i < 5; i++) {

// }

const myList = document.createElement('ul');
myList.classList.add('list-class');

const myListItem1 = document.createElement('li');
myListItem1.textContent = '1';
const myListItem2 = document.createElement('li');
myListItem2.textContent = '2';
const myListItem3 = document.createElement('li');
myListItem3.textContent = '3';
const myListItem4 = document.createElement('li');
myListItem4.textContent = '4';
const myListItem5 = myListItem2.cloneNode();
myListItem5.textContent = '5';
myList.appendChild(myListItem2);
myList.appendChild(myListItem3);
myList.appendChild(myListItem4);
myList.appendChild(myListItem5);
document.body.insertAdjacentElement('afterbegin', myList);
myList.insertAdjacentElement('afterbegin', myListItem1);

console.log(myList);
