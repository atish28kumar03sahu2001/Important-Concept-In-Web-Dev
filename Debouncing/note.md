## Debouncing

Debouncing in web development is a technique used to limit the rate at which a function gets executed. It ensures that a function is only called once per specified interval of time, even if it is triggered multiple times within that interval. This is particularly useful for performance optimization in scenarios where a function might be called repeatedly and rapidly, such as

1. Scrolling: When a user scrolls, the scroll event can fire many times per second. Debouncing can ensure that a function handling the scroll event is called only once after the user has stopped scrolling.

2. Resizing: Similar to scrolling, window resize events can fire multiple times while the user is resizing the window. Debouncing helps to call the resize handler only once after resizing is complete.

3. Form Input: When a user types in a text field, input events can fire with each keystroke. Debouncing can delay the function execution until the user stops typing, useful for features like live search.

### How Debouncing Works

Debouncing involves creating a wrapper function around the original function that sets a timer to delay its execution. If the event triggers again before the timer completes, the timer is reset. The function only executes if the event stops triggering for the specified delay duration.