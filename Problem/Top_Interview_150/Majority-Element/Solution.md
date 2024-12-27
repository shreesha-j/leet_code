# Approach: Hashmap
- Store the frequency of each element in a hash table.
- Traverse the hash table and print the elements with frequency greater than 1.

# Time complexity
- O(n) where n is the length of the array.

# Space complexity
- O(n)

## C++ code
```cpp
class Solution {
public:
    int majorityElement(vector<int>& nums) {
        unordered_map<int, int> mp;
        for (int i = 0; i < nums.size(); i++) {
            mp[nums[i]]++;
        }
        for (auto it = mp.begin(); it != mp.end(); it++) {
            if (it->second > nums.size() / 2) {
                return it->first;
            }
        }
        return -1;
    }
};
```

## Java code
```java
class Solution {
    public int majorityElement(int[] nums) {
        Map<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            map.put(nums[i], map.getOrDefault(nums[i], 0) + 1);
        }
        for (Map.Entry<Integer, Integer> entry : map.entrySet()) {
            if (entry.getValue() > nums.length / 2) {
                return entry.getKey();
            }
        }
        return -1;
    }
}
```

## Python code
```python
class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        mp = {}
        for num in nums:
            mp[num] = mp.get(num, 0) + 1
        for key, value in mp.items():
            if value > len(nums) // 2:
                return key
        return -1
```

## JavaScript code
```javascript
var majorityElement = function(nums) {
    let mp = new Map();
    for (let i = 0; i < nums.length; i++) {
        mp.set(nums[i], (mp.get(nums[i]) || 0) + 1);
    }
    for (let [key, value] of mp) {
        if (value > nums.length / 2) {
            return key;
        }
    }
    return -1;
};
```

## C# code
```csharp
public class Solution {
    public int MajorityElement(int[] nums) {
        Dictionary<int, int> mp = new Dictionary<int, int>();
        foreach (int num in nums) {
            if (mp.ContainsKey(num)) {
                mp[num]++;
            } else {
                mp[num] = 1;
            }
        }
        foreach (var item in mp) {
            if (item.Value > nums.Length / 2) {
                return item.Key;
            }
        }
        return -1;
    }
}
```

## Go code
```go
func majorityElement(nums []int) int {
    mp := make(map[int]int)
    for _, num := range nums {
        mp[num]++
    }
    for key, value := range mp {
        if value > len(nums) / 2 {
            return key
        }
    }
    return -1
}
```

## Zig code
```zig
const std = @import("std");

pub fn majorityElement(nums: []i32) i32 {
    var mp = std.HashMap(i32, i32).init(std.heap.page_allocator);
    for (nums) |num| {
        const entry = mp.mutate(num, 1, |_, value| value + 1);
    }
    for (mp) |key, value| {
        if (value > nums.len / 2) {
            return key;
        }
    }
    return -1;
}
```

## Rust code
```rust
use std::collections::HashMap;

impl Solution {
    pub fn majority_element(nums: Vec<i32>) -> i32 {
        let mut mp = HashMap::new();
        for num in nums {
            *mp.entry(num).or_insert(0) += 1;
        }
        for (key, value) in mp {
            if value > nums.len() as i32 / 2 {
                return key;
            }
        }
        -1
    }
}
```

## TypeScript code
```typescript
function majorityElement(nums: number[]): number {
    const mp = new Map<number, number>();
    for (const num of nums) {
        mp.set(num, (mp.get(num) || 0) + 1);
    }
    for (const [key, value] of mp) {
        if (value > nums.length / 2) {
            return key;
        }
    }
    return -1;
}
```

## Swift code
```swift
class Solution {
    func majorityElement(_ nums: [Int]) -> Int {
        var mp = [Int: Int]()
        for num in nums {
            mp[num, default: 0] += 1
        }
        for (key, value) in mp {
            if value > nums.count / 2 {
                return key
            }
        }
        return -1
    }
}
```

## WebAssembly code
```webassembly
```

## Scala code
```scala
object Solution {
    def majorityElement(nums: Array[Int]): Int = {
        val mp = scala.collection.mutable.Map[Int, Int]().withDefaultValue(0)
        for (num <- nums) {
            mp(num) += 1
        }
        for ((key, value) <- mp) {
            if (value > nums.length / 2) {
                return key
            }
        }
        -1
    }
}
```

## Assembly code
```assembly
section .data
    nums db 3, 2, 3        ; Input array
    numsSize dd 3          ; Size of the array

section .bss
    counts resd 10         ; To store counts
    keys resd 10           ; To store unique keys
    hashCount resd 1       ; Count of unique keys

section .text
    global _start

_start:
    ; Initialize hashCount to 0
    mov dword [hashCount], 0

    ; Iterate over nums array
    mov ecx, 0               ; i = 0
loop_i:
    cmp ecx, [numsSize]       ; Check if i < numsSize
    jge end_i                 ; If i >= numsSize, exit loop

    ; Check if nums[i] is already in keys
    mov esi, ecx              ; Save i in esi
    xor ebx, ebx              ; found = 0
    mov edi, [hashCount]      ; j = hashCount
loop_j:
    cmp edi, 0                ; Check if j <= 0
    je not_found              ; If not found, go to not_found

    ; Compare nums[i] with keys[j]
    mov eax, dword [keys + edi * 4]
    cmp eax, dword [nums + ecx * 4]
    jne continue_j
    ; If found, increment count
    inc dword [counts + edi * 4]
    mov ebx, 1                ; found = 1
    jmp end_j
continue_j:
    dec edi                   ; j--
    jmp loop_j
not_found:
    ; If not found, add nums[i] to keys and set count to 1
    cmp ebx, 1
    je end_j
    mov eax, dword [nums + ecx * 4]
    mov dword [keys + dword [hashCount] * 4], eax
    mov dword [counts + dword [hashCount] * 4], 1
    inc dword [hashCount]
end_j:
    inc ecx                   ; i++
    jmp loop_i

end_i:
    ; Find the majority element
    xor ecx, ecx              ; Reset i
    mov eax, -1               ; Default result = -1
loop_majority:
    cmp ecx, dword [hashCount]
    jge end_majority
    ; Check if counts[i] > numsSize / 2
    mov edi, dword [counts + ecx * 4]
    cmp edi, dword [numsSize] / 2
    jle continue_majority
    ; If yes, set result = keys[i]
    mov eax, dword [keys + ecx * 4]
    jmp end_majority
continue_majority:
    inc ecx
    jmp loop_majority

end_majority:
    ; Exit program
    mov eax, 60               ; syscall: exit
    xor edi, edi
    syscall
```

