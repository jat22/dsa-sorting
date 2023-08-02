function merge(arr1, arr2) {
	let result = []
	let pt1 = 0;
	let pt2 = 0
	while(arr1.length > pt1 && arr2.length > pt2){
		if(arr1[pt1] < arr2[pt2]){
			result.push(arr1[pt1])
			pt1++
		} else {
			result.push(arr2[pt2])
			pt2++
		}
	}
	if(arr1.length > pt1){
		result.push(...arr1.slice(pt1))
	}
	if(arr2.length > pt2){
		result.push(...arr2.slice(pt2))
	}
	return result
}

function mergeSort(arr) {
	if(arr.length <= 1) return arr
	let mid = Math.floor(arr.length / 2)
	let left = mergeSort(arr.slice(0, mid))
	let right = mergeSort(arr.slice(mid))
	return merge(left, right)
}

module.exports = { merge, mergeSort};