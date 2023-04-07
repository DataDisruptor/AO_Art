import * as THREE from 'three'
import React, { useEffect, useRef, useState } from 'react'
import { Stats, OrbitControls, Environment, useGLTF, useBounds, Bounds } from '@react-three/drei'

import { Canvas, useFrame, ThreeElements, useThree, useLoader, events, createEvents } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import LandingCanvas from './LandingCanvas'

// document.addEventListener('requestAnimationFrame', (e) => {
//   console.log('My Event listener Fired!');
// })

// const eD = new THREE.EventDispatcher();
//   eD.addEventListener('requestAnimationFrame', (e)=> {
//     console.log('add event listener!', e)
// });
// let instancesLoaded = 0;

function Box(props: ThreeElements['mesh']) {
  const mesh = useRef<THREE.Mesh>(null!)
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  useFrame((state, delta) => (mesh.current.rotation.x += delta))
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

function AutoCamera({speed, targetSubScene} : {speed : number, targetSubScene: string}){
  // speed /= 100;

  const initZLocation = 150;
  const target1_Location = new THREE.Vector3(-21, 6, 20);
  const target1_Rotation = new THREE.Vector3(0, -5, 0);

  const target2_Location = new THREE.Vector3(0, 10.4, -11);
  const target2_Rotation = new THREE.Vector3(-7.1, 0, 0);

  const target3_Location = new THREE.Vector3(9, 0.4,20);
  const target3_Rotation = new THREE.Vector3(0, 5, 0);

  const [targetLocation, setTargetLocation] = useState(new THREE.Vector3(0,0,initZLocation))
  const [targetRotation, setTargetRotation] = useState(new THREE.Vector3(0,0,0))
  const [initialized, setInitialized] = useState(false);

  const {camera} = useThree();

  if(!initialized){
    camera.position.set(0,0, initZLocation);
  }
  

  useEffect(()=>{
    if(!initialized){
      setInitialized(true);
    }
    
  },[camera])
  



  useEffect(() => {
    switch (targetSubScene) {
      case '': setTargetLocation(new THREE.Vector3(0,0,initZLocation)); setTargetRotation(new THREE.Vector3(0,0,0)); break;
      case 'programming': setTargetLocation(target1_Location); setTargetRotation(target1_Rotation); break;
      case '3d': setTargetLocation(target2_Location); setTargetRotation(target2_Rotation); break;
      case 'music': setTargetLocation(target3_Location); setTargetRotation(target3_Rotation); break;
    }
  }, [targetSubScene])
  

  

  function lerp(current : THREE.Vector3, target : THREE.Vector3, delta : number){
    let currentX : number = current.x;
    let currentY : number = current.y;
    let currentZ : number = current.z;
    const targetX : number = target.x;
    const targetY : number = target.y;
    const targetZ : number = target.z;

    const dist = (cur : number, tar : number) => {
      if(cur > tar){
        return cur - tar;
      } else if (cur < tar){
        return tar - cur;
      }
      else{
        return 0;
      }
    }

    const distX : number = dist(currentX, targetX);
    const distY : number = dist(currentY, targetY);
    const distZ : number = dist(currentZ, targetZ);

    if(currentX > targetX){
      currentX -= speed * distX * delta;
    } else if (currentX < targetX){
      currentX += speed * distX * delta;
    }
    if(currentY > targetY){
      currentY -= speed * distY * delta;
    } else if (currentY < targetY){
      currentY += speed * distY * delta;
    }
    if(currentZ > targetZ){
      currentZ -= speed * distZ * delta;
    } else if (currentZ < targetZ){
      currentZ += speed * distZ * delta;
    }


    return new THREE.Vector3(currentX, currentY, currentZ);
  }

  useFrame((state, delta, frame) => {
    // console.log(state, delta, frame)
    const currentRotation = new THREE.Vector3(camera.rotation.x, camera.rotation.y, camera.rotation.z);
    
    const newLocation = lerp(camera.position, targetLocation, delta);
    const newRotation = lerp(currentRotation, targetRotation, delta);

    camera.position.set(newLocation.x, newLocation.y, newLocation.z);
    camera.rotation.set(newRotation.x, newRotation.y, newRotation.z);
  })

  return <perspectiveCamera/>
}

export type Asset = {
  url: string;
  position: number[] | any;
  rotation: number[] | any;
  scale: number[] | any;
  renderStartCallback : (e : any ) => void;
}

const Model3D = ({ url, position = [0, 0, 0], rotation = [0,0,0], scale = [1, 1, 1], renderStartCallback } : Asset) => {
  const gltf : any = useLoader(GLTFLoader, url);
  const [modelReady, setModelReady] = useState(false);
  const [loaded, setLoaded] = useState(false);
  let isLoaded = false;
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    //Specific Emission
    // if(gltf?.materials?.MetalHeart?.emissiveIntensity){
    //   gltf.materials.MetalHeart.emissive = {isEmissive: true, r: 0, g: 0.5, b: 1}
    //   gltf.materials.MetalHeart.emissiveIntensity = 3;
    // }
    // if(gltf?.materials?.Guns?.emissiveIntensity){
    //   gltf.materials.Guns.emissive = {isEmissive: true, r: 1, g: 0, b: 0}
    //   gltf.materials.Guns.emissiveIntensity = 3;
    // }

    //Global Emission
    if(gltf?.materials){
      for (let mat in gltf.materials){
        for(let shader in gltf.materials[mat]){
          if(shader === 'emissiveIntensity'){
            gltf.materials[mat][shader] = 3;
          }
        }
      }
      setModelReady(true);
      // ++instancesLoaded;
      // if(instancesLoaded === 3){
      //   console.log('Should now be loaded.............')
      // }
      console.log(gltf)
    }
  }, [gltf])

  useEffect(()=> {
    setIsMounted(true);
  }, [])

  useEffect(()=>{
    console.log('Model is Ready?', modelReady);
    if(modelReady && loaded && isMounted){
      renderStartCallback({});
    }
  },[modelReady, loaded, isMounted])

  //Hook to animation thread - if mesh needs per frame update
  useFrame(({ clock }) => {
    //meshRef.current.rotation.y = clock.getElapsedTime() / 2;  //example
    
  });

  const fired = (e : any) => {
    console.log(e);
  }
  //JSX
  return (
    <mesh position={position} rotation={rotation} scale={scale} castShadow={true} receiveShadow={true} onUpdate={(e)=> {setLoaded((p) => true)}}>
      <primitive object={gltf.scene} />
    </mesh>
  );
};


