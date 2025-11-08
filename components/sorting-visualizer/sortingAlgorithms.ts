// // components/sorting-visualizer/sortingAlgorithms.ts
// interface Bar {
//   value: number;
//   color: string;
// }

// const sleep = (ms: number): Promise<void> => new Promise((resolve) => setTimeout(resolve, ms));

// export const bubbleSort = async (
//   bars: Bar[],
//   setBars: React.Dispatch<React.SetStateAction<Bar[]>>,
//   setIsSorting: React.Dispatch<React.SetStateAction<boolean>>,
//   setActiveAlgorithm: React.Dispatch<React.SetStateAction<string | null>>,
//   delay: number,
//   neonRed: string,
//   neonGreen: string,
//   defaultGradient: string
// ): Promise<void> => {
//   setActiveAlgorithm("bubbleSort");
//   setIsSorting(true);
//   let newBars = [...bars];
//   for (let i = 0; i < newBars.length - 1; i++) {
//     for (let j = 0; j < newBars.length - i - 1; j++) {
//       newBars[j] = { ...newBars[j], color: neonRed };
//       newBars[j + 1] = { ...newBars[j + 1], color: neonRed };
//       setBars([...newBars]);
//       await sleep(delay);
//       if (newBars[j].value > newBars[j + 1].value) {
//         let temp = newBars[j].value;
//         newBars[j].value = newBars[j + 1].value;
//         newBars[j + 1].value = temp;
//         setBars([...newBars]);
//         await sleep(delay);
//       }
//       newBars[j] = { ...newBars[j], color: defaultGradient };
//       newBars[j + 1] = { ...newBars[j + 1], color: defaultGradient };
//       setBars([...newBars]);
//     }
//     newBars[newBars.length - i - 1] = {
//       ...newBars[newBars.length - i - 1],
//       color: neonGreen,
//     };
//     setBars([...newBars]);
//   }
//   newBars[0] = { ...newBars[0], color: neonGreen };
//   setBars([...newBars]);
//   setIsSorting(false);
//   setActiveAlgorithm(null);
// };

// // Add other sorting algorithms with TypeScript types
// export const selectionSort = async (
//   bars: Bar[],
//   setBars: React.Dispatch<React.SetStateAction<Bar[]>>,
//   setIsSorting: React.Dispatch<React.SetStateAction<boolean>>,
//   setActiveAlgorithm: React.Dispatch<React.SetStateAction<string | null>>,
//   delay: number,
//   neonRed: string,
//   neonGreen: string,
//   defaultGradient: string
// ): Promise<void> => {
//   setActiveAlgorithm("selectionSort");
//   setIsSorting(true);
//   let newBars = [...bars];
//   for (let i = 0; i < newBars.length; i++) {
//     let minIndex = i;
//     newBars[minIndex] = { ...newBars[minIndex], color: neonRed };
//     for (let j = i + 1; j < newBars.length; j++) {
//       newBars[j] = { ...newBars[j], color: neonRed };
//       setBars([...newBars]);
//       await sleep(delay);
//       if (newBars[j].value < newBars[minIndex].value) {
//         newBars[minIndex] = { ...newBars[minIndex], color: defaultGradient };
//         minIndex = j;
//         newBars[minIndex] = { ...newBars[minIndex], color: neonRed };
//       } else {
//         newBars[j] = { ...newBars[j], color: defaultGradient };
//       }
//       setBars([...newBars]);
//     }
//     if (minIndex !== i) {
//       let temp = newBars[i].value;
//       newBars[i].value = newBars[minIndex].value;
//       newBars[minIndex].value = temp;
//       setBars([...newBars]);
//       await sleep(delay);
//     }
//     newBars[i] = { ...newBars[i], color: neonGreen };
//     setBars([...newBars]);
//   }
//   setIsSorting(false);
//   setActiveAlgorithm(null);
// };

// Add insertionSort, mergeSortWrapper, and quickSortWrapper with similar TypeScript typing...



// // components/sorting-visualizer/sortingAlgorithms.ts
// interface Bar {
//   value: number;
//   color: string;
// }

// const sleep = (ms: number): Promise<void> => new Promise((resolve) => setTimeout(resolve, ms));

