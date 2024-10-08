/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.0 models.local/coffee-table.glb --types --transform -o src/components/models/CoffeeTableModel.tsx 
Files: models.local/coffee-table.glb [3.09MB] > C:\Users\liujr\webdev\room-scene\src\components\models\coffee-table-transformed.glb [219.2KB] (93%)
*/

import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Table__0: THREE.Mesh;
  };
  materials: {
    ["Scene_-_Root.001"]: THREE.MeshStandardMaterial;
  };
  //@ts-expect-error gltfjsx generated type
  animations: GLTFAction[];
};

export function CoffeeTableModel(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "coffee-table-transformed.glb",
  ) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Table__0.geometry}
        material={materials["Scene_-_Root.001"]}
        // scale={0.001}
        scale={[0.0014, 0.0021, 0.0014]}
        receiveShadow
        castShadow
      />
    </group>
  );
}

useGLTF.preload("coffee-table-transformed.glb");
