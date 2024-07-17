/*
Question 01
Create a button UI and add debounce as follows
1. Show "Button Pressed <X> Times" Every Time Button Is Pressed
2. Increase "Triggered <Y> Times" Count After 500ms of debounce
*/
let button = document.getElementById("BTN1");
let Increase = document.getElementById("INCREASE");
let count = document.getElementById("COUNT");

let PressedCount = 0;
let TriggeredCount = 0;

const mydebounce = (callback, delay) => {
    let timer;
    return function(...args){
        if(timer) clearTimeout(timer)
        timer = setTimeout(()=>{
            callback(...args)
        },delay)
    }
}

let debounceFunc = mydebounce(()=>{
    TriggeredCount += 1;
    count.innerHTML = TriggeredCount;
},500)

button.addEventListener("click",()=>{
    Increase.innerHTML = ++PressedCount;
    debounceFunc();
})