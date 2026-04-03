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
    scene.fog = new THREE.FogExp2(0x020817, 0.055);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8));
    renderer.setClearColor(0x000000, 0);
    mountNode.appendChild(renderer.domElement);

    const camera = new THREE.PerspectiveCamera(46, 1, 0.1, 100);
    camera.position.set(0, 0, 8.8);

    const root = new THREE.Group();
    const haloGroup = new THREE.Group();
    scene.add(root, haloGroup);

    scene.add(new THREE.AmbientLight(0xffffff, 1.15));

    const aquaLight = new THREE.PointLight(0x5eead4, 18, 36, 2);
    aquaLight.position.set(3.8, 3.2, 6.5);
    const blueLight = new THREE.PointLight(0x60a5fa, 14, 32, 2);
    blueLight.position.set(-4.5, -2.8, 5.4);
    const coralLight = new THREE.PointLight(0xfb7185, 10, 28, 2);
    coralLight.position.set(0, 3.5, 3.5);
    scene.add(aquaLight, blueLight, coralLight);

    const coreGeometry = new THREE.IcosahedronGeometry(1.45, 3);
    const coreMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x88f7f0,
      emissive: 0x0f766e,
      emissiveIntensity: 0.7,
      metalness: 0.08,
      roughness: 0.12,
      transmission: 0.14,
      thickness: 0.7,
      transparent: true,
      opacity: 0.86
    });
    const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
    root.add(coreMesh);

    const wireMesh = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.72, 1),
      new THREE.MeshBasicMaterial({
        color: 0xb9f7ff,
        wireframe: true,
        transparent: true,
        opacity: 0.35
      })
    );
    root.add(wireMesh);

    const ringConfigs = [
      { radius: 2.3, tube: 0.05, color: 0x7dd3fc, tiltX: Math.PI / 2.4, tiltY: 0.15 },
      { radius: 2.9, tube: 0.07, color: 0x5eead4, tiltX: Math.PI / 3.2, tiltY: Math.PI / 3 },
      { radius: 3.45, tube: 0.04, color: 0xfda4af, tiltX: Math.PI / 2, tiltY: Math.PI / 8 }
    ];

    const rings = ringConfigs.map((config) => {
      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(config.radius, config.tube, 24, 180),
        new THREE.MeshBasicMaterial({
          color: config.color,
          transparent: true,
          opacity: 0.62
        })
      );
      ring.rotation.x = config.tiltX;
      ring.rotation.y = config.tiltY;
      root.add(ring);
      return ring;
    });

    const pulseSphere = new THREE.Mesh(
      new THREE.SphereGeometry(2.7, 32, 32),
      new THREE.MeshBasicMaterial({
        color: 0x67e8f9,
        transparent: true,
        opacity: 0.07
      })
    );
    root.add(pulseSphere);

    const starCount = 240;
    const starPositions = new Float32Array(starCount * 3);
    const starSizes = new Float32Array(starCount);
    for (let index = 0; index < starCount; index += 1) {
      const stride = index * 3;
      const radius = 3 + Math.random() * 3.2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      starPositions[stride] = radius * Math.sin(phi) * Math.cos(theta);
      starPositions[stride + 1] = radius * Math.sin(phi) * Math.sin(theta);
      starPositions[stride + 2] = radius * Math.cos(phi);
      starSizes[index] = 0.6 + Math.random() * 1.4;
    }

    const starsGeometry = new THREE.BufferGeometry();
    starsGeometry.setAttribute("position", new THREE.BufferAttribute(starPositions, 3));
    starsGeometry.setAttribute("size", new THREE.BufferAttribute(starSizes, 1));
    const starsMaterial = new THREE.PointsMaterial({
      color: 0xe0f2fe,
      size: 0.055,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    const stars = new THREE.Points(starsGeometry, starsMaterial);
    root.add(stars);

    const arcCount = 80;
    const arcPositions = new Float32Array(arcCount * 3);
    for (let index = 0; index < arcCount; index += 1) {
      const stride = index * 3;
      const angle = (index / arcCount) * Math.PI * 2;
      const radius = 2.15 + Math.sin(index * 1.4) * 0.18;
      arcPositions[stride] = Math.cos(angle) * radius;
      arcPositions[stride + 1] = Math.sin(angle) * radius * 0.72;
      arcPositions[stride + 2] = Math.sin(index * 0.35) * 0.8;
    }
    const arcGeometry = new THREE.BufferGeometry();
    arcGeometry.setAttribute("position", new THREE.BufferAttribute(arcPositions, 3));
    const arcLine = new THREE.LineLoop(
      arcGeometry,
      new THREE.LineBasicMaterial({ color: 0x5eead4, transparent: true, opacity: 0.34 })
    );
    arcLine.rotation.x = Math.PI / 2.8;
    arcLine.rotation.z = Math.PI / 5;
    root.add(arcLine);

    const beaconGeometry = new THREE.BufferGeometry();
    const beaconPositions = new Float32Array([
      0, -3.9, 0,
      0, 3.9, 0
    ]);
    beaconGeometry.setAttribute("position", new THREE.BufferAttribute(beaconPositions, 3));
    const beaconLine = new THREE.Line(
      beaconGeometry,
      new THREE.LineBasicMaterial({ color: 0x93c5fd, transparent: true, opacity: 0.18 })
    );
    haloGroup.add(beaconLine);

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

    const resetPointer = () => {
      pointer.x = 0;
      pointer.y = 0;
    };

    const clock = new THREE.Clock();

    const animate = () => {
      frameId = window.requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();
      const motion = reduceMotion ? 0.18 : 1;

      coreMesh.rotation.x = elapsed * 0.32 * motion;
      coreMesh.rotation.y = elapsed * 0.48 * motion;
      coreMesh.rotation.z = elapsed * 0.18 * motion;

      wireMesh.rotation.x = -elapsed * 0.22 * motion;
      wireMesh.rotation.y = elapsed * 0.3 * motion;

      rings[0].rotation.z = elapsed * 0.34 * motion;
      rings[1].rotation.z = -elapsed * 0.26 * motion;
      rings[2].rotation.y = elapsed * 0.18 * motion;

      arcLine.rotation.z = Math.PI / 5 + elapsed * 0.2 * motion;
      arcLine.rotation.y = elapsed * 0.15 * motion;

      pulseSphere.scale.setScalar(1 + Math.sin(elapsed * 1.8) * 0.04 * motion);
      pulseSphere.material.opacity = 0.05 + (Math.sin(elapsed * 1.8) + 1) * 0.02;

      stars.rotation.y = -elapsed * 0.07 * motion;
      stars.rotation.x = elapsed * 0.03 * motion;
      haloGroup.rotation.z = elapsed * 0.11 * motion;

      root.position.y = Math.sin(elapsed * 1.4) * 0.18 * motion;
      root.rotation.x += ((pointer.y * 0.36) - root.rotation.x) * 0.045;
      root.rotation.y += ((pointer.x * 0.52) - root.rotation.y) * 0.045;
      haloGroup.rotation.x += ((pointer.y * 0.12) - haloGroup.rotation.x) * 0.03;
      haloGroup.rotation.y += ((pointer.x * 0.18) - haloGroup.rotation.y) * 0.03;

      aquaLight.position.x = 3.8 + Math.cos(elapsed * 1.1) * 0.9;
      aquaLight.position.y = 3.2 + Math.sin(elapsed * 1.4) * 0.7;
      blueLight.position.x = -4.5 + Math.sin(elapsed * 0.9) * 0.8;
      coralLight.position.y = 3.5 + Math.cos(elapsed * 1.2) * 0.6;

      renderer.render(scene, camera);
    };

    resize();
    animate();

    window.addEventListener("resize", resize);
    mountNode.addEventListener("pointermove", onPointerMove);
    mountNode.addEventListener("pointerleave", resetPointer);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resize);
      mountNode.removeEventListener("pointermove", onPointerMove);
      mountNode.removeEventListener("pointerleave", resetPointer);
      if (renderer.domElement.parentNode === mountNode) {
        mountNode.removeChild(renderer.domElement);
      }
      coreGeometry.dispose();
      coreMaterial.dispose();
      wireMesh.geometry.dispose();
      wireMesh.material.dispose();
      pulseSphere.geometry.dispose();
      pulseSphere.material.dispose();
      rings.forEach((ring) => {
        ring.geometry.dispose();
        ring.material.dispose();
      });
      starsGeometry.dispose();
      starsMaterial.dispose();
      arcGeometry.dispose();
      arcLine.material.dispose();
      beaconGeometry.dispose();
      beaconLine.material.dispose();
      renderer.dispose();
    };
  }, []);

  return <div className="hero-scene" ref={mountRef} aria-hidden="true" />;
}
