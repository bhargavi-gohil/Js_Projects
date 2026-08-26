let buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button){
    buttons.addEventListener('click',function(e){
        console.log(e);
        console.log(e.target);
    })
})