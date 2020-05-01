function createNode(value) {
	return {
		next: null,
		value,
	}
}

function createLinkedList() {
	return {
		head: null,
		tail: null,
		length: 0,
		isEmpty() {
			return this.length === 0
		},
		push(value) {
			const node = createNode(value);
			/** 
			 * If no head is present then we have an empty list.
			 * Then the HEAD and the TAIL are the node
			 *
			 * In the following pushs we then take the tail.next,
			 * that is null at beggining, and set it to the new
			 * object. The address in the memory for tail.next is
			 * always HEAD.next * N, we then can safely update the
			 * this.tail reference to the new object.  The piece
			 * that keeps track of it all is always the this.head,
			 * that reference does not change after its creation,
			 * we then just add more { next: } objects to each
			 * layer of it.
			 */
			if (!this.head) {
				this.head = node;
				this.tail = node;
				this.length++;
				return node;
			}
			this.tail.next = node;
			this.tail = node;
			console.log(this.tail, this.tail.node);
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

			if (previous.next === null) {
				this.tail = previous
			}

			this.length--

			return deleted
		},
		print() {
			const values = []
			let current = this.head

			while (current) {
				values.push(current.value)
				current = current.next
			}

			return values.join(' => ')
		}


	}
}


if (require.main === module) {
	const list = createLinkedList();
	const nodes = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth'].map(val => list.push(val))
	console.log(list.print())
	console.log(list.pop())
	console.log(list.head)
	console.log(list.delete(2))
	console.log(list.print())
}
