# Approch
1. Create a `HashMap` to store the frequency of each element.
2. Iterate through the array and store the frequency of each element in the `HashMap`.
3. Iterate through the `HashMap` and check if the frequency of any element is greater than `n/2`.
4. If the frequency of any element is greater than `n/2`, return that element.
5. If no element has a frequency greater than `n/2`, return `-1`.

# Complexity Analysis
- The time complexity for this approach is `O(n)` because we are iterating through the array twice.
- The space complexity is `O(n)` because we are using a `HashMap` to store the frequency of each element.

## Java Code
```java
public class MajorityElement {
    public int majorityElement(int[] nums) {
        int n = nums.length;
        HashMap<Integer, Integer> map = new HashMap<>();
        for (int num : nums) {
            map.put(num, map.getOrDefault(num, 0) + 1);
        }
        for (Map.Entry<Integer, Integer> entry : map.entrySet()) {
            if (entry.getValue() > n / 2) {
                return entry.getKey();
            }
        }
        return -1;
    }
}
```

## Python Code
```python
class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        n = len(nums)
        freq = {}
        for num in nums:
            freq[num] = freq.get(num, 0) + 1
        for key, value in freq.items():
            if value > n // 2:
                return key
        return -1
```

## C++ Code
```cpp
class Solution {
public:
    int majorityElement(vector<int>& nums) {
        int n = nums.size();
        unordered_map<int, int> freq;
        for (int num : nums) {
            freq[num]++;
        }
        for (auto it : freq) {
            if (it.second > n / 2) {
                return it.first;
            }
        }
        return -1;
    }
};
```

## JavaScript Code
```javascript
var majorityElement = function(nums) {
    let n = nums.length;
    let freq = {};
    for (let num of nums) {
        freq[num] = (freq[num] || 0) + 1;
    }
    for (let key in freq) {
        if (freq[key] > n / 2) {
            return key;
        }
    }
    return -1;
};
```

## TypeScript Code
```typescript
function majorityElement(nums: number[]): number {
    const n = nums.length;
    const freq: { [key: number]: number } = {};
    for (let num of nums) {
        freq[num] = (freq[num] || 0) + 1;
    }
    for (let key in freq) {
        if (freq[key] > n / 2) {
            return parseInt(key);
        }
    }
    return -1;
}
```

## Rust Code
```rust
use std::collections::HashMap;

impl Solution {
    pub fn majority_element(nums: Vec<i32>) -> i32 {
        let n = nums.len();
        let mut freq = HashMap::new();
        for num in nums {
            *freq.entry(num).or_insert(0) += 1;
        }
        for (key, value) in freq {
            if value > n / 2 {
                return key;
            }
        }
        -1
    }
}
```

## Go Code
```go
func majorityElement(nums []int) int {
    n := len(nums)
    freq := make(map[int]int)
    for _, num := range nums {
        freq[num]++
    }
    for key, value := range freq {
        if value > n / 2 {
            return key
        }
    }
    return -1
}
```

## Cpp Code
```cpp
class Solution {
public:
    int majorityElement(vector<int>& nums) {
        int n = nums.size();
        unordered_map<int, int> freq;
        for (int num : nums) {
            freq[num]++;
        }
        for (auto it : freq) {
            if (it.second > n / 2) {
                return it.first;
            }
        }
        return -1;
    }
};
```

## C# Code
```csharp
public class Solution {
    public int MajorityElement(int[] nums) {
        int n = nums.Length;
        Dictionary<int, int> freq = new Dictionary<int, int>();
        foreach (int num in nums) {
            if (freq.ContainsKey(num)) {
                freq[num]++;
            } else {
                freq[num] = 1;
            }
        }
        foreach (var pair in freq) {
            if (pair.Value > n / 2) {
                return pair.Key;
            }
        }
        return -1;
    }
}
```

