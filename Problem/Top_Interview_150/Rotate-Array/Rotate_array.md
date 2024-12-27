# 189. Rotate Array
# https://leetcode.com/problems/rotate-array/

```
## Description
Given an integer array `nums`, rotate the array to the right by `k` steps, where `k` is non-negative.

### Example 1
Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]

### Example 2
Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation:
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]

### Constraints
- 1 <= nums.length <= 10^5
- -2^31 <= nums[i] <= 2^31 - 1
- 0 <= k <= 10^5

### Follow-up
- Try to come up with as many solutions as you can. There are at least three different ways to solve this problem.
- Could you do it in-place with O(1) extra space?
```

**Idea:**
1. **Normalize** `k` so that `k = k % len(nums)`.
2. **Reverse** the entire array.
3. **Reverse** the first `k` elements.
4. **Reverse** the remaining `len(nums) - k` elements.

**Why it works**:
- When you reverse the entire array, the elements that should end up at the front move to the back in reversed order.
- Then reversing the first `k` elements (which were originally the last `k` in the original array) places them in the correct order at the front.
- Finally, reversing the rest puts them back in the correct order at the back.

**Complexity Analysis**
- Time complexity: O(n) where n is the length of the array.
- Space complexity: O(1)



