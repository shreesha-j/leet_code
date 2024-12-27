# Solution
## Java code
### Solution 1 (Reverse Method)
```java
class Solution {
    public int majorityElement(int[] nums) {
        int length = nums.length;
        int k = k%length;
        reverse(nums, 0, length - 1);
        reverse(nums, 0, k - 1);
        reverse(nums, k, length - 1);
        return nums;
    }

    public void reverse(int[] nums, int start, int end) {
        while (start < end) {
            int temp = nums[start];
            nums[start] = nums[end];
            nums[end] = temp;
            start++;
            end--;
        }
    }
}
```
### Solution 2 (Using Extra Array)
```java
class Solution {
    public int majorityElement(int[] nums) {
        int length = nums.length;
        int k = k%length;
        int[] result = new int[length];
        for (int i = 0; i < length; i++) {
            result[(i + k) % length] = nums[i];
        }
        for (int i = 0; i < length; i++) {
            nums[i] = result[i];
        }
        return nums;
    }
}
```
### Solution 3 (Using Cyclic Replacements)
```java
class Solution {
    public int majorityElement(int[] nums) {
        int length = nums.length;
        int k = k%length;
        int count = 0;
        for (int start = 0; count < length; start++) {
            int current = start;
            int prev = nums[start];
            do {
                int next = (current + k) % length;
                int temp = nums[next];
                nums[next] = prev;
                prev = temp;
                current = next;
                count++;
            } while (start != current);
        }
        return nums;
    }
}
```
### Solution 4 (Using GCD)
```java
class Solution {
    public int majorityElement(int[] nums) {
        int length = nums.length;
        int k = k%length;
        int gcd = gcd(length, k);
        for (int i = 0; i < gcd; i++) {
            int prev = nums[i];
            int current = i;
            do {
                int next = (current + k) % length;
                int temp = nums[next];
                nums[next] = prev;
                prev = temp;
                current = next;
            } while (i != current);
        }
        return nums;
    }

    public int gcd(int a, int b) {
        return b == 0 ? a : gcd(b, a % b);
    }
}
```
### Solution 5 (Brute Force)
```java
class Solution {
    public int majorityElement(int[] nums) {
        int length = nums.length;
        int k = k%length;
        int[] result = new int[length];
        for (int i = 0; i < length; i++) {
            result[(i + k) % length] = nums[i];
        }
        for (int i = 0; i < length; i++) {
            nums[i] = result[i];
        }
        return nums;
    }
}
```
### Solution 6 (Using Juggling Algorithm)
```java
```
### Solution 7 (Dequeue Method)
```java
class Solution {
    public int majorityElement(int[] nums) {
        int length = nums.length;
        int k = k%length;
        Deque<Integer> deque = new ArrayDeque<>();
        for (int i = 0; i < length; i++) {
            deque.add(nums[i]);
        }
        for (int i = 0; i < k; i++) {
            deque.addFirst(deque.pollLast());
        }
        for (int i = 0; i < length; i++) {
            nums[i] = deque.pollFirst();
        }
        return nums;
    }
}
```
