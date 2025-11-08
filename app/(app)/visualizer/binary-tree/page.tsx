"use client";

import { BinaryTreeVisualizer } from "@/components/visualizer/binary-tree/binary-tree-visualizer";

function Content() {
  return (
    <section className="max-w-4xl mx-auto p-6 bg-gradient-to-br rounded-lg shadow-lg">
      {/* Title */}
      <h1 className="text-4xl font-extrabold text-center text-gray-800 dark:text-gray-100 mb-6">
        Binary Tree Traversal
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-8">
        Binary trees can be traversed in different ways, with each traversal method visiting nodes in a specific order.
      </p>

      {/* Basic Node Structure Section */}
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-4">
        Basic Node Structure
      </h2>
      <pre className="bg-[#18181b] text-gray-100 p-4 rounded-md overflow-x-auto">
        <code>
          {`// Basic node structure
typedef struct Node {
    int value;
    struct Node* left;
    struct Node* right;
} Node;`}
        </code>
      </pre>

      {/* Pre-Order Traversal Section */}
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-4">
        Pre-Order Traversal
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        In pre-order traversal, we visit the node first, then the left subtree, then the right subtree. Time: O(n), Space: O(1).
      </p>
      <pre className="bg-[#18181b] text-gray-100 p-4 rounded-md overflow-x-auto">
        <code>
          {`void preOrderTraversal(Node* root) {
    if (root == NULL)
        return;
        
    printf("%d ", root->value);        // Visit node
    preOrderTraversal(root->left);     // Left subtree
    preOrderTraversal(root->right);    // Right subtree
}`}
        </code>
      </pre>

      {/* In-Order Traversal Section */}
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-4">
        In-Order Traversal
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        In in-order traversal, we visit the left subtree, then the node, then the right subtree. Time: O(n), Space: O(1).
      </p>
      <pre className="bg-[#18181b] text-gray-100 p-4 rounded-md overflow-x-auto">
        <code>
          {`void inOrderTraversal(Node* root) {
    if (root == NULL)
        return;
        
    inOrderTraversal(root->left);      // Left subtree
    printf("%d ", root->value);        // Visit node
    inOrderTraversal(root->right);     // Right subtree
}`}
        </code>
      </pre>

      {/* Post-Order Traversal Section */}
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-4">
        Post-Order Traversal
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        In post-order traversal, we visit the left subtree, then the right subtree, then the node. Time: O(n), Space: O(1).
      </p>
      <pre className="bg-[#18181b] text-gray-100 p-4 rounded-md overflow-x-auto">
        <code>
          {`void postOrderTraversal(Node* root) {
    if (root == NULL)
        return;
        
    postOrderTraversal(root->left);    // Left subtree
    postOrderTraversal(root->right);   // Right subtree
    printf("%d ", root->value);        // Visit node
}`}
        </code>
      </pre>

      {/* Key Points Section */}
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-4">
        Key Points
      </h2>
      <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
        <li>
          <strong>Pre-order (Root → Left → Right):</strong> Used for creating prefix expression trees and serialization.
        </li>
        <li>
          <strong>In-order (Left → Root → Right):</strong> Gives sorted sequence for Binary Search Trees (BST), most natural way to "read" a tree.
        </li>
        <li>
          <strong>Post-order (Left → Right → Root):</strong> Used in expression evaluation and bottom-up tree processing.
        </li>
      </ul>

      {/* Traversal Applications Section */}
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-4">
        Traversal Applications
      </h2>
      <table className="w-full text-gray-600 dark:text-gray-300 border-collapse">
        <thead>
          <tr className="bg-[#18181b] text-gray-100">
            <th className="p-4 text-left">Traversal</th>
            <th className="p-4 text-left">Use Cases</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white dark:bg-[#18181b]">
            <td className="p-4 border-t border-gray-200 dark:border-gray-700">Pre-order</td>
            <td className="p-4 border-t border-gray-200 dark:border-gray-700">Creating a copy of the tree, Serialization</td>
          </tr>
          <tr className="bg-white dark:bg-[#18181b]">
            <td className="p-4 border-t border-gray-200 dark:border-gray-700">In-order</td>
            <td className="p-4 border-t border-gray-200 dark:border-gray-700">Gets nodes in non-decreasing order in BST</td>
          </tr>
          <tr className="bg-white dark:bg-[#18181b]">
            <td className="p-4 border-t border-gray-200 dark:border-gray-700">Post-order</td>
            <td className="p-4 border-t border-gray-200 dark:border-gray-700">Deleting nodes, Computing directory size</td>
          </tr>
        </tbody>
      </table>

      {/* Implementation Notes Section */}
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-4">
        Implementation Notes
      </h2>
      <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
        <li>Uses recursive approach for simplicity.</li>
        <li>
          Each node contains:
          <ul className="list-circle list-inside ml-4">
            <li><code>value</code>: The data stored in the node.</li>
            <li><code>left</code>: Pointer to left child.</li>
            <li><code>right</code>: Pointer to right child.</li>
          </ul>
        </li>
        <li>NULL checks prevent segmentation faults.</li>
        <li>Can be implemented iteratively using a stack.</li>
      </ul>
    </section>
  );
}

export default function BinaryTreePage() {
  return <BinaryTreeVisualizer content={<Content />} />;
}