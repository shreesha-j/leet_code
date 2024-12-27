# 80. Remove Duplicates from Sorted Array II
# https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/

## Problem
Given an integer array `nums` sorted in non-decreasing order,
remove some duplicates in-place such that each unique element appears at most twice.
The relative order of the elements should be kept the same.

Since it is impossible to change the length of the array in some languages,
you must instead have the result be placed in the **first part** of the array `nums`.
More formally, if there are `k` elements after removing the duplicates,
then the first `k` elements of `nums` should hold the final result.
It does not matter what you leave beyond the first `k` elements.

Return `k` after placing the final result in the first `k` slots of `nums`.

Do not allocate extra space for another array. You must do this by **modifying the input array in-place** with `O(1)` extra memory.

**Custom Judge:**

The judge will test your solution with the following code:

```java
int[] nums = [...]; // Input array
int[] expectedNums = [...]; // The expected answer with correct length

int k = removeDuplicates(nums); // Calls your implementation

assert k == expectedNums.length;
for (int i = 0; i < k; i++) {
    assert nums[i] == expectedNums[i];
}
```

If all assertions pass, then your solution will be **accepted**.

### Example 1

```java
Input: nums = [1,1,1,2,2,3]
Output: 5, nums = [1,1,2,2,3,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 1, 1, 2, 2, and 3 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
```

### Example 2

```java
Input: nums = [0,0,1,1,1,1,2,3,3]
Output: 7, nums = [0,0,1,1,2,3,3,_,_]
Explanation: Your function should return k = 7, with the first seven elements of nums being 0, 0, 1, 1, 2, 3, and 3 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
```

### Constraints

- `1 <= nums.length <= 3 * 10^4`
- `-10^4 <= nums[i] <= 10^4`
- `nums` is sorted in non-decreasing order.
```

## Approach
- Initialize a pointer `i` at 0.
- Loop over the array from index 2 to the end.
- If the current element is not equal to the element at index `i`, increment `i` and set the element at index `i` to the current element.
- Return `i + 1`.

## Complexity Analysis
- Time complexity: `O(n)` where `n` is the length of the array.
- Space complexity: `O(1)`


## Code
```java
public int removeDuplicates(int[] nums) {
    if (nums.length <= 2) {
        return nums.length;
    }
    int i = 0;
    for (int j = 2; j < nums.length; j++) {
        if (nums[j] != nums[i]) {
            i++;
            nums[i + 1] = nums[j];
        }
    }
    return i + 2;
}
```

```python
