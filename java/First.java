class Solution {
    public int[] twoSum(int[] nums, int target) {
        int[] a = new int[2];
        for(int i=0;i<nums.length;i++){
            for(int j=i+1;j<nums.length;j++){
                if(nums[i]+nums[j]==target && i!=j){
                    a[0]=i;a[1]=j;
                }
            }
        }
        return(a);
    }
}

class Solution {
    public int[] twoSum(int[] nums, int target) {
        int[] store_index = new int[2];
        for (int i=0;i<nums.length;i++)     
        {
            for (int j=i;j<nums.length;j++)
            {
                int a=nums[i]+nums[j];
                if(a==target && i!=j)
                {
                    store_index[0]=i;
                    store_index[1]=j;
                }
            }
        }
        return(store_index);
    }
}

class Solution {
    public int[] twoSum(int[] nums, int target) {
        // int[] store_index = new int[2];
        for (int i=0;i<nums.length;i++)     
        {
            for (int j=i;j<nums.length;j++)
            {
                int a=nums[i]+nums[j];
                if(a==target && i!=j)
                {
                    // store_index[0]=i;
                    // store_index[1]=j;
                    return new int[] {i,j};
                }
            }
        }
        // return(store_index);
        return new int[]{};
    }
}

class Solution{
    public int[] twoSum(int[] nums,int target)
    {
        HashMap <Integer,Integer> my= new HashMap<>();
        int n=nums.length;
        for(int i=0;i<n;i++)
        {
            my.put(nums[i],i);
        }
        for(int i=0;i<n;i++)
        {
            int rem=target-nums[i];
            if(my.containsKey(rem) && my.get(rem)!=i)
            {
                return new int[]{i,my.get(rem)};
            }
        }
        return new int[]{};
    }
}