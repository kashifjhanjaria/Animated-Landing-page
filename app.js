const wrappertwo = document.querySelector('.wrappertwo')
const navbar = document.querySelector('.navbar');
const slide_1 = document.querySelector('.slide-1');
const slide_2 = document.querySelector('.slide-2');
const slide_3 = document.querySelector('.slide-3');
const slide_4 = document.querySelector('.slide-4');
const word = document.querySelectorAll('.word');
const navmenu = document.querySelector('.navmenu');
const main_heading = document.querySelectorAll('.main-heading');
console.log(wrappertwo);
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(()=>{
        console.log("Hello");
        slide_1.style.transform = `translateY( calc( -100vh - -40px))`;
        navbar.style.backgroundColor = "rgb(209, 183, 183)";
    }, 500)
    setTimeout(()=>{
        console.log("Hello");
        slide_2.style.transform = `translateY( calc( -100vh - -40px))`;
        // main_heading.style.transform = `translateX(-0px)`
    }, 600)
    setTimeout(()=>{
        console.log("Hello");
        // slide_2.style.transform = `translateY( calc( -100vh - -40px))`;
        main_heading[0].style.transform = `translateX(-0px)`
        word[0].style.color="green"
    }, 1000)
    setTimeout(()=>{
        console.log("Hello");
        // slide_2.style.transform = `translateY( calc( -100vh - -40px))`;
        main_heading[1].style.transform = `translateX(-0px)`
        word[1].style.color="rebeccapurple"
    }, 1500)
    setTimeout(()=>{
        console.log("Hello");
        slide_3.style.transform = `translateY( calc( -100vh - -40px))`;
    }, 700)
    setTimeout(()=>{
        console.log("Hello");
        slide_4.style.transform = `translateY( calc( -100vh - -40px))`;
    }, 700)

});

const menu = document.querySelector('.menu');

menu.addEventListener('click' , ()=>{
    navmenu.classList.toggle("active")
})