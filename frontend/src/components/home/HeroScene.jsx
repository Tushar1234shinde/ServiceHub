import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function HeroScene() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mountNode = mountRef.current;
    if (!mountNode) {
      return undefined;
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8));
    renderer.setClearColor(0x000000, 0);
    mountNode.appendChild(renderer.domElement);

    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    camera.position.set(0, 0, 8);

    const group = new THREE.Group();
    scene.add(group);

    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    const pointLight = new THREE.PointLight(0x5eead4, 10, 30, 2);
    pointLight.position.set(4, 4, 6);
    const rimLight = new THREE.PointLight(0x60a5fa, 8, 30, 2);
    rimLight.position.set(-5, -3, 5);
    scene.add(ambientLight, pointLight, rimLight);

    const coreGeometry = new THREE.IcosahedronGeometry(1.55, 1);
    const coreMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x9fe5e5,
      emissive: 0x0d8b8b,
      emissiveIntensity: 0.35,
      metalness: 0.2,
      roughness: 0.24,
      transparent: true,
      opacity: 0.82,
      wireframe: true
    });
    const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
    group.add(coreMesh);

    const shellGeometry = new THREE.TorusGeometry(2.4, 0.08, 16, 120);
    const shellMaterial = new THREE.MeshBasicMaterial({
      color: 0x60a5fa,
      transparent: true,
      opacity: 0.7
    });
    const shell = new THREE.Mesh(shellGeometry, shellMaterial);
    shell.rotation.x = Math.PI / 2.5;
    shell.rotation.y = Math.PI / 7;
    group.add(shell);

    const starCount = 140;
    const positions = new Float32Array(starCount * 3);
    for (let index = 0; index < starCount; index += 1) {
      const stride = index * 3;
      const radius = 2.8 + Math.random() * 2.2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[stride] = radius * Math.sin(phi) * Math.cos(theta);
      positions[stride + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[stride + 2] = radius * Math.cos(phi);
    }

    const starsGeometry = new THREE.BufferGeometry();
    starsGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const starsMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.06,
      transparent: true,
      opacity: 0.9
    });
    const stars = new THREE.Points(starsGeometry, starsMaterial);
    group.add(stars);

    const pointer = { x: 0, y: 0 };
    let frameId = 0;

    const resize = () => {
      const { clientWidth, clientHeight } = mountNode;
      if (!clientWidth || !clientHeight) {
        return;
      }
      renderer.setSize(clientWidth, clientHeight, false);
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
    };

    const onPointerMove = (event) => {
      const bounds = mountNode.getBoundingClientRect();
      pointer.x = ((event.clientX - bounds.left) / bounds.width) * 2 - 1;
      pointer.y = -(((event.clientY - bounds.top) / bounds.height) * 2 - 1);
    };

    const animate = () => {
      frameId = window.requestAnimationFrame(animate);

      if (!reduceMotion) {
        coreMesh.rotation.x += 0.0035;
        coreMesh.rotation.y += 0.0045;
        shell.rotation.z += 0.003;
        stars.rotation.y -= 0.0009;
        stars.rotation.x += 0.0006;
      }

      group.rotation.x += ((pointer.y * 0.28) - group.rotation.x) * 0.04;
      group.rotation.y += ((pointer.x * 0.4) - group.rotation.y) * 0.04;

      renderer.render(scene, camera);
    };

    resize();
    animate();

    window.addEventListener("resize", resize);
    mountNode.addEventListener("pointermove", onPointerMove);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resize);
      mountNode.removeEventListener("pointermove", onPointerMove);
      mountNode.removeChild(renderer.domElement);
      coreGeometry.dispose();
      coreMaterial.dispose();
      shellGeometry.dispose();
      shellMaterial.dispose();
      starsGeometry.dispose();
      starsMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return <div className="hero-scene" ref={mountRef} aria-hidden="true" />;
}
