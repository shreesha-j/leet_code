# Approach
- Initialize a pointer `i` at 0.
- Iterate over the array from index 1 to the end.
- If the current element is not equal to the element at index `i`, increment `i` and set the element at index `i` to the current element.
- Return `i + 1`.

# Time complexity
- O(n) where n is the length of the array.

# Space complexity
- O(1)

## Java code
```java
public int removeDuplicates(int[] nums) {
    if (nums.length == 0) {
        return 0;
    }
    int i = 0;
    for (int j = 1; j < nums.length; j++) {
        if (nums[j] != nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1;
}
```

## Python code
```python
def removeDuplicates(self, nums: List[int]) -> int:
    if len(nums) == 0:
        return 0
    i = 0
    for j in range(1, len(nums)):
        if nums[j] != nums[i]:
            i += 1
            nums[i] = nums[j]
    return i + 1
```

## JavaScript code
```javascript
var removeDuplicates = function(nums) {
    if (nums.length === 0) {
        return 0;
    }
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1;
};
```

## C++ code
```cpp
int removeDuplicates(vector<int>& nums) {
    if (nums.size() == 0) {
        return 0;
    }
    int i = 0;
    for (int j = 1; j < nums.size(); j++) {
        if (nums[j] != nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1;
}
```

## C# code
```csharp
public int RemoveDuplicates(int[] nums) {
    if (nums.Length == 0) {
        return 0;
    }
    int i = 0;
    for (int j = 1; j < nums.Length; j++) {
        if (nums[j] != nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1;
}
```

## Rust code
```rust
pub fn remove_duplicates(nums: &mut Vec<i32>) -> i32 {
    if nums.is_empty() {
        return 0;
    }
    let mut i = 0;
    for j in 1..nums.len() {
        if nums[j] != nums[i] {
            i += 1;
            nums[i] = nums[j];
        }
    }
    (i + 1) as i32
}
```

## TypeScript code
```typescript
function removeDuplicates(nums: number[]): number {
    if (nums.length === 0) {
        return 0;
    }
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1;
}
```

## Go code
```go
func removeDuplicates(nums []int) int {
    if len(nums) == 0 {
        return 0
    }
    i := 0
    for j := 1; j < len(nums); j++ {
        if nums[j] != nums[i] {
            i++
            nums[i] = nums[j]
        }
    }
    return i + 1
}
```

## WebAssembly code
```wasm
(module
  (func $removeDuplicates
    (param $nums i32) (result i32)
    (local $i i32)
    (local $j i32)
    (local $len i32)
    (local.set $i (i32.const 0))
    (local.set $j (i32.const 1))
    (local.set $len (i32.load (local.get $nums)))
    (if (i32.eq (local.get $len) (i32.const 0))
      (then
        (return (i32.const 0))
      )
    )
    (loop
      (if (i32.eq (local.get $j) (local.get $len))
        (then
          (return (i32.add (local.get $i) (i32.const 1)))
        )
      )
      (if (i32.ne (i32.load (i32.add (local.get $nums) (local.get $j) (i32.const 4))) (i32.load (i32.add (local.get $nums) (local.get $i) (i32.const 4)))
        (then
          (local.set $i (i32.add (local.get $i) (i32.const 1)))
          (i32.store (i32.add (local.get $nums) (local.get $i) (i32.const 4)) (i32.load (i32.add (local.get $nums) (local.get $j) (i32.const 4)))
        )
      )
      (local.set $j (i32.add (local.get $j) (i32.const 1)))
      (br 0)
    )
  )
  (export "removeDuplicates" (func $removeDuplicates))
)
```

## c code
```c
int removeDuplicates(int* nums, int numsSize){
    if (numsSize == 0) {
        return 0;
    }
    int i = 0;
    for (int j = 1; j < numsSize; j++) {
        if (nums[j] != nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1;
}
```

## Lua code
```lua
function removeDuplicates(nums)
    if #nums == 0 then
        return 0
    end
    local i = 1
    for j = 2, #nums do
        if nums[j] ~= nums[i] then
            i = i + 1
            nums[i] = nums[j]
        end
    end
    return i
end
```

## Scala code
```scala
def removeDuplicates(nums: Array[Int]): Int = {
    if (nums.isEmpty) {
        return 0
    }
    var i = 0
    for (j <- 1 until nums.length) {
        if (nums(j) != nums(i)) {
            i += 1
            nums(i) = nums(j)
        }
    }
    i + 1
}
```

## zig code
```zig
fn removeDuplicates(nums: []i32) i32 {
    if (nums.len == 0) {
        return 0;
    }
    var i: i32 = 0;
    var j: i32 = 1;
    while (j < nums.len) {
        if (nums[j] != nums[i]) {
            i += 1;
            nums[i] = nums[j];
        }
        j += 1;
    }
    return i + 1;
}
```

## assembly code
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


