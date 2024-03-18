/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
    function heapify(nums, n, i) {
        let largest = i;
        let left = 2 * i + 1;
        let right = 2 * i + 2;

        if (left < n && nums[left] > nums[largest]) {
            largest = left;
        }
        if (right < n && nums[right] > nums[largest]) {
            largest = right
        }
        if (largest !== i) {
            [nums[largest], nums[i]] = [nums[i], nums[largest]];
            heapify(nums, n, largest);
        }
    }

    function heapSort(nums) {
        let n = nums.length;
        for (let i = Math.floor((n / 2) - 1); i >= 0; i--) {
            heapify(nums, n, i)
        }
        for (let i = n - 1; i > 0; i--) {
            [nums[0], nums[i]] = [nums[i], nums[0]];
            heapify(nums, i, 0)
        }
    }
    heapSort(nums);
    return nums;
}