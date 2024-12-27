# Approach
## 1. **Reverse Method**

### Idea:
1. Normalize `k` by computing `k = k % len(nums)` to handle cases where `k` is larger than the array size.
2. Reverse the entire array.
3. Reverse the first `k` elements.
4. Reverse the remaining `len(nums) - k` elements.

### Why It Works:
- Reversing the entire array places the elements in the right group but in the wrong order.
- Reversing each group individually restores the correct order.

### Complexity:
- **Time Complexity**: O(n), where `n` is the length of the array (three reversals of subarrays).
- **Space Complexity**: O(1), as it modifies the array in place.

---

## 2. **Extra Array Method**

### Idea:
1. Create a new array to store the rotated result.
2. For each element in the input array, calculate its new index after the rotation using `(i + k) % len(nums)`.
3. Copy elements from the new array back to the original array.

### Complexity:
- **Time Complexity**: O(n), as we iterate through the array once.
- **Space Complexity**: O(n), because of the extra array.

---

## 3. **Cyclic Replacements**

### Idea:
1. Normalize `k` by computing `k = k % len(nums)` to handle cases where `k` is larger than the array size.
2. Start from the first element and keep swapping elements to their correct positions.
3. Continue until we have swapped all elements.

### Why It Works:
- By swapping elements cyclically, we move each element to its correct position in the rotated array.

### Complexity:

- **Time Complexity**: O(n), as we visit each element exactly once.
- **Space Complexity**: O(1), as we perform the rotation in place.

---

## 4. **Block Swap Algorithm**

### Idea:
1. Divide the array into two blocks based on the rotation index `k`.
2. Swap the blocks to rotate the array.

### Why It Works:
- Swapping the blocks effectively rotates the array by `k` steps.

### Complexity:

- **Time Complexity**: O(n), as we visit each element exactly once.
- **Space Complexity**: O(1), as we perform the rotation in place.

---

## 5. **Using Reverse Method Twice**

### Idea:
1. Normalize `k` by computing `k = k % len(nums)` to handle cases where `k` is larger than the array size.
2. Reverse the first `len(nums) - k` elements.
3. Reverse the last `k` elements.
4. Reverse the entire array.

### Why It Works:
- Reversing the first `len(nums) - k` elements and the last `k` elements separately effectively rotates the array by `k` steps.

### Complexity:

- **Time Complexity**: O(n), as we reverse the array twice.

- **Space Complexity**: O(1), as we perform the rotation in place.

---

---
Summary:

+---------------------+---------------------+---------------------+---------------------+---------------------+
| Approach            | Time Complexity     | Space Complexity    | In-place            | Difficulty          |
+---------------------+---------------------+---------------------+---------------------+---------------------+
| Reverse Method      | O(n)                | O(1)                | Yes                 | Easy                |
| Extra Array Method  | O(n)                | O(n)                | No                  | Easy                |
| Cyclic Replacements | O(n)                | O(1)                | Yes                 | Medium              |
| Block Swap Algorithm| O(n)                | O(1)                | Yes                 | Medium              |
| Reverse Method Twice| O(n)                | O(1)                | Yes                 | Medium              |
| Deque               | O(n)                | O(n)                | No                  | Medium              |
| Juggling Algorithm  | O(n)                | O(1)                | Yes                 | Medium              |
| Bruteforce          | O(n*k)              | O(1)                | Yes                 | Medium              |
+---------------------+---------------------+---------------------+---------------------+---------------------+

---


