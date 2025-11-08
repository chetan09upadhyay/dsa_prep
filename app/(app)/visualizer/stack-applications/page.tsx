"use client"

import { InfixPostfixVisualizer } from "@/components/visualizer/stack-applications/infix-postfix-visualizer"
function Content() {
  return (
    <section className="max-w-4xl mx-auto p-6   rounded-lg shadow-lg">
      {/* Title */}
      <h1 className="text-4xl font-extrabold text-center text-gray-800 dark:text-gray-100 mb-6">
        Infix to Postfix Conversion
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-8">
        Convert mathematical expressions from{" "}
        <span className="font-semibold text-teal-600 dark:text-teal-400">
          infix notation
        </span>{" "}
        (e.g., A + B) to{" "}
        <span className="font-semibold text-cyan-600 dark:text-cyan-400">
          postfix notation
        </span>{" "}
        (e.g., A B +) using the <strong>Shunting Yard Algorithm</strong> with a stack.
      </p>

      {/* Concept Section */}
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-4">
        What is Infix and Postfix?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="p-5 bg-white dark:bg-[#18181b] rounded-md shadow-sm">
          <h3 className="text-xl font-semibold text-teal-600 dark:text-teal-400 mb-2">
            Infix Notation
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Operator is between operands: <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">A + B</code>
          </p>
          <p className="text-sm text-gray-500 mt-2">Human-readable, requires parentheses for precedence.</p>
        </div>
        <div className="p-5 bg-white dark:bg-[#18181b] rounded-md shadow-sm">
          <h3 className="text-xl font-semibold text-cyan-600 dark:text-cyan-400 mb-2">
            Postfix Notation (RPN)
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Operator follows operands: <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">A B +</code>
          </p>
          <p className="text-sm text-gray-500 mt-2">No parentheses needed. Easy for computers to evaluate.</p>
        </div>
      </div>

      {/* Algorithm Section */}
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-4">
        Shunting Yard Algorithm
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Uses a <strong>stack</strong> to manage operators and parentheses. Follows these rules:
      </p>
      <ol className="list-decimal list-inside text-gray-600 dark:text-gray-300 space-y-2 mb-6 ml-4">
        <li>Read the infix expression from left to right.</li>
        <li>If token is an <strong>operand</strong> → output it immediately.</li>
        <li>If token is <strong>'('</strong> → push onto stack.</li>
        <li>If token is <strong>')'</strong> → pop stack until '(' is found.</li>
        <li>If token is an <strong>operator</strong>:
          <ul className="list-disc ml-6 mt-1">
            <li>While stack top has ≥ precedence (and is not '('), pop to output.</li>
            <li>Then push current operator.</li>
          </ul>
        </li>
        <li>At the end, pop all remaining operators from stack to output.</li>
      </ol>

      {/* Precedence Table */}
      <div className="overflow-x-auto mb-8">
        <table className="min-w-full bg-white dark:bg-[#18181b] rounded-md shadow-sm">
          <thead>
            <tr className="bg-gray-50 dark:bg-gray-800">
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Operator</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Precedence</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Associativity</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 dark:text-gray-300">
            <tr className="border-t dark:border-gray-700">
              <td className="px-4 py-2">^</td>
              <td className="px-4 py-2">3</td>
              <td className="px-4 py-2">Right</td>
            </tr>
            <tr className="border-t dark:border-gray-700">
              <td className="px-4 py-2">*, /</td>
              <td className="px-4 py-2">2</td>
              <td className="px-4 py-2">Left</td>
            </tr>
            <tr className="border-t dark:border-gray-700">
              <td className="px-4 py-2">+, -</td>
              <td className="px-4 py-2">1</td>
              <td className="px-4 py-2">Left</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Implementation Section */}
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-4">
        Implementation in C
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        C program to convert infix to postfix using a character stack:
      </p>
      <pre className="bg-[#18181b] text-gray-100 p-4 rounded-md overflow-x-auto text-sm">
        <code>
{`#include <stdio.h>
#include <string.h>
#include <ctype.h>

#define MAX 100

char stack[MAX];
int top = -1;

void push(char x) {
    stack[++top] = x;
}

char pop() {
    if (top == -1) return -1;
    return stack[top--];
}

int precedence(char x) {
    if (x == '^') return 3;
    if (x == '*' || x == '/') return 2;
    if (x == '+' || x == '-') return 1;
    return 0;
}

void infixToPostfix(char* infix, char* postfix) {
    int i = 0, j = 0;
    char item = infix[i];

    while (item != '\\0') {
        if (isalnum(item)) {
            postfix[j++] = item;
        }
        else if (item == '(') {
            push(item);
        }
        else if (item == ')') {
            while (top != -1 && stack[top] != '(') {
                postfix[j++] = pop();
            }
            pop(); // Remove '('
        }
        else { // Operator
            while (top != -1 && precedence(stack[top]) >= precedence(item)) {
                if (stack[top] == '^' && item == '^') break; // Right associativity
                postfix[j++] = pop();
            }
            push(item);
        }
        item = infix[++i];
    }

    while (top != -1) {
        postfix[j++] = pop();
    }
    postfix[j] = '\\0';
}

// Example usage
int main() {
    char infix[] = "A+B*(C^D-E)";
    char postfix[MAX];
    
    infixToPostfix(infix, postfix);
    printf("Infix:   %s\\n", infix);
    printf("Postfix: %s\\n", postfix);  // Output: ABCDE^-*+
    
    return 0;
}`}
        </code>
      </pre>

      {/* Step-by-Step Example */}
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-4">
        Step-by-Step Example
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Convert <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">A + B * C</code>:
      </p>
      <div className="space-y-3 text-sm">
        <div className="flex items-center space-x-3">
          <span className="font-mono bg-teal-100 dark:bg-teal-900 px-2 py-1 rounded">A</span>
          <span>→</span>
          <span className="font-semibold text-teal-600 dark:text-teal-400">Output: A</span>
        </div>
        <div className="flex items-center space-x-3">
          <span className="font-mono bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">+</span>
          <span>→</span>
          <span className="font-semibold">Push + to stack</span>
        </div>
        <div className="flex items-center space-x-3">
          <span className="font-mono bg-teal-100 dark:bg-teal-900 px-2 py-1 rounded">B</span>
          <span>→</span>
          <span className="font-semibold text-teal-600 dark:text-teal-400">Output: AB</span>
        </div>
        <div className="flex items-center space-x-3">
          <span className="font-mono bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">*</span>
          <span>→</span>
          <span className="font-semibold">* has higher precedence → Push *</span>
        </div>
        <div className="flex items-center space-x-3">
          <span className="font-mono bg-teal-100 dark:bg-teal-900 px-2 py-1 rounded">C</span>
          <span>→</span>
          <span className="font-semibold text-teal-600 dark:text-teal-400">Output: ABC</span>
        </div>
        <div className="flex items-center space-x-3">
          <span className="text-red-500">End of input</span>
          <span>→</span>
          <span className="font-semibold">Pop stack: * then +</span>
        </div>
        <div className="mt-4 p-3 bg-cyan-50 dark:bg-cyan-900 rounded-md">
          <strong>Final Postfix:</strong> <code className="text-cyan-700 dark:text-cyan-300">A B C * +</code>
        </div>
      </div>

      {/* Operations Summary */}
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-4">
        Key Operations
      </h2>
      <ul className="space-y-4">
        <li className="p-4 bg-white dark:bg-[#18181b] rounded-md shadow-sm">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
            Push Operator <span className="text-sm text-gray-500 dark:text-gray-400">(O(1))</span>
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Add operator to stack when it has higher or equal precedence.
          </p>
        </li>
        <li className="p-4 bg-white dark:bg-[#18181b] rounded-md shadow-sm">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
            Pop to Output <span className="text-sm text-gray-500 dark:text-gray-400">(O(1))</span>
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Move operators from stack to output when precedence rules are satisfied.
          </p>
        </li>
        <li className="p-4 bg-white dark:bg-[#18181b] rounded-md shadow-sm">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
            Handle Parentheses <span className="text-sm text-gray-500 dark:text-gray-400">(O(1))</span>
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            '(' pushed; on ')', pop until matching '(' is removed.
          </p>
        </li>
      </ul>

      {/* Applications */}
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-4">
        Applications
      </h2>
      <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
        <li>Expression evaluation in compilers and calculators</li>
        <li>Reverse Polish Notation (RPN) calculators</li>
        <li>Parsing in programming language interpreters</li>
        <li>Stack-based virtual machines (e.g., Java JVM, Python)</li>
        <li>Syntax tree construction</li>
      </ul>

      {/* Quick Reference */}
      <div className="mt-8 p-5 bg-gradient-to-r from-teal-100 to-cyan-100 dark:from-teal-900 dark:to-cyan-900 rounded-lg">
        <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-2">
          Quick Example Table
        </h3>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b dark:border-gray-700">
              <th className="text-left py-1">Infix</th>
              <th className="text-left py-1">Postfix</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="py-1">A + B</td><td>A B +</td></tr>
            <tr><td className="py-1">A + B * C</td><td>A B C * +</td></tr>
            <tr><td className="py-1">(A + B) * C</td><td>A B + C *</td></tr>
            <tr><td className="py-1">A ^ B ^ C</td><td>A B C ^ ^</td></tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default function StackApplicationsPage() {
  return <InfixPostfixVisualizer content={<Content />} />
} 