# Approch
- [x] **Method 1** : **Using Hashing**. [Code] (Solution-1.md)
  - [x] Store the frequency of each element in a hash table.
  - [x] Traverse the hash table and print the elements with frequency greater than 1.
- [x] **Method 2** : **Two Pointer Approach**. [Code] (Solution-2.md) (Best Method)
    - [x] Initialize a pointer `i` at 0.
    - [x] Iterate over the array from index 1 to the end.
    - [x] If the current element is not equal to the element at index `i`, increment `i` and set the element at index `i` to the current element.
    - [x] Return `i + 1`.
