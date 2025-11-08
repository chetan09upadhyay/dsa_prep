"use client"

import { HeapVisualizer } from "@/components/visualizer/heap/heap-visualizer"
// import Content from "./heap.mdx"



function Content() {
  return (
    <section className="max-w-4xl mx-auto p-6 bg-gradient-to-br rounded-lg shadow-lg">
      {/* Title */}
      <h1 className="text-4xl font-extrabold text-center text-gray-800 dark:text-gray-100 mb-6">
        Binary Heap
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-8">
        A binary heap is a complete binary tree that satisfies the heap property. In a max heap, the value of each node is greater than or equal to its children. In a min heap, the value is less than or equal to its children.
      </p>

      {/* Basic Structure Section */}
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-4">
        Basic Structure
      </h2>
      <pre className="bg-[#18181b] text-gray-100 p-4 rounded-md overflow-x-auto">
        <code>
          {`#define MAX_SIZE 100

typedef struct {
    int arr[MAX_SIZE];
    int size;
    int isMinHeap;  // 1 for min heap, 0 for max heap
} Heap;`}
        </code>
      </pre>

      {/* Implementation Section */}
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-4">
        Binary Heap Implementation
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Below is a complete implementation of both min and max heaps in C:
      </p>
      <pre className="bg-[#18181b] text-gray-100 p-4 rounded-md overflow-x-auto">
        <code>
          {`// Initialize heap
void initHeap(Heap* h, int isMinHeap) {
    h->size = 0;
    h->isMinHeap = isMinHeap;
}

// Get parent index
int parent(int i) {
    return (i - 1) / 2;
}

// Get left child index
int leftChild(int i) {
    return 2 * i + 1;
}

// Get right child index
int rightChild(int i) {
    return 2 * i + 2;
}

// Swap two elements
void swap(int* a, int* b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

// Compare based on heap type
int compareHeap(Heap* h, int a, int b) {
    if (h->isMinHeap)
        return a > b;  // Min heap
    return a < b;      // Max heap
}

// Heapify up (used after insertion)
void heapifyUp(Heap* h, int i) {
    while (i > 0 && compareHeap(h, h->arr[parent(i)], h->arr[i])) {
        swap(&h->arr[i], &h->arr[parent(i)]);
        i = parent(i);
    }
}

// Heapify down (used after deletion)
void heapifyDown(Heap* h, int i) {
    int minMax = i;
    int left = leftChild(i);
    int right = rightChild(i);
    
    if (left < h->size && compareHeap(h, h->arr[minMax], h->arr[left]))
        minMax = left;
        
    if (right < h->size && compareHeap(h, h->arr[minMax], h->arr[right]))
        minMax = right;
        
    if (minMax != i) {
        swap(&h->arr[i], &h->arr[minMax]);
        heapifyDown(h, minMax);
    }
}

// Insert element
void insert(Heap* h, int value) {
    if (h->size >= MAX_SIZE) {
        printf("Heap is full\\n");
        return;
    }
    
    h->arr[h->size] = value;
    heapifyUp(h, h->size);
    h->size++;
}

// Extract root element
int extractRoot(Heap* h) {
    if (h->size <= 0) {
        printf("Heap is empty\\n");
        return -1;
    }
    
    int root = h->arr[0];
    h->arr[0] = h->arr[h->size - 1];
    h->size--;
    heapifyDown(h, 0);
    
    return root;
}

// Peek at root element
int peekRoot(Heap* h) {
    if (h->size <= 0) {
        printf("Heap is empty\\n");
        return -1;
    }
    return h->arr[0];
}`}
        </code>
      </pre>

      {/* Usage Example Section */}
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-4">
        Usage Example
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Below is an example of using min and max heaps in C:
      </p>
      <pre className="bg-[#18181b] text-gray-100 p-4 rounded-md overflow-x-auto">
        <code>
          {`int main() {
    // Create and use a min heap
    Heap minHeap;
    initHeap(&minHeap, 1);
    
    insert(&minHeap, 3);
    insert(&minHeap, 2);
    insert(&minHeap, 1);
    insert(&minHeap, 15);
    insert(&minHeap, 5);
    
    printf("Min element: %d\\n", extractRoot(&minHeap));  // 1
    printf("Next min: %d\\n", extractRoot(&minHeap));     // 2
    
    // Create and use a max heap
    Heap maxHeap;
    initHeap(&maxHeap, 0);
    
    insert(&maxHeap, 3);
    insert(&maxHeap, 2);
    insert(&maxHeap, 1);
    insert(&maxHeap, 15);
    insert(&maxHeap, 5);
    
    printf("Max element: %d\\n", extractRoot(&maxHeap));  // 15
    printf("Next max: %d\\n", extractRoot(&maxHeap));     // 5
    
    return 0;
}`}
        </code>
      </pre>

      {/* Properties Section */}
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-4">
        Properties
      </h2>
      <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
        <li><strong>Complete Binary Tree:</strong> All levels are filled except possibly the last level.</li>
        <li><strong>Heap Property:</strong> Parent-child relationship follows either max-heap or min-heap property.</li>
        <li><strong>Array Representation:</strong> Can be efficiently stored in an array where:
          <ul className="list-circle list-inside ml-4">
            <li>For node at index i:</li>
            <li>Left child: 2i + 1</li>
            <li>Right child: 2i + 2</li>
            <li>Parent: floor((i-1)/2)</li>
          </ul>
        </li>
      </ul>

      {/* Operations Section */}
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-4">
        Operations
      </h2>
      <ul className="space-y-4">
        <li className="p-4 bg-white dark:bg-[#18181b] rounded-md shadow-sm">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
            Insertion <span className="text-sm text-gray-500 dark:text-gray-400">(O(log n))</span>
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            1. Add element at the next available position.<br />
            2. Compare with parent and swap if heap property is violated.<br />
            3. Continue until heap property is satisfied (heapify-up).
          </p>
        </li>
        <li className="p-4 bg-white dark:bg-[#18181b] rounded-md shadow-sm">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
            Deletion <span className="text-sm text-gray-500 dark:text-gray-400">(O(log n))</span>
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            1. Remove root element.<br />
            2. Replace with last element.<br />
            3. Compare with children and swap with larger (max-heap) or smaller (min-heap) child.<br />
            4. Continue until heap property is satisfied (heapify-down).
          </p>
        </li>
      </ul>

      {/* Applications Section */}
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-4">
        Applications
      </h2>
      <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
        <li>Priority Queues</li>
        <li>Heap Sort</li>
        <li>Graph Algorithms (Dijkstra's, Prim's)</li>
        <li>Memory Management</li>
        <li>Event-driven Simulation</li>
      </ul>
    </section>
  );
}

export default function HeapPage() {
  return <HeapVisualizer content={<Content />} />
} 