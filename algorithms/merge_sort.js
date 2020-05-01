const getArray = require('./generate_array')
/**
 * Here we use recursion to solve it.
 *
 * We start calling our `merge` method recursevely using our `mergeSort` method
 * to divide them and call it with its halves.  So, first we call our merge with
 * our mergeSort of left half of the array and
 * our mergeSort of the right half of the array. 
 * Our recursion resolves each side on its time, so first we merge left side of
 * our initial array, all the way until we have a sorted left, then the same
 * happens for our right side of it.
 * With both sides sorted we just merge those two results, which is the result
 * of our first call of the recursion.
 *
 * Time complexity: O(logN)
 */
function mergeSort(array) {
	if (array.length < 2) {
		return array
	}

	const middle = Math.floor(array.length /2)
	const left = array.slice(0, middle)
	const right = array.slice(middle)

	return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
	const sorted = []
	while (left.length && right.length) {
		if (left[0] <= right[0]) {
			sorted.push(left.shift())
		} else {
			sorted.push(right.shift())
		}
	}
	const res = [...sorted, ...left, ...right]
	return res
}

if (require.main === module) {
	console.time('merge')
	const result = mergeSort(getArray(10000))
	console.timeEnd('merge')
	console.log(result)
}
