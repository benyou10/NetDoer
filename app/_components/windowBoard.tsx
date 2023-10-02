import { PresentationControls, SpotLight } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import { Board } from './board'

const WindowBoard = () => {
  return (
    <div>



<Canvas  className={` rounded-2xl   dark `}   camera={{ position: [0, 0, 12], fov: window.innerWidth < 600 ? 100 :90  }} >

    <SpotLight
  color={ '#134775' }
  intensity={1000.3 }
  distance={75}
  angle={0.28}
  decay={0.88}
  penumbra={0.4}
  position={[11, 15, 1]}
  castShadow={true}
/> 
            <ambientLight/>
            <group rotation={[0, 0.5, 0]}  position-y={-3}  >
            <PresentationControls>
  <Board/>
  </PresentationControls>
  </group>
</Canvas>


    </div>
  )
}

export default WindowBoard