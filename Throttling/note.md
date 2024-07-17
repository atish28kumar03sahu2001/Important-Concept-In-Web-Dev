## Throttling

Throttling in web development is a technique used to ensure that a function is called at most once within a specified period, even if it is triggered multiple times during that period. 

This helps in controlling the rate at which a function executes, preventing it from running too frequently and potentially causing performance issues. Throttling is particularly useful in scenarios where events fire at a high rate, such as:

1. Scrolling: Limit the rate at which a function handling scroll events is executed to improve performance.

2. Resizing: Control how often a function handling window resize events is executed to avoid excessive computations.

3. Mouse Movements: Reduce the frequency of executing a function in response to rapid mouse movements.

### How Throttling Works

Throttling works by ensuring that a function is executed only once in a specified period. Once the function is called, it will not be executed again until the specified period has passed, regardless of how many times it is triggered within that period.