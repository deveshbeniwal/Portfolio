import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { soundFx } from '../utils/audioFx';
import { useTheme } from '../context/ThemeContext';

interface PlayfulGame3DBackgroundProps {
  onCollectCoin?: () => void;
}

export const PlayfulGame3DBackground: React.FC<PlayfulGame3DBackgroundProps> = ({ onCollectCoin }) => {
  const { isDark } = useTheme();
  const mountRef = useRef<HTMLDivElement>(null);
  const [clickSparks, setClickSparks] = useState<{ id: number; x: number; y: number; text: string }[]>([]);

  // Refs for dynamic theme switching without context recreation
  const sceneRef = useRef<THREE.Scene | null>(null);
  const hemisphereLightRef = useRef<THREE.HemisphereLight | null>(null);
  const sunLightRef = useRef<THREE.DirectionalLight | null>(null);
  const fillLightRef = useRef<THREE.DirectionalLight | null>(null);
  const starsMatRef = useRef<THREE.PointsMaterial | null>(null);

  useEffect(() => {
    if (!sceneRef.current) return;
    if (isDark) {
      sceneRef.current.fog = new THREE.Fog(0x090d16, 12, 45);
      if (hemisphereLightRef.current) {
        hemisphereLightRef.current.color.setHex(0x38bdf8);
        hemisphereLightRef.current.groundColor.setHex(0x0f172a);
        hemisphereLightRef.current.intensity = 1.3;
      }
      if (sunLightRef.current) {
        sunLightRef.current.color.setHex(0x93c5fd);
        sunLightRef.current.intensity = 1.6;
        sunLightRef.current.position.set(-10, 16, 8);
      }
      if (fillLightRef.current) {
        fillLightRef.current.color.setHex(0x818cf8);
        fillLightRef.current.intensity = 0.9;
      }
      if (starsMatRef.current) {
        starsMatRef.current.opacity = 0.85;
      }
    } else {
      sceneRef.current.fog = new THREE.Fog(0xe0f2fe, 15, 45);
      if (hemisphereLightRef.current) {
        hemisphereLightRef.current.color.setHex(0xffffff);
        hemisphereLightRef.current.groundColor.setHex(0xbbf7d0);
        hemisphereLightRef.current.intensity = 1.8;
      }
      if (sunLightRef.current) {
        sunLightRef.current.color.setHex(0xfef08a);
        sunLightRef.current.intensity = 2.2;
        sunLightRef.current.position.set(12, 18, 10);
      }
      if (fillLightRef.current) {
        fillLightRef.current.color.setHex(0xbae6fd);
        fillLightRef.current.intensity = 1.2;
      }
      if (starsMatRef.current) {
        starsMatRef.current.opacity = 0.05;
      }
    }
  }, [isDark]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = window.innerWidth;
    const height = window.innerHeight;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Fog: day vs dark
    scene.fog = new THREE.Fog(isDark ? 0x090d16 : 0xe0f2fe, isDark ? 12 : 15, 45);

    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
    camera.position.set(0, 3, 16);

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    } catch {
      return;
    }

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;

    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // Dynamic Lighting
    const hemisphereLight = new THREE.HemisphereLight(
      isDark ? 0x38bdf8 : 0xffffff,
      isDark ? 0x0f172a : 0xbbf7d0,
      isDark ? 1.3 : 1.8
    );
    scene.add(hemisphereLight);
    hemisphereLightRef.current = hemisphereLight;

    const sunLight = new THREE.DirectionalLight(
      isDark ? 0x93c5fd : 0xfef08a,
      isDark ? 1.6 : 2.2
    );
    sunLight.position.set(isDark ? -10 : 12, 18, 10);
    scene.add(sunLight);
    sunLightRef.current = sunLight;

    const fillLight = new THREE.DirectionalLight(
      isDark ? 0x818cf8 : 0xbae6fd,
      isDark ? 0.9 : 1.2
    );
    fillLight.position.set(-10, 8, -5);
    scene.add(fillLight);
    fillLightRef.current = fillLight;

    // Twinkling Starfield for Dark Mode
    const starGeo = new THREE.BufferGeometry();
    const starCoords: number[] = [];
    for (let i = 0; i < 220; i++) {
      starCoords.push(
        (Math.random() - 0.5) * 60,
        Math.random() * 25 - 2,
        (Math.random() - 0.5) * 30 - 5
      );
    }
    starGeo.setAttribute('position', new THREE.Float32BufferAttribute(starCoords, 3));
    const starMat = new THREE.PointsMaterial({
      color: 0x93c5fd,
      size: 0.25,
      transparent: true,
      opacity: isDark ? 0.85 : 0.05,
    });
    starsMatRef.current = starMat;
    const starPoints = new THREE.Points(starGeo, starMat);
    scene.add(starPoints);

    // 1. Floating Low-Poly Stylized Game Islands
    const islandsGroup = new THREE.Group();
    scene.add(islandsGroup);

    // Island Material: Bright Grass Top & Warm Earth Bottom
    const grassMat = new THREE.MeshStandardMaterial({
      color: 0x4ade80, // Bright green grass
      roughness: 0.5,
      flatShading: true,
    });
    const rockMat = new THREE.MeshStandardMaterial({
      color: 0x94a3b8, // Slate rocks
      roughness: 0.8,
      flatShading: true,
    });
    const dirtMat = new THREE.MeshStandardMaterial({
      color: 0xd97706, // Warm soil
      roughness: 0.9,
      flatShading: true,
    });

    // Create a floating island
    const createIsland = (x: number, y: number, z: number, scale: number) => {
      const island = new THREE.Group();

      // Top grass cylinder
      const topGeo = new THREE.CylinderGeometry(2.4 * scale, 2.8 * scale, 0.8 * scale, 7);
      const topMesh = new THREE.Mesh(topGeo, grassMat);
      island.add(topMesh);

      // Bottom cone rock
      const bottomGeo = new THREE.ConeGeometry(2.8 * scale, 3.2 * scale, 7);
      const bottomMesh = new THREE.Mesh(bottomGeo, dirtMat);
      bottomMesh.position.y = -1.8 * scale;
      bottomMesh.rotation.x = Math.PI;
      island.add(bottomMesh);

      // Low-poly tree on island
      const trunkGeo = new THREE.CylinderGeometry(0.15 * scale, 0.25 * scale, 0.8 * scale, 5);
      const trunkMat = new THREE.MeshStandardMaterial({ color: 0x78350f, roughness: 0.9, flatShading: true });
      const trunk = new THREE.Mesh(trunkGeo, trunkMat);
      trunk.position.set(0.6 * scale, 0.7 * scale, 0.4 * scale);
      island.add(trunk);

      const leavesGeo = new THREE.ConeGeometry(0.8 * scale, 1.6 * scale, 6);
      const leavesMat = new THREE.MeshStandardMaterial({ color: 0x16a34a, roughness: 0.6, flatShading: true });
      const leaves = new THREE.Mesh(leavesGeo, leavesMat);
      leaves.position.set(0.6 * scale, 1.6 * scale, 0.4 * scale);
      island.add(leaves);

      island.position.set(x, y, z);
      islandsGroup.add(island);
      return island;
    };

    const island1 = createIsland(-8, 2, -4, 1.1);
    const island2 = createIsland(9, -1, -6, 1.4);
    const island3 = createIsland(7, 5, -8, 0.9);
    const island4 = createIsland(-9, -4, -8, 1.2);

    // 2. Collectible Floating Golden Game Coins & Gems
    const coinsGroup = new THREE.Group();
    scene.add(coinsGroup);

    const coinGeo = new THREE.CylinderGeometry(0.6, 0.6, 0.14, 16);
    const coinMat = new THREE.MeshStandardMaterial({
      color: 0xfacc15,
      metalness: 0.85,
      roughness: 0.15,
      emissive: 0xca8a04,
      emissiveIntensity: 0.25,
    });

    const gemGeo = new THREE.OctahedronGeometry(0.55, 0);
    const gemMatCyan = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      metalness: 0.4,
      roughness: 0.1,
      emissive: 0x0284c7,
      emissiveIntensity: 0.35,
    });
    const gemMatPink = new THREE.MeshStandardMaterial({
      color: 0xf43f5e,
      metalness: 0.4,
      roughness: 0.1,
      emissive: 0xe11d48,
      emissiveIntensity: 0.35,
    });

    interface InteractiveItem {
      mesh: THREE.Mesh;
      baseY: number;
      rotSpeedY: number;
      floatSpeed: number;
      floatAmp: number;
    }

    const floatingItems: InteractiveItem[] = [];

    // Spawn 12 bright collectible coins & gems around the scene
    for (let i = 0; i < 14; i++) {
      const isCoin = i % 2 === 0;
      const geo = isCoin ? coinGeo : gemGeo;
      const mat = isCoin ? coinMat : i % 4 === 1 ? gemMatCyan : gemMatPink;
      const mesh = new THREE.Mesh(geo, mat);

      const angle = (i / 14) * Math.PI * 2;
      const radius = 6.5 + Math.random() * 4.5;
      mesh.position.x = Math.cos(angle) * radius;
      mesh.position.z = Math.sin(angle) * 5 - 2;
      const baseY = (Math.random() - 0.5) * 8 + 1;
      mesh.position.y = baseY;

      if (isCoin) {
        mesh.rotation.x = Math.PI / 2;
      }

      coinsGroup.add(mesh);
      floatingItems.push({
        mesh,
        baseY,
        rotSpeedY: 0.02 + Math.random() * 0.02,
        floatSpeed: 1.2 + Math.random() * 0.8,
        floatAmp: 0.3 + Math.random() * 0.3,
      });
    }

    // 3. Fluffy Low-Poly Floating Clouds
    const cloudsGroup = new THREE.Group();
    scene.add(cloudsGroup);

    const cloudMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.9,
      flatShading: true,
      transparent: true,
      opacity: 0.85,
    });

    for (let i = 0; i < 8; i++) {
      const cloud = new THREE.Group();
      const puffCount = 3 + Math.floor(Math.random() * 3);
      for (let p = 0; p < puffCount; p++) {
        const puffGeo = new THREE.DodecahedronGeometry(1.2 + Math.random() * 0.8, 1);
        const puff = new THREE.Mesh(puffGeo, cloudMat);
        puff.position.set((p - 1.2) * 1.4, Math.random() * 0.5, (Math.random() - 0.5) * 0.6);
        cloud.add(puff);
      }
      cloud.position.set(
        (Math.random() - 0.5) * 36,
        4 + Math.random() * 7,
        -10 - Math.random() * 12
      );
      cloudsGroup.add(cloud);
    }

    // Mouse & Scroll Parallax
    let mouseX = 0;
    let mouseY = 0;
    let scrollY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    const handleScroll = () => {
      scrollY = window.scrollY || document.documentElement.scrollTop;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Camera responds gently to mouse & scroll
      const targetCamY = 3 - scrollY * 0.002;
      camera.position.y += (targetCamY - camera.position.y) * 0.05;
      camera.position.x += (mouseX * 1.5 - camera.position.x) * 0.03;
      camera.position.z = 16 + mouseY * 0.5;
      camera.lookAt(0, camera.position.y * 0.6, 0);

      // Rotate and float coins/gems
      floatingItems.forEach((item, index) => {
        item.mesh.rotation.y += item.rotSpeedY;
        item.mesh.rotation.z += 0.01;
        item.mesh.position.y =
          item.baseY + Math.sin(elapsed * item.floatSpeed + index) * item.floatAmp;
      });

      // Gently bob floating islands
      island1.position.y = 2 + Math.sin(elapsed * 0.8) * 0.25;
      island1.rotation.y = elapsed * 0.04;

      island2.position.y = -1 + Math.cos(elapsed * 0.7) * 0.25;
      island2.rotation.y = -elapsed * 0.03;

      island3.position.y = 5 + Math.sin(elapsed * 0.9 + 1) * 0.2;
      island4.position.y = -4 + Math.cos(elapsed * 0.85 + 2) * 0.3;

      // Slowly drift clouds across sunny sky
      cloudsGroup.children.forEach((cloud) => {
        cloud.position.x += 0.008;
        if (cloud.position.x > 25) cloud.position.x = -25;
      });

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
      if (container) {
        container.innerHTML = '';
      }
    };
  }, []);

  const handleClickBackground = (e: React.MouseEvent<HTMLDivElement>) => {
    soundFx.playCoin();
    onCollectCoin?.();

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const gamePraise = ['🪙 +100 COINS', '⭐ +150 XP', '🎮 60 FPS', '⚡ COMBO x2', '🎯 CRITICAL'];
    const chosen = gamePraise[Math.floor(Math.random() * gamePraise.length)];

    const spark = {
      id: Date.now() + Math.random(),
      x,
      y,
      text: chosen,
    };

    setClickSparks((prev) => [...prev.slice(-5), spark]);

    setTimeout(() => {
      setClickSparks((prev) => prev.filter((s) => s.id !== spark.id));
    }, 1200);
  };

  return (
    <div
      onClick={handleClickBackground}
      className="fixed inset-0 pointer-events-auto z-0 overflow-hidden cursor-pointer"
      title="Click anywhere to collect coins and earn XP!"
    >
      <div ref={mountRef} className="w-full h-full" />

      {/* Floating Sparkles & XP Toast on Click */}
      {clickSparks.map((spark) => (
        <div
          key={spark.id}
          style={{ left: spark.x, top: spark.y }}
          className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none z-50 text-xs font-game font-bold tracking-wider text-amber-900 animate-bounce bg-yellow-300 px-3 py-1 rounded-full border-2 border-amber-500 shadow-md shadow-amber-500/30"
        >
          {spark.text}
        </div>
      ))}
    </div>
  );
};
