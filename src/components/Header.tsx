import { useEffect, useState } from "react";
import { profile } from "../data/profile";
import styles from "./Header.module.css";

const LINKS = [
  { id: "about", label: "소개" },
  { id: "projects", label: "프로젝트" },
  { id: "experience", label: "교육" },
  { id: "contact", label: "연락처" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.inner}>
        <a href="#top" className={styles.brand} aria-label="Ethan 홈으로">
          <span className={styles.logoBadge}>
            <img src={profile.logo} alt="Ethan Aurelio 로고" />
          </span>
          <span className={styles.wordmark}>Ethan</span>
        </a>
        <nav aria-label="주요 메뉴">
          <ul className={styles.links}>
            {LINKS.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`}>{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
