// // components/sorting-visualizer/SortingVisualizer.tsx
// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import ArrayBars from "./ArrayBars";
// import Controls from "./Controls";
// import {
//   bubbleSort,
//   selectionSort,
// //   insertionSort,
// //   mergeSortWrapper,
// //   quickSortWrapper,
// } from "./sortingAlgorithms";
// import styles from "./styles/SortingVisualizer.module.css";

// interface Bar {
//   value: number;
//   color: string;
// }

// type SortingFunction = () => Promise<void>;

// const SortingVisualizer: React.FC = () => {
//   const [bars, setBars] = useState<Bar[]>([]);
//   const [isSorting, setIsSorting] = useState<boolean>(false);
//   const [activeAlgorithm, setActiveAlgorithm] = useState<string | null>(null);
//   const [theme, setTheme] = useState<"dark" | "light">("dark");
//   const animationDelay = 300;

//   const neonRed = "#ff4d4d";
//   const neonGreen = "#00ff00";
//   const defaultGradient = "linear-gradient(45deg, #00e6ff, #1e90ff)";

//   const generateArray = () => {
//     if (isSorting) return;
//     const arraySize = 15;
//     const newBars: Bar[] = Array.from({ length: arraySize }, () => ({
//       value: Math.floor(Math.random() * 55) + 5,
//       color: defaultGradient,
//     }));
//     setBars(newBars);
//   };

//   const setCustomArray = (input: string) => {
//     if (isSorting || !input) return;
//     const values = input
//       .split(",")
//       .map((item) => parseInt(item.trim()))
//       .filter((item) => !isNaN(item));
//     if (values.length === 0) return;
//     setBars(values.map((val) => ({ value: val, color: defaultGradient })));
//   };

//   useEffect(() => {
//     generateArray();
//   }, []);

//   const toggleTheme = () => {
//     setTheme((prev) => (prev === "dark" ? "light" : "dark"));
//   };

//   const sortingFunctions: Record<string, SortingFunction> = {
//     bubbleSort: () =>
//       bubbleSort(
//         bars,
//         setBars,
//         setIsSorting,
//         setActiveAlgorithm,
//         animationDelay,
//         neonRed,
//         neonGreen,
//         defaultGradient
//       ),
//     selectionSort: () =>
//       selectionSort(
//         bars,
//         setBars,
//         setIsSorting,
//         setActiveAlgorithm,
//         animationDelay,
//         neonRed,
//         neonGreen,
//         defaultGradient
//       ),
//     // insertionSort: () =>
//     //   insertionSort(
//     //     bars,
//     //     setBars,
//     //     setIsSorting,
//     //     setActiveAlgorithm,
//     //     animationDelay,
//     //     neonRed,
//     //     neonGreen,
//     //     defaultGradient
//     //   ),
//     // mergeSort: () =>
//     //   mergeSortWrapper(
//     //     bars,
//     //     setBars,
//     //     setIsSorting,
//     //     setActiveAlgorithm,
//     //     animationDelay,
//     //     neonRed,
//     //     neonGreen,
//     //     defaultGradient
//     //   ),
//     // quickSort: () =>
//     //   quickSortWrapper(
//     //     bars,
//     //     setBars,
//     //     setIsSorting,
//     //     setActiveAlgorithm,
//     //     animationDelay,
//     //     neonRed,
//     //     neonGreen,
//     //     defaultGradient
//     //   ),
//   };

//   return (
//     <motion.div
//       className={`${styles.container} ${theme === "dark" ? styles.dark : styles.light}`}
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//     >
//       <h1>Sorting Visualizer</h1>
//       <button onClick={toggleTheme} className={styles.themeToggle}>
//         {theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
//       </button>
//       <Controls
//         generateArray={generateArray}
//         setCustomArray={setCustomArray}
//         isSorting={isSorting}
//         activeAlgorithm={activeAlgorithm}
//         sortingFunctions={sortingFunctions}
//       />
//       <ArrayBars bars={bars} />
//     </motion.div>
//   );
// };

// export default SortingVisualizer;





// // components/sorting-visualizer/SortingVisualizer.tsx
import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import ArrayBars from "./ArrayBars";
import Controls from "./Controls";
import {
  bubbleSort,
  selectionSort,
  // insertionSort,
  // mergeSortWrapper,
  // quickSortWrapper,
} from "./sortingAlgorithms";
import styles from "./styles/SortingVisualizer.module.css";

interface Bar {
  value: number;
  color: string;
}

type SortingFunction = () => Promise<void>;

