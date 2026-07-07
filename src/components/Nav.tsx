import { useEffect, useState } from "react";
import styles from "./Nav.module.css";

const LINKS = [
  { id: "about", label: "소개" },
  { id: "skills", label: "핵심기술" },
  { id: "career", label: "경력" },
  { id: "projects", label: "프로젝트" },
  { id: "lectures", label: "강의" },
  { id: "education", label: "학력·자격" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.inner}>
        <a href="#top" className={styles.logo}>
          <span className="grad-text">XR</span>.folio
        </a>
        <ul className={styles.links}>
          {LINKS.map((l) => (
            <li key={l.id}>
              <a href={`#${l.id}`}>{l.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
