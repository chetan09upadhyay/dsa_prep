import { QuickSortVisualizer } from "@/components/sorting-visualizer/quick-sort/QuickSortVisualizer";

function Content() {
  return (
    <section className="max-w-4xl mx-auto p-6 bg-gradient-to-br rounded-lg shadow-lg">
      {/* Title */}
      <h1 className="text-4xl font-extrabold text-center text-gray-800 dark:text-gray-100 mb-6">
        Quick Sort
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-8">
        Quick Sort is a highly efficient divide-and-conquer sorting algorithm that selects a pivot element, partitions the array around it, and recursively sorts the resulting subarrays.
      </p>

      {/* Algorithm Explanation Section */}
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-4">
        How Quick Sort Works
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Quick Sort chooses a pivot element (often the last element, but other strategies exist) and partitions the array such that elements smaller than the pivot are placed before it, and elements larger are placed after it. The algorithm then recursively applies the same process to the subarrays on either side of the pivot.
      </p>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        For an array of size <code>n</code>, Quick Sort typically selects a pivot, partitions the array, and recursively sorts the subarrays until the entire array is sorted.
      </p>

      {/* Implementation Section */}
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-4">
        Quick Sort Implementation
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Below is a basic implementation of Quick Sort in C, using the last element as the pivot for partitioning.
      </p>
      <pre className="bg-[#18181b] text-gray-100 p-4 rounded-md overflow-x-auto">
        <code>
          {`#include <stdio.h>

// Function to swap two elements
void swap(int* a, int* b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

// Function to partition the array using the last element as pivot
int partition(int arr[], int low, int high) {
    int pivot = arr[high]; // Choose the last element as pivot
    int i = low - 1;       // Index of smaller element
    
    for (int j = low; j < high; j++) {
        // If current element is smaller than or equal to pivot
        if (arr[j] <= pivot) {
            i++; // Increment index of smaller element
            swap(&arr[i], &arr[j]);
        }
    }
    swap(&arr[i + 1], &arr[high]);
    return i + 1; // Return the partition index
}

// Quick Sort function
void quickSort(int arr[], int low, int high) {
    if (low < high) {
        // Partition the array and get the pivot index
        int pi = partition(arr, low, high);
        
        // Recursively sort elements before and after partition
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}

// Function to print the array
void printArray(int arr[], int n) {
    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    printf("\n");
}

// Example usage
int main() {
    int arr[] = {64, 34, 25, 12, 22, 11, 90};
    int n = sizeof(arr) / sizeof(arr[0]);
    
    printf("Original array: ");
    printArray(arr, n);
    
    quickSort(arr, 0, n - 1);
    
    printf("Sorted array: ");
    printArray(arr, n);
    
    return 0;
}`}
        </code>
      </pre>
      <p className="text-gray-600 dark:text-gray-300 mt-4">
        <strong>Output:</strong>
        <br />
        Original array: 64 34 25 12 22 11 90
        <br />
        Sorted array: 11 12 22 25 34 64 90
      </p>

      {/* Properties Section */}
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-4">
        Properties
      </h2>
      <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
        <li><strong>Time Complexity:</strong> O(n log n) in average and best cases, O(n²) in worst case (e.g., already sorted array with poor pivot choice).</li>
        <li><strong>Space Complexity:</strong> O(log n) for the recursive call stack in average case, O(n) in worst case.</li>
        <li><strong>Stability:</strong> Quick Sort is not stable, as it may change the relative order of equal elements.</li>
        <li><strong>Adaptivity:</strong> Not highly adaptive, but performance can improve with good pivot selection (e.g., median-of-three).</li>
      </ul>

      {/* Steps of Quick Sort Section */}
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-4">
        Steps of Quick Sort
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Let's walk through an example with the array <code>[5, 2, 8, 1, 9]</code>, using the last element as the pivot:
      </p>
      <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
        <li><strong>Step 1:</strong> Choose pivot 9. Partition: [5, 2, 8, 1] (≤9), [9]. Array: [5, 2, 8, 1, 9].</li>
        <li><strong>Step 2:</strong> For [5, 2, 8, 1], choose pivot 1. Partition: [], [1], [5, 2, 8]. Array: [1, 5, 2, 8, 9].</li>
        <li><strong>Step 3:</strong> For [5, 2, 8], choose pivot 8. Partition: [5, 2], [8]. Array: [1, 5, 2, 8, 9].</li>
        <li><strong>Step 4:</strong> For [5, 2], choose pivot 2. Partition: [], [2], [5]. Array: [1, 2, 5, 8, 9].</li>
      </ul>

      {/* Applications Section */}
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-4">
        Applications
      </h2>
      <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
        <li>Widely used in general-purpose sorting due to its efficiency for large datasets.</li>
        <li>Found in many standard library implementations (e.g., C++'s <code>std::sort</code> often uses a variant of Quick Sort).</li>
        <li>Suitable for in-memory sorting of arrays where random access is efficient.</li>
        <li>Used in scenarios requiring high performance, such as database indexing and computational geometry.</li>
      </ul>

      {/* Advantages and Disadvantages Section */}
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-4">
        Advantages and Disadvantages
      </h2>
      <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
        <li><strong>Advantages:</strong> Highly efficient with O(n log n) average time complexity, in-place sorting, and cache-friendly due to locality of reference.</li>
        <li><strong>Disadvantages:</strong> O(n²) worst-case time complexity with poor pivot choices, not stable, and requires careful implementation to avoid performance degradation.</li>
      </ul>
    </section>
  );
}

export default function QuickSortPage() {
  return <QuickSortVisualizer content={<Content />} />;
}