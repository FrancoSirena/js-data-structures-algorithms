function createStack() {
	let stack = []

	return {
		push(item) {
			stack.push(item)
		},
		pop() {
			stack.pop()
		},
		peek() {
			return stack.slice(-1)
		},
		get length() {
			return stack.length
		},
		isEmpty() {
			return stack.length > 0
		}
	}
}

if (require.main === module) {
	const s = createStack()

	s.push('first')
	s.push('second')
	s.push('third')

	console.log(s.peek())

	s.pop()

	console.log(s.peek())
}


