# Approach
- Initialize a pointer `i` at 1.
- Initialize a variable `count` to 1.
- Loop over the array from index 1 to the end.
- If the current element is equal to the element at index `i - 1`, increment `count`.
- If the current element is not equal to the element at index `i - 1`, set `count` to 1.
- If `count` is less than or equal to 2, set the element at index `i` to the current element and increment `i`.
- Return `i`.

# Time complexity
- O(n) where n is the length of the array.

# Space complexity
- O(1)

## Java code
```java
public int removeDuplicates(int[] nums) {
    if (nums.length <= 2) {
        return nums.length;
    }
    int i = 1;
    int count = 1;
    for (int j = 1; j < nums.length; j++) {
        if (nums[j] == nums[i - 1]) {
            count++;
        } else {
            count = 1;
        }
        if (count <= 2) {
            nums[i] = nums[j];
            i++;
        }
    }
    return i;
}
```

## Java code (Optimized)
```java
class Solution {
    public int removeDuplicates(int[] nums) {
        if (nums.length == 1){
            return nums.length;
        }
        int count = 1;
        int meet = 0;
        int diff = 0;
        int past = nums[0];
        for (int i = 1; i < nums.length; i++) {
            nums[i - diff] = nums[i];
            if (nums[i] == past) {
                meet++;
            } else {
                meet = 0;
            }
            count++;
            if (meet >= 2){
                diff++;
                count--;
            }
            past = nums[i];

        }
        return count;
    }
}
```
