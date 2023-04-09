import * as THREE from 'three'
import React, { Suspense, useEffect, useRef, useState } from 'react'
import { Stats, OrbitControls, Environment, useGLTF, useBounds, Bounds, Gltf, Box } from '@react-three/drei'
import { Canvas, useFrame, ThreeElements, useThree, useLoader, events, createEvents, ObjectMap } from '@react-three/fiber'
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'


function Model ({ url, position = [0, 0, 0], rotation = [0,0,0], scale = [1, 1, 1]} : any)  {
    const gltf : any   = useLoader(GLTFLoader, url, (loader) => {
        const dracoLoader = new DRACOLoader();
        console.log('dracoLoader',dracoLoader);
        dracoLoader.setDecoderPath('/draco/');
        loader.setDRACOLoader(dracoLoader);
    });

    // const loader = new GLTFLoader();
    // const dracoLoader = new DRACOLoader();
    // dracoLoader.setDecoderPath('/draco/gltf');
    // loader.setDRACOLoader(dracoLoader);
    // let gltf : any = Gltf;
    // loader.load(url, (d)=>{gltf = d})
    useEffect(()=> {console.log('GLTF:',gltf)}, [gltf])
  
    //Hook to animation thread - if mesh needs per frame update
    useFrame(({ clock }) => {
      //meshRef.current.rotation.y = clock.getElapsedTime() / 2;  //example
      
    });
  
    //JSX
    return (
      <mesh position={position} rotation={rotation} scale={scale} frustumCulled={true}>
        <primitive  object={gltf.scene}/>
      </mesh> 
      
    );
  };

  function DMesh({ url, position = [0, 0, 0], rotation = [0,0,0], scale = [1, 1, 1]} : any){
    return(
      <Suspense fallback={null}>
        <Model url={url} position={position} rotation={rotation} scale={scale}/>
      </Suspense>
    )
  }
  


  export default DMesh;