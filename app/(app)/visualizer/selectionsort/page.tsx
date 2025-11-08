// app/visualizer/selectionsort/page.tsx
import { SelectionSortVisualizer } from "@/components/sorting-visualizer/selection-sort/SelectionSortVisualizer";

function Content() {
  return (
    <section className="max-w-4xl mx-auto p-6 bg-gradient-to-br rounded-lg shadow-lg">
      {/* Title */}
      <h1 className="text-4xl font-extrabold text-center text-gray-800 dark:text-gray-100 mb-6">
        Selection Sort
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-8">
        Selection Sort is a simple comparison-based sorting algorithm that divides the input array into a sorted and an unsorted region. It repeatedly selects the smallest (or largest) element from the unsorted region and places it at the beginning of the sorted region.
      </p>

      {/* Algorithm Explanation Section */}
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-4">
        How Selection Sort Works
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Selection Sort works by iterating through the array and, in each pass, finding the minimum (or maximum, for descending order) element in the unsorted portion of the array. This minimum element is then swapped with the first element of the unsorted region, effectively growing the sorted region by one element per pass.
      </p>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        For an array of size <code>n</code>, Selection Sort performs <code>n-1</code> passes, with each pass identifying the smallest element in the remaining unsorted portion and placing it in its correct position.
      </p>

      {/* Implementation Section */}
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-4">
        Selection Sort Implementation
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Below is a basic implementation of Selection Sort in C, which finds the minimum element in each pass and swaps it with the first element of the unsorted region.
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

// Selection Sort function
void selectionSort(int arr[], int n) {
    for (int i = 0; i < n - 1; i++) {
        // Find the minimum element in the unsorted portion
        int min_idx = i;
        for (int j = i + 1; j < n; j++) {
            if (arr[j] < arr[min_idx]) {
                min_idx = j;
            }
        }
        // Swap the found minimum element with the first element of the unsorted portion
        if (min_idx != i) {
            swap(&arr[i], &arr[min_idx]);
        }
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
    
    selectionSort(arr, n);
    
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
        <li><strong>Time Complexity:</strong> O(n²) in worst, average, and best cases, as it always performs a fixed number of comparisons.</li>
        <li><strong>Space Complexity:</strong> O(1) as it is an in-place sorting algorithm.</li>
        <li><strong>Stability:</strong> Selection Sort is not stable, as it may change the relative order of equal elements during swaps.</li>
        <li><strong>Adaptivity:</strong> Not adaptive; it performs the same number of operations regardless of the input array's initial order.</li>
      </ul>

      {/* Steps of Selection Sort Section */}
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-4">
        Steps of Selection Sort
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Let's walk through an example with the array <code>[5, 2, 8, 1, 9]</code>:
      </p>
      <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
        <li><strong>Pass 1:</strong> Find minimum in [5, 2, 8, 1, 9] → 1. Swap 5 and 1. Array: [1, 2, 8, 5, 9]</li>
        <li><strong>Pass 2:</strong> Find minimum in [2, 8, 5, 9] → 2. No swap needed. Array: [1, 2, 8, 5, 9]</li>
        <li><strong>Pass 3:</strong> Find minimum in [8, 5, 9] → 5. Swap 8 and 5. Array: [1, 2, 5, 8, 9]</li>
        <li><strong>Pass 4:</strong> Find minimum in [8, 9] → 8. No swap needed. Array: [1, 2, 5, 8, 9]</li>
      </ul>

      {/* Applications Section */}
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-4">
        Applications
      </h2>
      <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
        <li>Educational purposes due to its simplicity and ease of understanding.</li>
        <li>Sorting small datasets where simplicity is preferred over efficiency.</li>
        <li>Scenarios where minimizing the number of swaps is important, as Selection Sort performs at most O(n) swaps.</li>
      </ul>

      {/* Advantages and Disadvantages Section */}
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-4">
        Advantages and Disadvantages
      </h2>
      <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
        <li><strong>Advantages:</strong> Simple to implement, in-place, and performs a minimal number of swaps (O(n)).</li>
        <li><strong>Disadvantages:</strong> Inefficient for large datasets due to O(n²) time complexity, not stable, and not adaptive to partially sorted data.</li>
      </ul>
    </section>
  );
}

export default function SelectionSortPage() {
  return <SelectionSortVisualizer content={<Content />} />;
}