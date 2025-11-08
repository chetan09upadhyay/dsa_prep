// app/visualizer/bubblesort/page.tsx
import { BubbleSortVisualizer } from "@/components/sorting-visualizer/bubble-sort/BubbleSortVisualizer";

function Content() {
  return (
    <section className="max-w-4xl mx-auto p-6 bg-gradient-to-br rounded-lg shadow-lg">
      {/* Title */}
      <h1 className="text-4xl font-extrabold text-center text-gray-800 dark:text-gray-100 mb-6">
        Bubble Sort
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-8">
        Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The process continues until no more swaps are needed, indicating the list is sorted.
      </p>

      {/* Algorithm Explanation Section */}
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-4">
        How Bubble Sort Works
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Bubble Sort works by repeatedly iterating through the array, comparing each pair of adjacent elements. If the elements are in the wrong order (e.g., the first is greater than the second for ascending order), they are swapped. Each iteration "bubbles up" the largest (or smallest) unsorted element to its correct position. The algorithm continues until no swaps are needed.
      </p>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        For an array of size <code>n</code>, Bubble Sort performs up to <code>n-1</code> passes, with each pass requiring fewer comparisons as the end of the array becomes sorted.
      </p>

      {/* Implementation Section */}
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-4">
        Bubble Sort Implementation
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Below is a basic implementation of Bubble Sort in C, including an optimized version that stops early if the array is already sorted.
      </p>
      <pre className="bg-[#18181b] text-gray-100 p-4 rounded-md overflow-x-auto">
        <code>
          {`#include <stdio.h>
#include <stdbool.h>

// Function to swap two elements
void swap(int* a, int* b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

// Bubble Sort function
void bubbleSort(int arr[], int n) {
    bool swapped;
    for (int i = 0; i < n - 1; i++) {
        swapped = false; // Flag to optimize for already sorted arrays
        // Last i elements are already in place
        for (int j = 0; j < n - i - 1; j++) {
            // Compare adjacent elements
            if (arr[j] > arr[j + 1]) {
                swap(&arr[j], &arr[j + 1]);
                swapped = true; // Swap occurred
            }
        }
        // If no swapping occurred, array is sorted
        if (!swapped) break;
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
    
    bubbleSort(arr, n);
    
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
        <li><strong>Time Complexity:</strong> O(n²) in worst and average cases, O(n) in best case (optimized version with early termination).</li>
        <li><strong>Space Complexity:</strong> O(1) as it is an in-place sorting algorithm.</li>
        <li><strong>Stability:</strong> Bubble Sort is stable, meaning it preserves the relative order of equal elements.</li>
        <li><strong>Adaptivity:</strong> The optimized version adapts to partially sorted arrays, stopping early if no swaps are needed.</li>
      </ul>

      {/* Steps of Bubble Sort Section */}
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-4">
        Steps of Bubble Sort
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Let's walk through an example with the array <code>[5, 2, 8, 1, 9]</code>:
      </p>
      <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
        <li><strong>Pass 1:</strong> Compare and swap if needed: (5,2) → (2,5), (5,8), (8,1) → (1,8), (8,9). Array: [2, 5, 1, 8, 9]</li>
        <li><strong>Pass 2:</strong> Compare and swap: (2,5), (5,1) → (1,5), (5,8), (8,9). Array: [2, 1, 5, 8, 9]</li>
        <li><strong>Pass 3:</strong> Compare and swap: (2,1) → (1,2), (2,5), (5,8). Array: [1, 2, 5, 8, 9]</li>
        <li><strong>Pass 4:</strong> No swaps needed (array is sorted). Stop early if optimized.</li>
      </ul>

      {/* Applications Section */}
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-4">
        Applications
      </h2>
      <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
        <li>Educational purposes due to its simplicity and ease of understanding.</li>
        <li>Sorting small datasets where simplicity is preferred over efficiency.</li>
        <li>Scenarios where the data is nearly sorted, as the optimized version performs well.</li>
      </ul>

      {/* Advantages and Disadvantages Section */}
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-4">
        Advantages and Disadvantages
      </h2>
      <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
        <li><strong>Advantages:</strong> Simple to implement, stable, in-place, and adaptive with optimization.</li>
        <li><strong>Disadvantages:</strong> Inefficient for large datasets due to O(n²) time complexity, outperformed by algorithms like Quick Sort or Merge Sort.</li>
      </ul>
    </section>
  );
}

export default function BubbleSortPage() {
  return <BubbleSortVisualizer content={<Content />} />;
}