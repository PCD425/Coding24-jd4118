 console.log('Button Click Exercises');

 const Button = document.querySelector('.js_button');
console.log(button)

button.addEventListner('click',handleClickEvent);

function handleClickEvent(){
    console.log('I was clicked!')
};