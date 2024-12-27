# Problem - 88. Merge Sorted Array
# URL: https:://leetcode.com/problems/merge-sorted-array/
# Difficulty: Easy

# Problem description
"""
You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge `nums1` and `nums2` into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function,
but instead be stored inside the array `nums1`.
To accommodate this, `nums1` has a length of `m + n`,
where the first `m` elements denote the elements that should be merged,
and the last `n` elements are set to `0` and should be ignored.
`nums2` has a length of `n`.

Example 1:
    Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
    Output: [1,2,2,3,5,6]
    Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
    The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

Example 2:
    Input: nums1 = [1], m = 1, nums2 = [], n = 0
    Output: [1]
    Explanation: The arrays we are merging are [1] and [].
    The result of the merge is [1].

Example 3:
    Input: nums1 = [0], m = 0, nums2 = [1], n = 1
    Output: [1]
    Explanation: The arrays we are merging are [] and [1].
    The result of the merge is [1].

Constraints:
    - nums1.length == m + n
    - nums2.length == n
    - 0 <= m, n <= 200
    - 1 <= m + = 200
    - -10^9 <= nums1[i], nums2[j] <= 10^9

Follow up: Can you come up with an algorithm that runs in O(m + n) time?
"""

## Solution
[-] Time Complexity: O(m+n) - where m is the length of nums1 and n is the length of nums2 [m+n is the length of the merged array] (Need to be achieved)
[-] Space Complexity: O(1) - No extra space is used

- Approach:
    - Start from the end of the merged array and compare the elements from the end of both arrays.
    - Place the greater element at the end of the merged array.
    - Continue this process until all the elements are merged.
