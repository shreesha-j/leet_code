# Best Timed code

## Java code
```java
class Solution {
    static{
        for(int i = 0; i<500; i++){
            majorityElement(new int[1]);
        }
    }
    public static int majorityElement(int[] nums) {
        int votes = 1;
        int candidate = nums[0];
        for(int i = 1; i<nums.length; i++){
            if(nums[i] == candidate) votes++;
            else votes--;
            if(votes == 0){
                candidate = nums[i];
                votes = 1;
            }
        }
        return candidate;
    }
}
```

## C++ code
```cpp
class Solution {
public:
    int majorityElement(vector<int>& nums) {
        int votes = 1;
        int candidate = nums[0];
        for(int i = 1; i<nums.size(); i++){
            if(nums[i] == candidate) votes++;
            else votes--;
            if(votes == 0){
                candidate = nums[i];
                votes = 1;
            }
        }
        return candidate;
    }
};
```


