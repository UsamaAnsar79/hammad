//In practice, how much faster is Quicksort (in-place) than Insertion Sort? Compare the running time of the two algorithms by counting how many swaps or shifts each one takes to sort an array, and output the difference. You can modify your previous sorting code to keep track of the swaps. The number of swaps required by Quicksort to sort any given input have to be calculated. Keep in mind that the last element of a block is chosen as the pivot, and that the array is sorted in-place as demonstrated in the explanation below.

//Any time a number is lower than the partition, it should be "swapped", even if it doesn't actually move to a different location. Also ensure that you count the swap when the pivot is moved into place. The count for Insertion Sort should be the same as the previous challenge, where you just count the number of "shifts".

void swap(List<int> arr, int i, int j) {
  int temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
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

int quickSort(List<int> arr, int low, int high) {
  int swaps = 0;
  if (low < high) {
    int pivotIndex = partition(arr, low, high);
    swaps += high - low; 
    swaps += quickSort(arr, low, pivotIndex - 1);
    swaps += quickSort(arr, pivotIndex + 1, high);
  }

  return swaps; 
}

int insertionSort(List<int> arr, int n) {
  int shifts = 0;
  for (int i = 1; i < n; i++) {
    int key = arr[i];
    int j = i - 1;
    while (j >= 0 && arr[j] > key) {
      shifts++;
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return shifts;
}

void calculateAndPrintDifference(List<int> arr,int n) {
  int quicksortSwaps = quickSort(arr.toList(), 0, n - 1);
  int insertionSortShifts = insertionSort(arr, arr.length);

  int difference = quicksortSwaps - insertionSortShifts;

  print("Sorted array (quicksort): ${arr}");
  print("Quicksort swaps: $quicksortSwaps");
  print("Insertion Sort shifts: $insertionSortShifts");
  print("Difference: $difference");
}

void main() {
  List<int> arr = [1, 3,9, 8, 2,7, 5];
int n=7;
  calculateAndPrintDifference(arr,n);
}