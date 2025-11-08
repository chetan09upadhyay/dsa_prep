"use client";

import { AVLTreeVisualizer } from "@/components/visualizer/avl-tree/avl-tree-visualizer";

function Content() {
  return (
    <section className="max-w-4xl mx-auto p-6 bg-gradient-to-br rounded-lg shadow-lg">
      {/* Title */}
      <h1 className="text-4xl font-extrabold text-center text-gray-800 dark:text-gray-100 mb-6">
        AVL Tree
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-8">
        An AVL tree is a self-balancing binary search tree where the difference between heights of left and right subtrees cannot be more than one for all nodes.
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
    int height;
} Node;`}
        </code>
      </pre>

      {/* Implementation Section */}
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-4">
        AVL Tree Implementation
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Below is a basic AVL tree implementation in C, including node creation, rotations, and insertion.
      </p>
      <pre className="bg-[#18181b] text-gray-100 p-4 rounded-md overflow-x-auto">
        <code>
          {`// Create a new node
Node* createNode(int value) {
    Node* node = (Node*)malloc(sizeof(Node));
    node->value = value;
    node->left = NULL;
    node->right = NULL;
    node->height = 1;
    return node;
}

// Get height of a node
int getHeight(Node* node) {
    if (node == NULL) return 0;
    return node->height;
}

// Get balance factor
int getBalance(Node* node) {
    if (node == NULL) return 0;
    return getHeight(node->left) - getHeight(node->right);
}

// Right rotation
Node* rightRotate(Node* y) {
    Node* x = y->left;
    Node* T2 = x->right;

    x->right = y;
    y->left = T2;

    y->height = max(getHeight(y->left), getHeight(y->right)) + 1;
    x->height = max(getHeight(x->left), getHeight(x->right)) + 1;

    return x;
}

// Left rotation
Node* leftRotate(Node* x) {
    Node* y = x->right;
    Node* T2 = y->left;

    y->left = x;
    x->right = T2;

    x->height = max(getHeight(x->left), getHeight(x->right)) + 1;
    y->height = max(getHeight(y->left), getHeight(y->right)) + 1;

    return y;
}

// Insert a node
Node* insert(Node* node, int value) {
    // 1. Perform normal BST insertion
    if (node == NULL)
        return createNode(value);

    if (value < node->value)
        node->left = insert(node->left, value);
    else if (value > node->value)
        node->right = insert(node->right, value);
    else // Equal values not allowed
        return node;

    // 2. Update height
    node->height = max(getHeight(node->left), getHeight(node->right)) + 1;

    // 3. Get balance factor
    int balance = getBalance(node);

    // Left Left Case
    if (balance > 1 && value < node->left->value)
        return rightRotate(node);

    // Right Right Case
    if (balance < -1 && value > node->right->value)
        return leftRotate(node);

    // Left Right Case
    if (balance > 1 && value > node->left->value) {
        node->left = leftRotate(node->left);
        return rightRotate(node);
    }

    // Right Left Case
    if (balance < -1 && value < node->right->value) {
        node->right = rightRotate(node->right);
        return leftRotate(node);
    }

    return node;
}`}
        </code>
      </pre>

      {/* Traversal Operations Section */}
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-4">
        Traversal Operations
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Below are the traversal operations for an AVL tree in C:
      </p>
      <pre className="bg-[#18181b] text-gray-100 p-4 rounded-md overflow-x-auto">
        <code>
          {`// Pre-order traversal
void preOrder(Node* root) {
    if (root != NULL) {
        printf("%d ", root->value);
        preOrder(root->left);
        preOrder(root->right);
    }
}

// In-order traversal
void inOrder(Node* root) {
    if (root != NULL) {
        inOrder(root->left);
        printf("%d ", root->value);
        inOrder(root->right);
    }
}

// Post-order traversal
void postOrder(Node* root) {
    if (root != NULL) {
        postOrder(root->left);
        postOrder(root->right);
        printf("%d ", root->value);
    }
}`}
        </code>
      </pre>

      {/* Properties Section */}
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-4">
        Properties
      </h2>
      <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
        <li>For each node, the heights of its left and right subtrees differ by at most 1.</li>
        <li>All operations (insertion, deletion, search) take O(log n) time.</li>
        <li>Balance factor = height(left subtree) - height(right subtree).</li>
        <li>Balance factor must be -1, 0, or 1 for all nodes.</li>
      </ul>

      {/* Rotations Section */}
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-4">
        Rotations
      </h2>
      <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
        <li><strong>Left Rotation:</strong> Used when the right subtree becomes higher.</li>
        <li><strong>Right Rotation:</strong> Used when the left subtree becomes higher.</li>
        <li><strong>Left-Right Rotation:</strong> Combination used for more complex imbalances.</li>
        <li><strong>Right-Left Rotation:</strong> Combination used for more complex imbalances.</li>
      </ul>

      {/* Applications Section */}
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-4">
        Applications
      </h2>
      <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
        <li>Databases where frequent insertions and deletions occur.</li>
        <li>Memory management systems.</li>
        <li>File systems requiring balanced tree structures.</li>
      </ul>
    </section>
  );
}

export default function AVLTreePage() {
  return <AVLTreeVisualizer content={<Content />} />;
}