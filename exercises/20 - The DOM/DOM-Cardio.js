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
myDiv.firstElementChild.lastElementChild.classList.add('warning');
// remove the first paragraph
myDiv.firstElementChild.firstElementChild.remove();
// create a function called generatePlayerCard that takes in three arguments: name, age, and height
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>
function generatePlayerCard(name, age, height) {
  const playerHTML = `
		<div class="playerCard">
			<h2>${name} — ${age}</h2>
			<p>They are ${height} and ${age} years old. In Dog years this person would be ${age *
    7}. That would be a tall dog!</p>
			<button class="delete" type="button">&times; Delete</button>		
		</div>
    `;
  return playerHTML;
}

// make a new div with a class of cards
const cards = document.createElement('div');
cards.classList.add('cards');

// Have that function make 4 cards
let cardsHTML = generatePlayerCard('wes', 12, 153);
cardsHTML += generatePlayerCard('dan', 13, 120);
cardsHTML += generatePlayerCard('fred', 14, 130);
cardsHTML += generatePlayerCard('gumbo', 52, 140);

// append those cards to the div
cards.innerHTML = cardsHTML;

// put the div into the DOM just before the wrapper element
myDiv.insertAdjacentElement('beforebegin', cards);
console.log(cards);
// Bonus, put a delete Button on each card so when you click it, the whole card is removed
// select all the buttons!
const buttons = document.querySelectorAll('.delete');
// make out delete function
function deleteCard(event) {
  const clickedButton = event.currentTarget;
  clickedButton.closest('.playerCard').remove();
}
// loop over them and attach a listener
buttons.forEach(buttons => buttons.addEventListener('click', deleteCard));
