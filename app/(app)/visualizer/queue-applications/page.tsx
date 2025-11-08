"use client"

import { MessageQueueVisualizer } from "@/components/visualizer/queue-applications/message-queue-visualizer"
// import Content from "./message-queue.mdx"

function Content() {
  return (
    <section className="max-w-4xl mx-auto p-6   rounded-lg shadow-lg">
      {/* Title */}
      <h1 className="text-4xl font-extrabold text-center text-gray-800 dark:text-gray-100 mb-6">
        Message Queue Data Structure
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-8">
        A message queue is a linear data structure that follows the{" "}
        <span className="font-semibold text-purple-600 dark:text-purple-400">
          First-In-First-Out (FIFO)
        </span>{" "}
        principle. Messages are added at the rear and removed from the front.
      </p>

      {/* Implementation Section */}
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-4">
        Implementation (Array-Based Circular Queue)
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Below is a basic message queue implementation in C using a fixed-size circular array:
      </p>
      <pre className="bg-[#18181b] text-gray-100 p-4 rounded-md overflow-x-auto">
        <code>
          {`#define MAX_SIZE 100

typedef struct {
    int items[MAX_SIZE];
    int front;
    int rear;
    int size;
} MessageQueue;

// Initialize queue
void initQueue(MessageQueue* queue) {
    queue->front = 0;
    queue->rear = -1;
    queue->size = 0;
}

// Check if queue is full
int isFull(MessageQueue* queue) {
    return queue->size == MAX_SIZE;
}

// Check if queue is empty
int isEmpty(MessageQueue* queue) {
    return queue->size == 0;
}

// Enqueue operation (add message)
int enqueue(MessageQueue* queue, int value) {
    if (isFull(queue)) {
        printf("Queue is full! Message dropped.\\n");
        return 0;
    }
    
    queue->rear = (queue->rear + 1) % MAX_SIZE;
    queue->items[queue->rear] = value;
    queue->size++;
    printf("%d enqueued to message queue\\n", value);
    return 1;
}

// Dequeue operation (process message)
int dequeue(MessageQueue* queue) {
    if (isEmpty(queue)) {
        printf("Queue is empty! No message to process.\\n");
        return -1;
    }
    
    int value = queue->items[queue->front];
    queue->front = (queue->front + 1) % MAX_SIZE;
    queue->size--;
    return value;
}

// Peek front message
int peek(MessageQueue* queue) {
    if (isEmpty(queue)) {
        printf("Queue is empty\\n");
        return -1;
    }
    
    return queue->items[queue->front];
}`}
        </code>
      </pre>

      {/* Usage Example Section */}
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-4">
        Usage Example
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Example of using the circular array-based message queue:
      </p>
      <pre className="bg-[#18181b] text-gray-100 p-4 rounded-md overflow-x-auto">
        <code>
          {`int main() {
    MessageQueue queue;
    initQueue(&queue);
    
    // Enqueue messages
    enqueue(&queue, 100);  // Task: Send email
    enqueue(&queue, 200);  // Task: Process payment
    enqueue(&queue, 300);  // Task: Generate report
    
    // Dequeue and process messages
    printf("Processing message: %d\\n", dequeue(&queue));  // 100
    printf("Processing message: %d\\n", dequeue(&queue));  // 200
    
    // Peek next message
    printf("Next message: %d\\n", peek(&queue));  // 300
    
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
            Enqueue{" "}
            <span className="text-sm text-gray-500 dark:text-gray-400">
              (O(1))
            </span>
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Adds a message to the rear of the queue. If the queue is full, the
            message may be dropped or trigger a{" "}
            <span className="italic text-red-500">queue overflow</span>.
          </p>
        </li>
        <li className="p-4 bg-white dark:bg-[#18181b] rounded-md shadow-sm">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
            Dequeue{" "}
            <span className="text-sm text-gray-500 dark:text-gray-400">
              (O(1))
            </span>
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Removes and returns the front message. If the queue is empty, it results
            in a{" "}
            <span className="italic text-red-500">queue underflow</span>.
          </p>
        </li>
        <li className="p-4 bg-white dark:bg-[#18181b] rounded-md shadow-sm">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
            Peek/Front{" "}
            <span className="text-sm text-gray-500 dark:text-gray-400">
              (O(1))
            </span>
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Returns the front message without removing it. Useful for message
            prioritization or inspection.
          </p>
        </li>
      </ul>

      {/* Properties Section */}
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-4">
        Properties
      </h2>
      <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
        <li>Fixed size (in array implementation)</li>
        <li>Messages are ordered by arrival time</li>
        <li>Only front and rear are accessible</li>
        <li>Follows the FIFO principle</li>
        <li>Decouples producer and consumer</li>
      </ul>

      {/* Dynamic Implementation Section */}
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-4">
        Dynamic Implementation (Linked List)
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Below is a dynamic message queue implementation using a singly linked list in C:
      </p>
      <pre className="bg-[#18181b] text-gray-100 p-4 rounded-md overflow-x-auto">
        <code>
          {`typedef struct Node {
    int data;
    struct Node* next;
} Node;

typedef struct {
    Node* front;
    Node* rear;
} DynamicMessageQueue;

// Initialize queue
void initDynamicQueue(DynamicMessageQueue* queue) {
    queue->front = queue->rear = NULL;
}

// Enqueue operation
void dynamicEnqueue(DynamicMessageQueue* queue, int value) {
    Node* newNode = (Node*)malloc(sizeof(Node));
    if (newNode == NULL) {
        printf("Memory allocation failed!\\n");
        return;
    }
    
    newNode->data = value;
    newNode->next = NULL;
    
    if (queue->rear == NULL) {
        queue->front = queue->rear = newNode;
    } else {
        queue->rear->next = newNode;
        queue->rear = newNode;
    }
    printf("%d enqueued to dynamic queue\\n", value);
}

// Dequeue operation
int dynamicDequeue(DynamicMessageQueue* queue) {
    if (queue->front == NULL) {
        printf("Queue Underflow\\n");
        return -1;
    }
    
    Node* temp = queue->front;
    int value = temp->data;
    queue->front = queue->front->next;
    
    if (queue->front == NULL) {
        queue->rear = NULL;
    }
    
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
        <li>Task scheduling in operating systems</li>
        <li>Asynchronous message passing (e.g., RabbitMQ, Kafka)</li>
        <li>Print job management</li>
        <li>Event-driven architectures</li>
        <li>Load balancing and rate limiting</li>
        <li>Breadth-first search (BFS) in graphs</li>
      </ul>
    </section>
  );
}

export default function MessageQueuePage() {
  return <MessageQueueVisualizer content={<Content />} />
} 