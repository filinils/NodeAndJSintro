import dotenv from "dotenv"

function foo(param, param2) {
	var varWithoutIndent = "I am declared as Var make me a Let instead"
	//Lots of line breaks

	const curlybracketonsameline = true
	if (curlybracketonsameline) {
	}
	return varWithoutIndent
}

dotenv.config()

console.log(process.env.foo)
console.log(foo())
