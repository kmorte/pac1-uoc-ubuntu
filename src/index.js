
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


const hasSupport = 'loading' in HTMLImageElement.prototype;
console.log(hasSupport)

console.log(
    'IntersectionObserver' in window
);

document.addEventListener('DOMContentLoaded', () => {

    const imgArr = [].slice.call(document.querySelectorAll('img'));

    console.log(imgArr);

    const lazyImgObserver = new IntersectionObserver( (entries, observer) => {
        
        console.log(entries);
        
        entries.map( (entry) => {
            if(entry.isIntersecting) console.log(entry);
        })
        // console.log(observer);
    })
    console.log('lazyImgObserver',lazyImgObserver);
    imgArr.map( img => lazyImgObserver.observe(img))
})