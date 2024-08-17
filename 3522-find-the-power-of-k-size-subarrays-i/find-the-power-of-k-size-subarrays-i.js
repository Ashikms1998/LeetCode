var resultsArray = function (nums, k) {
    let finalArr = [];

    // Generate all subarrays of size k
    for (let starting = 0; starting <= nums.length - k; starting++) {
        let subArr = nums.slice(starting, starting + k);
        
        // Check if the subarray is consecutive and sorted
        let isConsecutive = true;
        for (let i = 1; i < k; i++) {
            if (subArr[i] !== subArr[i - 1] + 1) {
                isConsecutive = false;
                break;
            }
        }
        
        // Add result to finalArr
        if (isConsecutive) {
            finalArr.push(Math.max(...subArr));
        } else {
            finalArr.push(-1);
        }
    }

    return finalArr;
};
