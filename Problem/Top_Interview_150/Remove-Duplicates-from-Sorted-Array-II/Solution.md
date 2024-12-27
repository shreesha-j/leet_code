# Approach
- Initialize a pointer `i` at 2.
- Loop over the array from index 2 to the end.
- If the current element is not equal to the element at index `i - 2`, increment `i` and set the element at index `i` to the current element.
- Return `i`.

# Time complexity
- O(n) where n is the length of the array.

# Space complexity
- O(1)

## C++ code
```cpp
class Solution {
public:
    int removeDuplicates(vector<int>& nums) {
        if (nums.size() <= 2) {
            return nums.size();
        }
        int i = 2;
        for (int j = 2; j < nums.size(); j++) {
            if (nums[j] != nums[i - 2]) {
                nums[i] = nums[j];
                i++;
            }
        }
        return i;
    }
};
```

## Java code
```java
class Solution {
    public int removeDuplicates(int[] nums) {
        if (nums.length <= 2) {
            return nums.length;
        }
        int i = 2;
        for (int j = 2; j < nums.length; j++) {
            if (nums[j] != nums[i - 2]) {
                nums[i] = nums[j];
                i++;
            }
        }
        return i;
    }
}
```

## Python code
```python
class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        if len(nums) <= 2:
            return len(nums)
        i = 2
        for j in range(2, len(nums)):
            if nums[j] != nums[i - 2]:
                nums[i] = nums[j]
                i += 1
        return i
```

## JavaScript code
```javascript
var removeDuplicates = function(nums) {
    if (nums.length <= 2) {
        return nums.length;
    }
    let i = 2;
    for (let j = 2; j < nums.length; j++) {
        if (nums[j] !== nums[i - 2]) {
            nums[i] = nums[j];
            i++;
        }
    }
    return i;
};
```

## C# code
```csharp
public class Solution {
    public int RemoveDuplicates(int[] nums) {
        if (nums.Length <= 2) {
            return nums.Length;
        }
        int i = 2;
        for (int j = 2; j < nums.Length; j++) {
            if (nums[j] != nums[i - 2]) {
                nums[i] = nums[j];
                i++;
            }
        }
        return i;
    }
}
```

## WebAssembly (WAT) code
```wat
(module
  (func $removeDuplicates
    (param $nums i32)
    (result i32)
    (local $i i32)
    (local $j i32)
    (local $n i32)
    (local $temp i32)
    (local.set $i (i32.const 2))
    (local.set $j (i32.const 2))
    (local.set $n (i32.load (local.get $nums)))
    (block
      (loop
        (br_if 1 (i32.ge_u (local.get $j) (local.get $n)))
        (local.set $temp (i32.add (local.get $j) (i32.const -2)))
        (if
          (i32.ne (i32.load (i32.add (local.get $nums) (local.get $j) (i32.const 4))) (i32.load (i32.add (local.get $nums) (local.get $temp) (i32.const 4)))
            (i32.store (i32.add (local.get $nums) (local.get $i) (i32.const 4)) (i32.load (i32.add (local.get $nums) (local.get $j) (i32.const 4)))
            (local.set $i (i32.add (local.get $i) (i32.const 1))
        )
        (local.set $j (i32.add (local.get $j) (i32.const 1)))
        (br 0)
      )
    )
    (local.get $i)
  )
)
```

## Go code
```go
func removeDuplicates(nums []int) int {
    if len(nums) <= 2 {
        return len(nums)
    }
    i := 2
    for j := 2; j < len(nums); j++ {
        if nums[j] != nums[i-2] {
            nums[i] = nums[j]
            i++
        }
    }
    return i
}
```

## Rust code
```rust
impl Solution {
    pub fn remove_duplicates(nums: &mut Vec<i32>) -> i32 {
        if nums.len() <= 2 {
            return nums.len() as i32;
        }
        let mut i = 2;
        for j in 2..nums.len() {
            if nums[j] != nums[i - 2] {
                nums[i] = nums[j];
                i += 1;
            }
        }
        i as i32
    }
}
```

