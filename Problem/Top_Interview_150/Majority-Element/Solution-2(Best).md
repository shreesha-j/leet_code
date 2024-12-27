# Approach:
# Boyer-Moore Voting Algorithm
- Initialize a variable `candidate` to the first element.
- Initialize a variable `count` to 1.
- Iterate over the array from index 1 to the end.
  - If the current element is equal to the `candidate`, increment `count`.
  - If the current element is not equal to the `candidate`, decrement `count`.
    - If `count` becomes 0, set the `candidate` to the current element and increment `count`.
- Return the `candidate`.

## Complexity Analysis
- Time complexity: O(n) where n is the length of the array.

- Space complexity: O(1)

## Java code
```java
public int majorityElement(int[] nums) {
    int candidate = nums[0];
    int count = 1;
    for (int i = 1; i < nums.length; i++) {
        if (nums[i] == candidate) {
            count++;
        } else {
            count--;
            if (count == 0) {
                candidate = nums[i];
                count = 1;
            }
        }
    }
    return candidate;
}
```

## Python code
```python
class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        candidate = nums[0]
        count = 1
        for i in range(1, len(nums)):
            if nums[i] == candidate:
                count += 1
            else:
                count -= 1
                if count == 0:
                    candidate = nums[i]
                    count = 1
        return candidate
```

## JavaScript code
```javascript
var majorityElement = function(nums) {
    let candidate = nums[0];
    let count = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === candidate) {
            count++;
        } else {
            count--;
            if (count === 0) {
                candidate = nums[i];
                count = 1;
            }
        }
    }
    return candidate;
};
```

## C++ code
```cpp
int majorityElement(vector<int>& nums) {
    int candidate = nums[0];
    int count = 1;
    for (int i = 1; i < nums.size(); i++) {
        if (nums[i] == candidate) {
            count++;
        } else {
            count--;
            if (count == 0) {
                candidate = nums[i];
                count = 1;
            }
        }
    }
    return candidate;
}
```

## C# code
```csharp
public class Solution {
    public int MajorityElement(int[] nums) {
        int candidate = nums[0];
        int count = 1;
        for (int i = 1; i < nums.Length; i++) {
            if (nums[i] == candidate) {
                count++;
            } else {
                count--;
                if (count == 0) {
                    candidate = nums[i];
                    count = 1;
                }
            }
        }
        return candidate;
    }
}
```

## Go code
```go
func majorityElement(nums []int) int {
    candidate := nums[0]
    count := 1
    for i := 1; i < len(nums); i++ {
        if nums[i] == candidate {
            count++
        } else {
            count--
            if count == 0 {
                candidate = nums[i]
                count = 1
            }
        }
    }
    return candidate
}
```

## Zig code
```zig
const std = @import("std");

pub fn majorityElement(nums: []i32) i32 {
    var candidate: i32 = nums[0];
    var count: i32 = 1;
    for (nums[1..]) |num| {
        if (num == candidate) {
            count += 1;
        } else {
            count -= 1;
            if (count == 0) {
                candidate = num;
                count = 1;
            }
        }
    }
    return candidate;
}

pub fn main() void {
    const nums: [9]i32 = [2, 2, 1, 1, 1, 2, 2];
    const result = majorityElement(nums);
    std.debug.print("Majority element: {}\n", .{result});
}
```

## Rust code
```rust
impl Solution {
    pub fn majority_element(nums: Vec<i32>) -> i32 {
        let mut candidate = nums[0];
        let mut count = 1;
        for i in 1..nums.len() {
            if nums[i] == candidate {
                count += 1;
            } else {
                count -= 1;
                if count == 0 {
                    candidate = nums[i];
                    count = 1;
                }
            }
        }
        candidate
    }
}
```

## TypeScript code
```typescript

function majorityElement(nums: number[]): number {
    let candidate = nums[0];
    let count = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === candidate) {
            count++;
        } else {
            count--;
            if (count === 0) {
                candidate = nums[i];
                count = 1;
            }
        }
    }
    return candidate;
}
```

## Swift code
```swift
class Solution {
    func majorityElement(_ nums: [Int]) -> Int {
        var candidate = nums[0]
        var count = 1
        for i in 1..<nums.count {
            if nums[i] == candidate {
                count += 1
            } else {
                count -= 1
                if count == 0 {
                    candidate = nums[i]
                    count = 1
                }
            }
        }
        return candidate
    }
}
```

## Scala code
```scala
object Solution {
    def majorityElement(nums: Array[Int]): Int = {
        var candidate = nums(0)
        var count = 1
        for (i <- 1 until nums.length) {
            if (nums(i) == candidate) {
                count += 1
            } else {
                count -= 1
                if (count == 0) {
                    candidate = nums(i)
                    count = 1
                }
            }
        }
        candidate
    }
}
```

## WebAssembly code
```webassembly
(module
  (func $majorityElement (param $nums i32) (result i32)
    (local $candidate i32)
    (local $count i32)
    (local $i i32)
    (local.set $candidate (i32.load (local.get $nums)))
    (local.set $count (i32.const 1))
    (local.set $i (i32.const 1))
    (block
      (loop
        (br_if 1 (i32.eq (local.get $i) (i32.load (local.get $nums))))
        (local.set $count (i32.add (local.get $count) (i32.const 1)))
        (br_if 2 (i32.ne (local.get $i) (i32.load (local.get $nums))))
        (local.set $count (i32.sub (local.get $count) (i32.const 1)))
        (br_if 3 (i32.ne (local.get $count) (i32.const 0)))
        (local.set $candidate (i32.load (local.get $nums)))
        (local.set $count (i32.const 1))
        (br 4)
        (local.set $i (i32.add (local.get $i) (i32.const 1)))
        (br 0)
      )
    )
    (local.get $candidate)
  )
  (export "majorityElement" (func $majorityElement))
)
```

## Assembly code
```assembly
section .text
    global majorityElement
    majorityElement:
        mov eax, [rdi]
        mov ecx, 1
        mov edx, 1
    loop:
        cmp edx, [rdi + 4 * rcx]
        je increment
        dec ecx
        jnz not_zero
        mov eax, [rdi + 4 * edx]
        mov ecx, 1
    not_zero:
        inc edx
        cmp edx, [rdi]
        jl loop
        ret
```

## C code
```c
int majorityElement(int* nums, int numsSize){
    int candidate = nums[0];
    int count = 1;
    for (int i = 1; i < numsSize; i++) {
        if (nums[i] == candidate) {
            count++;
        } else {
            count--;
            if (count == 0) {
                candidate = nums[i];
                count = 1;
            }
        }
    }
    return candidate;
}
```

## Lua code
```lua

function majorityElement(nums)
    local candidate = nums[1]
    local count = 1
    for i = 2, #nums do
        if nums[i] == candidate then
            count = count + 1
        else
            count = count - 1
            if count == 0 then
                candidate = nums[i]
                count = 1
            end
        end
    end
    return candidate
end
```

