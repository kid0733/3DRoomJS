import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Scroll, ScrollControls } from "@react-three/drei";
import { Interface } from "./components/Interface";
import { ScrollManager } from "./components/ScrollManager";
import { useState, useEffect } from "react";
import { Menu } from "./components/Menu";
import { MotionConfig } from "framer-motion";
import { Leva } from "leva";
import { Cursor } from "./components/Cursor";
import { LoadingScreen } from "./components/LoadingScreen";


function App() {
  const [section,setSection]=useState(0)
  const [menuOpened, setMenuOpened] = useState(false);
  const [started, setStarted] = useState(false);
  const [fov, setFov] = useState(window.innerWidth < 768 ? 75 : 42);
  useEffect(() => {
    const handleResize = () => {
      console.log("Window resized");
      setFov(window.innerWidth < 768 ? 75 : 42);
    };
  
    window.addEventListener("resize", handleResize);
  
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  useEffect(() => {
    setMenuOpened(false)
  }, [section])
  
  return (
    <>
    <LoadingScreen started={started} setStarted={setStarted}/>
    <MotionConfig transition={{
      type:"spring",
      mass:5,
      stiffness:500,
      damping:50,
      restDelta:0.001,
    }}>
        <Canvas shadows camera={{ position: [0, 3, 10], fov: fov }}>
          <color attach="background" args={["#658ef0"]} />
          <ScrollControls pages={4} damping={0.1}>
            <ScrollManager section={section} onSectionChange={setSection}/>
            <Scroll>
              <Experience section={section} menuOpened={menuOpened}/>  
            </Scroll>
            <Scroll html>
              <Interface setSection={setSection}/>

            </Scroll>
          </ScrollControls>
        </Canvas>
        <Menu onSectionChange={setSection} menuOpened={menuOpened} setMenuOpened={setMenuOpened}/>
        <Cursor />
      </MotionConfig>
      <Leva hidden/>
    </>
  );
}

export default App;
