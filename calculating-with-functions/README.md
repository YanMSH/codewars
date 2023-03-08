### This time we want to write calculations using functions and get the results. Let's have a look at some examples:

- seven(times(five())); _must return 35_
- four(plus(nine())); _must return 13_
- eight(minus(three())); _must return 5_
- six(dividedBy(two())); _must return 3_

### Requirements:

- There must be a function for each number from 0 ("zero") to 9 ("nine")
- There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
- Each calculation consist of exactly one operation and two numbers
- The most outer function represents the left operand, the most inner function represents the right operand
- Division should be integer division. For example, this should return 2, not 2.666666...:

* eight(dividedBy(three()));
