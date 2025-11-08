"use client"

import { PolynomialVisualizer } from "@/components/visualizer/polynomial/polynomial-visualizer"
// import Content from "./polynomial.mdx"

function Content() {
  return (
    <section className="max-w-4xl mx-auto p-6   rounded-lg shadow-lg">
      {/* Title */}
      <h1 className="text-4xl font-extrabold text-center text-gray-800 dark:text-gray-100 mb-6">
        Polynomial Multiplication
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-8">
        Multiply two polynomials using the{" "}
        <span className="font-semibold text-amber-600 dark:text-amber-400">
          distributive property
        </span>{" "}
        and combine like terms. Efficiently implemented using arrays or linked lists.
      </p>

      {/* Concept Section */}
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-4">
        What is Polynomial Multiplication?
      </h2>
      <div className="p-6 bg-white dark:bg-[#18181b] rounded-md shadow-sm mb-8">
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Given two polynomials:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
          <div className="p-4 bg-amber-50 dark:bg-amber-900 rounded">
            <strong className="block text-amber-700 dark:text-amber-300 mb-2">P(x)</strong>
            <code className="text-lg">3x³ + 2x² + 5x + 1</code>
          </div>
          <div className="p-4 bg-orange-50 dark:bg-orange-900 rounded">
            <strong className="block text-orange-700 dark:text-orange-300 mb-2">Q(x)</strong>
            <code className="text-lg">2x² + 4x + 3</code>
          </div>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mt-4 text-center">
          Result: <strong>P(x) × Q(x)</strong> = Each term in P multiplies each term in Q
        </p>
      </div>

      {/* Naive Method */}
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-4">
        Naive Method (O(n²))
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        For each term in first polynomial, multiply with every term in second.
      </p>
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mb-6 font-mono text-sm">
        <div>(3x³)(2x²) = 6x⁵</div>
        <div>(3x³)(4x) = 12x⁴</div>
        <div>(3x³)(3) = 9x³</div>
        <div>(2x²)(2x²) = 4x⁴</div>
        <div className="text-amber-600 dark:text-amber-400">...</div>
      </div>

      {/* Array Implementation */}
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-4">
        Array-Based Implementation
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Represent polynomials as arrays where <code>arr[i] = coefficient of xⁱ</code>.
      </p>
      <pre className="bg-[#18181b] text-gray-100 p-4 rounded-md overflow-x-auto text-sm">
        <code>
{`#include <stdio.h>
#include <stdlib.h>

#define MAX_DEGREE 100

typedef struct {
    int coeff[MAX_DEGREE];
    int degree;
} Polynomial;

// Initialize polynomial
void initPoly(Polynomial* p) {
    for (int i = 0; i < MAX_DEGREE; i++) {
        p->coeff[i] = 0;
    }
    p->degree = 0;
}

// Multiply two polynomials
void multiplyPoly(Polynomial p1, Polynomial p2, Polynomial* result) {
    initPoly(result);
    
    for (int i = 0; i <= p1.degree; i++) {
        for (int j = 0; j <= p2.degree; j++) {
            int deg = i + j;
            result->coeff[deg] += p1.coeff[i] * p2.coeff[j];
            if (deg > result->degree) {
                result->degree = deg;
            }
        }
    }
}

// Print polynomial
void printPoly(Polynomial p) {
    int first = 1;
    for (int i = p.degree; i >= 0; i--) {
        if (p.coeff[i] != 0) {
            if (!first && p.coeff[i] > 0) printf(" + ");
            if (p.coeff[i] < 0) printf(" - ");
            if (abs(p.coeff[i]) != 1 || i == 0) {
                printf("%d", abs(p.coeff[i]));
            } else if (p.coeff[i] == -1) {
                printf("-");
            }
            if (i > 0) {
                printf("x");
                if (i > 1) printf("^%d", i);
            }
            first = 0;
        }
    }
    if (first) printf("0");
    printf("\\n");
}

// Example usage
int main() {
    Polynomial p1, p2, result;
    
    // P(x) = 3x³ + 2x² + 5x + 1
    initPoly(&p1);
    p1.coeff[3] = 3; p1.coeff[2] = 2; p1.coeff[1] = 5; p1.coeff[0] = 1;
    p1.degree = 3;
    
    // Q(x) = 2x² + 4x + 3
    initPoly(&p2);
    p2.coeff[2] = 2; p2.coeff[1] = 4; p2.coeff[0] = 3;
    p2.degree = 2;
    
    multiplyPoly(p1, p2, &result);
    
    printf("P(x) = "); printPoly(p1);
    printf("Q(x) = "); printPoly(p2);
    printf("Result = "); printPoly(result);
    
    return 0;
}`}
        </code>
      </pre>

      {/* Example Step-by-Step */}
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-4">
        Step-by-Step Example
      </h2>
      <div className="bg-white dark:bg-[#18181b] p-6 rounded-md shadow-sm">
        <p className="font-semibold mb-3">Multiply: (x + 2) × (x² + 3)</p>
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-amber-100 dark:bg-amber-900">
              <th className="border border-amber-300 dark:border-amber-700 p-2">Term</th>
              <th className="border border-amber-300 dark:border-amber-700 p-2">×</th>
              <th className="border border-amber-300 dark:border-amber-700 p-2">Term</th>
              <th className="border border-amber-300 dark:border-amber-700 p-2">=</th>
              <th className="border border-amber-300 dark:border-amber-700 p-2">Result</th>
            </tr>
          </thead>
          <tbody className="text-center">
            <tr><td className="border p-2">x</td><td className="border p-2">×</td><td className="border p-2">x²</td><td className="border p-2">=</td><td className="border p-2">x³</td></tr>
            <tr><td className="border p-2">x</td><td className="border p-2">×</td><td className="border p-2">3</td><td className="border p-2">=</td><td className="border p-2">3x</td></tr>
            <tr><td className="border p-2">2</td><td className="border p-2">×</td><td className="border p-2">x²</td><td className="border p-2">=</td><td className="border p-2">2x²</td></tr>
            <tr><td className="border p-2">2</td><td className="border p-2">×</td><td className="border p-2">3</td><td className="border p-2">=</td><td className="border p-2">6</td></tr>
          </tbody>
        </table>
        <div className="mt-4 p-3 bg-amber-50 dark:bg-amber-900 rounded text-center">
          <strong>Combine:</strong> x³ + 2x² + 3x + 6
        </div>
      </div>

      {/* Linked List Implementation */}
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-4">
        Linked List Implementation (Dynamic)
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Each node stores <code>coefficient</code> and <code>exponent</code>.
      </p>
      <pre className="bg-[#18181b] text-gray-100 p-4 rounded-md overflow-x-auto text-sm">
        <code>
{`typedef struct Node {
    int coeff;
    int exp;
    struct Node* next;
} Node;

typedef struct {
    Node* head;
} PolyList;

// Create new term
Node* createTerm(int coeff, int exp) {
    Node* newNode = (Node*)malloc(sizeof(Node));
    newNode->coeff = coeff;
    newNode->exp = exp;
    newNode->next = NULL;
    return newNode;
}

// Insert term in descending order of exponent
void insertTerm(PolyList* poly, int coeff, int exp) {
    if (coeff == 0) return;
    
    Node* newNode = createTerm(coeff, exp);
    if (!poly->head || poly->head->exp < exp) {
        newNode->next = poly->head;
        poly->head = newNode;
        return;
    }
    
    Node* curr = poly->head;
    while (curr->next && curr->next->exp > exp) {
        curr = curr->next;
    }
    
    if (curr->exp == exp) {
        curr->coeff += coeff;
        free(newNode);
    } else {
        newNode->next = curr->next;
        curr->next = newNode;
    }
}

// Multiply two polynomials
void multiplyPolyList(PolyList p1, PolyList p2, PolyList* result) {
    result->head = NULL;
    Node* t1 = p1.head;
    
    while (t1) {
        Node* t2 = p2.head;
        while (t2) {
            int newCoeff = t1->coeff * t2->coeff;
            int newExp = t1->exp + t2->exp;
            insertTerm(result, newCoeff, newExp);
            t2 = t2->next;
        }
        t1 = t1->next;
    }
}`}
        </code>
      </pre>

      {/* Complexity */}
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-4">
        Time & Space Complexity
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 bg-white dark:bg-[#18181b] rounded-md shadow-sm">
          <h3 className="font-semibold text-amber-600 dark:text-amber-400">Array Method</h3>
          <ul className="mt-2 space-y-1 text-gray-600 dark:text-gray-300">
            <li>Time: <strong>O(n × m)</strong></li>
            <li>Space: <strong>O(n + m)</strong></li>
          </ul>
        </div>
        <div className="p-4 bg-white dark:bg-[#18181b] rounded-md shadow-sm">
          <h3 className="font-semibold text-orange-600 dark:text-orange-400">Linked List</h3>
          <ul className="mt-2 space-y-1 text-gray-600 dark:text-gray-300">
            <li>Time: <strong>O(n × m log(nm))</strong> (with sorting)</li>
            <li>Space: <strong>O(nm)</strong> terms</li>
          </ul>
        </div>
      </div>

      {/* Applications */}
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-4">
        Applications
      </h2>
      <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
        <li>Computer algebra systems (CAS)</li>
        <li>Signal processing (convolution)</li>
        <li>Finite field arithmetic in cryptography</li>
        <li>Physics simulations (Taylor series)</li>
        <li>Curve fitting and regression</li>
      </ul>

      {/* Quick Reference */}
      <div className="mt-8 p-5 bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-900 dark:to-orange-900 rounded-lg">
        <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-3">
          Example Results
        </h3>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b dark:border-gray-700">
              <th className="text-left py-1">P(x)</th>
              <th className="text-left py-1">Q(x)</th>
              <th className="text-left py-1">P(x) × Q(x)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="py-1">x + 1</td><td>x - 1</td><td>x² - 1</td></tr>
            <tr><td className="py-1">x² + 2x + 1</td><td>x + 3</td><td>x³ + 5x² + 7x + 3</td></tr>
            <tr><td className="py-1">2x + 3</td><td>4x + 5</td><td>8x² + 22x + 15</td></tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default function PolynomialPage() {
  return <PolynomialVisualizer content={<Content />} />
} 