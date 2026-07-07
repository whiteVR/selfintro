import { experience } from "../data/profile";
import Section from "./Section";
import styles from "./Experience.module.css";

export default function Experience() {
  return (
    <Section id="experience" eyebrow="EXPERIENCE" title="교육" accent="var(--purple)">
      <div className={styles.timeline}>
        {experience.map((e) => (
          <div key={e.title} className={`${styles.item} reveal`}>
            <div className={styles.marker} aria-hidden="true">
              <span className={styles.badge}>{e.period}</span>
            </div>
            <div className={styles.content}>
              <h3 className={styles.title}>{e.title}</h3>
              <p className={styles.org}>{e.org}</p>
              <p className={styles.desc}>{e.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
