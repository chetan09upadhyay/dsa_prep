 



// import React from "react";
// import { motion } from "framer-motion";
// import styles from "./styles/SortingVisualizer.module.css";
// import { useTheme } from "next-themes";

// interface Bar {
//   value: number;
//   color: string;
// }

// // Define theme-based styles
// const barStyles = {
//   light: {
//     container: {
//       background: "#ffffff",
//     },
//     text: {
//       color: "#000000",
//     },
//   },
//   dark: {
//     container: {
//       // background: "#1f2937",
//     },
//     text: {
//       color: "#ffffff",
//     },
//   },
// };

// interface ArrayBarsProps {
//   bars: Bar[];
// }

// const ArrayBars: React.FC<ArrayBarsProps> = ({ bars }) => {
//   const { theme, resolvedTheme } = useTheme();
//   const isDarkMode = theme === "system" ? resolvedTheme === "dark" : theme === "dark";
//   const currentTheme = isDarkMode ? "dark" : "light";

//   const getBarHeight = (value: number): number => {
//     let height = value * 4;
//     return Math.max(15, Math.min(height, 250));
//   };

//   // Threshold for deciding whether to show value inside or above
//   const heightThreshold = 50; // Adjust this value based on your design needs

//   return (
//     <div
//       className={styles.arrayContainer}
//       style={barStyles[currentTheme].container}
//     >
//       {bars.map((bar, index) => {
//         const barHeight = getBarHeight(bar.value);
//         const showValueInside = barHeight >= heightThreshold;

//         return (
//           <div key={index} className={styles.barWrapper}>
//             <motion.div
//               className={styles.bar}
//               style={{ background: bar.color }}
//               animate={{ height: `${barHeight}px` }}
//               transition={{ duration: 0.3, ease: "easeInOut" }}
//               data-value={bar.value}
//             >
//               {showValueInside && (
//                 <span
//                   className={styles.barValueInside}
//                   style={barStyles[currentTheme].text}
//                 >
//                   {bar.value}
//                 </span>
//               )}
//             </motion.div>
//             {!showValueInside && (
//               <span
//                 className={styles.barValueOutside}
//                 style={barStyles[currentTheme].text}
//               >
//                 {bar.value}
//               </span>
//             )}
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default ArrayBars;




import React from "react";
import { motion } from "framer-motion";
import styles from "./styles/SortingVisualizer.module.css";
import { useTheme } from "next-themes";

interface Bar {
  value: number;
  color: string;
}

// Define theme-based styles
const barStyles = {
  light: {
    container: {
      background: "#ffffff",
    },
    text: {
      color: "#000000",
    },
  },
  dark: {
    container: {
      // background: "#1f2937",
    },
    text: {
      color: "#ffffff",
    },
  },
};

interface ArrayBarsProps {
  bars: Bar[];
  maxValue?: number; // Optional: provide max value for better scaling
}

const ArrayBars: React.FC<ArrayBarsProps> = ({ bars, maxValue }) => {
  const { theme, resolvedTheme } = useTheme();
  const isDarkMode = theme === "system" ? resolvedTheme === "dark" : theme === "dark";
  const currentTheme = isDarkMode ? "dark" : "light";

  // Improved height calculation
  const getBarHeight = (value: number): number => {
    // If maxValue is provided, use it for proportional scaling
    const maxBarValue = maxValue || Math.max(...bars.map(bar => bar.value));
    
    // Calculate proportional height (80% of container height)
    const containerMaxHeight = 250; // Maximum height in pixels
    const height = (value / maxBarValue) * containerMaxHeight * 0.8;
    
    // Ensure minimum height for visibility and maximum height constraint
    return Math.max(15, Math.min(height, containerMaxHeight));
  };

  // Threshold for deciding whether to show value inside or above
  const heightThreshold = 50;

  return (
    <div
      className={styles.arrayContainer}
      style={barStyles[currentTheme].container}
    >
      {bars.map((bar, index) => {
        const barHeight = getBarHeight(bar.value);
        const showValueInside = barHeight >= heightThreshold;

        return (
          <div key={index} className={styles.barWrapper}>
            <motion.div
              className={styles.bar}
              style={{ 
                background: bar.color,
                height: `${barHeight}px` // Set initial height
              }}
              animate={{ height: `${barHeight}px` }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              data-value={bar.value}
            >
              {showValueInside && (
                <span
                  className={styles.barValueInside}
                  style={barStyles[currentTheme].text}
                >
                  {bar.value}
                </span>
              )}
            </motion.div>
            {!showValueInside && (
              <span
                className={styles.barValueOutside}
                style={barStyles[currentTheme].text}
              >
                {bar.value}
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ArrayBars;
 