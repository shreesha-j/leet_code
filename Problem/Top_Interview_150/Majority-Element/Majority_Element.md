# 169. Majority Element
# https://leetcode.com/problems/majority-element/

## Problem
```
Given an array `nums` of size `n`, return the **majority element**.

The majority element is the element that appears more than `n / 2` times.
You may assume that the majority element always exists in the array.

**Example 1:**
```
Input: nums = [3,2,3]
Output: 3
```

**Example 2:**
```
Input: nums = [2,2,1,1,1,2,2]
Output: 2
```

**Constraints:**
- `n == nums.length`
- `1 <= n <= 5 * 10^4`
- `-10^9 <= nums[i] <= 10^9`

**Follow-up:** Could you solve the problem in linear time and in `O(1)` space?
```

Approach 1: Hash Map
- Count the frequency of each element using a hash map.
- Return the element with the highest frequency.

Approach 2: Boyer-Moore Voting Algorithm
- Initialize a variable `candidate` to the first element.
- Initialize a variable `count` to 1.
- Iterate over the array from index 1 to the end.
  - If the current element is equal to the `candidate`, increment `count`.
  - If the current element is not equal to the `candidate`, decrement `count`.
    - If `count` becomes 0, set the `candidate` to the current element and increment `count`.
- Return the `candidate`.

## Complexity Analysis
- Approach 1:
  - Time complexity: O(n) where n is the length of the array.
  - Space complexity: O(n) where n is the length of the array.

- Approach 2:
    - Time complexity: O(n) where n is the length of the array.
    - Space complexity: O(1)



