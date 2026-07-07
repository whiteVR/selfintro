import { skills } from "../data/profile";
import Section from "./Section";
import styles from "./Skills.module.css";

export default function Skills() {
  return (
    <Section id="skills" eyebrow="EXPERTISE" title="보유 핵심 기술">
      <div className={styles.grid}>
        {skills.map((g) => (
          <div key={g.category} className={`${styles.card} reveal`}>
            <h3 className={styles.category}>{g.category}</h3>
            <ul className={styles.chips}>
              {g.items.map((it) => (
                <li key={it}>{it}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
