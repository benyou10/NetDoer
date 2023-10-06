'use client'
import Link from 'next/link';
import React, { useRef, useState } from 'react'
import Cube from './Cube';
import { Canvas, useFrame } from '@react-three/fiber';
import { PresentationControls } from '@react-three/drei';

const Authontication = (props) => {

    const [showpass, setShowPass] = useState(false)
const {children}=props;
  return (
    <>
   <>
  {/* component */}
  <div className="bg-white dark:bg-gray-900">
    <div className="flex justify-center h-screen">
      <div
        className="hidden bg-cover lg:block lg:w-2/3"
       
      >
       <div>
            <Canvas camera={{ position: [0, 0, 8], fov: 70 }}>
              <PresentationControls>
                <mesh  rotation={[4, 12, 0]} >
                    <boxGeometry attach="geometry" args={[4, 4, 4]} />
                    <meshNormalMaterial attach="material"  />
                </mesh>
                </PresentationControls>
                <ambientLight />
             
            </Canvas>
        </div>
      </div>
      <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
        <div className="flex-1">
          {children}
        </div>
      </div>
    </div>
  </div>
</>

</>
  )
}

export default Authontication