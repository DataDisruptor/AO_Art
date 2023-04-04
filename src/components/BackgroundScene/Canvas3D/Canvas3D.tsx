import * as THREE from 'three'
import React, { useEffect, useRef, useState } from 'react'
import { Stats, OrbitControls, Environment, useGLTF } from '@react-three/drei'

import { Canvas, useFrame, ThreeElements, useThree, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

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
  const target1_Location = new THREE.Vector3(1, 0, 1);
  const target1_Rotation = new THREE.Vector3(0, 2, 0);

  const target2_Location = new THREE.Vector3(0, 1, 5);
  const target2_Rotation = new THREE.Vector3(0, 1, 0.1);

  const target3_Location = new THREE.Vector3(-1, 0, -1);
  const target3_Rotation = new THREE.Vector3(0, -2, 0);

  const [targetLocation, setTargetLocation] = useState(new THREE.Vector3(0,0,0))
  const [targetRotation, setTargetRotation] = useState(new THREE.Vector3(0,0,0))

  useEffect(() => {
    switch (targetSubScene) {
      case '': setTargetLocation(new THREE.Vector3(0,0,0)); setTargetRotation(new THREE.Vector3(0,0,0)); break;
      case 'programming': setTargetLocation(target1_Location); setTargetRotation(target1_Rotation); break;
      case '3d': setTargetLocation(target2_Location); setTargetRotation(target2_Rotation); break;
      case 'music': setTargetLocation(target3_Location); setTargetRotation(target3_Rotation); break;
    }
  }, [targetSubScene])
  speed /= 100;

  const {camera} = useThree();

  function lerp(current : THREE.Vector3, target : THREE.Vector3){
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
    const distY : number= dist(currentY, targetY);
    const distZ : number= dist(currentZ, targetZ);

    if(currentX > targetX){
      currentX -= speed * distX;
    } else if (currentX < targetX){
      currentX += speed * distX;
    }
    if(currentY > targetY){
      currentY -= speed * distY;
    } else if (currentY < targetY){
      currentY += speed * distY;
    }
    if(currentZ > targetZ){
      currentZ -= speed * distZ;
    } else if (currentZ < targetZ){
      currentZ += speed * distZ;
    }


    return new THREE.Vector3(currentX, currentY, currentZ);
  }

  useEffect(()=>{
    //init camera position
    camera.position.set(0,0,-10)
  },[])

  useFrame((state, delta, frame) => {
    const currentRotation = new THREE.Vector3(camera.rotation.x, camera.rotation.y, camera.rotation.z);
    
    const newLocation = lerp(camera.position, targetLocation);
    const newRotation = lerp(currentRotation, targetRotation);
    camera.position.set(newLocation.x, newLocation.y, newLocation.z);
    camera.rotation.set(newRotation.x, newRotation.y, newRotation.z);

    console.log(camera.position);
  })

  return <perspectiveCamera/>
}

const Model3D = ({ url, position = [0, 0, 0], scale = [1, 1, 1] } : any) => {
  const gltf : any = useLoader(GLTFLoader, url);
  const meshRef : any = useRef();

  //Hook to animation thread - if mesh needs per frame update
  useFrame(({ clock }) => {
    //meshRef.current.rotation.y = clock.getElapsedTime() / 2;  //example
  });

  //JSX
  return (
    <mesh position={position} scale={scale} ref={meshRef}>
      <primitive object={gltf.scene} />
    </mesh>
  );
};

export default function Canvas3D({targetSubScene} : {targetSubScene : string}) {
  return (
    <Canvas hidden={true} style={{ width: '100%', height: '100%', display: 'grid', placeItems: 'center', position: 'absolute', zIndex: -1, minHeight: '95vh'}}>{/* style={{ width: '100%', height: '95vh', display: 'grid', placeItems: 'center' }} */}
      <Environment
        files="https://cdn.jsdelivr.net/gh/Sean-Bradley/React-Three-Fiber-Boilerplate@environment/public/img/venice_sunset_1k.hdr"
        background
        blur={0.5}
      />
      <ambientLight/>
      <pointLight position={[10, 10, 10]} />
      <AutoCamera speed={0.3} targetSubScene={targetSubScene}/>
      <mesh position={[0,-1,0]}>
        <boxGeometry args={[15,1,20]} />
        <meshLambertMaterial color={'#ffffff'}/>
      </mesh>
      {/*3d Assets */}
      <mesh position={[-3,0,0]}>
        <boxGeometry args={[1,1,1]} />
        <meshLambertMaterial color={'#aaafff'}/>
      </mesh>
      <mesh position={[0,0,-3]}>
        <boxGeometry args={[1,1,1]} />
        <meshLambertMaterial color={'#aaafff'}/>
      </mesh>
      <mesh position={[3,0,0]}>
        <boxGeometry args={[1,1,1]} />
        <meshLambertMaterial color={'#aaafff'}/>
      </mesh>
    </Canvas>
  )
}
