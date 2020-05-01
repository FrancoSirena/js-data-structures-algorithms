const { createQueue} = require('./queue.js')
function createNode(key) {
	const neighbors = []
	return {
		key,
		neighbors,
		addNeighbor(node) {
			neighbors.push(node)
		}
	}
}

function createGraph(directed = false) {
	const nodes = new Map()
	const edges = []

	return { 
		directed,
		nodes,
		edges,
		addNode(key) {
			nodes.set(key, createNode(key))
		},
		getNode(key) {
			return nodes.get(key)
		},
		addEdge(node1Key, node2Key) {
			const node1 = this.getNode(node1Key)
			const node2 = this.getNode(node2Key)

			node1.addNeighbor(node2)
			edges.push(`${node1Key} - ${node2Key}`)
			if (!directed) {
				node1.addNeighbor(node1)
			}
		},
		breadthFirstSearch(start, visitFn) {
			const startNode = this.getNode(start)
			const visited = new Map([...nodes.keys()].map(key => [key, false]))
			const queue = createQueue()
			queue.enqueue(startNode)

			while (!queue.isEmpty()) {
				const current = queue.dequeue()
				if (!visited.get(current.key)) {
					visitFn(current)
					visited.set(current.key, true)
				}

				current.neighbors.forEach(node => {
					if (!visited.get(node.key)) {
						queue.enqueue(node)
					}
				})
			}
		},
		depthFirstSearch(start, visitFn) {
			const startNode = this.getNode(start)
			const visited = new Map([...nodes.keys()].map(key => [key, false]))
			function depth(node) {
				if (visited.get(node.key)) {
					return
				}
				visited.set(node.key, true)
				visitFn(node)

				node.neighbors.forEach(depth)
			}
			depth(startNode)
		},
		print() {
			let result = []
			for (const [key, value] of nodes.entries()) {
				let row = key
				if (value.neighbors.length) {
					row += ` => ${value.neighbors.map(( {key} ) => key).join(' ')}`
				}
				result.push(row)
			}
			return result.join('\n')
		}
	}
}

if (require.main === module) {
	const g = createGraph(true)
	g.addNode('Dani')
	g.addNode('Franco')
	g.addNode('Marco')
	g.addNode('Bianca')
	g.addNode('Diego')
	g.addNode('Cela')
	g.addNode('Nereu')

	g.addEdge('Franco', 'Dani')
	g.addEdge('Dani', 'Franco')
	g.addEdge('Marco', 'Diego')
	g.addEdge('Diego', 'Marco')
	g.addEdge('Marco', 'Bianca')
	g.addEdge('Bianca', 'Marco')
	g.addEdge('Franco', 'Bianca')
	g.addEdge('Franco', 'Marco')
	g.addEdge('Dani', 'Marco')
	g.addEdge('Dani', 'Cela')
	g.addEdge('Cela', 'Nereu')
	g.addEdge('Dani', 'Nereu')
	console.log(g.print())
	console.log('///////')
	console.time('Breadth')
	g.breadthFirstSearch('Dani', ({ key }) => console.log(key))
	console.timeEnd('Breadth')

	console.log('\\\\\\\\')
	console.time('Depth')
	g.depthFirstSearch('Dani', ({ key }) => console.log(key))
	console.timeEnd('Depth')
}
			
