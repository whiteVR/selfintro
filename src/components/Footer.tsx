import { profile } from "../data/profile";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={`${styles.cta} reveal`}>
          <h2 className={styles.title}>
            함께 <span className="grad-text">실감형 미래</span>를 설계합니다
          </h2>
          <p className={styles.sub}>강연 · 기술자문 · 프로젝트 협업 문의를 환영합니다.</p>
          <a href={`mailto:${profile.email}`} className={styles.mail}>
            {profile.email}
          </a>
        </div>
        <div className={styles.bottom}>
          <span>© {profile.name} · XR Portfolio</span>
          <span className={styles.built}>Built with React · Vite · Three.js</span>
        </div>
      </div>
    </footer>
  );
}
