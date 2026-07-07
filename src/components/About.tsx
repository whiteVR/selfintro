import { profile, skills } from "../data/profile";
import Section from "./Section";
import styles from "./About.module.css";

export default function About() {
  return (
    <Section id="about" eyebrow="ABOUT" title="소개" accent="var(--cyan)">
      <div className={`${styles.grid} reveal`}>
        <div className={styles.card}>
          <div className={styles.avatar}>
            <img src={profile.logo} alt="Ethan Aurelio 로고" />
          </div>
          <h3 className={styles.name}>{profile.name}</h3>
          <p className={styles.role}>{profile.role}</p>
          <ul className={styles.contact}>
            <li>
              <span>Email</span>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </li>
            <li>
              <span>Contact</span>
              <p>{profile.phone}</p>
            </li>
            <li>
              <span>Location</span>
              <p>{profile.location}</p>
            </li>
          </ul>
        </div>

        <div className={styles.body}>
          <p className={styles.lead}>{profile.intro}</p>
          <p className={styles.para}>
            제조·물류 현장의 데이터를 가상 공간에 실시간으로 잇는 디지털 트윈과, Unity·Unreal
            기반의 실감형 시뮬레이션을 설계·개발합니다. 동시에 이 기술을 학습자의 눈높이에 맞춘
            커리큘럼으로 옮겨, AI 융합 인재를 길러내는 교육 연구를 병행합니다.
          </p>

          <div className={styles.skills}>
            {skills.map((g) => (
              <div key={g.category} className={styles.skillGroup}>
                <h4 className={styles.skillCat}>{g.category}</h4>
                <ul className={styles.chips}>
                  {g.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
