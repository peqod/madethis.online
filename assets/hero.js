import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const hero = document.querySelector("[data-hero-scene]");
const stage = hero?.querySelector("[data-hero-model]");

if (hero && stage) {
  const darkMode = window.matchMedia("(prefers-color-scheme: dark)");
  const scene = new THREE.Scene();
  const frustumHeight = 1;
  const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
  const renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: false,
    powerPreference: "high-performance",
  });

  camera.position.set(0, 0, 1);
  renderer.setClearColor(0x000000, 0);
  renderer.setClearAlpha(0);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 4));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.domElement.style.background = "transparent";
  stage.append(renderer.domElement);

  const composition = new THREE.Group();
  const outerSpinner = new THREE.Group();
  const innerSpinner = new THREE.Group();
  composition.add(outerSpinner, innerSpinner);
  scene.add(composition);

  let model = null;
  let material = null;

  function accentColor() {
    return getComputedStyle(hero).getPropertyValue("--accent").trim() || "#d94329";
  }

  function updateMaterialColor() {
    if (!material) return;
    material.emissive.set(accentColor());
    material.needsUpdate = true;
    render();
  }

  function resize() {
    const { width, height } = stage.getBoundingClientRect();
    if (!width || !height) return;

    const aspect = width / height;
    const halfHeight = frustumHeight / 2;
    const halfWidth = halfHeight * aspect;
    camera.left = -halfWidth;
    camera.right = halfWidth;
    camera.top = halfHeight;
    camera.bottom = -halfHeight;
    camera.updateProjectionMatrix();
    composition.position.x = frustumHeight * aspect * 0.25;
    renderer.setSize(width, height, false);
    render();
  }

  function render() {
    renderer.render(scene, camera);
  }

  function animate(time) {
    if (!model) return;

    const rotation = (time / 1000) * Math.PI * 0.2;
    outerSpinner.rotation.x = -rotation/1.38;
    outerSpinner.rotation.y = rotation/1.62;
    innerSpinner.rotation.y = rotation;
    innerSpinner.rotation.x = rotation;
    render();
  }

  new ResizeObserver(resize).observe(stage);
  darkMode.addEventListener("change", updateMaterialColor);
  new MutationObserver(updateMaterialColor)
    .observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

  const loader = new GLTFLoader();
  loader.load(
    stage.dataset.heroModel,
    (gltf) => {
      material = new THREE.MeshStandardMaterial({
        color: 0x000000,
        emissive: new THREE.Color(accentColor()),
        emissiveIntensity: 1,
        flatShading: true,
        wireframe: false,
        transparent: false,
        opacity: 1,
      });

      model = gltf.scene;
      model.traverse((child) => {
        if (child.isMesh) child.material = material;
      });

      const bounds = new THREE.Box3().setFromObject(model);
      const center = bounds.getCenter(new THREE.Vector3());
      const sphere = bounds.getBoundingSphere(new THREE.Sphere());

      model.position.sub(center);
      model.scale.setScalar(1 / sphere.radius);
      const smallerModel = model.clone(true);
      smallerModel.scale.multiplyScalar(0.8);
      outerSpinner.add(model);
      innerSpinner.add(smallerModel);

      resize();
      renderer.setAnimationLoop(animate);
      stage.classList.add("is-ready");
    },
    undefined,
    (error) => {
      console.error("Could not load the homepage geometry.", error);
      stage.remove();
    },
  );
}
