// two sum problem

function twoSum(nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];
        if (map.has(diff)) {
            return [map.get(diff), i];
        }
        map.set(nums[i], i);
    }
    return [];
}

function twoSum2(nums, target) {
    let Array = [];
    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];
        if (Array.includes(diff)) {
            return [Array.indexOf(diff), i];
        }
        Array.push(nums[i]);
    }
}
