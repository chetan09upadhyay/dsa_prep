"use client"

// import { StackVisualizer } from "@/components/visualizer/stack/stack-visualizer"
// // import Content from "./stack.mdx"

// function Content() {
//   return <div className="text-center text-2xl font-bold"># Stack Data Structure

// A stack is a linear data structure that follows the Last-In-First-Out (LIFO) principle. Elements are added and removed from the same end, called the top of the stack.

// ## Operations

// ### Push (O(1))
// - Adds an element to the top of the stack
// - If stack is full, results in stack overflow

// ### Pop (O(1))
// - Removes and returns the top element
// - If stack is empty, results in stack underflow

// ### Peek/Top (O(1))
// - Returns the top element without removing it
// - Does not modify the stack

// ## Properties
// - Fixed size (in array implementation)
// - Elements are ordered by insertion time
// - Only top element is accessible
// - Follows LIFO principle

// ## Applications
// - Function call stack in programming languages
// - Expression evaluation and syntax parsing
// - Undo operations in text editors
// - Browser history (back button)
// - Backtracking algorithms </div>
// }

// export default function StackPage() {
//   return <StackVisualizer content={<Content />} />
// } 

import { StackVisualizer } from "@/components/visualizer/stack/stack-visualizer";

function Content() {
  return (
    <section className="max-w-4xl mx-auto p-6 bg-gradient-to-br  rounded-lg shadow-lg">
      {/* Title */}
      <h1 className="text-4xl font-extrabold text-center text-gray-800 dark:text-gray-100 mb-6">
        Stack Data Structure
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-8">
        A stack is a linear data structure that follows the{" "}
        <span className="font-semibold text-blue-600 dark:text-blue-400">
          Last-In-First-Out (LIFO)
        </span>{" "}
        principle. Elements are added and removed from the top of the stack.
      </p>

      {/* Implementation Section */}
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-4">
        Implementation (Array-Based)
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Below is a basic stack implementation in C using an array with a fixed size:
      </p>
      <pre className="bg-[#18181b] text-gray-100 p-4 rounded-md overflow-x-auto">
        <code>
          {`#define MAX_SIZE 100

typedef struct {
    int items[MAX_SIZE];
    int top;
} Stack;

// Initialize stack
void initStack(Stack* stack) {
    stack->top = -1;
}

// Check if stack is full
int isFull(Stack* stack) {
    return stack->top == MAX_SIZE - 1;
}

// Check if stack is empty
int isEmpty(Stack* stack) {
    return stack->top == -1;
}

// Push operation
int push(Stack* stack, int value) {
    if (isFull(stack)) {
        printf("Stack Overflow\\n");
        return 0;
    }
    
    stack->items[++stack->top] = value;
    printf("%d pushed to stack\\n", value);
    return 1;
}

// Pop operation
int pop(Stack* stack) {
    if (isEmpty(stack)) {
        printf("Stack Underflow\\n");
        return -1;
    }
    
    return stack->items[stack->top--];
}

// Peek operation
int peek(Stack* stack) {
    if (isEmpty(stack)) {
        printf("Stack is empty\\n");
        return -1;
    }
    
    return stack->items[stack->top];
}`}
        </code>
      </pre>

      {/* Usage Example Section */}
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-4">
        Usage Example
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Example of using the array-based stack implementation:
      </p>
      <pre className="bg-[#18181b] text-gray-100 p-4 rounded-md overflow-x-auto">
        <code>
          {`int main() {
    Stack stack;
    initStack(&stack);
    
    // Push elements
    push(&stack, 10);
    push(&stack, 20);
    push(&stack, 30);
    
    // Pop elements
    printf("Popped: %d\\n", pop(&stack));  // 30
    printf("Popped: %d\\n", pop(&stack));  // 20
    
    // Peek at top element
    printf("Top element: %d\\n", peek(&stack));  // 10
    
    return 0;
}`}
        </code>
      </pre>

      {/* Operations Section */}
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-4">
        Operations
      </h2>
      <ul className="space-y-4">
        <li className="p-4 bg-white dark:bg-[#18181b] rounded-md shadow-sm">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
            Push{" "}
            <span className="text-sm text-gray-500 dark:text-gray-400">
              (O(1))
            </span>
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Adds an element to the top of the stack. If the stack is full, it
            results in a{" "}
            <span className="italic text-red-500">stack overflow</span>.
          </p>
        </li>
        <li className="p-4 bg-white dark:bg-[#18181b] rounded-md shadow-sm">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
            Pop{" "}
            <span className="text-sm text-gray-500 dark:text-gray-400">
              (O(1))
            </span>
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Removes and returns the top element. If the stack is empty, it results
            in a{" "}
            <span className="italic text-red-500">stack underflow</span>.
          </p>
        </li>
        <li className="p-4 bg-white dark:bg-[#18181b] rounded-md shadow-sm">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
            Peek/Top{" "}
            <span className="text-sm text-gray-500 dark:text-gray-400">
              (O(1))
            </span>
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Returns the top element without removing it. Does not modify the
            stack.
          </p>
        </li>
      </ul>

      {/* Properties Section */}
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-4">
        Properties
      </h2>
      <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
        <li>Fixed size (in array implementation)</li>
        <li>Elements are ordered by insertion time</li>
        <li>Only the top element is accessible</li>
        <li>Follows the LIFO principle</li>
      </ul>

      {/* Dynamic Implementation Section */}
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-4">
        Dynamic Implementation (Linked List)
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Below is a dynamic stack implementation using a linked list in C:
      </p>
      <pre className="bg-[#18181b] text-gray-100 p-4 rounded-md overflow-x-auto">
        <code>
          {`typedef struct Node {
    int data;
    struct Node* next;
} Node;

typedef struct {
    Node* top;
} DynamicStack;

// Initialize stack
void initDynamicStack(DynamicStack* stack) {
    stack->top = NULL;
}

// Push operation
void dynamicPush(DynamicStack* stack, int value) {
    Node* newNode = (Node*)malloc(sizeof(Node));
    if (newNode == NULL) {
        printf("Memory allocation failed!\\n");
        return;
    }
    
    newNode->data = value;
    newNode->next = stack->top;
    stack->top = newNode;
    printf("%d pushed to stack\\n", value);
}

// Pop operation
int dynamicPop(DynamicStack* stack) {
    if (stack->top == NULL) {
        printf("Stack Underflow\\n");
        return -1;
    }
    
    Node* temp = stack->top;
    int value = temp->data;
    stack->top = stack->top->next;
    free(temp);
    return value;
}`}
        </code>
      </pre>

      {/* Applications Section */}
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-4">
        Applications
      </h2>
      <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
        <li>Function call stack in programming languages</li>
        <li>Expression evaluation and syntax parsing</li>
        <li>Undo operations in text editors</li>
        <li>Browser history (back button)</li>
        <li>Backtracking algorithms</li>
      </ul>
    </section>
  );
}

export default function StackPage() {
  return <StackVisualizer content={<Content />} />;
}