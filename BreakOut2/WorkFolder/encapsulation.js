class Foo {
	constructor() {
		this.baz = "My var!"
	}
	bar() {
		console.log("Bark!!")
	}
}

//Always public methods and variables

const mydeclare = new Foo()

console.log(mydeclare.baz)
// "My var!"
mydeclare.bar()
// "Bark!!"

//Revealing module pattern

function Ram(param1) {
	const thisVar = param1
	const hidden = "hidden"

	function bam() {
		console.log("Woff")
		console.log(this.thisVar)
		console.log(hidden)

		hiddenBam()
	}
	function hiddenBam() {
		console.log("Nooooo!")
	}
	//You can decide what to return
	return { bam, thisVar }
}

try {
	Ram().hiddenBam()
} catch (error) {
	console.log("error---->" + error)
	// TypeError: Ram(...).hiddenBam is not a function
}

Ram("MyParam").bam()

// "Woff"
// "MyParam"
// "hidden"
// "Nooooo!""

const { bam, thisVar } = new Ram("Setting inner var")

console.log("I'm on the outside--->", thisVar)
bam()

//Just working my way up the food chain
const anotherDecalare = Ram()
console.log("What am I?----->", anotherDecalare.thisVar)
