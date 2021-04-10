
import Elevator from 'elevator.js'

const textBtn = document.querySelector('#opening')
const music = document.querySelector('#audio')
const ding = document.querySelector('#audio2')

const elevator = new Elevator({
    element: textBtn,
    duration: 10000
});

textBtn.addEventListener('click', () => {
    music.play();
    setTimeout(() => {
        music.pause();
        ding.play();

    },10000)
})