//https://cdn.jsdelivr.net/gh/Sean-Bradley/React-Three-Fiber-Boilerplate@environment/public/img/venice_sunset_1k.hdr
//HDR_Free_City_Night_Lights_Ref.hdr
//carpentry_shop_02_1k.hdr
export default function Canvas3D({targetSubScene, renderStartCallback} : {targetSubScene : string, renderStartCallback : (e : any) => void}) {

  const canvasRef : any = useRef();
  const [loaded, setLoaded] = useState(false);

  const fired = (e : any) => {
    console.log('AtCanvas', e);
    setLoaded(true);
  }

  return (
    <>
    {!loaded && <LandingCanvas targetSubScene='' />}
    <Canvas ref={canvasRef} hidden={false} style={{ width: '100%', height: '100%', display: 'grid', position: 'absolute', zIndex: -1, minHeight: '95vh'}}>
      <Environment 
        files="./HDR_Free_City_Night_Lights_Ref.hdr" 
        background={true}
        blur={0.5}
      />
      <ambientLight/>
      <pointLight position={[10, 10, 10]} />
      <AutoCamera speed={5} targetSubScene={targetSubScene}/>
      {/* <mesh position={[0,-1,0]}>
        <boxGeometry args={[45,1,60]} />
        <meshLambertMaterial color={'#111116'}/>
      </mesh> */}
      <Model3D url='/floor.glb' position={[0,-1.87, 0]} rotation={[0,0,0]} scale={[1,1,1]} renderStartCallback={(e) => {}}/>
      {/*3d Assets */}
      <Model3D url='/3dCode_01.glb' position={[-20,-0.5,20]} rotation={[0,0,0]} scale={[1,1,1]} renderStartCallback={(e) => {}}/>
      <Model3D url='/robot_00.glb' position={[0,-0.53,-15]} rotation={[0,0,0]} scale={[1,1,1]} renderStartCallback={(e) => {}}/>
      <Model3D url='/piano.glb' position={[10,-0.56,20]} rotation={[0,3,0]} scale={[0.3,0.3,0.3]} renderStartCallback={(e) => {fired(e); renderStartCallback(e)}}/>
      {/* <axesHelper/> */}
      
    </Canvas>
    
    </>
    
  )
}
