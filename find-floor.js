function findFloor(arr, val) {
    let leftIdx = 0;                                          // 0
    let rightIdx = arr.length - 1;                            // 6
    let largestEl = -1;

    while (leftIdx <= rightIdx) {
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2); // 3
        let middleVal = arr[middleIdx];                       // 10

        if (middleVal < val) {
            leftIdx = middleIdx + 1;
            if (middleVal > largestEl) {
                largestEl = middleVal;
            }
        } else if (middleVal > val) {
            rightIdx = middleIdx - 1;                         // 2
        } else {
            return middleIdx;
        }
    }
    return largestEl;
}

// module.exports = findFloor

console.log(findFloor([1,2,8,10,10,12,19], 9)); // 8
console.log(findFloor([1,2,8,10,10,12,19], 20)); // 19
console.log(findFloor([1,2,8,10,10,12,19], 0)); // -1