// export const bubbleSort = async (
//   bars: Bar[],
//   setBars: React.Dispatch<React.SetStateAction<Bar[]>>,
//   setIsSorting: React.Dispatch<React.SetStateAction<boolean>>,
//   setActiveAlgorithm: React.Dispatch<React.SetStateAction<string | null>>,
//   delay: number,
//   neonRed: string,
//   neonGreen: string,
//   defaultGradient: string
// ): Promise<void> => {
//   setActiveAlgorithm("bubbleSort");
//   setIsSorting(true);
//   let newBars = [...bars];
//   for (let i = 0; i < newBars.length - 1; i++) {
//     for (let j = 0; j < newBars.length - i - 1; j++) {
//       newBars[j] = { ...newBars[j], color: neonRed };
//       newBars[j + 1] = { ...newBars[j + 1], color: neonRed };
//       setBars([...newBars]);
//       await sleep(delay);
//       if (newBars[j].value > newBars[j + 1].value) {
//         let temp = newBars[j].value;
//         newBars[j].value = newBars[j + 1].value;
//         newBars[j + 1].value = temp;
//         setBars([...newBars]);
//         await sleep(delay);
//       }
//       newBars[j] = { ...newBars[j], color: defaultGradient };
//       newBars[j + 1] = { ...newBars[j + 1], color: defaultGradient };
//       setBars([...newBars]);
//     }
//     newBars[newBars.length - i - 1] = {
//       ...newBars[newBars.length - i - 1],
//       color: neonGreen,
//     };
//     setBars([...newBars]);
//   }
//   newBars[0] = { ...newBars[0], color: neonGreen };
//   setBars([...newBars]);
//   setIsSorting(false);
//   setActiveAlgorithm(null);
// };

 
// export const selectionSort = async (
//   bars: Bar[],
//   setBars: React.Dispatch<React.SetStateAction<Bar[]>>,
//   setIsSorting: React.Dispatch<React.SetStateAction<boolean>>,
//   setActiveAlgorithm: React.Dispatch<React.SetStateAction<string | null>>,
//   delay: number,
//   neonRed: string,
//   neonGreen: string,
//   defaultGradient: string
// ): Promise<void> => {
//   setActiveAlgorithm("selectionSort");
//   setIsSorting(true);
//   let newBars = [...bars];
//   for (let i = 0; i < newBars.length; i++) {
//     let minIndex = i;
//     newBars[minIndex] = { ...newBars[minIndex], color: neonRed };
//     for (let j = i + 1; j < newBars.length; j++) {
//       newBars[j] = { ...newBars[j], color: neonRed };
//       setBars([...newBars]);
//       await sleep(delay);
//       if (newBars[j].value < newBars[minIndex].value) {
//         newBars[minIndex] = { ...newBars[minIndex], color: defaultGradient };
//         minIndex = j;
//         newBars[minIndex] = { ...newBars[minIndex], color: neonRed };
//       } else {
//         newBars[j] = { ...newBars[j], color: defaultGradient };
//       }
//       setBars([...newBars]);
//     }
//     if (minIndex !== i) {
//       let temp = newBars[i].value;
//       newBars[i].value = newBars[minIndex].value;
//       newBars[minIndex].value = temp;
//       setBars([...newBars]);
//       await sleep(delay);
//     }
//     newBars[i] = { ...newBars[i], color: neonGreen };
//     setBars([...newBars]);
//   }
//   setIsSorting(false);
//   setActiveAlgorithm(null);
// };

// export const insertionSort = async (
//   bars: Bar[],
//   setBars: React.Dispatch<React.SetStateAction<Bar[]>>,
//   setIsSorting: React.Dispatch<React.SetStateAction<boolean>>,
//   setActiveAlgorithm: React.Dispatch<React.SetStateAction<string | null>>,
//   delay: number,
//   neonRed: string,
//   neonGreen: string,
//   defaultGradient: string
// ): Promise<void> => {
//   setActiveAlgorithm("insertionSort");
//   setIsSorting(true);
//   let newBars = [...bars];
//   for (let i = 1; i < newBars.length; i++) {
//     let key = newBars[i].value;
//     let j = i - 1;
//     newBars[i] = { ...newBars[i], color: neonRed };
//     setBars([...newBars]);
//     await sleep(delay);
//     while (j >= 0 && newBars[j].value > key) {
//       newBars[j + 1].value = newBars[j].value;
//       newBars[j] = { ...newBars[j], color: neonRed };
//       setBars([...newBars]);
//       await sleep(delay);
//       newBars[j] = { ...newBars[j], color: defaultGradient };
//       j--;
//     }
//     newBars[j + 1].value = key;
//     newBars[j + 1] = { ...newBars[j + 1], color: neonGreen };
//     setBars([...newBars]);
//     await sleep(delay);
//   }
//   newBars.forEach((bar, index) => {
//     newBars[index] = { ...bar, color: neonGreen };
//   });
//   setBars([...newBars]);
//   setIsSorting(false);
//   setActiveAlgorithm(null);
// };

