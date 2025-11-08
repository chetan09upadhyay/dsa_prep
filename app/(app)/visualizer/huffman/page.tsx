import { HuffmanVisualizer } from "@/components/visualizer/huffman/huffman-visualizer"

function Content() {
  return (
    <section className="max-w-4xl mx-auto p-6   rounded-lg shadow-lg">
      {/* Title */}
      <h1 className="text-4xl font-extrabold text-center text-gray-800 dark:text-gray-100 mb-6">
        Huffman Coding
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-8">
        A <span className="font-semibold text-emerald-600 dark:text-emerald-400">lossless data compression</span> algorithm that assigns{" "}
        <span className="font-semibold text-teal-600 dark:text-teal-400">variable-length prefix codes</span> to characters based on their frequency.
      </p>

      {/* Concept Section */}
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-4">
        Core Idea
      </h2>
      <div className="p-6 bg-white dark:bg-[#18181b] rounded-md shadow-sm mb-8">
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Frequent characters → <strong>shorter codes</strong><br />
          Rare characters → <strong>longer codes</strong>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
          <div className="p-4 bg-emerald-50 dark:bg-emerald-900 rounded">
            <strong className="block text-emerald-700 dark:text-emerald-300 mb-2">Fixed-Length (ASCII)</strong>
            <code className="text-lg">A = 01000001 (8 bits)</code>
          </div>
          <div className="p-4 bg-teal-50 dark:bg-teal-900 rounded">
            <strong className="block text-teal-700 dark:text-teal-300 mb-2">Huffman (Variable)</strong>
            <code className="text-lg">A = 0 (1 bit)</code>
          </div>
        </div>
        <p className="text-center mt-4 text-sm text-gray-500 dark:text-gray-400">
          Saves up to <strong>50%+</strong> space for repetitive text
        </p>
      </div>

      {/* Step-by-Step Algorithm */}
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-4">
        Huffman Algorithm Steps
      </h2>
      <ol className="list-decimal list-inside text-gray-600 dark:text-gray-300 space-y-3 mb-6 ml-4">
        <li>
          <strong>Count frequency</strong> of each character.
        </li>
        <li>
          Build a <strong>min-heap (priority queue)</strong> of characters sorted by frequency.
        </li>
        <li>
          Repeatedly:
          <ul className="list-disc ml-6 mt-1">
            <li>Extract two nodes with <strong>lowest frequency</strong>.</li>
            <li>Create a <strong>parent node</strong> with frequency = sum.</li>
            <li>Insert parent back into heap.</li>
          </ul>
        </li>
        <li>
          The final tree is the <strong>Huffman Tree</strong>.
        </li>
        <li>
          Traverse tree: <strong>Left = 0</strong>, <strong>Right = 1</strong> → assign codes.
        </li>
      </ol>

      {/* Example Section */}
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-4">
        Step-by-Step Example
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Input: <code className="bg-gray-100 dark:bg-gray-700 px-2 rounded">"AABBBCCCCD"</code>
      </p>

      <div className="space-y-6">
        {/* Frequency Table */}
        <div>
          <h3 className="font-semibold text-emerald-600 dark:text-emerald-400 mb-2">1. Frequency Count</h3>
          <table className="w-full text-sm bg-white dark:bg-[#18181b] rounded-md shadow-sm">
            <thead>
              <tr className="bg-emerald-100 dark:bg-emerald-900">
                <th className="p-2">Char</th>
                <th className="p-2">A</th>
                <th className="p-2">B</th>
                <th className="p-2">C</th>
                <th className="p-2">D</th>
              </tr>
            </thead>
            <tbody className="text-center">
              <tr>
                <td className="p-2 font-mono bg-gray-50 dark:bg-gray-800">Freq</td>
                <td className="p-2">2</td>
                <td className="p-2">3</td>
                <td className="p-2">4</td>
                <td className="p-2">1</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Tree Building */}
        <div>
          <h3 className="font-semibold text-teal-600 dark:text-teal-400 mb-2">2. Build Huffman Tree</h3>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md font-mono text-xs overflow-x-auto">
            <pre>
{`Min-Heap: [D:1, A:2, B:3, C:4]

Step 1: Extract D(1), A(2) → Create Node(3)
        Insert Node(3)
Heap: [Node:3, B:3, C:4]

Step 2: Extract Node(3), B(3) → Create Node(6)
        Insert Node(6)
Heap: [C:4, Node:6]

Step 3: Extract C(4), Node(6) → Create Root(10)`}
            </pre>
          </div>
        </div>

        {/* Final Codes */}
        <div>
          <h3 className="font-semibold text-emerald-600 dark:text-emerald-400 mb-2">3. Assign Codes</h3>
          <table className="w-full text-sm bg-white dark:bg-[#18181b] rounded-md shadow-sm">
            <thead>
              <tr className="bg-teal-100 dark:bg-teal-900">
                <th className="p-2">Char</th>
                <th className="p-2">Code</th>
                <th className="p-2">Bits</th>
              </tr>
            </thead>
            <tbody className="text-center">
              <tr><td className="p-2">C</td><td className="p-2 font-mono">0</td><td className="p-2">1</td></tr>
              <tr><td className="p-2">B</td><td className="p-2 font-mono">10</td><td className="p-2">2</td></tr>
              <tr><td className="p-2">A</td><td className="p-2 font-mono">110</td><td className="p-2">3</td></tr>
              <tr><td className="p-2">D</td><td className="p-2 font-mono">111</td><td className="p-2">3</td></tr>
            </tbody>
          </table>
        </div>

        {/* Compression Result */}
        <div className="p-4 bg-emerald-50 dark:bg-emerald-900 rounded-md text-center">
          <p className="font-semibold">Original: 10 chars × 8 bits = <strong>80 bits</strong></p>
          <p className="font-semibold text-emerald-600 dark:text-emerald-400">
            Compressed: (4×1 + 3×2 + 2×3 + 1×3) = <strong>19 bits</strong> → <strong>76% savings!</strong>
          </p>
        </div>
      </div>

      {/* Implementation */}
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-4">
        C Implementation
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Using <strong>min-heap</strong> and <strong>tree nodes</strong>:
      </p>
      <pre className="bg-[#18181b] text-gray-100 p-4 rounded-md overflow-x-auto text-xs">
        <code>
{`#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAX_TREE_NODES 256

typedef struct Node {
    char data;
    int freq;
    struct Node *left, *right;
} Node;

typedef struct MinHeap {
    int size;
    Node* array[MAX_TREE_NODES];
} MinHeap;

// Create new node
Node* newNode(char data, int freq) {
    Node* temp = (Node*)malloc(sizeof(Node));
    temp->data = data;
    temp->freq = freq;
    temp->left = temp->right = NULL;
    return temp;
}

// Create min heap
MinHeap* createMinHeap() {
    MinHeap* heap = (MinHeap*)malloc(sizeof(MinHeap));
    heap->size = 0;
    return heap;
}

// Swap nodes
void swap(Node** a, Node** b) {
    Node* t = *a;
    *a = *b;
    *b = t;
}

// Heapify
void minHeapify(MinHeap* heap, int idx) {
    int smallest = idx;
    int left = 2 * idx + 1;
    int right = 2 * idx + 2;

    if (left < heap->size && heap->array[left]->freq < heap->array[smallest]->freq)
        smallest = left;
    if (right < heap->size && heap->array[right]->freq < heap->array[smallest]->freq)
        smallest = right;

    if (smallest != idx) {
        swap(&heap->array[smallest], &heap->array[idx]);
        minHeapify(heap, smallest);
    }
}

// Extract minimum
Node* extractMin(MinHeap* heap) {
    Node* temp = heap->array[0];
    heap->array[0] = heap->array[heap->size - 1];
    heap->size--;
    minHeapify(heap, 0);
    return temp;
}

// Insert into heap
void insertMinHeap(MinHeap* heap, Node* node) {
    heap->size++;
    int i = heap->size - 1;
    while (i && node->freq < heap->array[(i - 1) / 2]->freq) {
        heap->array[i] = heap->array[(i - 1) / 2];
        i = (i - 1) / 2;
    }
    heap->array[i] = node;
}

// Build Huffman Tree
Node* buildHuffmanTree(char data[], int freq[], int size) {
    MinHeap* heap = createMinHeap();

    for (int i = 0; i < size; i++)
        insertMinHeap(heap, newNode(data[i], freq[i]));

    while (heap->size > 1) {
        Node *left = extractMin(heap);
        Node *right = extractMin(heap);
        Node *parent = newNode('$', left->freq + right->freq);
        parent->left = left;
        parent->right = right;
        insertMinHeap(heap, parent);
    }
    return extractMin(heap);
}

// Print codes
void printCodes(Node* root, int arr[], int top) {
    if (root->left) {
        arr[top] = 0;
        printCodes(root->left, arr, top + 1);
    }
    if (root->right) {
        arr[top] = 1;
        printCodes(root->right, arr, top + 1);
    }
    if (!root->left && !root->right) {
        printf("%c: ", root->data);
        for (int i = 0; i < top; i++) printf("%d", arr[i]);
        printf("\\n");
    }
}

// Main
int main() {
    char data[] = {'A', 'B', 'C', 'D'};
    int freq[] = {2, 3, 4, 1};
    int size = 4;

    Node* root = buildHuffmanTree(data, freq, size);
    int arr[MAX_TREE_NODES], top = 0;
    printCodes(root, arr, top);

    return 0;
}`}
        </code>
      </pre>

      {/* Properties */}
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-4">
        Key Properties
      </h2>
      <ul className="space-y-4">
        <li className="p-4 bg-white dark:bg-[#18181b] rounded-md shadow-sm">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
            Prefix-Free Codes
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            No code is a prefix of another → <strong>uniquely decodable</strong>.
          </p>
        </li>
        <li className="p-4 bg-white dark:bg-[#18181b] rounded-md shadow-sm">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
            Optimal for Symbol Codes
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Proven to produce the <strong>shortest average code length</strong> for given frequencies.
          </p>
        </li>
        <li className="p-4 bg-white dark:bg-[#18181b] rounded-md shadow-sm">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
            Greedy Algorithm
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Always picks the two smallest → builds optimal tree.
          </p>
        </li>
      </ul>

      {/* Applications */}
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-4">
        Applications
      </h2>
      <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
        <li>File compression (ZIP, GZIP, PNG)</li>
        <li>JPEG and MP3 (entropy coding)</li>
        <li>Network data transmission</li>
        <li>Text messaging and storage</li>
        <li>DNA sequence compression</li>
      </ul>

      {/* Quick Reference */}
      <div className="mt-8 p-5 bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900 dark:to-teal-900 rounded-lg">
        <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-3">
          Compression Comparison
        </h3>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b dark:border-gray-700">
              <th className="text-left py-1">Method</th>
              <th className="text-left py-1">Code for 'A'</th>
              <th className="text-left py-1">Avg Bits/Char</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="py-1">ASCII</td><td>01000001</td><td>8.0</td></tr>
            <tr><td className="py-1">Huffman</td><td>0</td><td>~1.9</td></tr>
            <tr><td className="py-1">Savings</td><td>-</td><td><strong>76%</strong></td></tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default function HuffmanPage() {
  return <HuffmanVisualizer content={<Content/>} />
} 