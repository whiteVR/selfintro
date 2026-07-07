import { projects } from "../data/profile";
import Section from "./Section";
import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <Section id="projects" eyebrow="PROJECTS" title="프로젝트 수행 경력">
      <div className={styles.grid}>
        {projects.map((p, i) => (
          <article key={p.title} className={`${styles.card} reveal`}>
            <span className={styles.no}>{String(i + 1).padStart(2, "0")}</span>
            <h3 className={styles.title}>{p.title}</h3>
            <p className={styles.role}>{p.role}</p>
            <div className={styles.meta}>
              <span className={styles.client}>{p.client}</span>
              <span className={styles.period}>{p.period}</span>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
