var merge = function (nums1, m, nums2, n) {
    for (let idx = m + n - 1; idx > m - 1; idx--) {
        nums1[idx] = nums2[m + n - idx - 1];
    }
    return nums1.sort((a, b) => a - b);
};

nums1 = [1, 2, 3, 0, 0, 0];
m = 3;
nums2 = [2, 5, 6];
n = 3;

console.log(merge(nums1, m, nums2, n));