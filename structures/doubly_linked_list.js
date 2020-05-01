function createNode(value) {
	return {
		value,
		next: null,
		previous: null,
	}
}

function createDoublyLinkedList() {
	return {
		head: null,
		tail: null,
		length: 0,
		push(value) {
			const node = createNode(value)
			if (!this.head) {
				this.head = node
				this.tail = node
			} else {
				const prev = this.tail
				this.tail.next = node
				this.tail = node
				this.tail.previous = prev
			}
			this.length++
			return node
		},
		get(index) {
			if (index < 0 || index > this.length) {
				return null
			}
			if (index < this.length / 2) {
				let i = 0
				let current = this.head

				while (i < index) {
					i++
					current = current.next	
				}
				return current
			} else {
				let i = this.length
				let current = this.tail

				while (i > index) {
					i--
					current = current.previous
				}
				return current
			}
		},
		print() {
			let current = this.head
			const list = []
			const inverted = []
			while (current) {
				list.push(current.value)
				current = current.next
			}
			current = this.tail.previous
			while (current) {
				inverted.push(current.value)
				current = current.previous
			}

			
			const ltr = list.join(' => ')
			const rtl = inverted.join(' <= ')

			return ltr + ' <= ' +  rtl
		},
		delete(index) {
			if (index <= 0 || index >= this.length) {
				return null
			}
			if (index < this.length / 2) {
				let current = this.head
				let prev
				let i = 0

				while (i < index) {
					i++
					prev = current
					current = current.next
				}
				prev.next = current.next
				current.next.previous = prev
				this.length--
				return current
			} else {
				let current = this.tail
				let next 
				let i = this.length

				while (i >  index) {
					i--
					next = this.tail
					current = current.previous
				}

				next.previous = current.previous
				current.previous.next = next
				this.length--
				return current
			}
		},
		pop() {
			if (this.length <= 1) {
				return null
			}
			const node = this.tail
			this.tail = this.tail.previous
			this.tail.next = null
			return node
		}

	}
}

if (require.main==module) {
	const list = createDoublyLinkedList()

	const nodes = ['a','b','c','d','e', 'f', 'g', 'h', 'i'].map(item => list.push(item))

	console.log(list.tail.previous)
	console.log(list.print())
	console.log(list.pop())
	console.log(list.print())
}

				
