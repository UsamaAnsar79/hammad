//Print Sub-Arrays
//In this challenge, print your array every time your partitioning method finishes, i.e. whenever two subarrays, along with the pivot, are merged together.

QuickSort(List<int> arr,int low,int high){
  if(low < high){
    int pivotIndex=Partition(arr, low, high);
    // Print the left subarray
    print("Left subarray:");
    print(arr.sublist(low, pivotIndex));

    // Print the pivot
    print("Pivot:");
    print(arr[pivotIndex]);

    // Print the right subarray
    print("Right subarray:");
    print(arr.sublist(pivotIndex + 1, high + 1));
   QuickSort(arr, low, pivotIndex-1);

    QuickSort(arr, pivotIndex+1, high);
  }
}
Partition(List<int> arr,int low,int high){
  int pivot=arr[low];
  int i=low+1;
  int j=arr.length-1;
  while(low<high){
    while(i<=j && arr[i] < pivot){
      i++;
      
    }
    while(i<=j  && arr[j] > pivot){
      j--;
    }
    if(i>=j){
      break;
    }
    int temp=arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
  }
  arr[low]=arr[j];
  arr[j]=pivot;
  return j;
}
void main(){
  List<int> arr=[4, 5, 3, 7 ,2];
  QuickSort(arr,0,arr.length-1);
  print(arr);
}
