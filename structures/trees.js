
function createNode(key) {
	const children = []
	return {
		key,
		children,
		addChild(childKey) {
			const childNode = createNode(childKey)
			children.push(childNode)
			return childNode
		}
	}
}

function createTree(rootKey) {
	const root = createNode(rootKey)

	return {
		root,
		print() {
			let result = ''
			function traverse(node, visitFn, depth=1) {
				visitFn(node, depth)

				if (node.children.length) {
					node.children.forEach(child => traverse(child, visitFn, depth + 1))
				}
			}
			function addKeyToResult(node, depth) {
				result += result.length == 0 ? node.key : `\n${' '.repeat(depth * 2)}${node.key}`;
			}
			traverse(root, addKeyToResult)
			return result
		}

	}
}

const dom = createTree('html')
const head = dom.root.addChild('head')
const body = dom.root.addChild('body')
const title = head.addChild('title - lesson')
const header = body.addChild('header')
const main = body.addChild('main')
const footer = body.addChild('footer')
const h1 = header.addChild('h1 - Tree')
const p = main.addChild('paragraph')
const copyright = footer.addChild('Mine')
console.log(dom.print())
