# Variables
To declare a variable, you need to use the `let` keyword.
## Binding 
In Pineapple, the equal symbol ( `=` ) does not stands for assignment, however it stands for binding. And once you bind a name with a value, you cannot rebind it again.
```python
let x = 4
x = 5 # Error: `x` is already binded to the value `4`

let people = {.name="John"}

people.name <- "Ali" # Error: `people.name` is already binded to the value "John"
```
## Assignment
You can declare a variable by using the left arrow operator (`<-` ).
```python
x <- 5
x <- 6 # No error

people = {.name <- "John"}
people.name = "Ali" # No error
```

## Why we need to separate the concept of binding with assignment?
This is to reduce one of the WTFs, which is **WTF did my variable's value changed?**

This will allow programmer to debug their code easily.  

For example, let say we have a `type`.
```java
@type
Fruit:
    .name  : String
    .price : Number
```
Then, we have a function that will modify the price of a `Fruit` to 99.
```java
@function
changePriceOf (fruit:Fruit) -> Void
    fruit.price <- 99
```
Now, let say in our main program we created a new `Fruit` object.
```java
let myFruit:Fruit = 
    .name  = 'Pineapple'
    .price = 88
```
Let's try to call the `changePriceOf` function.
```python
changePriceOf myFruit # Compile error
```
The statement above will result in compile error, because we already binded the value `88` to `myFruit.price`.  

So, how can we fix this?  

Easy, just by changing the binding operator (`=`) to assignment operator (`<-`) .
```python
let myFruit: Fruit =
    .name   = 'Pineapple'
    .price <- 88

changePriceOf myFruit # No error
```
But, you may ask *'How can this idea help me to debug my code?'*.  
The answer is simple,  **just look for the `<-` symbol** !  
Because all the unexpected things happen when we change the value of a variable.

### Smart detection
Not only you can't re-assign value to a binded variable, you also can't use assignment on a variable which its future value is not changed!  For example:  
```Java
let x <- 5 // Warning: The value of `x` is not reassigned, please consider changing `<-` to `=`.
let y <- 6
y <- 7
```

## How to specify type?
You can also specify type when declaring a variable by using colon (`:`) . It's just like Typescript.
```
let x: Number = 2
let y: Number = "123" # Error
```

## Naming Rules
- All variable names must consist of only alphanumeric characters or `$` sign.
- A variable name must not start with a Number. 
- A variable name cannot contain any symbol other than `$`.

Thus, the only naming convention allowed is `camelCase`.   
All other naming convention such as `snake_case` or `kebab-case` are forbidden.

### Example

|Variable Name|Valid or not|  
|--|--|  
|x|valid|  
|$|valid|  
|hello_there|Invalid, cannot contain underscore ( `_` ) |  
|12ve|Invalid, cannot start with Number
|ve12|Invalid, cannot start with Number
|goodBye|Valid
