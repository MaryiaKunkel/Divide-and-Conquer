function findRotatedIndex(arr, val) {
    let sortedArr=[...arr]; 
    sortedArr.sort(); 
    // console.log('arr is', arr);
    // console.log('sorted arr is', sortedArr);
    let leftIdx = 0;
    let rightIdx = sortedArr.length - 1;
    
    while (leftIdx <= rightIdx) {
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        let middleVal = sortedArr[middleIdx];
    
        if (middleVal < val) {
            leftIdx = middleIdx + 1;
        } else if (middleVal > val) {
            rightIdx = middleIdx - 1;
        } else {
            return arr.indexOf(middleVal);
        }
    }
    return -1;   
}

// module.exports = findRotatedIndex

findRotatedIndex([3,4,1,2],4) // 1
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8) // 2
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3) // 6
findRotatedIndex([37,44,66,102,10,22],14) // -1
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12) // -1