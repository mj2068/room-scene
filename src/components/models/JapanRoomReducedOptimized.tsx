/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.0 public/japan-room-decimate-tall-o.glb --types --transform -o src\components\models\JapanRoomReducedOptimized.tsx 
Files: public/japan-room-decimate-tall-o.glb [1.5MB] > C:\Users\liujr\webdev\room-scene\src\components\models\japan-room-decimate-tall-o-transformed.glb [1.3MB] (14%)
*/

import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    room: THREE.Mesh;
    Leaves_Mat1_0: THREE.Mesh;
    Pot_LP_Mat_0: THREE.Mesh;
    root_HP_1_Mat2_0: THREE.Mesh;
    PottedMonsteraPlantTurnedWoodPlanterWideWhite_PottedMonsteraPla: THREE.Mesh;
    Plane001: THREE.Mesh;
    Plane001_1: THREE.Mesh;
    painting_mountain: THREE.Mesh;
    painting_wide: THREE.Mesh;
    tatami: THREE.Mesh;
  };
  materials: {
    room: THREE.MeshStandardMaterial;
    ["Mat.1"]: THREE.MeshStandardMaterial;
    material: THREE.MeshStandardMaterial;
    ["Mat.2"]: THREE.MeshStandardMaterial;
    PottedMonsteraPlantTurnedWoodPlanterWideWhite: THREE.MeshStandardMaterial;
    ["lukisan.002"]: THREE.MeshStandardMaterial;
    ["base.002"]: THREE.MeshStandardMaterial;
    ["lukisan.001"]: THREE.MeshStandardMaterial;
    lukisan: THREE.MeshStandardMaterial;
    tatami: THREE.MeshStandardMaterial;
  };
  //@ts-expect-error gltfjsx generated type
  animations: GLTFAction[];
};

export function JapanRoomReducedOptimized(
  props: JSX.IntrinsicElements["group"],
) {
  const { nodes, materials } = useGLTF(
    "japan-room-decimate-tall-o-transformed.glb",
  ) as GLTFResult;

  materials.room.metalness = 0.5;
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.room.geometry}
        material={materials.room}
        scale={2.994}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.Leaves_Mat1_0.geometry}
        material={materials["Mat.1"]}
        position={[2.099, 1.318, -2.238]}
        scale={0.011}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.Pot_LP_Mat_0.geometry}
        material={materials.material}
        position={[2.047, 0.711, -2.183]}
        scale={0.011}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.root_HP_1_Mat2_0.geometry}
        material={materials["Mat.2"]}
        position={[2.048, 0.712, -2.18]}
        scale={0.011}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={
          nodes.PottedMonsteraPlantTurnedWoodPlanterWideWhite_PottedMonsteraPla
            .geometry
        }
        material={materials.PottedMonsteraPlantTurnedWoodPlanterWideWhite}
        position={[1.295, 0.044, -2.252]}
        rotation={[-Math.PI / 2, 0, -1.5]}
        scale={0.002}
        castShadow
        receiveShadow
      />
      <group
        position={[-2.794, 2.138, -1.959]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      >
        <mesh
          geometry={nodes.Plane001.geometry}
          material={materials["lukisan.002"]}
        />
        <mesh
          geometry={nodes.Plane001_1.geometry}
          material={materials["base.002"]}
          castShadow
          receiveShadow
        />
      </group>
      <mesh
        geometry={nodes.painting_mountain.geometry}
        material={materials["lukisan.001"]}
        position={[-2.783, 2.138, 1.843]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.painting_wide.geometry}
        material={materials.lukisan}
        position={[-2.785, 2.15, -0.015]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.805, 1, 1]}
      />
      <mesh
        geometry={nodes.tatami.geometry}
        material={materials.tatami}
        position={[0.028, 0.082, 0.056]}
        rotation={[-Math.PI, 0, 0]}
        scale={2.176}
        castShadow
        receiveShadow
      />
    </group>
  );
}

useGLTF.preload("japan-room-decimate-tall-o-transformed.glb");
