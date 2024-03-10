import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";

function App() {
  return (
    <Canvas shadows camera={{ position: [0, 2, 5] }}>
      <color attach="background" args={["#658ef0"]} />
      <Experience />
    </Canvas>
  );
}

export default App;
