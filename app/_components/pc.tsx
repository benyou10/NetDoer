/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 public/3dmodels/ibm_3178.glb -t 
Author: maxdragonn (https://sketchfab.com/maxdragon)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/ibm-3178-891ae8149d8547a5971381237d13e2e6
Title: IBM 3178
*/
'use client'
import * as THREE from 'three'
import React, { useRef } from 'react'
import { meshBounds, useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    ibm_3178_0: THREE.Mesh
    ibm_3178_1: THREE.Mesh
    ibm_3178_2: THREE.Mesh
  }
  materials: {
    ibm_3178: THREE.MeshStandardMaterial
    ibm_3178_keyboard: THREE.MeshStandardMaterial
    display: THREE.MeshStandardMaterial
  }
}

type ContextType = Record<string, React.ForwardRefExoticComponent<JSX.IntrinsicElements['mesh']>>

export function Pc(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/3dmodels/ibm_3178.glb') as GLTFResult
  return (
    <group {...props} dispose={null} position-y={-0.5} scale={0.2}>
      <group rotation={[-Math.PI / 2.5, -0.1, -0.6]}>
        <mesh  raycast={meshBounds} geometry={nodes.ibm_3178_0.geometry} material={materials.ibm_3178} />
        <mesh  raycast={meshBounds} geometry={nodes.ibm_3178_1.geometry} material={materials.ibm_3178_keyboard} />
        <mesh  raycast={meshBounds} geometry={nodes.ibm_3178_2.geometry} material={materials.display} />
      </group>
    </group>
  )
}

useGLTF.preload('/3dmodels/ibm_3178.glb')
