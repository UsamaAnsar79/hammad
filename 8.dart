//The previous version of Quicksort was easy to understand, but it was not optimal. It required copying the numbers into other arrays, which takes up space and time. To make things faster, one can create an "in-place" version of Quicksort, where the numbers are all sorted within the array itself.


void quickSort(List<int> arr, int low, int high) {
  if (low < high) {
    
    int pivotIndex = partition(arr, low, high);

   
    print("Left subarray:");
    for (int i = low; i < pivotIndex; i++) {
      print(arr[i]);
    }

  
    print("Pivot:");
    print(arr[pivotIndex]);

    
    print("Right subarray:");
    for (int i = pivotIndex + 1; i <= high; i++) {
      print(arr[i]);
    }

   
    quickSort(arr, low, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, high);
  }
}

int partition(List<int> arr, int low, int high) {
  int pivot = arr[high];
  int i = (low - 1);

  for (int j = low; j < high; j++) {
    if (arr[j] <= pivot) {
      i++;
      swap(arr, i, j);
    }
  }

  swap(arr, i + 1, high);
  return i + 1;
}

void swap(List<int> arr, int i, int j) {
  int temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

void main() {
  List<int> arr = [5, 3, 8, 2, 4];
  quickSort(arr, 0, arr.length - 1);
  print("Sorted array:");
  print(arr);
}