## TypeScript code
```typescript
function removeDuplicates(nums: number[]): number {
    if (nums.length <= 2) {
        return nums.length;
    }
    let i = 2;
    for (let j = 2; j < nums.length; j++) {
        if (nums[j] !== nums[i - 2]) {
            nums[i] = nums[j];
            i++;
        }
    }
    return i;
}
```

## Swift code
```swift
class Solution {
    func removeDuplicates(_ nums: inout [Int]) -> Int {
        if nums.count <= 2 {
            return nums.count
        }
        var i = 2
        for j in 2..<nums.count {
            if nums[j] != nums[i - 2] {
                nums[i] = nums[j]
                i += 1
            }
        }
        return i
    }
}
```

## Scala code
```scala
object Solution {
    def removeDuplicates(nums: Array[Int]): Int = {
        if (nums.length <= 2) {
            return nums.length
        }
        var i = 2
        for (j <- 2 until nums.length) {
            if (nums(j) != nums(i - 2)) {
                nums(i) = nums(j)
                i += 1
            }
        }
        i
    }
}
```

## Lua code
```lua
function removeDuplicates(nums)
    if #nums <= 2 then
        return #nums
    end
    local i = 2
    for j = 2, #nums do
        if nums[j] ~= nums[i - 2] then
            nums[i] = nums[j]
            i = i + 1
        end
end
    return i
end
```

## Zig code
```zig
fn removeDuplicates(nums: []i32) i32 {
    if (nums.len <= 2) {
        return @intCast(i32, nums.len);
    }
    var i: i32 = 2;
    var j: i32 = 2;
    while (j < @intCast(i32, nums.len)) : (i += 1) : (j += 1) {
        if (nums[j] != nums[i - 2]) {
            nums[i] = nums[j];
        }
    }
    return i;
}
```

## Assembly code
```nasm
section .text
    global removeDuplicates
    removeDuplicates:
        push rbp
        mov rbp, rsp
        mov rax, rdi
        cmp rax, 2
        jle .base_case
        mov rsi, 2
        mov rdi, 2
        .loop:
            cmp rdi, rax
            jge .end
            mov rcx, [rsi + rdi * 4]
            mov rbx, [rsi + (rdi - 2) * 4]
            cmp rcx, rbx
            jne .not_equal
            inc rdi
            jmp .loop
            .not_equal:
                mov [rsi + rdi * 4], rcx
                inc rdi
                jmp .loop
        .end:
        mov rax, rdi
        pop rbp
        ret
        .base_case:
            mov rax, rdi
            pop rbp
            ret
```

```assembly
section .text
    global removeDuplicates
    removeDuplicates:
        push rbp
        mov rbp, rsp
        mov rax, [rdi]
        test rax, rax
        jz .L0
        mov rsi, 0
        mov rdx, 1
    .L1:
        cmp rdx, rax
        je .L2
        mov rcx, [rdi + rdx * 4]
        mov r8, [rdi + rsi * 4]
        cmp rcx, r8
        jne .L3
    .L4:
        inc rdx
        jmp .L1
    .L3:
        inc rsi
        mov [rdi + rsi * 4], rcx
        inc rdx
        jmp .L1
    .L2:
        inc rsi
    .L0:
        pop rbp
        ret
```

## WebAssembly (WASM) code
```wasm
(module
  (func $removeDuplicates
    (param $nums i32)
    (result i32)
    (local $i i32)
    (local $j i32)
    (local $n i32)
    (local $temp i32)
    (local.set $i (i32.const 2))
    (local.set $j (i32.const 2))
    (local.set $n (i32.load (local.get $nums)))
    (block
      (loop
        (br_if 1 (i32.ge_u (local.get $j) (local.get $n)))
        (local.set $temp (i32.add (local.get $j) (i32.const -2)))
        (if
          (i32.ne (i32.load (i32.add (local.get $nums) (local.get $j) (i32.const 4))) (i32.load (i32.add (local.get $nums) (local.get $temp) (i32.const 4)))
            (i32.store (i32.add (local.get $nums) (local.get $i) (i32.const 4)) (i32.load (i32.add (local.get $nums) (local.get $j) (i32.const 4)))
            (local.set $i (i32.add (local.get $i) (i32.const 1))
        )
        (local.set $j (i32.add (local.get $j) (i32.const 1)))
        (br 0)
      )
    )
    (local.get $i)
  )
)
```


