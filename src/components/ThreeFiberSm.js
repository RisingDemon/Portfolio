
import * as THREE from "three";
import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Image,
  Environment,
  ScrollControls,
  useScroll,
  useTexture,
} from "@react-three/drei";
import { easing } from "maath";
import "./util";

export const ThreeFiberSm = () => (
  <Canvas camera={{ position: [0, 0, 100], fov: 15 }}>
    <ScrollControls style={{height:"50%", top:"168px"}} pages={4} infinite>
      <Rig rotation={[0, 0, 0]}>
        <Carousel />
      </Rig>
    </ScrollControls>
  </Canvas>
);

function Rig(props) {
  const ref = useRef();
  const scroll = useScroll();
  useFrame((state, delta) => {
    // rotate the cards
    ref.current.rotation.y = -scroll.offset * (Math.PI * 2); // Rotate contents
    state.events.update(); // Raycasts every frame rather than on pointer-move
    easing.damp3(
      state.camera.position,
      [-state.pointer.x * 0, state.pointer.y + 1, 10],
      0.3,
      delta
    ); // Move camera
    state.camera.lookAt(0, 0, 0); // Look at center
  });
  return <group ref={ref} {...props} />;
}

function Carousel({ radius = 1.2, count = 8 }) {  //redius: 1.4
  return Array.from({ length: count }, (_, i) => (
    <Card
      key={i}
      hoverKey={Math.floor(i % 5) + 1}
      url={`/img${Math.floor(i % 5) + 1}_.png`}
      // backImageUrl={`/imgBack.png`}
      backImageUrl={`/backImg${Math.floor(i % 5) + 1}_.jpg`}
      position={[
        Math.sin((i / count) * Math.PI * 2) * radius,
        0,
        Math.cos((i / count) * Math.PI * 2) * radius,
      ]}
      rotation={[0, Math.PI + (i / count) * Math.PI * 2, 0]}
    />
  ));
}

function Card({ url, backImageUrl, hoverKey, ...props }) {
  const groupRef = useRef();
  const [hovered, hover] = useState(false);
  const [hoveredDependent, changeOnHover] = useState(false);

  const positionBefore = props.rotation;
  console.log("positionBefore: ", positionBefore);

  const pointerOver = (e) => {
    e.stopPropagation();
    hover(true);
    changeOnHover(true);
  };

  const pointerOut = () => hover(false);
  if (hovered) {
    console.log("hovered out of useFrame", hovered);
    groupRef.current.rotation.y = positionBefore[1] + Math.PI;
  }
  if (hoveredDependent && !hovered) {
    // return card to original position
    // document.querySelectorAll(".MyCoolDiv").forEach((e) => e.remove());
    console.log("Not hovered");
    changeOnHover(false);
    groupRef.current.rotation.y = positionBefore[1];

    // changeOnHover(false);
  }

  useFrame((state, delta) => {
    // easing.damp3(groupRef.current.scale, hovered ? 1.15 : 1, 0.1, delta);
    easing.damp3(groupRef.current.scale, hovered ? 1.25 : 1, 0.1, delta);


    groupRef.current.children.forEach((child) => {
      if (child instanceof THREE.Mesh) {
        easing.damp(
          child.material,
          "radius", // Change 'opacity' to the property you want to animate
          hovered.current ? 0.25 : 0.1, // Target value based on condition
          0.2,
          delta
        );
      }
    });

    groupRef.current.children.forEach((child) => {
      if (child instanceof THREE.Mesh) {
        easing.damp(
          child.material,
          "zoom", // Change 'opacity' to the property you want to animate
          hovered ? 1 : 1.5, // Target value based on condition
          0.2,
          delta
        );
      }
    });

    // easing.damp(ref.current.material, "zoom", hovered ? 1 : 1.5, 0.2, delta);
    // on hover make the card darker
    // ref.current.material.color.setScalar(hovered ? 0.2 : 1);
    const arr = ["This is a test", "Test 2", "test3", "Test 4", "Test 5"];
  });
  return (
    <group
      ref={groupRef}
      // transparent
      {...props}
      onPointerOver={pointerOver}
      onPointerOut={pointerOut}
    >

      <Image
        transparent
        url={backImageUrl}
        side={THREE.FrontSide}
        onPointerOver={pointerOver}
        onPointerOut={pointerOut}
      >
        {
          hovered? <planeGeometry args={[0.8, 0.8, 15, 15]}/> : <bentPlaneGeometry args={[0.1, 0.8, 0.8, 20, 20]} />
        //   hovered? <planeGeometry args={[1, 1, 15, 15]}/> : <bentPlaneGeometry args={[0.1, 1, 1, 20, 20]} />
        
        }
        {/* <bentPlaneGeometry args={[0.1, 1, 1, 20, 20]} /> */}
        {/* <planeGeometry args={[1, 1, 20, 20]} /> */}

      </Image>
      <Image
        transparent
        url={url}
        side={THREE.BackSide}
        onPointerOver={pointerOver}
        onPointerOut={pointerOut}
      >
        {
          hovered? <planeGeometry args={[0.8, 0.8, 20, 20]}/> : <bentPlaneGeometry args={[0.1, 0.8, 0.8, 20, 20]} />
        //   hovered? <planeGeometry args={[1, 1, 15, 15]}/> : <bentPlaneGeometry args={[0.1, 1, 1, 20, 20]} />

        }
        {/* <bentPlaneGeometry args={[0.1, 1, 1, 20, 20]} /> */}
        {/* <planeGeometry args={[1, 1, 20, 20]} /> */}
      </Image>
    </group>
  );
}

