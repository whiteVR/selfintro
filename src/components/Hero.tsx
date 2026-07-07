import { Suspense, lazy } from "react";
import { profile } from "../data/profile";
import styles from "./Hero.module.css";

// 3D 파티클 배경은 히어로 내부에만 존재 → 다른 섹션과 간섭 없음
const Background3D = lazy(() => import("./Background3D"));

export default function Hero() {
  return (
    <section id="top" className={styles.hero}>
      {/* 레이어 순서: 3D 구(맨 뒤) → 가독성 오버레이 → 텍스트(맨 앞) */}
      <Suspense fallback={null}>
        <Background3D />
      </Suspense>
      <div className={styles.overlay} aria-hidden="true" />
      <div className={styles.glow} aria-hidden="true" />

      <div className={`container ${styles.inner}`}>
        <p className={styles.badge}>AI · DIGITAL TWIN · EDUCATION</p>
        <h1 className={styles.title}>
          {profile.title.split("\n").map((line, i) => (
            <span key={i} className={i === 0 ? styles.lineTop : styles.lineBottom}>
              {line}
              {i === 0 && <br />}
            </span>
          ))}
        </h1>
        <p className={styles.intro}>{profile.intro}</p>

        <div className={styles.actions}>
          <a href="#projects" className={styles.primary}>
            프로젝트 보기
          </a>
          <a href="#contact" className={styles.ghost}>
            연락하기
          </a>
        </div>

        <ul className={styles.stats}>
          {profile.stats.map((s) => (
            <li key={s.label}>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.scrollHint} aria-hidden="true">
        <span />
      </div>
    </section>
  );
}
