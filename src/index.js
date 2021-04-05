
import Elevator from 'elevator.js'

const textBtn = document.querySelector('#opening')
console.log(textBtn)
const elevator = new Elevator({
    element: textBtn,
    mainAudio: 'https://github.com/tholman/elevator.js/blob/master/demo/music/ding.mp3', // Music from http://www.bensound.com/
    endAudio:  './music/ding.mp3'
});

//APPLY VISIBILITY HIDDEN

// const menuBtn = document.querySelector('li a');
// console.log(menuBtn);
// window.addEventListener('click', (e) => {
//     // e.preventDefault();
//     if(e.target.getAttribute('href')) {

//         if(document.querySelector('.inside')) {

//             // console.log(document.querySelector('.inside'))
//             document.querySelector('.inside').classList.remove('inside')
//         }
//         e.target.parentElement.classList.add('inside')

//     }
// })