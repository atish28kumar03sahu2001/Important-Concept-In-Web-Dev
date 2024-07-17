/*
Question 01
Create a button UI and throttle as follows
1. show button "Pressed <X> Times" every time button is pressed.
2. Increase "Triggered <Y> Times" every 1000ms of throttle
*/

let button = document.getElementById("BTN1");
let Increase = document.getElementById("INCREASE");
let count = document.getElementById("COUNT");

let PressedCount = 0;
let TriggeredCount = 0;
let start = new Date().getTime();

let MyThrottled = (callback, delay) => {
    let last = 0;
    return (...args) => {
        let now = new Date().getTime();
        if (now - last < delay) return;
        last = now;
        return callback(...args);
    }
}

let ThrottledFunction = MyThrottled(() => {
    TriggeredCount += 1;
    count.innerHTML = TriggeredCount;
}, 1000);

button.addEventListener("click", () => {
    Increase.innerHTML = ++PressedCount;
    const now = new Date().getTime();
    const seconds = (now - start) / 1000;
    console.log(seconds.toFixed());
    ThrottledFunction();
});