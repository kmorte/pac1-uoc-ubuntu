
import Elevator from 'elevator.js'

const textBtn = document.querySelector('#opening')
console.log(textBtn)
const elevator = new Elevator({
    element: textBtn,
    mainAudio: './src/music/music.mp3', // Music from http://www.bensound.com/
    endAudio:  './src/music/ding.mp3'
});