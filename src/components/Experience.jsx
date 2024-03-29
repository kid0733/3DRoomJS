import {
  Float,
  MeshDistortMaterial,
  MeshWobbleMaterial,
  useScroll,
} from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";
import { motion } from "framer-motion-3d";
import { useEffect, useRef, useState } from "react";
import { framerMotionConfig } from "../config";
import { Avatar } from "./Avatar";
import { Office } from "./Office";
import * as THREE from "three";
import { Projects } from "./Projects";
import { Background } from "./Background";




export const Experience = (props) => {
  const { menuOpened } = props;
  const { viewport } = useThree();
  const data=useScroll();

  const [section, setSection]=useState(0)


  const cameraPositionX = useMotionValue();
  // const cameraLookAtX = useMotionValue();

  useEffect(() => {
    animate(cameraPositionX, menuOpened ? -5 : 0, {
      ...framerMotionConfig,
    });
    // animate(cameraLookAtX, menuOpened ? 5 : 0, {
    //   ...framerMotionConfig,
    // });
  }, [menuOpened]);

  const characterContainerAboutRef = useRef();

  const [characterAnimation, setCharacterAnimation] = useState("Typing");
  useEffect(() => {
    setCharacterAnimation("Falling")
    setTimeout(() => {
      setCharacterAnimation(section===0?"Typing":"Standing")
    }, 600)
  },[section])
  useFrame((state) => {
    let curSection=Math.floor(data.scroll.current * data.pages);
    if (curSection > 3) {
      curSection = 3;
    }

    

    if(curSection!==section){
      setSection(curSection)
    }



    state.camera.position.x = cameraPositionX.get();
    // state.camera.lookAt(0, 0, 0);

    // const position = new THREE.Vector3();
    // characterContainerAboutRef.current.getWorldPosition(position);
    // // console.log([position.x, position.y, position.z]);
    // const quaternion = new THREE.Quaternion();
    // characterContainerAboutRef.current.getWorldQuaternion(quaternion);
    // const euler = new THREE.Euler();
    // euler.setFromQuaternion(quaternion, "XYZ");
    // // console.log([euler.x,euler.y,euler.z]);
  });

  return (
    <>
      <Background />
      <motion.group 
        position={[1.9900249993622774, 0.07919999999999999, 2.5099750006377226]}
        rotation={[-1.7221121619763993, 0.14961266863604114, 2.2259639469392147]}
        scale={[0.6, 0.6, 0.6]}
        animate={""+section}
        transition={{
          duration:1,
        }}
        variants={{
          0:{
            scaleX: 0.6,
            scaleY: 0.6,
            scaleZ: 0.6
          },
          1:{
            y: -viewport.height + 1.2,
            x: 0.5,
            z: 7,
            rotateX:1.6,
            rotateY:3.1,
            rotateZ:3,
            scale:0.9
          },
          2:{
            x:-2,
            y: -viewport.height*2 + -2.2,
            z:0,
            rotateX:5.2,
            rotateY:0,
            rotateZ:1,
            scale:1
          },
          3:{
            y:-viewport.height*3 + 0,
            x:1,
            z:5,
            rotateX:-1.6,
            rotateY:0,
            rotateZ:0,
            scale:1.75
          }
        }}
        >
        <Avatar animation={characterAnimation} />

      </motion.group>

      {/*OFFICE*/}
      <ambientLight intensity={1} />
      <motion.group
        position={[1.5, 2, 3]}
        scale={[0.9, 0.9, 0.9]}
        rotation-y={-Math.PI / 4}
        animate={{
          y: section === 0 ? 0 : -1,
        }}
      >
        <Office section={section} />
        <group 
          ref={characterContainerAboutRef}
          name="CharacterSpot" 
          position={[0, 0.088, -0.770]} 
          rotation={[4.5,0,3]} 
          scale={0.68}>
          
        </group>
      </motion.group>

      {/* SKILLS */}
      <motion.group
        position={[0, -1.5, -10]}
        animate={{
          z: section === 1 ? 0 : -10,
          y: section === 1 ? -viewport.height : -1.5,
        }}
        
      >
        <directionalLight position={[-5, 3, 5]} intensity={0.4} />
        <Float>
          <mesh position={[-11, -3, -15]} scale={[5, 5, 5]}>
            <sphereGeometry />
            <MeshDistortMaterial
              opacity={0.8}
              transparent
              distort={0.9}
              speed={4}
              color={"white"}
            />
          </mesh>
        </Float>
        <Float>
          <mesh scale={[3, 3, 3]} position={[3, 1, -18]}>
            <sphereGeometry />
            <MeshDistortMaterial
              opacity={0.8}
              transparent
              distort={1}
              speed={5}
              color="white"
            />
          </mesh>
        </Float>
        <Float>
          <mesh scale={[1.4, 1.4, 1.4]} position={[11, 4, -20]}>
            <boxGeometry />
            <MeshWobbleMaterial
              opacity={0.8}
              transparent
              factor={1}
              speed={5}
              color={"white"}
            />
          </mesh>
        </Float>
        
      </motion.group>
      <Projects />
    </>
  );
};