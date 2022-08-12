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
  var [grid, setGrid] = useState({
    state: 1,
    size: '9',
    difficulty: 2,
    values: Array(9).fill().map(() => Array(9).fill(0))
  })

  const handleCreateGrid = () => {
    const size = parseInt(gridSizeRef.current.value)
    const difficulty = parseInt(gridDifficultyRef.current.value)
    const values = Array(size).fill().map(() => Array(size).fill(8))

    const filteredValues = values.map((valuesX, id) => {
      var deleteCount = Math.round(.25 * size * (difficulty + Math.random()))

      var nums = new Set();
      while (nums.size < deleteCount) nums.add(Math.round(Math.random() * (size - 1)));
      for (let item of nums) valuesX[item] = 0

      return valuesX
    })

    //check for empty Matrix
    const matrixSize = (filteredValues.filter(value => Math.max(...value) > 0 ? true : false)).length

    if (matrixSize < size / 2)
      handleCreateGrid()
    else {
      const newGrid = {
        state: 0,
        size: size,
        difficulty: difficulty,
        values: filteredValues
      }

      setGrid(newGrid)
    }
  }

  const handleStartGrid = (() => {
    if (grid.state === 0)
      setGrid({
        state: 1,
        size: grid.size,
        difficulty: grid.difficulty,
        values: grid.values
      })
  })

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
        <option value='4'>
          Small (4 by 4)
        </option>
        <option value='9'>
          Medium (9 by 9)
        </option>
        <option value='16'>
          Large (16 by 16)
        </option>
      </select>

      <button onClick={handleCreateGrid}>
        Generate Sudoku
      </button>

      <Grid grid={grid} />

      <button onClick={handleStartGrid}>
        Start Sudoku
      </button>
    </div>
  );
}