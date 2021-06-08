export default (fn) => {
	let thenArr = []
	let catchArr = []

	function then(fn) {
		thenArr.push(fn)
	}
	function catcher(fn) {
		catchArr.push(fn)
	}
	function resolved() {
		thenArr.forEach((fn) => {
			fn()
		})
	}
	function rejected() {
		catchArr.forEach((fn) => {
			fn()
		})
	}

	function init() {
		fn(resolved, rejected)
	}
	init()

	return { then, catcher }
}
