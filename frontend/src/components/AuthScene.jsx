import { useEffect, useRef } from "react";
import * as THREE from "three";

function roundedRectShape(width, height, radius) {
  const shape = new THREE.Shape();
  const halfWidth = width / 2;
  const halfHeight = height / 2;

  shape.moveTo(-halfWidth + radius, -halfHeight);
  shape.lineTo(halfWidth - radius, -halfHeight);
  shape.quadraticCurveTo(halfWidth, -halfHeight, halfWidth, -halfHeight + radius);
  shape.lineTo(halfWidth, halfHeight - radius);
  shape.quadraticCurveTo(halfWidth, halfHeight, halfWidth - radius, halfHeight);
  shape.lineTo(-halfWidth + radius, halfHeight);
  shape.quadraticCurveTo(-halfWidth, halfHeight, -halfWidth, halfHeight - radius);
  shape.lineTo(-halfWidth, -halfHeight + radius);
  shape.quadraticCurveTo(-halfWidth, -halfHeight, -halfWidth + radius, -halfHeight);

  return shape;
}

function disposeSceneResources(scene) {
  const geometries = new Set();
  const materials = new Set();

  scene.traverse((object) => {
    if (object.geometry) {
      geometries.add(object.geometry);
    }
    if (object.material) {
      const objectMaterials = Array.isArray(object.material) ? object.material : [object.material];
      objectMaterials.forEach((material) => {
        if (material) {
          materials.add(material);
        }
      });
    }
  });

  geometries.forEach((geometry) => {
    geometry.dispose?.();
  });
  materials.forEach((material) => {
    Object.values(material).forEach((value) => {
      if (value?.isTexture) {
        value.dispose();
      }
    });
    material.dispose?.();
  });
}

function addMediaQueryListener(query, handler) {
  if (!query) {
    return () => {};
  }

  if (typeof query.addEventListener === "function") {
    query.addEventListener("change", handler);
    return () => query.removeEventListener("change", handler);
  }

  if (typeof query.addListener === "function") {
    query.addListener(handler);
    return () => query.removeListener(handler);
  }

  return () => {};
}

