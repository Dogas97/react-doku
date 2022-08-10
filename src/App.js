import { useRef, useState } from "react";
import Grid from "./Grid";

export default function App() {
  const gridSizeRef = useRef(null)
  const [grid, setGrid] = useState(
    {
      size: '81',
      dificulty: null,
      values: null
    })

  function handleGrid() {
    var size = gridSizeRef.current.value

    setGrid(
      {
        size: size,
        dificulty: null,
        values: Array(Math.sqrt(size)).fill().map(() => Array(Math.sqrt(size)).fill(0))
      })
  }

  return (
    <>
      <select ref={gridSizeRef}>
        <option value='16'>
          Small (4 by 4)
        </option>
        <option value='81'>
          Normal (9 by 9)
        </option>
        <option value='256'>
          Big (16 by 16)
        </option>
      </select>

      <button onClick={handleGrid}>
        Generate Sudoku
      </button>

      <Grid grid={grid} />
    </>
  );
}