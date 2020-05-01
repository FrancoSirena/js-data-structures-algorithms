const getArray = require('./generate_array');
/**
 * We do two loops here:
 * Outer Loop: From 1 to last
 * Inner Loop: From 0 to Outer pos
 *
 * If our Outer item is lesser than our Inner item we swap places.
 * We keep a pivot that is the outer loop index, and we always compare that one
 * to the ones on its right, and move it if necessary. 
 * It is faster because we take ONE item to its right position each time, not
 * just by comparing the direct neighbour.
 *
 * Time complexity: O(n*2) - Because we always go at least from 0 to last and
 * from the inner loop can go as much as that too
 */
function insertionSort(array){
	console.time('sort')
	for (let i = 1; i < array.length; i++) {
		for (let j = 0; j < i; j++) {
			if (array[j] > array[i]) {
				const item = array[i]
				array[i] = array[j] 
				array[j] = item
			}
		}
	}
	console.timeEnd('sort')
	return array
}

if (require.main === module) {
	console.log(insertionSort(getArray(10000)))
}
