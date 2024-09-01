import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Index from "./experience/Index";

function App() {
  return (
    <section className="h-screen">
      <Canvas
        camera={{
          position: [0, 0, 5],
          fov: 35,
          near: 0.1,
          far: 1000,
        }}
      >
        <OrbitControls />
        <Index />
      </Canvas>
    </section>
  );
}

export default App;
