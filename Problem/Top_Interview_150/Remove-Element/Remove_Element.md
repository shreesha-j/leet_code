# 27. Remove Element
# Easy
# URL: https://leetcode.com/problems/remove-element/
# Description:
'''
Given an integer array `nums` and an integer `val`, remove all occurrences of `val` in `nums` in-place. The relative order of the elements may be changed.
Then the number of elements in `nums` which are not equal to `val` .

Consider the number of the element in `nums` which are not equal to `val` is `k`, to get accepted, you should do this:

1. Change the array `nums` such that the first `k` elements move to the first `k` elements of the array `nums` containing the elements that are not equal to `val`.
the remaining elements of `nums` are not important. as well as the size of nums.

2. Return `k`.

Custom Judge:

The judge will test your solution with the following code:

int[] nums = [...]; // Input array
int val = ...; // Input value
int[] expectedNums = [...]; // The expected answer with correct length.
// It is sorted with no values equal to val.
int k = removeElement(nums, val); // Calls your implementation
assert k == expectedNums.length;
sort(nums, 0, k); // Sort the first k elements of nums
for (int i = 0; i < actualLength; i++) {
    assert nums[i] == expectedNums[i];
}
If all assertions pass, then your solution will be accepted.

Example 1:
Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2,_,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 2.
It does not matter what you leave beyond the returned k (hence they are underscores).

Example 2:
Input: nums = [0,1,2,2,3,0,4,2], val = 2
Output: 5, nums = [0,1,4,0,3,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 1, 3, 0, and 4.
Note that the five elements can be returned in any order.
It does not matter what you leave beyond the returned k (hence they are underscores).

Constraints:
0 <= nums.length <= 100
0 <= nums[i] <= 50
0 <= val <= 100
'''

## Solution:

[comment]: <> (Approach: Two Pointers)
[comment]: <> (Complexity Analysis)
[comment]: <> (Time complexity: O\(n\))
[comment]: <> (Space complexity: O\(1\))

- Approach: Two Pointers
    - We can keep two pointers `i` and `j`, where `i` is the slow-runner while `j` is the fast-runner.
    - When `nums[j]` equals to the given value, skip this element by incrementing `j`. As long as `nums[j]` != `val`, we copy `nums[j]` to `nums[i]`
    and increment both indexes at the same time. Repeat the process until `j` reaches the end of the array and the new length is `i`.
