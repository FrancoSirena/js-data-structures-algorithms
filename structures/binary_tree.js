function createBinaryNode(key) {
	return {
		key,
		left: null,
		right: null,
		addLeft(leftKey) {
			const left = createBinaryNode(leftKey)
			this.left = left
			return left
		},
		addRight(rightKey) {
			const right = createBinaryNode(rightKey)
			this.right = right
			return right
		}
	}
}

const transversal = {
	IN_ORDER: (node, visitFn) => {
		if (node !== null) {
			transversal.IN_ORDER(node.left, visitFn)
			visitFn(node)
			transversal.IN_ORDER(node.right, visitFn)
		}
	},
	PRE_ORDER: (node, visitFn) => {
		if (node !== null) {
			visitFn(node)
			transversal.PRE_ORDER(node.left, visitFn)
			transversal.PRE_ORDER(node.right, visitFn)
		}
	},
	POST_ORDER: (node, visitFn) => {
		if (node !== null) {
			transversal.POST_ORDER(node.left, visitFn)
			transversal.POST_ORDER(node.right, visitFn)
			visitFn(node)
		}
	}
}

function createBinaryTree(rootKey) {
	const root = createBinaryNode(rootKey)

	return {
		root,
		print(transversalType = 'IN_ORDER') {
			let result = ''

			const visit = node => {
				result += result.length === 0 ? node.key : ` => ${node.key}`;
			}

			transversal[transversalType](this.root, visit);

			return result
		}
	}
}

if (require.main === module) {
	const tree = createBinaryTree('a')
	const b = tree.root.addLeft('b')
	const c = tree.root.addRight('c')
	const d = b.addLeft('d')
	const e = b.addRight('e')
	const f = c.addLeft('f')
	const g = c.addRight('g')
	const h = d.addLeft('h')
	const i = d.addRight('i')

	// In Order
	console.log('IN ORDER: ', tree.print())
	// Pre Order
	console.log('PRE ORDER: ', tree.print('PRE_ORDER'))
	// Post Order
	console.log('POST ORDER: ', tree.print('POST_ORDER'))
}

