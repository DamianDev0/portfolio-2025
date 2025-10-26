import * as THREE from "three";
import { DRACOLoader, GLTF, GLTFLoader } from "three-stdlib";
import { setCharTimeline, setAllTimeline } from "../../utils/GsapScroll";
import { decryptFile } from "./decrypt";

const setCharacter = (
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  camera: THREE.PerspectiveCamera
) => {
  const loader = new GLTFLoader();
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath("/draco/");
  loader.setDRACOLoader(dracoLoader);

  const loadCharacter = (): Promise<GLTF | null> =>
    new Promise((resolve, reject) => {
      decryptFile("/models/character.enc", "Character3D#@")
        .then((encryptedBlob) => {
          const blobUrl = URL.createObjectURL(new Blob([encryptedBlob]));

          loader.load(
            blobUrl,
            async (gltf) => {
              const character = gltf.scene;
              scene.add(character);
              await renderer.compileAsync(character, camera, scene);

              character.traverse((child) => {
                if (!(child instanceof THREE.Mesh)) return;

                const mesh = child as THREE.Mesh;
                mesh.castShadow = true;
                mesh.receiveShadow = true;
                mesh.frustumCulled = true;

                const name = mesh.name.toLowerCase();
                const parentName = mesh.parent?.name ?? "";

                if (parentName === "metarig002") {
                  switch (name) {
                    case "eyebrow":
                      mesh.material = new THREE.MeshPhysicalMaterial({
                        color: "#000000",
                        roughness: 0.1,
                        metalness: 0,
                      });
                      break;

                    case "bodyshirt":
                      mesh.material = new THREE.MeshStandardMaterial({
                        color: "#000",
                        roughness: 0.6,
                        metalness: 0.05,
                      });
                      break;
                    case "pant":
                      mesh.material = new THREE.MeshStandardMaterial({
                        color: "#1e1e1e",
                        roughness: 0.7,
                        metalness: 0.2,
                      });
                      break;
                    case "shoe":
                      mesh.material = new THREE.MeshStandardMaterial({
                        color: "#111111",
                        roughness: 0.85,
                        metalness: 0.05,
                      });
                      break;
                    case "eyes001":
                      break;
                    default:
                      mesh.material = new THREE.MeshStandardMaterial({
                        color: "#c58a73",
                        roughness: 0.45,
                        metalness: 0.05,
                      });
                  }
                } else if (parentName === "spine006" && name === "hair") {
                  mesh.material = new THREE.MeshStandardMaterial({
                    color: "#0a0a0a",
                    roughness: 0.35,
                    metalness: 0.1,
                    
                  });
                } else if (parentName === "Keyboard" && name.includes("keys")) {
                  const blackKeyIds = [
                    "019",
                    "020",
                    "021",
                    "022",
                    "023",
                    "024",
                    "025",
                    "026",
                    "027",
                    "028",
                    "029",
                    "030",
                    "031",
                    "032",
                    "033",
                    "034",
                  ];
                  const isBlackKey = blackKeyIds.some((id) =>
                    mesh.name.includes(id)
                  );
                  mesh.material = new THREE.MeshPhysicalMaterial({
                    color: isBlackKey ? "#000000" : "#fff6ed",
                    roughness: 0.5,
                    metalness: 0.05,
                  });
                } else if (name.includes("chair")) {
                  mesh.material = new THREE.MeshStandardMaterial({
                    color: "#8B4513",
                    roughness: 0.8,
                    metalness: 0.1,
                  });
                }
              });

              const footR = character.getObjectByName("footR");
              const footL = character.getObjectByName("footL");
              if (footR) footR.position.y = 3.36;
              if (footL) footL.position.y = 3.36;

              resolve(gltf);
              setCharTimeline(character, camera);
              setAllTimeline();
              dracoLoader.dispose();
            },
            undefined,
            (error) => reject(new Error(`Failed to load model: ${error}`))
          );
        })
        .catch((err) => {
          reject(new Error(`Failed to decrypt model: ${err}`));
        });
    });

  return { loadCharacter };
};

export default setCharacter;
