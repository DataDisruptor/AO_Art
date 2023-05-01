import * as THREE from 'three'
import React, { ExoticComponent, MutableRefObject, RefAttributes, useEffect, useRef, useState } from 'react'
import { Stats, OrbitControls, Environment, useGLTF, useBounds, Bounds, OrbitControlsProps } from '@react-three/drei'

import { Canvas, useFrame, ThreeElements, useThree, useLoader, events, createEvents, Object3DNode, Vector3 } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import DMesh from '../Objects/DracoMesh/DMesh'
import Mesh3D from '../Objects/Mesh3D/Mesh3D'


export default function ArchCanvas({hidden, building = ''} : {hidden: boolean, building: string}) {

  const buildingData_Library = {
    meshRef: '/theLibrary_t.glb',
    position: [],
    rotation: [0,0,0],
    scale: [0.1,0.1,0.1]
  }
  const buildingData_Factory = {
    meshRef: '/factory_t.glb',
    position: [],
    rotation: [0,0,0],
    scale: [0.1,0.1,0.1]
  }

  const [buildingData, setBuildingData] = useState({
    meshRef: '',
    position: [0,0,0],
    rotation: [0,0,0],
    scale: [1,1,1]
  })

  const [buildingReady, setBuildingReady] = useState(false);

  function onBuildingLoaded () {
    setBuildingReady(true);
  }

  const {meshRef, position, rotation, scale} = buildingData;
  
  useEffect(()=> {
    switch  (building) {
      case ('library'): setBuildingData({...buildingData_Library}); break;
      case ('factory'): setBuildingData(buildingData_Factory); break;
    }
    return () => {
      
    }
  }, [building])
    return(
    <Canvas className='arch-canvas' hidden={hidden} style={{backgroundColor:'black' ,border:'20px solid white', width: '70vw', height: '70vh', position: 'absolute', zIndex: 2, display: 'flex'}}>{/* style={{ width: '90%', height: '40vh', display: 'flex', margin: '3%'}} */}
      <Environment 
        files="./satara_night_no_lamps_1k.hdr" 
        background={true}
        blur={0.35}
        
      />
      
      <OrbitControls />
      {/* <ambientLight intensity={90000}/> */}
      <pointLight position={[100, 120, -50]} intensity={1} color={'#200000'}/>
      <pointLight position={[0, 120, 30]} intensity={5} color={'#6a0000'}/>
      {!buildingReady && <Mesh3D url={'/loading.glb'} position={[0,-2,0]} rotation={[0,-1.5,0]} scale={[2,2,2]} animated={true}/>}
      {building === 'library' && <DMesh url={'/theLibrary_t.glb'} onLoad={onBuildingLoaded} position={[-0.05,-8.2,-88]} rotation={[0,-4.71,0]} scale={[0.1,0.1,0.1]} />}
      {building === 'factory' && <DMesh url={'/theFactory_t.glb'} onLoad={onBuildingLoaded} position={[-2.15,-7.2,31]} rotation={[0,1.35,0]} scale={[0.1,0.1,0.1]} />}
    </Canvas>
  ) 
}