// export const mergeSortWrapper = async (
//   bars: Bar[],
//   setBars: React.Dispatch<React.SetStateAction<Bar[]>>,
//   setIsSorting: React.Dispatch<React.SetStateAction<boolean>>,
//   setActiveAlgorithm: React.Dispatch<React.SetStateAction<string | null>>,
//   delay: number,
//   neonRed: string,
//   neonGreen: string,
//   defaultGradient: string
// ): Promise<void> => {
//   setActiveAlgorithm("mergeSort");
//   setIsSorting(true);
//   let newBars = [...bars];
//   await mergeSort(newBars, 0, newBars.length - 1, setBars, delay, neonRed, neonGreen, defaultGradient);
//   newBars.forEach((bar, index) => {
//     newBars[index] = { ...bar, color: neonGreen };
//   });
//   setBars([...newBars]);
//   setIsSorting(false);
//   setActiveAlgorithm(null);
// };

// const mergeSort = async (
//   bars: Bar[],
//   left: number,
//   right: number,
//   setBars: React.Dispatch<React.SetStateAction<Bar[]>>,
//   delay: number,
//   neonRed: string,
//   neonGreen: string,
//   defaultGradient: string
// ): Promise<void> => {
//   if (left < right) {
//     const mid = Math.floor((left + right) / 2);
//     await mergeSort(bars, left, mid, setBars, delay, neonRed, neonGreen, defaultGradient);
//     await mergeSort(bars, mid + 1, right, setBars, delay, neonRed, neonGreen, defaultGradient);
//     await merge(bars, left, mid, right, setBars, delay, neonRed, neonGreen, defaultGradient);
//   }
// };

// const merge = async (
//   bars: Bar[],
//   left: number,
//   mid: number,
//   right: number,
//   setBars: React.Dispatch<React.SetStateAction<Bar[]>>,
//   delay: number,
//   neonRed: string,
//   neonGreen: string,
//   defaultGradient: string
// ): Promise<void> => {
//   const leftArray = bars.slice(left, mid + 1);
//   const rightArray = bars.slice(mid + 1, right + 1);
//   let i = 0,
//     j = 0,
//     k = left;

//   while (i < leftArray.length && j < rightArray.length) {
//     bars[k] = { ...bars[k], color: neonRed };
//     setBars([...bars]);
//     await sleep(delay);
//     if (leftArray[i].value <= rightArray[j].value) {
//       bars[k].value = leftArray[i].value;
//       i++;
//     } else {
//       bars[k].value = rightArray[j].value;
//       j++;
//     }
//     bars[k] = { ...bars[k], color: neonGreen };
//     setBars([...bars]);
//     await sleep(delay);
//     k++;
//   }

//   while (i < leftArray.length) {
//     bars[k] = { ...bars[k], color: neonRed };
//     setBars([...bars]);
//     await sleep(delay);
//     bars[k].value = leftArray[i].value;
//     bars[k] = { ...bars[k], color: neonGreen };
//     setBars([...bars]);
//     await sleep(delay);
//     i++;
//     k++;
//   }

//   while (j < rightArray.length) {
//     bars[k] = { ...bars[k], color: neonRed };
//     setBars([...bars]);
//     await sleep(delay);
//     bars[k].value = rightArray[j].value;
//     bars[k] = { ...bars[k], color: neonGreen };
//     setBars([...bars]);
//     await sleep(delay);
//     j++;
//     k++;
//   }
// };

// export const quickSortWrapper = async (
//   bars: Bar[],
//   setBars: React.Dispatch<React.SetStateAction<Bar[]>>,
//   setIsSorting: React.Dispatch<React.SetStateAction<boolean>>,
//   setActiveAlgorithm: React.Dispatch<React.SetStateAction<string | null>>,
//   delay: number,
//   neonRed: string,
//   neonGreen: string,
//   defaultGradient: string
// ): Promise<void> => {
//   setActiveAlgorithm("quickSort");
//   setIsSorting(true);
//   let newBars = [...bars];
//   await quickSort(newBars, 0, newBars.length - 1, setBars, delay, neonRed, neonGreen, defaultGradient);
//   newBars.forEach((bar, index) => {
//     newBars[index] = { ...bar, color: neonGreen };
//   });
//   setBars([...newBars]);
//   setIsSorting(false);
//   setActiveAlgorithm(null);
// };

