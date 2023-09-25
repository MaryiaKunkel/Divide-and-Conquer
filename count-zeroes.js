function countZeroes(arr) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;

    while (leftIdx <= rightIdx) {
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        let middleVal = arr[middleIdx];

        // If the element at the mid index is 1, move to the right half
        if (middleVal === 1) {
            leftIdx = middleIdx+1;
            
        } else if (middleVal === 0) {
            // console.log(leftIdx);
            rightIdx = middleIdx - 1;
        }
    }
    return arr.length - leftIdx;
}

// module.exports = countZeroes

// countZeroes([1,1,1,1,0,0]) // 2
// countZeroes([1,0,0,0,0]) // 4
// countZeroes([0,0,0]) // 3
// countZeroes([1,1,1,1]) // 0