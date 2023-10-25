// two sum

function twoSum(nums: number[], target: number): number[] {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];
        if (map.has(diff)) {
            return [map.get(diff), i];
        }
        map.set(nums[i], i);
    }
    return [];
};

function twoSum2(nums: number[], target: number): number[] {
    let array = nums.map((value, index) => {
        return { value, index };
    }
    );
    array.sort((a, b) => a.value - b.value);
    let left = 0;
    let right = array.length - 1;
    while (left < right) {
        let sum = array[left].value + array[right].value;
        if (sum === target) {
            return [array[left].index, array[right].index];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
    return [];
}
// this method is called 2 pointer method

