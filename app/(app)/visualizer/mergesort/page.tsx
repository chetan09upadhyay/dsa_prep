import { MergeSortVisualizer } from "@/components/sorting-visualizer/merge-sort/MergeSortVisualizer";

function Content() {
  return (
    <section className="max-w-4xl mx-auto p-6 bg-gradient-to-br rounded-lg shadow-lg">
      {/* Title */}
      <h1 className="text-4xl font-extrabold text-center text-gray-800 dark:text-gray-100 mb-6">
        Merge Sort
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-8">
        Merge Sort is a divide-and-conquer sorting algorithm that recursively divides the array into smaller subarrays, sorts them, and then merges them back together to produce a fully sorted array.
      </p>

      {/* Algorithm Explanation Section */}
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-4">
        How Merge Sort Works
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Merge Sort divides the input array into two halves, recursively sorts each half, and then merges the sorted halves to produce a single sorted array. The merging process combines two sorted arrays by comparing elements and placing them in the correct order.
      </p>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        For an array of size <code>n</code>, Merge Sort repeatedly divides the array until subarrays are of size 1 (which are inherently sorted), then merges them back while maintaining sorted order.
      </p>

      {/* Implementation Section */}
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-4">
        Merge Sort Implementation
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Below is a basic implementation of Merge Sort in C, demonstrating the recursive division and merging process.
      </p>
      <pre className="bg-[#18181b] text-gray-100 p-4 rounded-md overflow-x-auto">
        <code>
          {`#include <stdio.h>
#include <stdlib.h>

// Merge function to combine two sorted subarrays
void merge(int arr[], int left, int mid, int right) {
    int n1 = mid - left + 1;
    int n2 = right - mid;
    
    // Create temporary arrays
    int* L = (int*)malloc(n1 * sizeof(int));
    int* R = (int*)malloc(n2 * sizeof(int));
    
    // Copy data to temporary arrays
    for (int i = 0; i < n1; i++)
        L[i] = arr[left + i];
    for (int j = 0; j < n2; j++)
        R[j] = arr[mid + 1 + j];
    
    // Merge the temporary arrays back
    int i = 0, j = 0, k = left;
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        } else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }
    
    // Copy remaining elements of L[]
    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }
    
    // Copy remaining elements of R[]
    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
    
    free(L);
    free(R);
}

// Merge Sort function
void mergeSort(int arr[], int left, int right) {
    if (left < right) {
        int mid = left + (right - left) / 2;
        
        // Sort first and second halves
        mergeSort(arr, left, mid);
        mergeSort(arr, mid + 1, right);
        
        // Merge the sorted halves
        merge(arr, left, mid, right);
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
    
    mergeSort(arr, 0, n - 1);
    
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
        <li><strong>Time Complexity:</strong> O(n log n) in all cases (best, average, and worst).</li>
        <li><strong>Space Complexity:</strong> O(n) due to the temporary arrays used during merging.</li>
        <li><strong>Stability:</strong> Merge Sort is stable, preserving the relative order of equal elements.</li>
        <li><strong>Adaptivity:</strong> Not adaptive; it always takes O(n log n) regardless of input order.</li>
      </ul>

      {/* Steps of Merge Sort Section */}
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-4">
        Steps of Merge Sort
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Let's walk through an example with the array <code>[5, 2, 8, 1, 9]</code>:
      </p>
      <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
        <li><strong>Step 1:</strong> Divide array into [5, 2] and [8, 1, 9].</li>
        <li><strong>Step 2:</strong> Divide [5, 2] into [5] and [2]; merge as [2, 5].</li>
        <li><strong>Step 3:</strong> Divide [8, 1, 9] into [8] and [1, 9]; divide [1, 9] into [1] and [9]; merge as [1, 9]; merge [8, 1, 9] as [1, 8, 9].</li>
        <li><strong>Step 4:</strong> Merge [2, 5] and [1, 8, 9] into [1, 2, 5, 8, 9].</li>
      </ul>

      {/* Applications Section */}
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-4">
        Applications
      </h2>
      <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
        <li>Efficient for large datasets due to its consistent O(n log n) time complexity.</li>
        <li>Used in external sorting (sorting large files on disk) because of its divide-and-conquer nature.</li>
        <li>Suitable for linked lists, as it does not require random access to elements.</li>
        <li>Common in parallel processing due to its ability to divide tasks across multiple processors.</li>
      </ul>

      {/* Advantages and Disadvantages Section */}
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-4">
        Advantages and Disadvantages
      </h2>
      <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
        <li><strong>Advantages:</strong> Stable, predictable O(n log n) performance, effective for large datasets and linked lists.</li>
        <li><strong>Disadvantages:</strong> Requires O(n) extra space, not in-place, and less efficient for small datasets compared to Insertion Sort.</li>
      </ul>
    </section>
  );
}

export default function MergeSortPage() {
  return <MergeSortVisualizer content={<Content />} />;
}