import { lectures } from "../data/profile";
import Section from "./Section";
import styles from "./Lectures.module.css";

export default function Lectures() {
  return (
    <Section id="lectures" eyebrow="LECTURES" title="강의 경력">
      <div className={`${styles.list} reveal`}>
        {lectures.map((l) => (
          <div key={l.title + l.period} className={styles.row}>
            <div className={styles.main}>
              <h3 className={styles.title}>{l.title}</h3>
              <p className={styles.host}>{l.host}</p>
            </div>
            <div className={styles.side}>
              <span className={styles.hours}>{l.hours}</span>
              <span className={styles.period}>{l.period}</span>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
