export const calculateClickResults = () => {
    const basePoints = 1;
    const bonus = Math.random() < 0.5 ? 10 : 0;
    const gotPrize = Math.random() < 0.25;
    
    return {
      points: basePoints + bonus,
      gotPrize
    };
  };

// export const reset = () => {
//     const basePoints = 1;
//     const bonus = Math.random() < 0.5 ? 10 : 0;
//     const gotPrize = Math.random() < 0.25;
    
//     return {
//       points: basePoints + bonus,
//       gotPrize
//     };
//   };