// const quickSort = async (
//   bars: Bar[],
//   low: number,
//   high: number,
//   setBars: React.Dispatch<React.SetStateAction<Bar[]>>,
//   delay: number,
//   neonRed: string,
//   neonGreen: string,
//   defaultGradient: string
// ): Promise<void> => {
//   if (low < high) {
//     const pi = await partition(bars, low, high, setBars, delay, neonRed, neonGreen, defaultGradient);
//     await quickSort(bars, low, pi - 1, setBars, delay, neonRed, neonGreen, defaultGradient);
//     await quickSort(bars, pi + 1, high, setBars, delay, neonRed, neonGreen, defaultGradient);
//   }
// };

// const partition = async (
//   bars: Bar[],
//   low: number,
//   high: number,
//   setBars: React.Dispatch<React.SetStateAction<Bar[]>>,
//   delay: number,
//   neonRed: string,
//   neonGreen: string,
//   defaultGradient: string
// ): Promise<number> => {
//   const pivot = bars[high].value;
//   bars[high] = { ...bars[high], color: neonRed };
//   let i = low - 1;

//   for (let j = low; j < high; j++) {
//     bars[j] = { ...bars[j], color: neonRed };
//     setBars([...bars]);
//     await sleep(delay);
//     if (bars[j].value < pivot) {
//       i++;
//       let temp = bars[i].value;
//       bars[i].value = bars[j].value;
//       bars[j].value = temp;
//       setBars([...bars]);
//       await sleep(delay);
//     }
//     bars[j] = { ...bars[j], color: defaultGradient };
//   }
//   let temp = bars[i + 1].value;
//   bars[i + 1].value = bars[high].value;
//   bars[high].value = temp;
//   bars[high] = { ...bars[high], color: defaultGradient };
//   bars[i + 1] = { ...bars[i + 1], color: neonGreen };
//   setBars([...bars]);
//   await sleep(delay);
//   return i + 1;
// };





// components/sorting-visualizer/sortingAlgorithms.ts
interface Bar {
  value: number;
  color: string;
}

const sleep = (ms: number): Promise<void> => new Promise((resolve) => setTimeout(resolve, ms));

export const bubbleSort = async (
  bars: Bar[],
  setBars: React.Dispatch<React.SetStateAction<Bar[]>>,
  setIsSorting: React.Dispatch<React.SetStateAction<boolean>>,
  setActiveAlgorithm: React.Dispatch<React.SetStateAction<string | null>>,
  delay: number,
  neonRed: string,
  neonGreen: string,
  defaultGradient: string
): Promise<void> => {
  setActiveAlgorithm("bubbleSort");
  setIsSorting(true);
  let newBars = bars.map(bar => ({...bar})); // Create deep copy
  for (let i = 0; i < newBars.length - 1; i++) {
    for (let j = 0; j < newBars.length - i - 1; j++) {
      newBars[j] = { ...newBars[j], color: neonRed };
      newBars[j + 1] = { ...newBars[j + 1], color: neonRed };
      setBars([...newBars]);
      await sleep(delay);
      if (newBars[j].value > newBars[j + 1].value) {
        let temp = newBars[j].value;
        newBars[j].value = newBars[j + 1].value;
        newBars[j + 1].value = temp;
        setBars([...newBars]);
        await sleep(delay);
      }
      newBars[j] = { ...newBars[j], color: defaultGradient };
      newBars[j + 1] = { ...newBars[j + 1], color: defaultGradient };
      setBars([...newBars]);
    }
    newBars[newBars.length - i - 1] = {
      ...newBars[newBars.length - i - 1],
      color: neonGreen,
    };
    setBars([...newBars]);
  }
  newBars[0] = { ...newBars[0], color: neonGreen };
  setBars([...newBars]);
  setIsSorting(false);
  setActiveAlgorithm(null);
};

