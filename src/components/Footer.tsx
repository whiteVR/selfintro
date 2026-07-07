import { profile } from "../data/profile";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer id="contact" className={styles.footer}>
      <div className="container">
        <div className={`${styles.cta} reveal`}>
          <p className={styles.eyebrow}>CONTACT</p>
          <h2 className={styles.title}>
            함께 <span className="grad-text">AI·디지털 트윈</span>의 다음을 설계합니다
          </h2>
          <p className={styles.sub}>프로젝트 개발 · 기술 자문 · AI 융합 교육 문의를 환영합니다.</p>
          <a href={`mailto:${profile.email}`} className={styles.mail}>
            {profile.email}
          </a>
        </div>
        <div className={styles.bottom}>
          <span>© {profile.name}</span>
          <span className={styles.built}>Built with React · Vite · Three.js</span>
        </div>
      </div>
    </footer>
  );
}
