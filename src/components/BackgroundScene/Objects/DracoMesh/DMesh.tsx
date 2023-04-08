import * as THREE from 'three'
import React, { useEffect, useRef, useState } from 'react'
import { Stats, OrbitControls, Environment, useGLTF, useBounds, Bounds } from '@react-three/drei'
import { Canvas, useFrame, ThreeElements, useThree, useLoader, events, createEvents } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'

export default function DMesh ({ url, position = [0, 0, 0], rotation = [0,0,0], scale = [1, 1, 1]} : any)  {
    const gltf : any = useLoader(GLTFLoader, url, loader => {
        const dracoLoader = new DRACOLoader();
        dracoLoader.setDecoderPath('/draco/gltf/');
        loader.setDRACOLoader(dracoLoader);
    });
    
  
    //Hook to animation thread - if mesh needs per frame update
    useFrame(({ clock }) => {
      //meshRef.current.rotation.y = clock.getElapsedTime() / 2;  //example
      
    });
  
    //JSX
    return (
      <mesh position={position} rotation={rotation} scale={scale} frustumCulled={true}>
        <primitive object={gltf.scene} />
      </mesh>
    );
  };