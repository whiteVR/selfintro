import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

/** 회전하는 파티클 지구본(구면 분포 점군) — XR/3D 도메인을 상징 */
function ParticleGlobe() {
  const points = useRef<THREE.Points>(null);

  const geometry = useMemo(() => {
    const COUNT = 2600;
    const positions = new Float32Array(COUNT * 3);
    const radius = 2.2;
    for (let i = 0; i < COUNT; i++) {
      // 균일 구면 분포 (golden spiral)
      const y = 1 - (i / (COUNT - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const theta = i * 2.399963229728653; // golden angle
      positions[i * 3] = Math.cos(theta) * r * radius;
      positions[i * 3 + 1] = y * radius;
      positions[i * 3 + 2] = Math.sin(theta) * r * radius;
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return g;
  }, []);

  useFrame((_, delta) => {
    if (points.current) {
      points.current.rotation.y += delta * 0.12;
      points.current.rotation.x += delta * 0.02;
    }
  });

  return (
    <points ref={points} geometry={geometry}>
      <pointsMaterial
        size={0.028}
        color={"#4de3f5"}
        transparent
        opacity={0.9}
        sizeAttenuation
      />
    </points>
  );
}

export default function Background3D() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
      }}
    >
      <Canvas camera={{ position: [0, 0, 6], fov: 55 }} dpr={[1, 2]}>
        <ParticleGlobe />
      </Canvas>
    </div>
  );
}
