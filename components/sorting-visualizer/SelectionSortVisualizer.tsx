// components/sorting-visualizer/SelectionSortVisualizer.tsx
"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import ArrayBars from "./ArrayBars";
import Controls from "./Controls";
import { selectionSort } from "./sortingAlgorithms";
import styles from "./styles/SortingVisualizer.module.css";
// import { Breadcrumbs } from "@/components/navigation/breadcrumbs";

interface Bar {
  value: number;
  color: string;
}

type SortingFunction = () => Promise<void>;

const SelectionSortVisualizer: React.FC = () => {
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
        const newBars = values.map((val) => ({ value: val, color: defaultGradient }));
        if (
          newBars.length !== bars.length ||
          newBars.some((bar, i) => bar.value !== bars[i]?.value)
        ) {
          setBars(newBars);
        }
      } else {
        generateArray();
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
  };

  return (
    <div>
      {/* <Breadcrumbs /> */}
      <motion.div
        className={`${styles.container} ${theme === "dark" ? styles.dark : styles.light}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1>Selection Sort Visualizer</h1>
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
    </div>
  );
};

export default SelectionSortVisualizer;