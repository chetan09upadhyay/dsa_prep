// "use client";

// import React, { useState, useEffect, useCallback } from "react";
// import { motion } from "framer-motion";
// import ArrayBars from "../ArrayBars";
// import Controls from "../Controls";
// import { selectionSort } from "../sortingAlgorithms";
// import styles from "../styles/SortingVisualizer.module.css";
// import { useTheme } from "next-themes";

// interface Bar {
//   value: number;
//   color: string;
// }

// type SortingFunction = () => Promise<void>;

// // Define theme-based styles
// const containerStyles = {
//   light: {
//     background: "#ffffff",
//     color: "#000000",
//   },
//   dark: {
//     color: "#ffffff",
//   },
// };

// const selectionSortOperation: React.FC = () => {
//   const [bars, setBars] = useState<Bar[]>([]);
//   const [isSorting, setIsSorting] = useState<boolean>(false);
//   const [activeAlgorithm, setActiveAlgorithm] = useState<string | null>(null);
//   const { theme, resolvedTheme } = useTheme();

//   // Determine effective theme
//   const isDarkMode = theme === "system" ? resolvedTheme === "dark" : theme === "dark";
//   const currentTheme = isDarkMode ? "dark" : "light";

//   const neonRed = "#ff4d4d";
//   const neonGreen = "#00ff00";
//   const defaultGradient = isDarkMode
//     ? "linear-gradient(45deg, #60a5fa, #1e90ff)" // Adjusted for dark mode
//     : "linear-gradient(45deg, #00e6ff, #1e90ff)"; // Original for light mode

//   const generateArray = useCallback(() => {
//     if (isSorting) return;
//     const arraySize = 15;
//     const newBars: Bar[] = Array.from({ length: arraySize }, () => ({
//       value: Math.floor(Math.random() * 55) + 5,
//       color: defaultGradient,
//     }));
//     setBars(newBars);
//   }, [isSorting, defaultGradient]);

//   const setCustomArray = useCallback(
//     (input: string) => {
//       if (isSorting) return;
//       const values = input
//         .split(",")
//         .map((item) => parseInt(item.trim()))
//         .filter((item) => !isNaN(item));
//       if (values.length > 0) {
//         const newBars = values.map((val) => ({ value: val, color: defaultGradient }));
//         if (
//           newBars.length !== bars.length ||
//           newBars.some((bar, i) => bar.value !== bars[i]?.value)
//         ) {
//           setBars(newBars);
//         }
//       } else {
//         generateArray();
//       }
//     },
//     [isSorting, defaultGradient, generateArray, bars]
//   );

//   useEffect(() => {
//     generateArray();
//   }, [generateArray]);

//   const sortingFunctions: Record<string, SortingFunction> = {
//     selectionSort: () =>
//       selectionSort(
//         bars,
//         setBars,
//         setIsSorting,
//         setActiveAlgorithm,
//         300, // animationDelay
//         neonRed,
//         neonGreen,
//         defaultGradient
//       ),
//   };

//   return (
//     <div>
//       {/* <Breadcrumbs /> */}
//       <motion.div
//         className={`${styles.container} ${isDarkMode ? styles.dark : styles.light}`}
//         style={containerStyles[currentTheme]}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5 }}
//       >
//         {/* <h1>Selection Sort Visualizer</h1> */}
//         <Controls
//           generateArray={generateArray}
//           setCustomArray={setCustomArray}
//           isSorting={isSorting}
//           activeAlgorithm={activeAlgorithm}
//           sortingFunctions={sortingFunctions}
//         />
//         <ArrayBars bars={bars} />
//       </motion.div>
//     </div>
//   );
// };

// export default selectionSortOperation;






"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import ArrayBars from "../ArrayBars";
import Controls from "../Controls";
import { selectionSort } from "../sortingAlgorithms";
import styles from "../styles/SortingVisualizer.module.css";
import { useTheme } from "next-themes";

interface Bar {
  value: number;
  color: string;
}

type SortingFunction = () => Promise<void>;

// Define theme-based styles
const containerStyles = {
  light: {
    background: "#ffffff",
    color: "#000000",
  },
  dark: {
    color: "#ffffff",
  },
};

const selectionSortOperation: React.FC = () => {
  const [bars, setBars] = useState<Bar[]>([]);
  const [isSorting, setIsSorting] = useState<boolean>(false);
  const [activeAlgorithm, setActiveAlgorithm] = useState<string | null>(null);
  const { theme, resolvedTheme } = useTheme();

  // Determine effective theme
  const isDarkMode = theme === "system" ? resolvedTheme === "dark" : theme === "dark";
  const currentTheme = isDarkMode ? "dark" : "light";

  const neonRed = "#ff4d4d";
  const neonGreen = "#00ff00";
  const defaultGradient = isDarkMode
    ? "linear-gradient(45deg, #60a5fa, #1e90ff)" // Adjusted for dark mode
    : "linear-gradient(45deg, #00e6ff, #1e90ff)"; // Original for light mode

  // This function should ONLY be called when generating new random array
  const generateArray = useCallback(() => {
    if (isSorting) return;
    const arraySize = 15;
    const newBars: Bar[] = Array.from({ length: arraySize }, () => ({
      value: Math.floor(Math.random() * 55) + 5,
      color: defaultGradient,
    }));
    setBars(newBars);
  }, [isSorting, defaultGradient]);

  // This function should ONLY be called when setting custom array
  const setCustomArray = useCallback(
    (input: string) => {
      if (isSorting) return;
      const values = input
        .split(",")
        .map((item) => parseInt(item.trim()))
        .filter((item) => !isNaN(item));
      
      // If no valid input, don't change the array
      if (values.length === 0) return;
      
      const newBars = values.map((val) => ({ 
        value: val, 
        color: defaultGradient 
      }));
      setBars(newBars);
    },
    [isSorting, defaultGradient]
  );

  // Initialize with random array only on first mount
  useEffect(() => {
    // Only generate initial array if bars is empty
    if (bars.length === 0) {
      generateArray();
    }
  }, []); // Empty dependency array - only runs on mount

  const sortingFunctions: Record<string, SortingFunction> = {
    selectionSort: () =>
      selectionSort(
        bars,
        setBars,
        setIsSorting,
        setActiveAlgorithm,
        300, // animationDelay
        neonRed,
        neonGreen,
        defaultGradient
      ),
  };

  return (
    <div>
      {/* <Breadcrumbs /> */}
      <motion.div
        className={`${styles.container} ${isDarkMode ? styles.dark : styles.light}`}
        style={containerStyles[currentTheme]}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* <h1>Selection Sort Visualizer</h1> */}
        <Controls
          generateArray={generateArray}
          setCustomArray={setCustomArray}
          isSorting={isSorting}
          activeAlgorithm={activeAlgorithm}
          sortingFunctions={sortingFunctions}
        />
        <ArrayBars bars={bars} />
      </motion.div>
    </div>
  );
};

export default selectionSortOperation;