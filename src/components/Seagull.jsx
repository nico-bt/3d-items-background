/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 seagull.glb --transform
Author: Dayvable (https://sketchfab.com/Dayvable)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/seagull-dc42ffc81c86480e9e7f7752fa134174
Title: Seagull
*/

import { useEffect, useRef } from "react"
import { useGLTF, useAnimations } from "@react-three/drei"

export function Seagull(props) {
  const groupRef = useRef()
  const { nodes, materials, animations } = useGLTF("/seagull-transformed.glb")
  const { actions } = useAnimations(animations, groupRef)

  // console.log(actions)

  useEffect(() => {
    // actions.Object_0.timeScale = 0.15
    setTimeout(() => {
      actions["ArmatureAction.006"].timeScale = 1.8
      actions["ArmatureAction.006"].play()
    }, 1500)
  })

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <primitive object={nodes.GLTF_created_0_rootJoint} />
        <skinnedMesh
          name="Object_7"
          geometry={nodes.Object_7.geometry}
          material={materials.Material}
          skeleton={nodes.Object_7.skeleton}
          position={[0.329, 0.044, 0]}
          rotation={[-0.013, 0, -0.005]}
          scale={0.127}
        />
      </group>
    </group>
  )
}

useGLTF.preload("/seagull-transformed.glb")
