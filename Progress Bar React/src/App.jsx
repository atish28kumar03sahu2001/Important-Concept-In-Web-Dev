import { useState, useEffect } from "react";
import { ProgressBar } from "./Components/progressBar";
export const App = () => {
  const [value, setValue] = useState(0);
  useEffect(()=>{
    setInterval(()=>{
        setValue((val)=>val + 1)
    },50)
  },[])
  return (
    <>
      <h1>React Important Topics. Tricks & Tips</h1>
      <h1>Progress Bar</h1>
      <ProgressBar value={value} />
    </>
  );
}