// // components/sorting-visualizer/Controls.tsx
// import React, { useState } from "react";
// import styles from "./styles/SortingVisualizer.module.css";

// interface ControlsProps {
//   generateArray: () => void;
//   setCustomArray: (input: string) => void;
//   isSorting: boolean;
//   activeAlgorithm: string | null;
//   sortingFunctions: Record<string, () => Promise<void>>;
// }

// const Controls: React.FC<ControlsProps> = ({
//   generateArray,
//   setCustomArray,
//   isSorting,
//   activeAlgorithm,
//   sortingFunctions,
// }) => {
//   const [customInput, setCustomInput] = useState<string>("");

//   const handleCustomArray = () => {
//     setCustomArray(customInput);
//     setCustomInput("");
//   };

//   return (
//     <div className={styles.controls}>
//       <button onClick={generateArray} disabled={isSorting}>
//         Generate New Array
//       </button>
//       <input
//         type="text"
//         value={customInput}
//         onChange={(e) => setCustomInput(e.target.value)}
//         placeholder="Enter comma-separated numbers"
//         disabled={isSorting}
//       />
//       <button onClick={handleCustomArray} disabled={isSorting}>
//         Set Custom Array
//       </button>
//       <div className={styles.sortingButtons}>
//         {Object.keys(sortingFunctions).map((algo) => (
//           <button
//             key={algo}
//             onClick={sortingFunctions[algo]}
//             disabled={isSorting && activeAlgorithm !== algo}
//             className={activeAlgorithm === algo ? styles.active : ""}
//           >
//             {algo.replace(/([A-Z])/g, " $1").trim()}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Controls;












// // components/sorting-visualizer/Controls.tsx
// import React, { useEffect, useState } from "react";
// import styles from "./styles/SortingVisualizer.module.css";

// interface ControlsProps {
//   generateArray: () => void;
//   setCustomArray: (input: string) => void;
//   isSorting: boolean;
//   activeAlgorithm: string | null;
//   sortingFunctions: Record<string, () => Promise<void>>;
// }

// const Controls: React.FC<ControlsProps> = ({
//   generateArray,
//   setCustomArray,
//   isSorting,
//   activeAlgorithm,
//   sortingFunctions,
// }) => {
//   const [customInput, setCustomInput] = useState<string>("");

//   // Update bars automatically when customInput changes
//   useEffect(() => {
//     // Only update if input is not empty and not sorting
//     if (customInput && !isSorting) {
//       setCustomArray(customInput);
//     }
//   }, [customInput, isSorting, setCustomArray]);

//   return (
//     <div className={`${styles.controls} flex flex-row `}>
//       <button onClick={generateArray} disabled={isSorting}>
//         Generate New Array
//       </button>
//       <input
//         type="text"
//         value={customInput}
//         onChange={(e) => setCustomInput(e.target.value)}
//         placeholder="Enter comma-separated numbers"
//         disabled={isSorting}
//       />
//       <div className={styles.sortingButtons}>
//         {Object.keys(sortingFunctions).map((algo) => (
//           <button
//             key={algo}
//             onClick={sortingFunctions[algo]}
//             disabled={isSorting && activeAlgorithm !== algo}
//             className={activeAlgorithm === algo ? styles.active : ""}
//           >
//             {algo.replace(/([A-Z])/g, " $1").trim()}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Controls;

 
// import React, { useState, useEffect } from "react";
// import styles from "./styles/SortingVisualizer.module.css";

// interface ControlsProps {
//   generateArray: () => void;
//   setCustomArray: (input: string) => void;
//   isSorting: boolean;
//   activeAlgorithm: string | null;
//   sortingFunctions: Record<string, () => Promise<void>>;
// }

// const Controls: React.FC<ControlsProps> = ({
//   generateArray,
//   setCustomArray,
//   isSorting,
//   activeAlgorithm,
//   sortingFunctions,
// }) => {
//   const [customInput, setCustomInput] = useState<string>("");

//   // Update bars in real-time as user types valid input
//   useEffect(() => {
//     if (!isSorting) {
//       const values = customInput
//         .split(",")
//         .map((item) => parseInt(item.trim()))
//         .filter((item) => !isNaN(item));
//       if (values.length > 0) {
//         setCustomArray(customInput);
//       }
//     }
//   }, [customInput, isSorting, setCustomArray]);

//   const handleSetCustomArray = () => {
//     if (!isSorting) {
//       setCustomArray(customInput);
//       setCustomInput(""); // Clear input after explicit submission
//     }
//   };