export const selectionSort = async (
  bars: Bar[],
  setBars: React.Dispatch<React.SetStateAction<Bar[]>>,
  setIsSorting: React.Dispatch<React.SetStateAction<boolean>>,
  setActiveAlgorithm: React.Dispatch<React.SetStateAction<string | null>>,
  delay: number,
  neonRed: string,
  neonGreen: string,
  defaultGradient: string
): Promise<void> => {
  setActiveAlgorithm("selectionSort");
  setIsSorting(true);
  let newBars = bars.map(bar => ({...bar})); // Create deep copy
  for (let i = 0; i < newBars.length; i++) {
    let minIndex = i;
    newBars[minIndex] = { ...newBars[minIndex], color: neonRed };
    for (let j = i + 1; j < newBars.length; j++) {
      newBars[j] = { ...newBars[j], color: neonRed };
      setBars([...newBars]);
      await sleep(delay);
      if (newBars[j].value < newBars[minIndex].value) {
        newBars[minIndex] = { ...newBars[minIndex], color: defaultGradient };
        minIndex = j;
        newBars[minIndex] = { ...newBars[minIndex], color: neonRed };
      } else {
        newBars[j] = { ...newBars[j], color: defaultGradient };
      }
      setBars([...newBars]);
    }
    if (minIndex !== i) {
      let temp = newBars[i].value;
      newBars[i].value = newBars[minIndex].value;
      newBars[minIndex].value = temp;
      setBars([...newBars]);
      await sleep(delay);
    }
    newBars[i] = { ...newBars[i], color: neonGreen };
    setBars([...newBars]);
  }
  setIsSorting(false);
  setActiveAlgorithm(null);
};

export const insertionSort = async (
  bars: Bar[],
  setBars: React.Dispatch<React.SetStateAction<Bar[]>>,
  setIsSorting: React.Dispatch<React.SetStateAction<boolean>>,
  setActiveAlgorithm: React.Dispatch<React.SetStateAction<string | null>>,
  delay: number,
  neonRed: string,
  neonGreen: string,
  defaultGradient: string
): Promise<void> => {
  setActiveAlgorithm("insertionSort");
  setIsSorting(true);
  let newBars = bars.map(bar => ({...bar})); // Create deep copy
  for (let i = 1; i < newBars.length; i++) {
    let key = newBars[i].value;
    let j = i - 1;
    newBars[i] = { ...newBars[i], color: neonRed };
    setBars([...newBars]);
    await sleep(delay);
    while (j >= 0 && newBars[j].value > key) {
      newBars[j + 1].value = newBars[j].value;
      newBars[j] = { ...newBars[j], color: neonRed };
      setBars([...newBars]);
      await sleep(delay);
      newBars[j] = { ...newBars[j], color: defaultGradient };
      j--;
    }
    newBars[j + 1].value = key;
    newBars[j + 1] = { ...newBars[j + 1], color: neonGreen };
    setBars([...newBars]);
    await sleep(delay);
    
    // Reset colors for already sorted portion
    for (let k = 0; k <= i; k++) {
      newBars[k] = { ...newBars[k], color: neonGreen };
    }
    setBars([...newBars]);
  }
  setIsSorting(false);
  setActiveAlgorithm(null);
};

export const mergeSortWrapper = async (
  bars: Bar[],
  setBars: React.Dispatch<React.SetStateAction<Bar[]>>,
  setIsSorting: React.Dispatch<React.SetStateAction<boolean>>,
  setActiveAlgorithm: React.Dispatch<React.SetStateAction<string | null>>,
  delay: number,
  neonRed: string,
  neonGreen: string,
  defaultGradient: string
): Promise<void> => {
  setActiveAlgorithm("mergeSort");
  setIsSorting(true);
  let newBars = bars.map(bar => ({...bar})); // Create deep copy
  await mergeSort(newBars, 0, newBars.length - 1, setBars, delay, neonRed, neonGreen, defaultGradient);
  // Set all bars to green after sorting
  const finalBars = newBars.map(bar => ({ ...bar, color: neonGreen }));
  setBars([...finalBars]);
  setIsSorting(false);
  setActiveAlgorithm(null);
};

const mergeSort = async (
  bars: Bar[],
  left: number,
  right: number,
  setBars: React.Dispatch<React.SetStateAction<Bar[]>>,
  delay: number,
  neonRed: string,
  neonGreen: string,
  defaultGradient: string
): Promise<void> => {
  if (left < right) {
    const mid = Math.floor((left + right) / 2);
    await mergeSort(bars, left, mid, setBars, delay, neonRed, neonGreen, defaultGradient);
    await mergeSort(bars, mid + 1, right, setBars, delay, neonRed, neonGreen, defaultGradient);
    await merge(bars, left, mid, right, setBars, delay, neonRed, neonGreen, defaultGradient);
  }
};

