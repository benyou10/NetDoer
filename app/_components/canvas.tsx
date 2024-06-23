'use client'

import { AdaptiveDpr, BakeShadows, Bvh, Environment, Float, Preload, Scroll, ScrollControls, Shadow, SpotLight, Stats, Text } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense, useState } from 'react'
import { Pc } from './pc'
import Content from './html'
import { Color } from 'three'
import { Board } from './board'

const CanvasPage = (  ) => {

const [theme,settheme]=useState(false)
  
  return (
    <div> 
        
    <Canvas  className={`  ${theme == false ? 'dark' : 'light'}`}   camera={{ position: [0.5, 0, 8.3], fov: window.innerWidth < 600 ? 100 :67  }}>
      
        <ScrollControls pages={9} damping={0.4} >
          <Scroll>
        <SpotLight
      color={theme == false ? '#134775' : '#ff75b7'}
      intensity={theme == false ? 1000.3 : 100.3}
      distance={75}
      angle={0.28}
      decay={0.88}
      penumbra={0.4}
      position={[11, 15, 1]}
      castShadow={true}
    /> 
                <ambientLight/>

      
         <Environment preset='city' resolution={1}  />
         <Suspense>
         <Bvh firstHitOnly>
         <Float
  speed={1} // Animation speed, defaults to 1
  rotationIntensity={.5} // XYZ rotation intensity, defaults to 1
  floatIntensity={.5} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
  floatingRange={[1, 2]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
>
<Text color="white" position={[-.1,0,0]} anchorY="middle">
software                           agency!
</Text>
<Pc/>
</Float>
</Bvh>
<BakeShadows  />
<Preload all />
<AdaptiveDpr pixelated />
         </Suspense>
</Scroll>
<Scroll html >


  <Content theme={theme} settheme={settheme}  />

</Scroll>
</ScrollControls>
      </Canvas>

 </div>
  )
}

export default CanvasPage
