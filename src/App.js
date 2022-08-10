import { useState } from "react";
import Dogas from "./Dogas"

function App() {
  const [DogasList, setDogasList] = useState([1, 2, 3, 4, 5])

  return (
    <>
      <Dogas DogasList={DogasList} />
    </>
  );
}

export default App;