class Solution {
public:
    int firstUniqChar(string s) {
        int n = s.size();
        int arr[26] = {0};
        for(int i=0;i<n;i++){
            arr[s[i]-'a']++;
        }
        for(int i=0;i<n;i++){
            if(arr[s[i]-'a']==1){
                return i;
            }
        }
        return -1;
    }
};

// Path: leet%20code/leet_code/c%2B%2B/Second.cpp