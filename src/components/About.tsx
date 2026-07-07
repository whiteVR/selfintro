import { profile } from "../data/profile";
import Section from "./Section";
import styles from "./About.module.css";

export default function About() {
  return (
    <Section id="about" eyebrow="ABOUT" title="소개">
      <div className={`${styles.grid} reveal`}>
        <div className={styles.card}>
          <div className={styles.avatar}>
            <img src={profile.photo} alt={`${profile.name} 프로필`} />
          </div>
          <h3 className={styles.name}>{profile.name}</h3>
          <p className={styles.role}>{profile.role}</p>
          <ul className={styles.contact}>
            <li>
              <span>Email</span>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </li>
            <li>
              <span>Phone</span>
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
            CAD·VR 개발에서 출발해 실감형 시뮬레이터, Web3D, 메타버스, 디지털트윈으로 이어지는
            기술 흐름을 실무와 강의 양쪽에서 축적해 왔습니다. 원자력·자동차·중공업 등 고신뢰
            도메인의 대형 프로젝트를 기술 총괄로 수행했으며, 현재는 AI·디지털트윈까지 영역을
            확장하고 있습니다.
          </p>
          <p className={styles.para}>
            홍익대 국제디자인대학원을 비롯한 디자인 기반의 시각적 감각과 엔지니어링 역량을 함께
            갖추고, 7종의 NCS 공인강사 자격으로 차세대 XR·AI 인재 양성에 힘쓰고 있습니다.
          </p>
        </div>
      </div>
    </Section>
  );
}
