"use client"

import { LinkedListVisualizer } from "@/components/visualizer/linked-list/linked-list-visualizer";

function Content() {
  return (
    <section className="max-w-4xl mx-auto p-6 bg-gradient-to-br rounded-lg shadow-lg">
      {/* Title */}
      <h1 className="text-4xl font-extrabold text-center text-gray-800 dark:text-gray-100 mb-6">
        Linked List Data Structure
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-8">
        A linked list is a linear data structure where elements are stored in nodes, and each node points to the next node in the sequence.
      </p>

      {/* Basic Node Structure Section */}
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-4">
        Basic Node Structure
      </h2>
      <pre className="bg-[#18181b] text-gray-100 p-4 rounded-md overflow-x-auto">
        <code>
          {`// Basic node structure
typedef struct Node {
    int data;
    struct Node* next;
} Node;`}
        </code>
      </pre>

      {/* Singly Linked List Implementation Section */}
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-4">
        Singly Linked List Implementation
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Below is a basic singly linked list implementation in C:
      </p>
      <pre className="bg-[#18181b] text-gray-100 p-4 rounded-md overflow-x-auto">
        <code>
          {`// Create new node
Node* createNode(int data) {
    Node* newNode = (Node*)malloc(sizeof(Node));
    newNode->data = data;
    newNode->next = NULL;
    return newNode;
}

// Insert at beginning
Node* insertFront(Node* head, int data) {
    Node* newNode = createNode(data);
    newNode->next = head;
    return newNode;
}

// Insert at end
Node* insertBack(Node* head, int data) {
    Node* newNode = createNode(data);
    
    if (head == NULL)
        return newNode;
        
    Node* current = head;
    while (current->next != NULL)
        current = current->next;
        
    current->next = newNode;
    return head;
}

// Delete from front
Node* deleteFront(Node* head) {
    if (head == NULL)
        return NULL;
        
    Node* temp = head->next;
    free(head);
    return temp;
}

// Print list
void printList(Node* head) {
    Node* current = head;
    while (current != NULL) {
        printf("%d -> ", current->data);
        current = current->next;
    }
    printf("NULL\\n");
}`}
        </code>
      </pre>

      {/* Doubly Linked List Implementation Section */}
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-4">
        Doubly Linked List Implementation
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Below is a doubly linked list implementation in C:
      </p>
      <pre className="bg-[#18181b] text-gray-100 p-4 rounded-md overflow-x-auto">
        <code>
          {`typedef struct DNode {
    int data;
    struct DNode* next;
    struct DNode* prev;
} DNode;

// Create new node
DNode* createDNode(int data) {
    DNode* newNode = (DNode*)malloc(sizeof(DNode));
    newNode->data = data;
    newNode->next = NULL;
    newNode->prev = NULL;
    return newNode;
}

// Insert at beginning
DNode* insertFrontDLL(DNode* head, int data) {
    DNode* newNode = createDNode(data);
    
    if (head != NULL) {
        newNode->next = head;
        head->prev = newNode;
    }
    
    return newNode;
}

// Insert at end
DNode* insertBackDLL(DNode* head, int data) {
    DNode* newNode = createDNode(data);
    
    if (head == NULL)
        return newNode;
        
    DNode* current = head;
    while (current->next != NULL)
        current = current->next;
        
    current->next = newNode;
    newNode->prev = current;
    
    return head;
}`}
        </code>
      </pre>

      {/* Circular Singly Linked List Implementation Section */}
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-4">
        Circular Singly Linked List Implementation
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Below is a circular singly linked list implementation in C:
      </p>
      <pre className="bg-[#18181b] text-gray-100 p-4 rounded-md overflow-x-auto">
        <code>
          {`// Insert in circular list
Node* insertCSLL(Node* head, int data) {
    Node* newNode = createNode(data);
    
    if (head == NULL) {
        newNode->next = newNode;  // Point to itself
        return newNode;
    }
    
    // Insert at end
    newNode->next = head->next;
    head->next = newNode;
    
    return head;
}

// Delete from circular list
Node* deleteCSLL(Node* head) {
    if (head == NULL || head->next == head) {
        free(head);
        return NULL;
    }
    
    Node* temp = head->next;
    head->next = temp->next;
    free(temp);
    return head;
}`}
        </code>
      </pre>

      {/* Circular Doubly Linked List Implementation Section */}
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-4">
        Circular Doubly Linked List Implementation
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Below is a circular doubly linked list implementation in C:
      </p>
      <pre className="bg-[#18181b] text-gray-100 p-4 rounded-md overflow-x-auto">
        <code>
          {`// Insert in circular doubly list
DNode* insertCDLL(DNode* head, int data) {
    DNode* newNode = createDNode(data);
    
    if (head == NULL) {
        newNode->next = newNode;
        newNode->prev = newNode;
        return newNode;
    }
    
    // Insert at end
    newNode->next = head;
    newNode->prev = head->prev;
    head->prev->next = newNode;
    head->prev = newNode;
    
    return head;
}

// Delete from circular doubly list
DNode* deleteCDLL(DNode* head) {
    if (head == NULL || head->next == head) {
        free(head);
        return NULL;
    }
    
    DNode* temp = head->next;
    head->next = temp->next;
    temp->next->prev = head;
    free(temp);
    return head;
}`}
        </code>
      </pre>

      {/* Common Operations Section */}
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-4">
        Common Operations
      </h2>
      <ul className="space-y-4">
        <li className="p-4 bg-white dark:bg-[#18181b] rounded-md shadow-sm">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
            Traversal{" "}
            <span className="text-sm text-gray-500 dark:text-gray-400">
              (O(n))
            </span>
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Traverses the list forward (or backward in doubly/circular doubly lists) to access or process each node.
          </p>
          <pre className="bg-[#18181b] text-gray-100 p-4 rounded-md overflow-x-auto mt-2">
            <code>
              {`// Forward traversal
void traverse(Node* head) {
    Node* current = head;
    do {
        printf("%d -> ", current->data);
        current = current->next;
    } while (current != head && current != NULL);
    printf("NULL\\n");
}

// Reverse traversal (DLL/CDLL)
void reverseTraverse(DNode* tail) {
    DNode* current = tail;
    do {
        printf("%d -> ", current->data);
        current = current->prev;
    } while (current != tail && current != NULL);
    printf("NULL\\n");
}`}
            </code>
          </pre>
        </li>
      </ul>

      {/* Applications Section */}
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-4">
        Applications
      </h2>
      <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
        <li>Implementation of stacks and queues</li>
        <li>Music playlist (circular)</li>
        <li>Undo/Redo operations (doubly)</li>
        <li>Memory allocation</li>
        <li>Hash tables (chaining)</li>
      </ul>
    </section>
  );
}

export default function LinkedListPage() {
  return <LinkedListVisualizer content={<Content />} />;
}