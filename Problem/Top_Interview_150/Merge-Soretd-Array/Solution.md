# Solution

[-] Time Complexity: O(m+n) - where m is the length of nums1 and n is the length of nums2 [m+n is the length of the merged array] (Need to be achieved)
[-] Space Complexity: O(1) - No extra space is used

- Approach:
    - Start from the end of the merged array and compare the elements from the end of both arrays.
    - Place the greater element at the end of the merged array.
    - Continue this process until all the elements are merged.

## Java Code
```java
class Solution {
    public void merge(int[] nums1, int m, int[] nums2, int n) {
        int i = m - 1, j = n - 1, k = m + n - 1;
        while (i >= 0 && j >= 0) {
            if (nums1[i] > nums2[j]) {
                nums1[k--] = nums1[i--];
            } else {
                nums1[k--] = nums2[j--];
            }
        }
        while (j >= 0) {
            nums1[k--] = nums2[j--];
        }
        while (i >= 0) {
            nums1[k--] = nums1[i--];
        }
    }
}
```

## Cpp Code
```cpp
class Solution {
public:
    void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {
        int i = m - 1, j = n - 1, k = m + n - 1;
        while (i >= 0 && j >= 0) {
            if (nums1[i] > nums2[j]) {
                nums1[k--] = nums1[i--];
            } else {
                nums1[k--] = nums2[j--];
            }
        }
        while (j >= 0) {
            nums1[k--] = nums2[j--];
        }
        while (i >= 0) {
            nums1[k--] = nums1[i--];
        }
    }
};
```

## Python Code
```python
class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        i, j, k = m - 1, n - 1, m + n - 1
        while i >= 0 and j >= 0:
            if nums1[i] > nums2[j]:
                nums1[k] = nums1[i]
                i -= 1
            else:
                nums1[k] = nums2[j]
                j -= 1
            k -= 1
        while j >= 0:
            nums1[k] = nums2[j]
            j -= 1
            k -= 1
        while i >= 0:
            nums1[k] = nums1[i]
            i -= 1
            k -= 1
```

## JavaScript Code
```javascript
var merge = function(nums1, m, nums2, n) {
    let i = m - 1, j = n - 1, k = m + n - 1;
    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[k--] = nums1[i--];
        } else {
            nums1[k--] = nums2[j--];
        }
    }
    while (j >= 0) {
        nums1[k--] = nums2[j--];
    }
    while (i >= 0) {
        nums1[k--] = nums1[i--];
    }
};
```

## Rust Code
```rust
impl Solution {
    pub fn merge(nums1: &mut Vec<i32>, m: i32, nums2: &mut Vec<i32>, n: i32) {
        let (mut i, mut j, mut k) = (m - 1, n - 1, m + n - 1);
        while i >= 0 && j >= 0 {
            if nums1[i as usize] > nums2[j as usize] {
                nums1[k as usize] = nums1[i as usize];
                i -= 1;
            } else {
                nums1[k as usize] = nums2[j as usize];
                j -= 1;
            }
            k -= 1;
        }
        while j >= 0 {
            nums1[k as usize] = nums2[j as usize];
            j -= 1;
            k -= 1;
        }
        while i >= 0 {
            nums1[k as usize] = nums1[i as usize];
            i -= 1;
            k -= 1;
        }
    }
}
```

## C# Code
```csharp
public class Solution {
    public void Merge(int[] nums1, int m, int[] nums2, int n) {
        int i = m - 1, j = n - 1, k = m + n - 1;
        while (i >= 0 && j >= 0) {
            if (nums1[i] > nums2[j]) {
                nums1[k--] = nums1[i--];
            } else {
                nums1[k--] = nums2[j--];
            }
        }
        while (j >= 0) {
            nums1[k--] = nums2[j--];
        }
        while (i >= 0) {
            nums1[k--] = nums1[i--];
        }
    }
}
```

## C Code
```c
void merge(int* nums1, int m, int* nums2, int n) {
    int i = m - 1, j = n - 1, k = m + n - 1;
    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[k--] = nums1[i--];
        } else {
            nums1[k--] = nums2[j--];
        }
    }
    while (j >= 0) {
        nums1[k--] = nums2[j--];
    }
    while (i >= 0) {
        nums1[k--] = nums1[i--];
    }
}
```

## Go Code
```go
func merge(nums1 []int, m int, nums2 []int, n int) {
    i, j, k := m - 1, n - 1, m + n - 1
    for i >= 0 && j >= 0 {
        if nums1[i] > nums2[j] {
            nums1[k] = nums1[i]
            i--
        } else {
            nums1[k] = nums2[j]
            j--
        }
        k--
    }
    for j >= 0 {
        nums1[k] = nums2[j]
        j--
        k--
    }
    for i >= 0 {
        nums1[k] = nums1[i]
        i--
        k--
    }
}
```

## TypeScript Code
```typescript
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let i = m - 1, j = n - 1, k = m + n - 1;
    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[k--] = nums1[i--];
        } else {
            nums1[k--] = nums2[j--];
        }
    }
    while (j >= 0) {
        nums1[k--] = nums2[j--];
    }
    while (i >= 0) {
        nums1[k--] = nums1[i--];
    }
}
```
