function insertionSort(arr) {
    const n = arr.length;
    for (let i = 1; i < n; i++) {
      // Store the current element to be inserted into the sorted sequence
      const current = arr[i];
  
      // Initialize a pointer to traverse the sorted sequence from right to left
      let j = i - 1;
  
      // Shift elements greater than the current element to the right
      while (j >= 0 && arr[j] > current) {
        arr[j + 1] = arr[j];
        j--;
      }
  
      // Insert the current element into the correct position in the sorted sequence
      arr[j + 1] = current;
    }
  
    return arr;
  }
  
  // Example usage:
  const array = [64, 34, 25, 12, 22, 11, 90];
  console.log("Original array:", array);
  const sortedArray = insertionSort(array);
  console.log("Sorted array:", sortedArray);
  