console.log('This works')
let myElement = document.getElementById('special');
console.log(myElement);

myElement.style.color='blue';
console.log('color of the text',myElement.style.color)
console.log('grab the text:  ',myElement.innerText)
console.log('list the class:  ',myElement.classList)

myElement.innerText='Hey!'

//step1. create new element
const listItem = document.createElement('li');

//step2. add class list
listItem.classList.add('list-Item');

//step2a. add text
listItem.innerText('I am a list item');

//step3. append on DOM
myElement.appendChild(listItem);