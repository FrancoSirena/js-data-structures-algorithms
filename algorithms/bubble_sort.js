const getArray = require('./generate_array.js')
/*
 * Two loops:
 * - Outer Loop: from 0 to last
 * - Inner Loop: from 0 to last - outer loop pos
 *
 * If current is greater than next, swap them and indicate. Always current and the one right next to it.
 * Do until inner loop is exhausted and then go the next Outer loop pos, doing
 * the exact same thing, we always go from 0 to last - i because we know the
 * last will always be correct, since, it will always be moving it to the end
 * in each loop.
 * We always go from 0 because we change just 1 place at a time, so we swap a
 * number that is lesser than the one before ( current - 1 ) we need to run
 * from zero again to do that change, the ony guaranteed change that will
 * always be accurate is the moving it further.
 * The swapped indicator helps us to identify if a loop from Outer 0 to last -
 * outer index have no changes, if nothng happen it means our array is sorted
 * so we don't need to loop again.
 * 
 * Best case scenario: O(n) - Array sorted so we loop over it just once
 * Wrost case scenario: O(n*n)- When the array has the smaller item in the last position
 */
function bubbleSort(arr) {
	console.time('bubble');
	let swapped = false

	for (let i = 0; i < arr.length; i++) {
		swapped = false
		for (let j = 0; j < arr.length - i - 1; j++) {
			if (arr[j] > arr[j+1]) {
				const t = arr[j]
				arr[j] = arr[j+1]
				arr[j+1] = t
				swapped = true
			}
		}
		if (!swapped) {
			break
		}
	}

	console.timeEnd('bubble')
	return arr
}

if (require.main === module) {
	console.log(bubbleSort(getArray(10000)))
 }
