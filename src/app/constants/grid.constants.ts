/** Center 4 spots in the 4x4 grid that are permanently disabled. */
export const DISABLED_SPOTS = new Set([5, 6, 9, 10]);

/** The four lines (edges) of the grid and their cell indices. */
export const LINES: Record<string, number[]> = {
  top: [0, 1, 2, 3],
  bottom: [12, 13, 14, 15],
  left: [0, 4, 8, 12],
  right: [3, 7, 11, 15]
};

/** Maps each line to its corresponding center indicator cell index. */
export const CENTER_INDICATORS: Record<string, number> = {
  top: 6,
  right: 10,
  bottom: 9,
  left: 5
};
