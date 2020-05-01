function createNode(value) {
	return {
		next: null,
		value,
	}
}

function createLinkedList() {
	return {
		head: null,
		tail:null, 
		length: 0,
		isEmpty() {
			return this.length === 0
		},
		push(value) {
			const node = createNode(value);
			if (!this.head) {
				this.head = node;
				this.tail = node;
				this.length++;
				return node;
			}
				this.tail.next = node
				this.tail = node
				this.tail.next = this.head
			this.length++
			return node;
		},
		pop() {
			if (this.isEmpty()) {
				return null
			}
			const node = this.tail

			if (this.head === this.tail) {
				this.head = null
				this.tail = null
				this.length--
				return node
			}
			let current = this.head
			let pen
			while (current) {
				if (current.next === this.tail) {
					pen = current
					break
				}
				current = current.next
			}
			pen.next = null
			this.tail = pen
			this.tail.next = this.head
			this.length--
			return node
		},
		get(index) {
			if (index < 0 || index > this.length - 1) {
				return null
			}
			if (index ===0) {
				this.head
			}
			let i = 0;
			let current = this.head
			while (i < index) {
				i++
				current = current.next
			}

			return current
		},
		delete(index) {
			if ( index < 0 || index >this.length -1 ) {
				return null
			}
			if (index === 0) {
				const deleted = this.head
				this.head = this.head.next
				this.tail.next = this.head
				this.length--

				return deleted
			}
			/** we loop through our list and we keep track of
			 * current.next because that is the one we are goint to
			 * delete. We store it in the previous node in a
			 * variable.  as we go through the list we always move
			 * ahead to next value, by the end we can change the
			 * previous.next value to the current.next value, so we
			 * eliminate the current value from there.
			 */
			let current = this.head
			let previous
			let i = 0
			while (i < index) {
				i++
				previous = current
				current = current.next
			}

			const deleted = current
			previous.next = current.next

			if (previous.next === this.head) {
				this.tail = previous
			}

			this.length--

			return deleted
		},
		print() {
			const values = []
			let current = this.head
			let i = 0;

			while (i <= this.length) {
				values.push(current.value)
				current = current.next
				i++
			}

			return values.join(' => ')
		}


	}
}


if (require.main === module) {
	const list = createLinkedList();
	const nodes = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'nineth', 'tenth'].map(val => list.push(val))
	console.log(list.pop())
	console.log(list.delete(0))
	console.log(list.delete(4))
	console.log(list.delete(7))
	console.log(list.print())
}
