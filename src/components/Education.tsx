import { education, certifications } from "../data/profile";
import Section from "./Section";
import styles from "./Education.module.css";

export default function Education() {
  return (
    <Section id="education" eyebrow="EDUCATION & LICENSE" title="학력 · 자격">
      <div className={styles.cols}>
        <div className={`${styles.col} reveal`}>
          <h3 className={styles.colTitle}>학력</h3>
          <ul className={styles.eduList}>
            {education.map((e) => (
              <li key={e.school}>
                <div className={styles.eduTop}>
                  <span className={styles.degree}>{e.degree}</span>
                  <span className={styles.period}>{e.period}</span>
                </div>
                <p className={styles.school}>{e.school}</p>
                <p className={styles.major}>{e.major}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className={`${styles.col} reveal`}>
          <h3 className={styles.colTitle}>자격 및 면허</h3>
          <ul className={styles.certList}>
            {certifications.map((c) => (
              <li key={c}>
                <span className={styles.check} aria-hidden="true">✓</span>
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