//   return (
//     <div className={`${styles.controls} flex flex-row`}>
//       <button onClick={generateArray} disabled={isSorting}>
//         Generate New Array
//       </button>
//       <input
//         type="text"
//         value={customInput}
//         onChange={(e) => setCustomInput(e.target.value)}
//         placeholder="Enter comma-separated numbers"
//         disabled={isSorting}
//       />
//       <button onClick={handleSetCustomArray} disabled={isSorting}>
//         Set Custom Array
//       </button>
//       <div className={styles.sortingButtons}>
//         {Object.keys(sortingFunctions).map((algo) => (
//           <button
//             key={algo}
//             onClick={sortingFunctions[algo]}
//             disabled={isSorting && activeAlgorithm !== algo}
//             className={activeAlgorithm === algo ? styles.active : ""}
//           >
//             {algo.replace(/([A-Z])/g, " $1").trim()}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Controls;




"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button"

import styles from "./styles/SortingVisualizer.module.css";
import { useTheme } from "next-themes";

interface ControlsProps {
  generateArray: () => void;
  setCustomArray: (input: string) => void;
  isSorting: boolean;
  activeAlgorithm: string | null;
  sortingFunctions: Record<string, () => Promise<void>>;
}

// Define theme-based styles
const controlStyles = {
  light: {
    button: {
      background: "#7f1d1d",
      color: "#000000",
      border: "1px solid #000000",
    },
    input: {
      background: "#ffffff",
      color: "#000000",
      border: "1px solid #000000",
    },
    container: {
      background: "rgba(0, 0, 0, 0.05)",
    },
    activeButton: {
      background: "#2563eb",
      color: "#ffffff",
    },
  },
  dark: {
    button: {
      // background: "#7f1d1d",
      color: "#ffffff",
      border: "1px solid #ffffff",
    },
    input: {
      background: "#1f2937",
      color: "#ffffff",
      border: "1px solid #ffffff",
    },
    container: {
      // background: "rgba(255, 255, 255, 0.1)",
    },
    activeButton: {
      // background: "#60a5fa",
      // color: "#ffffff",
    },
  },
};

const Controls: React.FC<ControlsProps> = ({
  generateArray,
  setCustomArray,
  isSorting,
  activeAlgorithm,
  sortingFunctions,
}) => {
  const [customInput, setCustomInput] = useState<string>("");
  const { theme, resolvedTheme } = useTheme();

  // Determine effective theme
  const isDarkMode = theme === "system" ? resolvedTheme === "dark" : theme === "dark";
  const currentTheme = isDarkMode ? "dark" : "light";

  // Update bars in real-time as user types valid input
  useEffect(() => {
    if (!isSorting) {
      const values = customInput
        .split(",")
        .map((item) => parseInt(item.trim()))
        .filter((item) => !isNaN(item));
      if (values.length > 0) {
        setCustomArray(customInput);
      }
    }
  }, [customInput, isSorting, setCustomArray]);

  const handleSetCustomArray = () => {
    if (!isSorting) {
      setCustomArray(customInput);
      setCustomInput(""); // Clear input after explicit submission
    }
  };

  return (
    <div
      className={`${styles.controls} flex flex-row`}
      style={controlStyles[currentTheme].container}
    >
      <Button
      variant="destructive"
        onClick={generateArray}
        disabled={isSorting}
        // style={controlStyles[currentTheme].button}
      >
        Generate New Array
      </Button>
      <input
        type="text"
        value={customInput}
        onChange={(e) => setCustomInput(e.target.value)}
        placeholder="Enter comma-separated numbers"
        disabled={isSorting}
        // style={controlStyles[currentTheme].input}
      />
      <Button
      variant="destructive"
        onClick={handleSetCustomArray}
        disabled={isSorting}
        // style={controlStyles[currentTheme].button}
      >
        Set Custom Array
      </Button>
      <div className={styles.sortingButtons}>
        {Object.keys(sortingFunctions).map((algo) => (
          <Button
          variant="destructive"
            key={algo}
            onClick={sortingFunctions[algo]}
            disabled={isSorting && activeAlgorithm !== algo}
            // style={
            //   activeAlgorithm === algo
            //     ? controlStyles[currentTheme].activeButton
            //     : controlStyles[currentTheme].button
            // }
            className={activeAlgorithm === algo ? styles.active : ""}
          >
            {algo.replace(/([A-Z])/g, " $1").trim()}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Controls;