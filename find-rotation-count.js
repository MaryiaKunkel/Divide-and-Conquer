function findRotationCount(arr) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    
    while (leftIdx <= rightIdx) {
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        let middleVal = arr[middleIdx];

        if (arr[leftIdx] < arr[rightIdx]) {
            return 0;
        }
        if (middleVal < arr[middleIdx - 1]) {
            return middleIdx;
        } else if (middleVal > arr[rightIdx]) {
            leftIdx = middleIdx + 1;
        } else {
            return leftIdx
        }
    }
    return 0;

}

// module.exports = findRotationCount

console.log(findRotationCount([15, 18, 2, 3, 6, 12])) // 2
console.log(findRotationCount([7, 9, 11, 12, 5])) // 4
console.log(findRotationCount([7, 9, 11, 12, 15])) // 0