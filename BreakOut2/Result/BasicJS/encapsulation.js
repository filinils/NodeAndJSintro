class Foo {
  constructor() {
    this.baz = 'My var!'
  }
  bar() {
    console.log('Bark!!')
  }
}

//Always public methods and variables ??

const mydeclare = new Foo()

console.log(mydeclare.baz)
mydeclare.bar()

function Ram(param1) {
  const thisVar = param1
  const hidden = 'hidden'

  function bam() {
    console.log('Woff')
    console.log(this.thisVar)
    console.log(hidden)
  }
  function hiddenBam() {
    console.log('Nooooo!')
  }
  //You can dicide what to return
  return { bam, thisVar }
}
//The "new" keyword
//1) POFF a new object is created,
//2) the object is linked to another object,
//3) this is bound for the this keyword
//4) is no return statement "this" is return aka the newly created object :-)

const { bam, thisVar } = new Ram('Setting inner var')

console.log("I'm on the outside--->", thisVar)
bam()

//Just working my way up the food chain
const anotherDecalare = Ram()
console.log('What am I?----->', anotherDecalare.thisVar)
