import { projects } from "../data/profile";
import Section from "./Section";
import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <Section id="projects" eyebrow="PROJECTS" title="프로젝트" accent="var(--gold)">
      <div className={styles.grid}>
        {projects.map((p, i) => (
          <article key={p.title} className={`${styles.card} reveal`}>
            <div className={styles.head}>
              <span className={styles.no}>{String(i + 1).padStart(2, "0")}</span>
              <span className={styles.tag}>{p.tag}</span>
            </div>
            <h3 className={styles.title}>{p.title}</h3>
            <p className={styles.desc}>{p.desc}</p>
            <ul className={styles.stack}>
              {p.stack.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
