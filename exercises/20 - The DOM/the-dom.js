// const p = document.querySelector('p');
// const imgs = document.querySelectorAll('.item img');
// const item2 = document.querySelector('item2');
// const item2image = document.querySelector('img');
// const heading = document.querySelector('.cool');
// // heading.textContent = 'wes is cool';
// heading.innerText = 'wes is cool';
// console.dir(heading);
// console.log(heading.textContent);
// console.log(heading.innerText);

// const pizzaList = document.querySelector('.pizza');
// console.log(pizzaList.textContent);
// pizzaList.insertAdjacentText('afterbegin', '🍕');
// pizzaList.insertAdjacentText('beforeend', '🍕');
// console.log(pizzaList.textContent);
// heading.insertAdjacentText('beforeend', 'WHO LET THE FROGS SHOUT');

// // Classes!
const pic = document.querySelector('.nice');
pic.classList.add('open');
pic.classList.remove('cool');
console.log(pic.classList);

function toggleRound() {
  pic.classList.toggle('round');
}

pic.addEventListener('click', toggleRound);

pic.alt = 'Cute Pup';
console.log(pic.alt);
console.log(pic.naturalWidth);
pic.width = 200;

// pic.setAttribute('alt', 'REAALLY GOOD Hat');
// console.log(pic.getAttribute('alt'));

const custom = document.querySelector('.custom');
console.log(custom.dataset);

custom.addEventListener('click', function() {
  alert(`Weolcome ${custom.dataset.name} ${custom.dataset.last}`);
});
