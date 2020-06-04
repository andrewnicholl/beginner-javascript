// The bad way
// Make a div
// const myDiv = document.createElement('div');
// // add a class of wrapper to it
// myDiv.classList.add('wrapper');
// // put it into the body
// document.body.insertAdjacentElement('beforeEnd', myDiv);

// // make an unordered list
// const myList = document.createElement('ul');
// // add three list items with the words "one, two three" in them
// const myItem1 = document.createElement('li');
// const myItem2 = document.createElement('li');
// const myItem3 = document.createElement('li');
// myItem1.innerText = 'one';
// myItem2.innerText = 'two';
// myItem3.innerText = 'three';
// myList.insertAdjacentElement('afterbegin', myItem1);
// myList.insertAdjacentElement('beforeend', myItem2);
// myList.insertAdjacentElement('beforeend', myItem3);
// // put that list into the above wrapper
// myDiv.insertAdjacentElement('afterbegin', myList);
// console.log(myDiv);

// The better way
// Make a div
const myDiv = document.createElement('div');
// add a class of wrapper to it
myDiv.classList.add('wrapper');
// put it into the body
document.body.insertAdjacentElement('beforeEnd', myDiv);
// make an unordered list
const myList = document.createElement('ul');
// add three list items with the words "one, two three" in them
const myNumbers = ['one', 'two', 'three'];
for (const number of myNumbers) {
  const myItems = document.createElement('li');
  myItems.innerText = number;
  myList.insertAdjacentElement('beforeend', myItems);
}
// put that list into the above wrapper
myDiv.insertAdjacentElement('afterbegin', myList);
console.log(myDiv);

// create an image
const myImg = document.createElement('img');
// set the source to an image
myImg.src =
  'https://cdn.shopify.com/s/files/1/0902/5322/files/keller6_large.jpg?v=1490733538';
// set the width to 250
myImg.width = '250';
// add a class of cute
myImg.classList.add('cute');
// add an alt of Cute Puppy
myImg.alt = 'cute puppy';
// Append that image to the wrapper
myDiv.insertAdjacentElement('beforeend', myImg);

// with HTML string, make a div, with two paragraphs inside of it
const myHTML = `
    <div>
        <p>paragraph 1</p>
        <p>paragraph 2</p>
    </div>
`;
// put this div before the unordered list from above
myDiv.insertAdjacentHTML('afterbegin', myHTML);

// add a class to the second paragraph called warning
console.log(myDiv.childNodes);
// remove the first paragraph

// create a function called generatePlayerCard that takes in three arguments: name, age, and height

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards

// Have that function make 4 cards

// append those cards to the div
// put the div into the DOM just before the wrapper element
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
// make out delete function
// loop over them and attach a listener
