/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.0 models.local/olivia_ceramic_bowl.glb --types --transform -o src/components/models/OliviaBowlModel.tsx 
Files: models.local/olivia_ceramic_bowl.glb [8.22MB] > C:\Users\liujr\webdev\room-scene\src\components\models\olivia_ceramic_bowl-transformed.glb [659.26KB] (92%)
Author: Digitales Marktarchiv (https://sketchfab.com/marktarchiv)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/olivia-ceramic-bowl-ef034598c0384090846361db2e77ebc3
Title: Olivia Ceramic Bowl
*/

import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { ForwardedRef, forwardRef } from "react";

type GLTFResult = GLTF & {
  nodes: {
    meshes0__0: THREE.Mesh;
  };
  materials: {
    meshes0__0: THREE.MeshStandardMaterial;
  };
  //@ts-expect-error gltfjsx generated
  animations: GLTFAction[];
};

export default forwardRef(function OliviaBowlModel(
  props: JSX.IntrinsicElements["group"],
  ref: ForwardedRef<THREE.Group>,
) {
  const { nodes, materials } = useGLTF(
    "olivia_ceramic_bowl-transformed.glb",
  ) as GLTFResult;
  return (
    <group ref={ref} {...props} dispose={null}>
      <mesh
        geometry={nodes.meshes0__0.geometry}
        material={materials.meshes0__0}
        position={[0, -0.05, -0.14]}
        rotation={[1, 0, 0]}
        scale={1}
        castShadow
      />
      {/* <axesHelper args={[3]}/> */}
    </group>
  );
});

useGLTF.preload("olivia_ceramic_bowl-transformed.glb");
