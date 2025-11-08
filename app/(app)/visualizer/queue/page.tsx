"use client"

// import { QueueVisualizer } from "@/components/visualizer/queue/queue-visualizer"
// // import Content from "./queue.mdx"

// function Content() {
//   return <div className="text-center text-2xl font-bold"> 
  


//   </div>
// }

// export default function QueuePage() {
//   return <QueueVisualizer content={<Content />} />
// } 







import { QueueVisualizer } from "@/components/visualizer/queue/queue-visualizer";

function Content() {
  return (
    <section className="max-w-4xl mx-auto p-6 bg-gradient-to-br rounded-lg shadow-lg">
      {/* Title */}
      <h1 className="text-4xl font-extrabold text-center text-gray-800 dark:text-gray-100 mb-6">
        Queue Data Structure
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-8">
        A queue is a linear data structure that follows the{" "}
        <span className="font-semibold text-blue-600 dark:text-blue-400">
          First-In-First-Out (FIFO)
        </span>{" "}
        principle. Elements are added at the rear (enqueue) and removed from the front (dequeue).
      </p>

      {/* Implementation Section */}
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-4">
        Implementation
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Here's a basic queue implementation in C using an array with a fixed size:
      </p>
      <pre className="bg-[#18181b] text-gray-100 p-4 rounded-md overflow-x-auto">
        <code>
          {`#define MAX_SIZE 100

typedef struct {
    int items[MAX_SIZE];
    int front;
    int rear;
    int size;
} Queue;

// Initialize queue
void initQueue(Queue* q) {
    q->front = 0;
    q->rear = -1;
    q->size = 0;
}

// Check if queue is full
int isFull(Queue* q) {
    return q->size == MAX_SIZE;
}

// Check if queue is empty
int isEmpty(Queue* q) {
    return q->size == 0;
}

// Add element to queue
int enqueue(Queue* q, int value) {
    if (isFull(q)) {
        printf("Queue Overflow\\n");
        return 0;
    }
    
    q->rear = (q->rear + 1) % MAX_SIZE;
    q->items[q->rear] = value;
    q->size++;
    printf("%d enqueued to queue\\n", value);
    return 1;
}

// Remove element from queue
int dequeue(Queue* q) {
    if (isEmpty(q)) {
        printf("Queue Underflow\\n");
        return -1;
    }
    
    int value = q->items[q->front];
    q->front = (q->front + 1) % MAX_SIZE;
    q->size--;
    return value;
}

// Get front element
int front(Queue* q) {
    if (isEmpty(q)) {
        printf("Queue is empty\\n");
        return -1;
    }
    return q->items[q->front];
}`}
        </code>
      </pre>

      {/* Usage Example Section */}
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-4">
        Usage Example
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Example of using the array-based queue implementation:
      </p>
      <pre className="bg-[#18181b] text-gray-100 p-4 rounded-md overflow-x-auto">
        <code>
          {`int main() {
    Queue queue;
    initQueue(&queue);
    
    // Add elements
    enqueue(&queue, 10);
    enqueue(&queue, 20);
    enqueue(&queue, 30);
    
    // Remove elements
    printf("Dequeued: %d\\n", dequeue(&queue));  // 10
    printf("Dequeued: %d\\n", dequeue(&queue));  // 20
    
    // Check front element
    printf("Front element: %d\\n", front(&queue));  // 30
    
    return 0;
}`}
        </code>
      </pre>

      {/* Circular Queue Implementation Section */}
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-4">
        Circular Queue Implementation
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Below is a circular queue implementation in C to optimize space usage:
      </p>
      <pre className="bg-[#18181b] text-gray-100 p-4 rounded-md overflow-x-auto">
        <code>
          {`typedef struct {
    int items[MAX_SIZE];
    int front;
    int rear;
} CircularQueue;

void initCircularQueue(CircularQueue* q) {
    q->front = -1;
    q->rear = -1;
}

int isCircularFull(CircularQueue* q) {
    return (q->rear + 1) % MAX_SIZE == q->front;
}

int isCircularEmpty(CircularQueue* q) {
    return q->front == -1;
}

void circularEnqueue(CircularQueue* q, int value) {
    if (isCircularFull(q)) {
        printf("Queue is full\\n");
        return;
    }
    
    if (q->front == -1)
        q->front = 0;
        
    q->rear = (q->rear + 1) % MAX_SIZE;
    q->items[q->rear] = value;
    printf("%d enqueued to circular queue\\n", value);
}

int circularDequeue(CircularQueue* q) {
    if (isCircularEmpty(q)) {
        printf("Queue is empty\\n");
        return -1;
    }
    
    int value = q->items[q->front];
    
    if (q->front == q->rear) {
        // Last element
        q->front = -1;
        q->rear = -1;
    } else {
        q->front = (q->front + 1) % MAX_SIZE;
    }
    
    return value;
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
            Adds an element to the rear of the queue. If the queue is full, it
            results in a{" "}
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
            Removes and returns the front element. If the queue is empty, it results
            in a{" "}
            <span className="italic text-red-500">queue underflow</span>.
          </p>
        </li>
        <li className="p-4 bg-white dark:bg-[#18181b] rounded-md shadow-sm">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
            Front/Peek{" "}
            <span className="text-sm text-gray-500 dark:text-gray-400">
              (O(1))
            </span>
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Returns the front element without removing it. Does not modify the
            queue.
          </p>
        </li>
      </ul>

      {/* Properties Section */}
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-4">
        Properties
      </h2>
      <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
        <li>Fixed size (in array implementation)</li>
        <li>Elements are ordered by arrival time</li>
        <li>Only front element is accessible for removal</li>
        <li>Follows FIFO principle</li>
      </ul>

      {/* Applications Section */}
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-4">
        Applications
      </h2>
      <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
        <li>Process scheduling in operating systems</li>
        <li>Print job scheduling</li>
        <li>Breadth-first search in graphs</li>
        <li>Request handling in web servers</li>
        <li>Message queues in system design</li>
        <li>Buffering in data streams</li>
      </ul>
    </section>
  );
}

export default function QueuePage() {
  return <QueueVisualizer content={<Content />} />;
}