import { Environment, Float, Scroll, ScrollControls } from "@react-three/drei"
import { Bird } from "./components/Bird"
import { Seagull } from "./components/Seagull"
import HtmlContent from "./components/HtmlContent"

function App() {
  return (
    <>
      <Environment preset="sunset" />
      {/* <ambientLight /> */}

      <ScrollControls pages={3} damping={0.2}>
        <Scroll style={{ minHeight: "100vh" }}>
          <Float speed={2} rotationIntensity={6} floatIntensity={0.2} floatingRange={[1, 1]}>
            <Bird position={[1.5, -1.5, 0]} scale={1.5} />
            <Seagull rotation={[0, 0.5, 0]} position={[-2.5, -0.5, 0]} scale={1.5} />
          </Float>
        </Scroll>

        <Scroll html style={{ width: "100%" }}>
          <HtmlContent />
        </Scroll>
      </ScrollControls>
    </>
  )
}

export default App
