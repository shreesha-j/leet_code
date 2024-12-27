# Solution

[-] Time Complexity: O(n)
[-] Space Complexity: O(1)

## Java Code:

```java
class Solution {
    public int removeElement(int[] nums, int val) {
        int i = 0;
        for (int j = 0; j < nums.length; j++) {
            if (nums[j] != val) {
                nums[i] = nums[j];
                i++;
            }
        }
        return i;
    }
}
```

## Python Code:

```python
from typing import List

class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        i = 0
        for j in range(len(nums)):
            if nums[j] != val:
                nums[i] = nums[j]
                i += 1
        return i
```

## JavaScript Code:

```js
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

var removeElement = function(nums, val) {
    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] !== val) {
            nums[i] = nums[j];
            i++;
        }
    }
    return i;
};
```

## C++ Code:

```cpp
class Solution {
public:
    int removeElement(vector<int>& nums, int val) {
        int i = 0;
        for (int j = 0; j < nums.size(); j++) {
            if (nums[j] != val) {
                nums[i] = nums[j];
                i++;
            }
        }
        return i;
    }
};
```

## C# Code:

```csharp
public class Solution {
    public int RemoveElement(int[] nums, int val) {
        int i = 0;
        for (int j = 0; j < nums.Length; j++) {
            if (nums[j] != val) {
                nums[i] = nums[j];
                i++;
            }
        }
        return i;
    }
}
```

## TypeScript Code:

```typescript
function removeElement(nums: number[], val: number): number {
    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] !== val) {
            nums[i] = nums[j];
            i++;
        }
    }
    return i;
};
```

## C Code:

```c
int removeElement(int* nums, int numsSize, int val){
    int i = 0;
    for (int j = 0; j < numsSize; j++) {
        if (nums[j] != val) {
            nums[i] = nums[j];
            i++;
        }
    }
    return i;
}
```

## Go Code:

```go
func removeElement(nums []int, val int) int {
    i := 0
    for j := 0; j < len(nums); j++ {
        if nums[j] != val {
            nums[i] = nums[j]
            i++
        }
    }
    return i
}
```

## Ruby Code:

```ruby
# @param {Integer[]} nums
# @param {Integer} val
# @return {Integer}
def remove_element(nums, val)
    i = 0
    nums.each_with_index do |num, j|
        if num != val
            nums[i] = nums[j]
            i += 1
        end
    end
    i
end
```