const SortingVisualizer: React.FC = () => {
  const [bars, setBars] = useState<Bar[]>([]);
  const [isSorting, setIsSorting] = useState<boolean>(false);
  const [activeAlgorithm, setActiveAlgorithm] = useState<string | null>(null);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const animationDelay = 300;

  const neonRed = "#ff4d4d";
  const neonGreen = "#00ff00";
  const defaultGradient = "linear-gradient(45deg, #00e6ff, #1e90ff)";

  const generateArray = useCallback(() => {
    if (isSorting) return;
    const arraySize = 15;
    const newBars: Bar[] = Array.from({ length: arraySize }, () => ({
      value: Math.floor(Math.random() * 55) + 5,
      color: defaultGradient,
    }));
    setBars(newBars);
  }, [isSorting, defaultGradient]);

  const setCustomArray = useCallback(
    (input: string) => {
      if (isSorting) return;
      const values = input
        .split(",")
        .map((item) => parseInt(item.trim()))
        .filter((item) => !isNaN(item));
      if (values.length > 0) {
        // Only update if values differ from current bars
        const newBars = values.map((val) => ({ value: val, color: defaultGradient }));
        if (
          newBars.length !== bars.length ||
          newBars.some((bar, i) => bar.value !== bars[i]?.value)
        ) {
          setBars(newBars);
        }
      } else {
        generateArray(); // Revert to random array if input is empty
      }
    },
    [isSorting, defaultGradient, generateArray, bars]
  );

  useEffect(() => {
    generateArray();
  }, [generateArray]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  const sortingFunctions: Record<string, SortingFunction> = {
    bubbleSort: () =>
      bubbleSort(
        bars,
        setBars,
        setIsSorting,
        setActiveAlgorithm,
        animationDelay,
        neonRed,
        neonGreen,
        defaultGradient
      ),
    selectionSort: () =>
      selectionSort(
        bars,
        setBars,
        setIsSorting,
        setActiveAlgorithm,
        animationDelay,
        neonRed,
        neonGreen,
        defaultGradient
      ),
    // insertionSort: () =>
    //   insertionSort(
    //     bars,
    //     setBars,
    //     setIsSorting,
    //     setActiveAlgorithm,
    //     animationDelay,
    //     neonRed,
    //     neonGreen,
    //     defaultGradient
    //   ),
    // mergeSort: () =>
    //   mergeSortWrapper(
    //     bars,
    //     setBars,
    //     setIsSorting,
    //     setActiveAlgorithm,
    //     animationDelay,
    //     neonRed,
    //     neonGreen,
    //     defaultGradient
    //   ),
    // quickSort: () =>
    //   quickSortWrapper(
    //     bars,
    //     setBars,
    //     setIsSorting,
    //     setActiveAlgorithm,
    //     animationDelay,
    //     neonRed,
    //     neonGreen,
    //     defaultGradient
    //   ),
  };

  return (
    <motion.div
      className={`${styles.container} ${theme === "dark" ? styles.dark : styles.light}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Sorting Visualizer</h1>
      <button onClick={toggleTheme} className={styles.themeToggle}>
        {theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
      <Controls
        generateArray={generateArray}
        setCustomArray={setCustomArray}
        isSorting={isSorting}
        activeAlgorithm={activeAlgorithm}
        sortingFunctions={sortingFunctions}
      />
      <ArrayBars bars={bars} />
    </motion.div>
  );
};

export default SortingVisualizer;






















//  const sortingFunctions: Record<string, SortingFunction> = {
//   BubbleSort: () =>
//     BubbleSort(
//       bars,
//       setBars,
//       setIsSorting,
//       setActiveAlgorithm,
//       animationDelay,
//       neonRed,
//       neonGreen,
//       defaultGradient
//     ),
//   selectionSort: () =>
//     selectionSort(
//       bars,
//       setBars,
//       setIsSorting,
//       setActiveAlgorithm,
//       animationDelay,
//       neonRed,
//       neonGreen,
//       defaultGradient
//     ),
//   insertionSort: () =>
//     insertionSort(
//       bars,
//       setBars,
//       setIsSorting,
//       setActiveAlgorithm,
//       animationDelay,
//       neonRed,
//       neonGreen,
//       defaultGradient
//     ),
//   mergeSort: () =>
//     mergeSortWrapper(
//       bars,
//       setBars,
//       setIsSorting,
//       setActiveAlgorithm,
//       animationDelay,
//       neonRed,
//       neonGreen,
//       defaultGradient
//     ),
//   quickSort: () =>
//     quickSortWrapper(
//       bars,
//       setBars,
//       setIsSorting,
//       setActiveAlgorithm,
//       animationDelay,
//       neonRed,
//       neonGreen,
//       defaultGradient
//     ),
// };