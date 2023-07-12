import { Environment, Float, Scroll, ScrollControls } from "@react-three/drei"
import { Bird } from "./components/Bird"
import { Seagull } from "./components/Seagull"

function App() {
  return (
    <>
      <Environment preset="sunset" />
      {/* <ambientLight /> */}

      <ScrollControls pages={3} damping={0.2}>
        <Scroll style={{ height: "100vh" }}>
          <Float speed={2} rotationIntensity={6} floatIntensity={0.2} floatingRange={[1, 1]}>
            <Bird position={[1.5, -1.5, 0]} scale={1.5} />
            <Seagull rotation={[0, 0.5, 0]} position={[-2.5, -0.5, 0]} scale={1.5} />
          </Float>
        </Scroll>

        <Scroll html style={{ width: "100%" }}>
          <>
            <section>
              <h1>Section 1</h1>
            </section>
            <section>
              <h1>Section 2</h1>
            </section>
            <section>
              <h1>Section 3</h1>
            </section>
          </>
        </Scroll>
      </ScrollControls>
    </>
  )
}

export default App
