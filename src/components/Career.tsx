import { career } from "../data/profile";
import Section from "./Section";
import styles from "./Career.module.css";

export default function Career() {
  return (
    <Section id="career" eyebrow="CAREER" title="현장 경력">
      <div className={styles.timeline}>
        {career.map((c) => (
          <div key={c.org + c.period} className={`${styles.item} reveal`}>
            <div className={styles.dot} aria-hidden="true" />
            <div className={styles.content}>
              <div className={styles.top}>
                <h3 className={styles.org}>{c.org}</h3>
                <span className={styles.period}>{c.period}</span>
              </div>
              <p className={styles.role}>
                {c.role} <span className={styles.place}>· {c.place}</span>
              </p>
              <p className={styles.desc}>{c.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