const merge = async (
  bars: Bar[],
  left: number,
  mid: number,
  right: number,
  setBars: React.Dispatch<React.SetStateAction<Bar[]>>,
  delay: number,
  neonRed: string,
  neonGreen: string,
  defaultGradient: string
): Promise<void> => {
  const leftArray = bars.slice(left, mid + 1).map(bar => ({...bar}));
  const rightArray = bars.slice(mid + 1, right + 1).map(bar => ({...bar}));
  let i = 0, j = 0, k = left;

  while (i < leftArray.length && j < rightArray.length) {
    bars[k] = { ...bars[k], color: neonRed };
    setBars([...bars]);
    await sleep(delay);
    
    if (leftArray[i].value <= rightArray[j].value) {
      bars[k].value = leftArray[i].value;
      i++;
    } else {
      bars[k].value = rightArray[j].value;
      j++;
    }
    
    bars[k] = { ...bars[k], color: neonGreen };
    setBars([...bars]);
    await sleep(delay);
    k++;
  }

  while (i < leftArray.length) {
    bars[k] = { ...bars[k], color: neonRed };
    setBars([...bars]);
    await sleep(delay);
    bars[k].value = leftArray[i].value;
    bars[k] = { ...bars[k], color: neonGreen };
    setBars([...bars]);
    await sleep(delay);
    i++;
    k++;
  }

  while (j < rightArray.length) {
    bars[k] = { ...bars[k], color: neonRed };
    setBars([...bars]);
    await sleep(delay);
    bars[k].value = rightArray[j].value;
    bars[k] = { ...bars[k], color: neonGreen };
    setBars([...bars]);
    await sleep(delay);
    j++;
    k++;
  }
};

export const quickSortWrapper = async (
  bars: Bar[],
  setBars: React.Dispatch<React.SetStateAction<Bar[]>>,
  setIsSorting: React.Dispatch<React.SetStateAction<boolean>>,
  setActiveAlgorithm: React.Dispatch<React.SetStateAction<string | null>>,
  delay: number,
  neonRed: string,
  neonGreen: string,
  defaultGradient: string
): Promise<void> => {
  setActiveAlgorithm("quickSort");
  setIsSorting(true);
  let newBars = bars.map(bar => ({...bar})); // Create deep copy
  await quickSort(newBars, 0, newBars.length - 1, setBars, delay, neonRed, neonGreen, defaultGradient);
  const finalBars = newBars.map(bar => ({ ...bar, color: neonGreen }));
  setBars([...finalBars]);
  setIsSorting(false);
  setActiveAlgorithm(null);
};

const quickSort = async (
  bars: Bar[],
  low: number,
  high: number,
  setBars: React.Dispatch<React.SetStateAction<Bar[]>>,
  delay: number,
  neonRed: string,
  neonGreen: string,
  defaultGradient: string
): Promise<void> => {
  if (low < high) {
    const pi = await partition(bars, low, high, setBars, delay, neonRed, neonGreen, defaultGradient);
    await quickSort(bars, low, pi - 1, setBars, delay, neonRed, neonGreen, defaultGradient);
    await quickSort(bars, pi + 1, high, setBars, delay, neonRed, neonGreen, defaultGradient);
  }
};

const partition = async (
  bars: Bar[],
  low: number,
  high: number,
  setBars: React.Dispatch<React.SetStateAction<Bar[]>>,
  delay: number,
  neonRed: string,
  neonGreen: string,
  defaultGradient: string
): Promise<number> => {
  const pivot = bars[high].value;
  bars[high] = { ...bars[high], color: neonRed };
  setBars([...bars]);
  let i = low - 1;

  for (let j = low; j < high; j++) {
    bars[j] = { ...bars[j], color: neonRed };
    setBars([...bars]);
    await sleep(delay);
    
    if (bars[j].value < pivot) {
      i++;
      let temp = bars[i].value;
      bars[i].value = bars[j].value;
      bars[j].value = temp;
      setBars([...bars]);
      await sleep(delay);
    }
    
    bars[j] = { ...bars[j], color: defaultGradient };
    setBars([...bars]);
  }
  
  let temp = bars[i + 1].value;
  bars[i + 1].value = bars[high].value;
  bars[high].value = temp;
  bars[high] = { ...bars[high], color: defaultGradient };
  bars[i + 1] = { ...bars[i + 1], color: neonGreen };
  setBars([...bars]);
  await sleep(delay);
  
  return i + 1;
};
