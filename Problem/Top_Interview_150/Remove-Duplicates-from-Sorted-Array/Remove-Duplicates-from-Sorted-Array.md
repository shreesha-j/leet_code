# 26. Remove Duplicates from Sorted Array
# URL: https://leetcode.com/problems/remove-duplicates-from-sorted-array/
# Difficulty: Easy

# Problem description
"""
Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.
Then return the length of the unique elements.

Consider The number of unique elements of `nums` is `k`.to get accepted, you need to do the following things:

1. Change the array nums such that the first k elements of nums contain the unique elements
in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.

2. Return k.

Custom Judge:

The judge will test your solution with the following code:

```
int [] nums = [...]; // Input array
int [] expectedNums = [...]; // The expected answer with correct length

int k = removeDuplicates(nums); // Calls your implementation

assert k == expectedNums.length;
for (int i = 0; i < k; i++) {
    assert nums[i] == expectedNums[i];
}
```

If all assertions pass, then your solution will be accepted.

Example 1:
Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).

Example 2:
Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).

Constraints:
- 0 <= nums.length <= 3 * 10^4
- -100 <= nums[i] <= 100
- nums is sorted in non-decreasing order.
"""

# Time complexity: O(n)
# Space complexity: O(1)

## Approach:
# 1. Initialize a pointer `i` at 0.
# 2. Iterate over the array from index 1 to the end.
# 3. If the current element is not equal to the element at index `i`, increment `i` and set the element at index `i` to the current element.
# 4. Return `i + 1`.

