
import Elevator from 'elevator.js'

const textBtn = document.querySelector('#opening')
console.log(textBtn)
const elevator = new Elevator({
    element: textBtn,
    mainAudio: 'https://github.com/tholman/elevator.js/blob/master/demo/music/ding.mp3', // Music from http://www.bensound.com/
    endAudio:  './music/ding.mp3'
});