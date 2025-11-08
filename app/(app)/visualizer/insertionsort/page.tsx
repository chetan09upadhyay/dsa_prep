// app/visualizer/insertionsort/page.tsx
import { InsertionSortVisualizer } from "@/components/sorting-visualizer/insertion-sort/InsertionSortVisualizer";

function Content() {
  return (
    <section className="max-w-4xl mx-auto p-6 bg-gradient-to-br rounded-lg shadow-lg">
      {/* Title */}
      <h1 className="text-4xl font-extrabold text-center text-gray-800 dark:text-gray-100 mb-6">
        Insertion Sort
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-8">
        Insertion Sort is a simple sorting algorithm that builds a sorted array one element at a time by repeatedly inserting the next element into its correct position.
      </p>

      {/* Algorithm Explanation Section */}
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-4">
        How Insertion Sort Works
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Insertion Sort works by dividing the array into a sorted and an unsorted portion. It iterates through the unsorted portion, taking one element at a time and inserting it into its correct position in the sorted portion by shifting larger elements to the right. This process continues until the entire array is sorted.
      </p>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        For an array of size <code>n</code>, Insertion Sort processes each element from index 1 to <code>n-1</code>, comparing and shifting elements as needed to maintain the sorted portion.
      </p>

      {/* Implementation Section */}
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-4">
        Insertion Sort Implementation
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Below is a basic implementation of Insertion Sort in C, demonstrating how elements are inserted into the sorted portion of the array.
      </p>
      <pre className="bg-[#18181b] text-gray-100 p-4 rounded-md overflow-x-auto">
        <code>
          {`#include <stdio.h>

// Insertion Sort function
void insertionSort(int arr[], int n) {
    for (int i = 1; i < n; i++) {
        int key = arr[i]; // Element to be inserted
        int j = i - 1;    // Index of the last element in sorted portion

        // Shift elements of sorted portion that are greater than key
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        // Place key in its correct position
        arr[j + 1] = key;
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
    
    insertionSort(arr, n);
    
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
        <li><strong>Time Complexity:</strong> O(n²) in worst and average cases, O(n) in best case (nearly sorted array).</li>
        <li><strong>Space Complexity:</strong> O(1) as it is an in-place sorting algorithm.</li>
        <li><strong>Stability:</strong> Insertion Sort is stable, preserving the relative order of equal elements.</li>
        <li><strong>Adaptivity:</strong> Highly adaptive, performing efficiently on partially sorted or nearly sorted arrays.</li>
      </ul>

      {/* Steps of Insertion Sort Section */}
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-4">
        Steps of Insertion Sort
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Let's walk through an example with the array <code>[5, 2, 8, 1, 9]</code>:
      </p>
      <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
        <li><strong>Step 1:</strong> Take 2, shift 5 right (5 &gt 2). Array: [2, 5, 8, 1, 9]</li>
        <li><strong>Step 2:</strong> Take 8, no shifts needed (8 &gt 5). Array: [2, 5, 8, 1, 9]</li>
        <li><strong>Step 3:</strong> Take 1, shift 8, 5, 2 right (8, 5, 2 &gt 1). Array: [1, 2, 5, 8, 9]</li>
        <li><strong>Step 4:</strong> Take 9, no shifts needed (9 &gt 8). Array: [1, 2, 5, 8, 9]</li>
      </ul>

      {/* Applications Section */}
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-4">
        Applications
      </h2>
      <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
        <li>Educational purposes due to its intuitive and simple approach.</li>
        <li>Sorting small datasets where simplicity and stability are important.</li>
        <li>Efficient for nearly sorted or small arrays, often used in hybrid sorting algorithms (e.g., with Quick Sort for small subarrays).</li>
      </ul>

      {/* Advantages and Disadvantages Section */}
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-4">
        Advantages and Disadvantages
      </h2>
      <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
        <li><strong>Advantages:</strong> Simple to implement, stable, in-place, and highly efficient for small or nearly sorted arrays.</li>
        <li><strong>Disadvantages:</strong> Inefficient for large datasets due to O(n²) time complexity, outperformed by algorithms like Quick Sort or Merge Sort for large arrays.</li>
      </ul>
    </section>
  );
}

export default function InsertionSortPage() {
  return <InsertionSortVisualizer content={<Content />} />;
}