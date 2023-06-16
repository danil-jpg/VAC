// function findArray(arr1, arr2) {
// 	let res = [];

// 	if (arr1.length === 0 || arr2.length === 0) {
// 		return []
// 	}
// 	for (let i = 0; i < arr2.length; i++) {
// 		if (arr1[arr2[i]] === undefined) {
// 			break;
// 		}
// 		res.push(arr1[arr2[i]])
// 	}
// 	return res
// }


function findArray(arr1, arr2) {
	return arr2.filter(i => i < arr1.length).map(i => arr1[i])
}//z.

console.log(findArray([0, 3, 4], [2, 4]))

