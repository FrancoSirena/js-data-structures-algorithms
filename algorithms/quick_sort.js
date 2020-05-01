const getArray = require('./generate_array')

/**
 *
 * Recrusive sorting
 *
 * We begin by taking a `pivot` and then compare it our items to it, if the
 * `pivot` is greater than it goes to the right if not it goes to left, and
 * then our result is quickSorting the left, the pivot and quickSorting the
 * right.
 *
 * Time complexity: O(logN)
 */
function quickSort(array) {
	if (array.length < 2) {
		return array
	}

	const pivotIndex = array.length - 1 
	const pivot = array[pivotIndex]
	const left = []
	const right = []

	for (let i = 0; i < pivotIndex; i++) {
		if (array[i] < pivot) {
			left.push(array[i])
		} else {
			right.push(array[i])
		}
	}

	return [
		...quickSort(left),
		pivot,
		...quickSort(right)
	]
}


if (require.main === module) {
	console.time('quick')
	const i = getArray(10000)
	const r = quickSort(i)
	console.timeEnd('quick')
	console.log(r)
}
