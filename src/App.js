import { useRef, useState } from "react";
import Grid from "./Grid";

/*  
  GRID OBJECT

  State (0: not started, 1: started, 2: finished)
  Size (1: small, 2: normal, 3: big)
  Dificulty (1: easy, 2: medium, 3: hard) 
  Values (matrix x by x)
*/

export default function App() {
  const gridSizeRef = useRef(null)
  const gridDifficultyRef = useRef(null)
  const [grid, setGrid] = useState(
    {
      state: 1,
      size: '81',
      dificulty: 2,
      values: Array(9).fill().map(() => Array(9).fill(0))
    })

  function handleCreateGrid() {
    let size = gridSizeRef.current.value
    let difficulty = gridDifficultyRef.current.value

    setGrid(
      {
        state: 0,
        size: size,
        dificulty: difficulty,
        values: Array(Math.sqrt(size)).fill().map(() => Array(Math.sqrt(size)).fill(1))
      })
  }

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <select ref={gridDifficultyRef}>
        <option value='1'>
          Easy
        </option>
        <option value='2'>
          Normal
        </option>
        <option value='3'>
          Hard
        </option>
      </select>
      <select ref={gridSizeRef}>
        <option value='16'>
          Small (4 by 4)
        </option>
        <option value='81'>
          Medium (9 by 9)
        </option>
        <option value='256'>
          Large (16 by 16)
        </option>
      </select>

      <button onClick={handleCreateGrid}>
        Generate Sudoku
      </button>

      <Grid grid={grid} />
    </div>
  );
}