export default function AuthScene({ mode = "signin" }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const mountNode = mountRef.current;
    if (!mountNode) {
      return undefined;
    }

    const motionQuery =
      typeof window.matchMedia === "function"
        ? window.matchMedia("(prefers-reduced-motion: reduce)")
        : null;
    const pointerQuery =
      typeof window.matchMedia === "function" ? window.matchMedia("(pointer: fine)") : null;
    let reduceMotion = motionQuery?.matches ?? false;
    const allowPointerTracking = pointerQuery?.matches ?? true;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x07111b, 0.06);

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: "high-performance"
      });
    } catch {
      return undefined;
    }

    let isDisposed = false;
    const updatePixelRatio = () => {
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.8));
    };

    updatePixelRatio();
    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    mountNode.appendChild(renderer.domElement);

    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    camera.position.set(0, 1.1, 11.8);

    const root = new THREE.Group();
    scene.add(root);

    scene.add(new THREE.AmbientLight(0xffffff, 1.35));

    const tealLight = new THREE.PointLight(0x5eead4, 22, 40, 2);
    tealLight.position.set(4.6, 4.3, 7);
    const blueLight = new THREE.PointLight(0x60a5fa, 18, 34, 2);
    blueLight.position.set(-5, -2.8, 6.4);
    const amberLight = new THREE.PointLight(0xf59e0b, 10, 26, 2);
    amberLight.position.set(0.5, 5.5, 3.5);
    scene.add(tealLight, blueLight, amberLight);

    const platform = new THREE.Mesh(
      new THREE.CylinderGeometry(3.2, 3.9, 0.8, 48, 1),
      new THREE.MeshPhysicalMaterial({
        color: 0x0f2b45,
        metalness: 0.4,
        roughness: 0.25,
        clearcoat: 0.5,
        clearcoatRoughness: 0.16
      })
    );
    platform.position.y = -2.85;
    root.add(platform);

    const platformGlow = new THREE.Mesh(
      new THREE.TorusGeometry(3.06, 0.08, 24, 180),
      new THREE.MeshBasicMaterial({
        color: mode === "signup" ? 0xf59e0b : 0x5eead4,
        transparent: true,
        opacity: 0.75
      })
    );
    platformGlow.position.copy(platform.position);
    platformGlow.rotation.x = Math.PI / 2;
    root.add(platformGlow);

    const serviceDisc = new THREE.Mesh(
      new THREE.CylinderGeometry(2.56, 2.56, 0.16, 40, 1),
      new THREE.MeshStandardMaterial({
        color: 0x103251,
        metalness: 0.3,
        roughness: 0.42
      })
    );
    serviceDisc.position.y = -2.35;
    root.add(serviceDisc);

    const gridGroup = new THREE.Group();
    gridGroup.position.set(0, -2.26, 0);
    root.add(gridGroup);

    const gridMaterial = new THREE.LineBasicMaterial({
      color: 0x7dd3fc,
      transparent: true,
      opacity: 0.18
    });
    for (let offset = -2; offset <= 2; offset += 1) {
      const verticalGeometry = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(offset * 0.85, 0, -2.05),
        new THREE.Vector3(offset * 0.85, 0, 2.05)
      ]);
      const horizontalGeometry = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(-2.05, 0, offset * 0.85),
        new THREE.Vector3(2.05, 0, offset * 0.85)
      ]);
      const verticalLine = new THREE.Line(verticalGeometry, gridMaterial);
      const horizontalLine = new THREE.Line(horizontalGeometry, gridMaterial);
      verticalLine.rotation.x = -Math.PI / 2;
      horizontalLine.rotation.x = -Math.PI / 2;
      gridGroup.add(verticalLine, horizontalLine);
    }

    const homeGroup = new THREE.Group();
    root.add(homeGroup);

    const wallMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xe0f2fe,
      metalness: 0.08,
      roughness: 0.2,
      transmission: 0.08,
      thickness: 0.8,
      transparent: true,
      opacity: 0.92
    });
    const roofMaterial = new THREE.MeshStandardMaterial({
      color: 0x0f766e,
      metalness: 0.16,
      roughness: 0.28
    });
    const trimMaterial = new THREE.MeshStandardMaterial({
      color: 0x082032,
      metalness: 0.46,
      roughness: 0.32
    });

    const houseBody = new THREE.Mesh(new THREE.BoxGeometry(2.4, 1.6, 2.1), wallMaterial);
    houseBody.position.y = -0.55;
    homeGroup.add(houseBody);

    const roof = new THREE.Mesh(new THREE.ConeGeometry(1.9, 1.15, 4), roofMaterial);
    roof.position.y = 0.92;
    roof.rotation.y = Math.PI / 4;
    homeGroup.add(roof);

    const door = new THREE.Mesh(new THREE.BoxGeometry(0.48, 0.94, 0.14), trimMaterial);
    door.position.set(0, -0.9, 1.08);
    homeGroup.add(door);

    const knob = new THREE.Mesh(
      new THREE.SphereGeometry(0.05, 16, 16),
      new THREE.MeshStandardMaterial({ color: 0xf8fafc, metalness: 0.6, roughness: 0.22 })
    );
    knob.position.set(0.14, -0.88, 1.16);
    homeGroup.add(knob);

    [-0.64, 0.64].forEach((x) => {
      const frame = new THREE.Mesh(
        new THREE.BoxGeometry(0.56, 0.52, 0.12),
        new THREE.MeshStandardMaterial({
          color: 0x38bdf8,
          emissive: 0x0ea5e9,
          emissiveIntensity: 0.45,
          metalness: 0.08,
          roughness: 0.22
        })
      );
      frame.position.set(x, -0.35, 1.08);
      homeGroup.add(frame);
    });

    const chimney = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.7, 0.28), trimMaterial);
    chimney.position.set(0.74, 1.08, 0.12);
    homeGroup.add(chimney);

    const routeCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-2.5, -1.15, -0.8),
      new THREE.Vector3(-1.3, -0.2, 0.55),
      new THREE.Vector3(0, 0.4, 1.1),
      new THREE.Vector3(1.4, -0.05, 0.3),
      new THREE.Vector3(2.55, -0.9, -1)
    ]);
    const routeTube = new THREE.Mesh(
      new THREE.TubeGeometry(routeCurve, 120, 0.03, 14, false),
      new THREE.MeshBasicMaterial({
        color: mode === "signup" ? 0xfbbf24 : 0x67e8f9,
        transparent: true,
        opacity: 0.68
      })
    );
    root.add(routeTube);

    const routeNodes = routeCurve.getPoints(4).map((point, index) => {
      const node = new THREE.Mesh(
        new THREE.SphereGeometry(index === 2 ? 0.13 : 0.09, 18, 18),
        new THREE.MeshBasicMaterial({
          color: index === 2 ? 0xffffff : mode === "signup" ? 0xfde68a : 0xa5f3fc,
          transparent: true,
          opacity: 0.9
        })
      );
      node.position.copy(point);
      root.add(node);
      return node;
    });

    const pulse = new THREE.Mesh(
      new THREE.SphereGeometry(0.16, 20, 20),
      new THREE.MeshBasicMaterial({
        color: mode === "signup" ? 0xf59e0b : 0x5eead4,
        transparent: true,
        opacity: 0.95
      })
    );
    root.add(pulse);

    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(1.85, 0.06, 20, 180),
      new THREE.MeshBasicMaterial({
        color: 0x93c5fd,
        transparent: true,
        opacity: 0.3
      })
    );
    ring.rotation.x = Math.PI / 2.7;
    ring.rotation.z = Math.PI / 8;
    root.add(ring);

    const halo = new THREE.Mesh(
      new THREE.SphereGeometry(2.55, 28, 28),
      new THREE.MeshBasicMaterial({
        color: 0x67e8f9,
        transparent: true,
        opacity: 0.06
      })
    );
    root.add(halo);

    const chipMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x061422,
      metalness: 0.18,
      roughness: 0.22,
      transmission: 0.08,
      transparent: true,
      opacity: 0.88
    });
    const chipShape = roundedRectShape(1.2, 0.68, 0.16);
    const chipGeometry = new THREE.ExtrudeGeometry(chipShape, {
      depth: 0.1,
      bevelEnabled: false
    });
    chipGeometry.center();

    const chips = [];
    const chipConfigs = [
      { angle: 0.2, radius: 3.5, y: 1.15, color: 0x5eead4, icon: "shield" },
      { angle: 2.25, radius: 3.25, y: -0.05, color: 0xf59e0b, icon: "spark" },
      { angle: 4.35, radius: 3.4, y: 0.45, color: 0x60a5fa, icon: "wrench" }
    ];

    chipConfigs.forEach((config) => {
      const group = new THREE.Group();
      const base = new THREE.Mesh(chipGeometry, chipMaterial);
      group.add(base);

      const accent = new THREE.Mesh(
        new THREE.RingGeometry(0.12, 0.2, 24),
        new THREE.MeshBasicMaterial({ color: config.color, transparent: true, opacity: 0.92 })
      );
      accent.position.set(-0.26, 0, 0.065);
      group.add(accent);

      if (config.icon === "wrench") {
        const handle = new THREE.Mesh(
          new THREE.CylinderGeometry(0.03, 0.03, 0.28, 12),
          new THREE.MeshBasicMaterial({ color: 0xe2e8f0 })
        );
        handle.rotation.z = Math.PI / 4;
        handle.position.set(-0.26, 0, 0.08);
        group.add(handle);
        const head = new THREE.Mesh(
          new THREE.TorusGeometry(0.07, 0.017, 10, 18, Math.PI),
          new THREE.MeshBasicMaterial({ color: 0xe2e8f0 })
        );
        head.rotation.z = Math.PI / 4;
        head.position.set(-0.19, 0.08, 0.08);
        group.add(head);
      } else if (config.icon === "shield") {
        const shieldShape = new THREE.Shape();
        shieldShape.moveTo(0, 0.15);
        shieldShape.lineTo(0.12, 0.07);
        shieldShape.lineTo(0.09, -0.08);
        shieldShape.lineTo(0, -0.17);
        shieldShape.lineTo(-0.09, -0.08);
        shieldShape.lineTo(-0.12, 0.07);
        shieldShape.lineTo(0, 0.15);
        const shield = new THREE.Mesh(
          new THREE.ShapeGeometry(shieldShape),
          new THREE.MeshBasicMaterial({ color: 0xe2e8f0 })
        );
        shield.position.set(-0.26, 0, 0.08);
        group.add(shield);
      } else {
        const spark = new THREE.Mesh(
          new THREE.OctahedronGeometry(0.1, 0),
          new THREE.MeshBasicMaterial({ color: 0xe2e8f0 })
        );
        spark.position.set(-0.26, 0, 0.08);
        spark.rotation.z = Math.PI / 4;
        group.add(spark);
      }

      const lineOne = new THREE.Mesh(
        new THREE.PlaneGeometry(0.38, 0.04),
        new THREE.MeshBasicMaterial({ color: 0xdbeafe, transparent: true, opacity: 0.92 })
      );
      lineOne.position.set(0.14, 0.09, 0.07);
      group.add(lineOne);

      const lineTwo = new THREE.Mesh(
        new THREE.PlaneGeometry(0.28, 0.035),
        new THREE.MeshBasicMaterial({ color: 0x93c5fd, transparent: true, opacity: 0.78 })
      );
      lineTwo.position.set(0.09, -0.08, 0.07);
      group.add(lineTwo);

      group.userData = {
        angle: config.angle,
        radius: config.radius,
        baseY: config.y
      };
      root.add(group);
      chips.push(group);
    });

    const starGeometry = new THREE.BufferGeometry();
    const starCount = 150;
    const starPositions = new Float32Array(starCount * 3);
    for (let index = 0; index < starCount; index += 1) {
      const stride = index * 3;
      const radius = 5 + Math.random() * 2.6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      starPositions[stride] = radius * Math.sin(phi) * Math.cos(theta);
      starPositions[stride + 1] = radius * Math.sin(phi) * Math.sin(theta) * 0.7;
      starPositions[stride + 2] = radius * Math.cos(phi);
    }
    starGeometry.setAttribute("position", new THREE.BufferAttribute(starPositions, 3));
    const stars = new THREE.Points(
      starGeometry,
      new THREE.PointsMaterial({
        color: 0xe0f2fe,
        size: 0.045,
        transparent: true,
        opacity: 0.72,
        blending: THREE.AdditiveBlending,
        depthWrite: false
      })
    );
    root.add(stars);

    const pointer = { x: 0, y: 0 };
    let frameId = 0;

    const resize = () => {
      const { clientWidth, clientHeight } = mountNode;
      if (!clientWidth || !clientHeight) {
        return;
      }
      updatePixelRatio();
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

    const handleMotionChange = (event) => {
      reduceMotion = event.matches;
      if (event.matches) {
        resetPointer();
      }
    };

    const removeMotionListener = addMediaQueryListener(motionQuery, handleMotionChange);
    const startedAt = performance.now();

    const animate = () => {
      if (isDisposed) {
        return;
      }

      frameId = window.requestAnimationFrame(animate);
      const elapsed = (performance.now() - startedAt) / 1000;
      const motion = reduceMotion ? 0.16 : 1;
      const pulseProgress = (elapsed * (mode === "signup" ? 0.14 : 0.18)) % 1;
      const pulsePoint = routeCurve.getPointAt(pulseProgress);

      homeGroup.rotation.y = Math.sin(elapsed * 0.55) * 0.18 * motion;
      homeGroup.rotation.x = Math.cos(elapsed * 0.42) * 0.06 * motion;
      homeGroup.position.y = Math.sin(elapsed * 1.1) * 0.16 * motion;

      platformGlow.rotation.z = elapsed * 0.36 * motion;
      ring.rotation.y = elapsed * 0.34 * motion;
      ring.rotation.z = Math.PI / 8 + elapsed * 0.18 * motion;
      halo.scale.setScalar(1 + Math.sin(elapsed * 1.8) * 0.04 * motion);
      halo.material.opacity = 0.045 + (Math.sin(elapsed * 1.8) + 1) * 0.016;

      pulse.position.copy(pulsePoint);
      pulse.scale.setScalar(1 + Math.sin(elapsed * 7.5) * 0.2 * motion);

      routeNodes.forEach((node, index) => {
        node.scale.setScalar(1 + Math.sin(elapsed * 2.4 + index) * 0.14 * motion);
      });

      chips.forEach((chip, index) => {
        const angle = chip.userData.angle + elapsed * (0.22 + index * 0.04) * motion;
        chip.position.set(
          Math.cos(angle) * chip.userData.radius,
          chip.userData.baseY + Math.sin(elapsed * 1.6 + index) * 0.18 * motion,
          Math.sin(angle) * (chip.userData.radius * 0.52)
        );
        chip.rotation.y = -angle + Math.PI / 2;
        chip.rotation.x = Math.sin(elapsed * 0.9 + index) * 0.08 * motion;
      });

      stars.rotation.y = -elapsed * 0.03 * motion;
      stars.rotation.x = elapsed * 0.015 * motion;

      root.rotation.x += ((pointer.y * 0.15) - root.rotation.x) * 0.04;
      root.rotation.y += ((pointer.x * 0.26) - root.rotation.y) * 0.04;

      tealLight.position.x = 4.6 + Math.cos(elapsed * 1.2) * 0.8;
      tealLight.position.y = 4.3 + Math.sin(elapsed * 1.4) * 0.65;
      blueLight.position.x = -5 + Math.sin(elapsed) * 0.9;
      amberLight.position.y = 5.5 + Math.cos(elapsed * 1.2) * 0.5;

      renderer.render(scene, camera);
    };

    resize();
    animate();

    window.addEventListener("resize", resize);
    let resizeObserver;
    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(resize);
      resizeObserver.observe(mountNode);
    }
    if (allowPointerTracking) {
      mountNode.addEventListener("pointermove", onPointerMove);
      mountNode.addEventListener("pointerleave", resetPointer);
    }

    return () => {
      isDisposed = true;
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resize);
      resizeObserver?.disconnect();
      if (allowPointerTracking) {
        mountNode.removeEventListener("pointermove", onPointerMove);
        mountNode.removeEventListener("pointerleave", resetPointer);
      }
      removeMotionListener();
      if (renderer.domElement.parentNode === mountNode) {
        mountNode.removeChild(renderer.domElement);
      }
      disposeSceneResources(scene);
      scene.clear();
      renderer.renderLists.dispose();
      renderer.dispose();
      renderer.forceContextLoss?.();
    };
  }, [mode]);

  return <div className="auth-scene-canvas" ref={mountRef} aria-hidden="true" />;
}
