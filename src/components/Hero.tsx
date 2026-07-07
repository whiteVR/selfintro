import { profile } from "../data/profile";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <header id="top" className={styles.hero}>
      <div className={styles.glow} aria-hidden="true" />
      <div className={`container ${styles.inner}`}>
        <p className={styles.badge}>AI · XR · METAVERSE · DIGITAL TWIN · 3D GAME</p>
        <h1 className={styles.title}>
          실감을 설계하는
          <br />
          <span className="grad-text">{profile.role}</span>
        </h1>
        <p className={styles.roles}>
          {profile.subRoles.map((r, i) => (
            <span key={r}>
              {r}
              {i < profile.subRoles.length - 1 && <em>·</em>}
            </span>
          ))}
        </p>
        <p className={styles.intro}>{profile.intro}</p>

        <div className={styles.actions}>
          <a href={`mailto:${profile.email}`} className={styles.primary}>
            연락하기
          </a>
          <a href="#projects" className={styles.ghost}>
            프로젝트 보기
          </a>
        </div>

        <ul className={styles.stats}>
          {profile.stats.map((s) => (
            <li key={s.label}>
              <strong className="grad-text">{s.value}</strong>
              <span>{s.label}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.scrollHint} aria-hidden="true">
        <span />
      </div>
    </header>
  );
}
