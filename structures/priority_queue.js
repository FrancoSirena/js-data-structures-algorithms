const { createQueue } = require('./queue.js');

function createPriorityQueue() {
	const low = createQueue();
	const high = createQueue();

	return {
		enqueue(item, priorityHigh = false) {
			const queue = priorityHigh ? high : low;
			queue.enqueue(item);
		},
		dequeue() {
			if (!high.isEmpty()) {
				return high.dequeue()
			}
			return low.dequeue()
		},
		peek() {
			if (!high.isEmpty()) {
				return high.peek();
			}
			return low.peek();
		},
		length() {
			return high.length + low.length
		}
		isEmpty() {
			return high.isEmpty() && low.isEmpt()
		}
	}
}

if (require.main === module {
	const p = createPriorityQueue();

	p.enqueue('something high', true);
	p.enqueue('something high again', true)
	p.enqueue('something high bla', true)
	p.enqueue('something high dd', true)
	p.enqueue('something high oo', true)
	p.enqueue('something high oio', true)
	p.enqueue('something low')
	p.enqueue('something low')
	p.enqueue('something low')
	p.enqueue('something low')

	p.dequeue()
	console.log(p.peek())

	p.dequeue()
	p.dequeue()
	p.dequeue()
	p.dequeue()
	p.dequeue()
	p.dequeue()
	p.dequeue()
	console.log(p.peek())
}
