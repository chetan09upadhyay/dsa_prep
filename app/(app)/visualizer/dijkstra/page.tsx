"use client"

import { DijkstraVisualizer } from "@/components/visualizer/dijkstra/dijkstra-visualizer"

function Content() {
  return (
    <section className="max-w-4xl mx-auto p-6   rounded-lg shadow-lg">
      {/* Title */}
      <h1 className="text-4xl font-extrabold text-center text-gray-800 dark:text-gray-100 mb-6">
        Dijkstra's Algorithm
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-8">
        A <span className="font-semibold text-indigo-600 dark:text-indigo-400">greedy algorithm</span> to find the{" "}
        <span className="font-semibold text-purple-600 dark:text-purple-400">shortest path</span> from a source node to all other nodes in a weighted graph with <strong>non-negative edge weights</strong>.
      </p>

      {/* Concept Section */}
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-4">
        Core Idea
      </h2>
      <div className="p-6 bg-white dark:bg-[#18181b] rounded-md shadow-sm mb-8">
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          At each step, pick the <strong>unvisited node with the smallest known distance</strong> from the source.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
          <div className="p-4 bg-indigo-50 dark:bg-indigo-900 rounded">
            <strong className="block text-indigo-700 dark:text-indigo-300 mb-2">Graph with Weights</strong>
            <code className="text-lg">A → B (4), A → C (2)</code>
          </div>
          <div className="p-4 bg-purple-50 dark:bg-purple-900 rounded">
            <strong className="block text-purple-700 dark:text-purple-300 mb-2">Shortest Path</strong>
            <code className="text-lg">A → C → B = 6</code>
          </div>
        </div>
        <p className="text-center mt-4 text-sm text-gray-500 dark:text-gray-400">
          Works like a <strong>GPS navigation system</strong>
        </p>
      </div>

      {/* Algorithm Steps */}
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-4">
        Algorithm Steps
      </h2>
      <ol className="list-decimal list-inside text-gray-600 dark:text-gray-300 space-y-3 mb-6 ml-4">
        <li>
          Initialize:
          <ul className="list-disc ml-6 mt-1">
            <li><code>dist[source] = 0</code></li>
            <li><code>dist[others] = ∞</code></li>
            <li>Mark all nodes <strong>unvisited</strong></li>
          </ul>
        </li>
        <li>
          While there are unvisited nodes:
          <ul className="list-disc ml-6 mt-1">
            <li>Pick <strong>unvisited node u</strong> with <strong>minimum dist[u]</strong></li>
            <li>Mark u as <strong>visited</strong></li>
            <li>For each neighbor v of u:
              <ul className="list-none ml-4">
                <li>If <code>dist[u] + weight(u,v) &lt; dist[v]</code> → update <code>dist[v]</code></li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <strong>dist[]</strong> contains shortest distances from source.
        </li>
      </ol>

      {/* Example Section */}
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-4">
        Step-by-Step Example
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Find shortest path from <strong>A</strong> to all nodes.
      </p>

      <div className="space-y-6">
        {/* Graph Visualization */}
        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-md text-center">
          <svg width="100%" height="200" viewBox="0 0 400 200" className="mx-auto">
            <circle cx="50" cy="100" r="20" fill="#6366f1" />
            <text x="50" y="105" fill="white" fontSize="14" textAnchor="middle">A</text>
            
            <circle cx="150" cy="50" r="20" fill="#8b5cf6" />
            <text x="150" y="55" fill="white" fontSize="14" textAnchor="middle">B</text>
            
            <circle cx="150" cy="150" r="20" fill="#a78bfa" />
            <text x="150" y="155" fill="white" fontSize="14" textAnchor="middle">C</text>
            
            <circle cx="250" cy="100" r="20" fill="#c4b5fd" />
            <text x="250" y="105" fill="white" fontSize="14" textAnchor="middle">D</text>
            
            <line x1="70" y1="90" x2="130" y2="60" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrow)" />
            <text x="100" y="70" fill="#6b7280" fontSize="12" textAnchor="middle">4</text>
            
            <line x1="70" y1="110" x2="130" y2="140" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrow)" />
            <text x="100" y="135" fill="#6b7280" fontSize="12" textAnchor="middle">2</text>
            
            <line x1="170" y1="60" x2="230" y2="90" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrow)" />
            <text x="200" y="70" fill="#6b7280" fontSize="12" textAnchor="middle">1</text>
            
            <line x1="170" y1="140" x2="230" y2="110" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrow)" />
            <text x="200" y="135" fill="#6b7280" fontSize="12" textAnchor="middle">5</text>
            
            <defs>
              <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                <path d="M0,0 L0,6 L9,3 z" fill="#6b7280" />
              </marker>
            </defs>
          </svg>
        </div>

        {/* Step Table */}
        <div>
          <h3 className="font-semibold text-indigo-600 dark:text-indigo-400 mb-2">Execution Table</h3>
          <table className="w-full text-xs bg-white dark:bg-[#18181b] rounded-md shadow-sm">
            <thead>
              <tr className="bg-indigo-100 dark:bg-indigo-900">
                <th className="p-2">Step</th>
                <th className="p-2">Current</th>
                <th className="p-2">dist[A]</th>
                <th className="p-2">dist[B]</th>
                <th className="p-2">dist[C]</th>
                <th className="p-2">dist[D]</th>
              </tr>
            </thead>
            <tbody className="text-center">
              <tr><td className="p-2">0</td><td className="p-2">-</td><td className="p-2">0</td><td className="p-2">∞</td><td className="p-2">∞</td><td className="p-2">∞</td></tr>
              <tr className="bg-indigo-50 dark:bg-indigo-800"><td className="p-2">1</td><td className="p-2 font-bold text-indigo-700">A</td><td className="p-2">0</td><td className="p-2 text-green-600">4</td><td className="p-2 text-green-600">2</td><td className="p-2">∞</td></tr>
              <tr><td className="p-2">2</td><td className="p-2 font-bold text-purple-700">C</td><td className="p-2">0</td><td className="p-2">4</td><td className="p-2">2</td><td className="p-2 text-green-600">7</td></tr>
              <tr><td className="p-2">3</td><td className="p-2 font-bold text-purple-700">B</td><td className="p-2">0</td><td className="p-2">4</td><td className="p-2">2</td><td className="p-2 text-green-600">5</td></tr>
              <tr><td className="p-2">4</td><td className="p-2 font-bold text-purple-700">D</td><td className="p-2">0</td><td className="p-2">4</td><td className="p-2">2</td><td className="p-2">5</td></tr>
            </tbody>
          </table>
        </div>

        {/* Final Result */}
        <div className="p-4 bg-purple-50 dark:bg-purple-900 rounded-md text-center">
          <p className="font-semibold">Final Shortest Paths from A:</p>
          <p className="font-mono text-purple-700 dark:text-purple-300">
            A → A: 0<br />
            A → B: 4 (A→B)<br />
            A → C: 2 (A→C)<br />
            A → D: 5 (A→B→D)
          </p>
        </div>
      </div>

      {/* Implementation */}
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-4">
        C Implementation (Priority Queue)
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Using <strong>min-heap</strong> for O((V+E) log V) efficiency:
      </p>
      <pre className="bg-[#18181b] text-gray-100 p-4 rounded-md overflow-x-auto text-xs">
        <code>
{`#include <stdio.h>
#include <stdlib.h>
#include <limits.h>

#define V 4

typedef struct {
    int node;
    int dist;
} MinHeapNode;

typedef struct {
    int size;
    int capacity;
    int *pos;
    MinHeapNode **array;
} MinHeap;

MinHeapNode* newMinHeapNode(int node, int dist) {
    MinHeapNode* node = (MinHeapNode*)malloc(sizeof(MinHeapNode));
    node->node = node;
    node->dist = dist;
    return node;
}

MinHeap* createMinHeap(int capacity) {
    MinHeap* heap = (MinHeap*)malloc(sizeof(MinHeap));
    heap->capacity = capacity;
    heap->size = 0;
    heap->pos = (int*)malloc(capacity * sizeof(int));
    heap->array = (MinHeapNode**)malloc(capacity * sizeof(MinHeapNode*));
    return heap;
}

void swapMinHeapNode(MinHeapNode** a, MinHeapNode** b) {
    MinHeapNode* t = *a;
    *a = *b;
    *b = t;
}

void minHeapify(MinHeap* heap, int idx) {
    int smallest = idx;
    int left = 2 * idx + 1;
    int right = 2 * idx + 2;

    if (left < heap->size && heap->array[left]->dist < heap->array[smallest]->dist)
        smallest = left;
    if (right < heap->size && heap->array[right]->dist < heap->array[smallest]->dist)
        smallest = right;

    if (smallest != idx) {
        MinHeapNode* smallestNode = heap->array[smallest];
        MinHeapNode* idxNode = heap->array[idx];
        heap->pos[smallestNode->node] = idx;
        heap->pos[idxNode->node] = smallest;
        swapMinHeapNode(&heap->array[smallest], &heap->array[idx]);
        minHeapify(heap, smallest);
    }
}

int isEmpty(MinHeap* heap) {
    return heap->size == 0;
}

MinHeapNode* extractMin(MinHeap* heap) {
    if (isEmpty(heap)) return NULL;
    MinHeapNode* root = heap->array[0];
    MinHeapNode* lastNode = heap->array[heap->size - 1];
    heap->array[0] = lastNode;
    heap->pos[root->node] = heap->size - 1;
    heap->pos[lastNode->node] = 0;
    heap->size--;
    minHeapify(heap, 0);
    return root;
}

void decreaseKey(MinHeap* heap, int node, int dist) {
    int i = heap->pos[node];
    heap->array[i]->dist = dist;
    while (i && heap->array[i]->dist < heap->array[(i - 1) / 2]->dist) {
        heap->pos[heap->array[i]->node] = (i - 1) / 2;
        heap->pos[heap->array[(i - 1) / 2]->node] = i;
        swapMinHeapNode(&heap->array[i], &heap->array[(i - 1) / 2]);
        i = (i - 1) / 2;
    }
}

void dijkstra(int graph[V][V], int src) {
    int dist[V];
    MinHeap* heap = createMinHeap(V);

    for (int v = 0; v < V; v++) {
        dist[v] = INT_MAX;
        heap->array[v] = newMinHeapNode(v, dist[v]);
        heap->pos[v] = v;
    }

    heap->array[src] = newMinHeapNode(src, 0);
    heap->pos[src] = src;
    dist[src] = 0;
    decreaseKey(heap, src, 0);
    heap->size = V;

    while (!isEmpty(heap)) {
        MinHeapNode* minNode = extractMin(heap);
        int u = minNode->node;

        for (int v = 0; v < V; v++) {
            if (graph[u][v] && dist[u] != INT_MAX && 
                dist[u] + graph[u][v] < dist[v]) {
                dist[v] = dist[u] + graph[u][v];
                decreaseKey(heap, v, dist[v]);
            }
        }
    }

    printf("Vertex   Distance from Source\\n");
    for (int i = 0; i < V; i++)
        printf("%d \\t\\t %d\\n", i, dist[i]);
}

int main() {
    int graph[V][V] = {
        {0, 4, 2, 0},
        {4, 0, 0, 1},
        {2, 0, 0, 5},
        {0, 1, 5, 0}
    };

    dijkstra(graph, 0);
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
            Greedy Choice Property
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Always picks the closest unvisited node → optimal substructure.
          </p>
        </li>
        <li className="p-4 bg-white dark:bg-[#18181b] rounded-md shadow-sm">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
            Non-Negative Weights Only
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Fails with negative edges → use <strong>Bellman-Ford</strong>.
          </p>
        </li>
        <li className="p-4 bg-white dark:bg-[#18181b] rounded-md shadow-sm">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
            Optimal Substructure
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Shortest path contains shortest subpaths.
          </p>
        </li>
      </ul>

      {/* Complexity */}
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-4">
        Time & Space Complexity
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 bg-white dark:bg-[#18181b] rounded-md shadow-sm">
          <h3 className="font-semibold text-indigo-600 dark:text-indigo-400">With Binary Heap</h3>
          <ul className="mt-2 space-y-1 text-gray-600 dark:text-gray-300">
            <li>Time: <strong>O((V + E) log V)</strong></li>
            <li>Space: <strong>O(V)</strong></li>
          </ul>
        </div>
        <div className="p-4 bg-white dark:bg-[#18181b] rounded-md shadow-sm">
          <h3 className="font-semibold text-purple-600 dark:text-purple-400">With Fibonacci Heap</h3>
          <ul className="mt-2 space-y-1 text-gray-600 dark:text-gray-300">
            <li>Time: <strong>O(E + V log V)</strong></li>
            <li>Space: <strong>O(V)</strong></li>
          </ul>
        </div>
      </div>

      {/* Applications */}
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-4">
        Applications
      </h2>
      <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
        <li>GPS navigation and routing</li>
        <li>Network routing protocols (OSPF, IS-IS)</li>
        <li>Robotics path planning</li>
        <li>Game AI (unit movement)</li>
        <li>Social network analysis</li>
        <li>Traffic flow optimization</li>
      </ul>

      {/* Quick Reference */}
      <div className="mt-8 p-5 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900 dark:to-purple-900 rounded-lg">
        <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-3">
          Comparison with Other Algorithms
        </h3>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b dark:border-gray-700">
              <th className="text-left py-1">Algorithm</th>
              <th className="text-left py-1">Negative Weights?</th>
              <th className="text-left py-1">Time Complexity</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="py-1">Dijkstra</td><td>No</td><td>O((V+E) log V)</td></tr>
            <tr><td className="py-1">Bellman-Ford</td><td>Yes</td><td>O(VE)</td></tr>
            <tr><td className="py-1">Floyd-Warshall</td><td>Yes</td><td>O(V³)</td></tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default function DijkstraPage() {
  return <DijkstraVisualizer content={<Content/>} />
} 