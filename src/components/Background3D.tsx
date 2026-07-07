import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

/** 회전하는 파티클 지구본(구면 분포 점군) — 히어로 배경 전용 */
function ParticleGlobe() {
  const points = useRef<THREE.Points>(null);

  const geometry = useMemo(() => {
    const COUNT = 2400;
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
      points.current.rotation.y += delta * 0.1;
      points.current.rotation.x += delta * 0.015;
    }
  });

  return (
    <points ref={points} geometry={geometry}>
      {/* 텍스트와 대비를 위해 채도·밝기를 낮춘 스틸블루 톤 + 낮은 불투명도 */}
      <pointsMaterial
        size={0.022}
        color={"#3f5b86"}
        transparent
        opacity={0.55}
        sizeAttenuation
      />
    </points>
  );
}

/** 부모(히어로) 영역을 채우는 절대배치 3D 레이어. fixed 아님 → 다른 섹션과 간섭 없음 */
export default function Background3D() {
  return (
    <div
      aria-hidden="true"
      style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none" }}
    >
      <Canvas camera={{ position: [0, 0, 6], fov: 55 }} dpr={[1, 2]}>
        <ParticleGlobe />
      </Canvas>
    </div>
  );
}
