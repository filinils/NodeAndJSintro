
# Working with JS in Node runtime

## Object oriented or functional?

When a new object is created in JS it is always linked back to another object. So even if you use the `new` keyword an object still has a "parent/creator. Everything starts with `Object.`

Example in browser console: 
```js
function foo() {return "hello" }

function bar() {return foo()}

bar()
```
Result: 
```js
"hello"
```
How can `bar` execute `foo`? This is because they are created in the same scope `window` in this case. 

## Composition vs iheritance

In JS objects are smashed together rather then ineheriting properties. In the example above both `foo` and `bar`has all the properites of `window` but from a different scope.  

## Encapsulation
To enable encapsulation it is important to realise the object chain and apply good strategies to not polute the global scope eg. `window` in a browser and `global` in Node. 

In JS you always have to namespace and making sure that the same name for some action or property is not present in the parent chain of objects. If a property is not found in the "local" scope the runtime will continue to look for the property in the object above the local scope recursivly. 

* automatic props binding

```js
function foo(){}

foo.bar = "Hello"

console.log(foo.bar)
"Hello"

```
* class syntax
```js
class Foo(){
constructor()
}
```
[Example file](./encapsulation.js)


* Revealing module pattern

[Example file](./encapsulation.js)

## The `"new"` keyword

What happens when the runtime "run" into the "new" keyword

1) POFF a new object is created,
2) the object is linked to another object,
3) This is bound on the `this` keyword
4) if the object don't have a return statement "this" is returned, aka the newly created object

## Splitting a program into several files



### Classic NodeJS style: Commonjs Module system

```js
// Module exports function
modules.exports = ()=>{
    ...
}

// Module exports prop
modules.exports.foo = "Hello" 

```

Example in [CommonJS modules](./module.js)

### ES6 style modules

* Default export: [Example](./es6DefaultModule.js)

    * Can only have one per module

* Named export: [Example](./es6Module.js)
    * Can have many per module

* Import example: [Example](./esImporter.js)

## Async with JS


![Image](https://media-exp1.licdn.com/dms/image/C4D12AQHa1LsJMYtEyA/article-cover_image-shrink_600_2000/0/1520167979283?e=1625702400&v=beta&t=ABQcWNRowsERddmVa29P2o6MvXzJQDI9pc9m70RriI8)

JS is one threded witch means that even if several asynchronus operations are running at the same time the runtime will only take up one thred from the CPU.

A simple example of this effect
```js

function operation(){

    doSomeWorkAsync(finish)
    console.log("Doing some work before the asyns task is done")

    function finish(){
        console.log("The async task is finished")
    }
}

function doSomeWorkAsync(cb){

setTimeout(cb,2000)

}

```
The asynchronus nature of JS has caused developer headache for decades aka `"callback hell"`,which has led to some new strategies to write code that looks more like synchronous code with the `Promise` as well as the `async` keyword. This way the developer can control in what order the return should be handled. 


## Utilizing built in functionality in Node

### Reading and writing to file
Node has a built in file access library called `file system` ofted abriviated `fs`

The documentation can be found here: [Node doc](https://nodejs.org/api/fs.html)

As a short hand here is an example of reading a file:

```js
import * as fs from "fs/promises"

fs.readFile("example.txt",options)
            .then((fileContent)=>{
                    console.log(fileContent)
                    })


//You can also read files synchronous


import * from fs from "fs"

const fileContent = fs.readFileSync("example.txt")

console.log(fileContent)


```


### Answering an HTTP request from Node 

Node is most commonly used for handling HTTP request and often return JSON structured data aka RESTful api's. There are 4 common verbs that a RESTFul api's can handle GET,PUT,POST and DELETE to be able serve as a simple CRUD application. 

You can find the `HTTP`documentation [here](https://nodejs.org/api/http.html)

Here is an example that returns `"hello"` on a `GET` request

```js
const server = http.createServer((req, res) => {

    if(req.method === "GET"){
	res.write("hello")
    }
    res.end()

})

server.listen(8080)

```


# Exercise checklist

1) Create a logger that writes(appends) logs to a simple text file.
    * The logger should be a module in it's own file
    * It should only reveal logging functions eg.  `"log"`, `"debug"` and `"error"` all other inner functionality need to be hidden.
2) Create a mock db call with `setTimeout` 
    * optional: the "db" can be stored in another module
3) Create a simple `HTTP` endpoint that serves the db call. 



