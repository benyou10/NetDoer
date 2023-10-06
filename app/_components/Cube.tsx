import { Canvas, useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'

const Cube = () => {
    
    return (
        <div>
            <Canvas camera={{ position: [0, 0, 8], fov: 70 }}>
                <mesh rotation={[0, 10, 0]} >
                    <boxGeometry attach="geometry" args={[4, 4, 4]} />
                    <meshNormalMaterial attach="material" />
                </mesh>
                <ambientLight />
             
            </Canvas>
        </div>
    )
}

export default Cube
