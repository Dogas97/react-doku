import { useEffect, useRef, useState } from "react";
import Grid from "./Grid";

function App() {
  const gridSizeRef = useRef(null)
  const [grid, setGrid] = useState({ grid: null, size: '9' })

  function handleGrid() {
    setGrid({ grid: null, size: gridSizeRef.current.value })
  }

  return (
    <>
      <select ref={gridSizeRef}>
        <option value="16">Small (4 by 4)</option>
        <option value="81">Normal (9 by 9)</option>
        <option value="256">Big (16 by 16)</option>
      </select>
      <button onClick={handleGrid}>
        Generate
      </button>

      <Grid grid={grid} />
    </>
  );
}

export default App;