function sortedFrequency(arr, val) {
    let firstIdx = findFirst(arr, val);
    let lastIdx = findLast(arr, val);
    return lastIdx - firstIdx;
}

function findFirst(arr, val) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    
    while (leftIdx <= rightIdx) {
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        let middleVal = arr[middleIdx];

        if (middleVal === val) {
            if (middleIdx === 0 || arr[middleIdx - 1] < val) {
                return middleIdx;
            } else if (arr[middleIdx - 1] === val) {
                leftIdx = middleIdx - 1;
            }
        }else if (middleVal < val) {
            leftIdx = middleIdx + 1;
        } else {
            rightIdx = middleIdx - 1;
        }
    }
    return -1;
}

function findLast(arr, val) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    
    while (leftIdx <= rightIdx) {
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        let middleVal = arr[middleIdx];

        if (middleVal === val) {
            if (middleIdx === arr.length - 1 || arr[middleIdx + 1] > val) {
                return middleIdx;
            } else {
                rightIdx = middleIdx + 1;
            }
        }else if (middleVal < val) {
            leftIdx = middleIdx + 1;
        } else {
            rightIdx = middleIdx - 1;
        }
    }
    return -1;
}
// module.exports = sortedFrequency

console.log(sortedFrequency([1,1,2,2,2,2,3],2)) // 4
console.log(sortedFrequency([1,1,2,2,2,2,3],3)) // 1
console.log(sortedFrequency([1,1,2,2,2,2,3],1)) // 2
console.log(sortedFrequency([1,1,2,2,2,2,3],4)) // -1