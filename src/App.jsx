import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Scroll, ScrollControls } from "@react-three/drei";
import { Interface } from "./components/Interface";
import { ScrollManager } from "./components/ScrollManager";
import { useState } from "react";


function App() {
  const [section,setSection]=useState(0)



  return (
    <>
      <Canvas shadows camera={{ position: [0, 2, 5] }}>
        <color attach="background" args={["#658ef0"]} />
        <ScrollControls pages={4} damping={0.1}>
          <ScrollManager section={section} onSectionChange={setSection}/>
          <Experience />  
          <Scroll html>
            <Interface />

          </Scroll>
        </ScrollControls>
      </Canvas>
    </>
  );
}

export default App;
