import styles from "./Section.module.css";

type Props = {
  id: string;
  eyebrow: string;
  title: string;
  /** 분야별 제목 폰트 컬러 (CSS 색상값) */
  accent?: string;
  children: React.ReactNode;
};

export default function Section({ id, eyebrow, title, accent, children }: Props) {
  return (
    <section id={id} className={styles.section}>
      <div className="container">
        <header className={`${styles.head} reveal`}>
          <p className={styles.eyebrow} style={accent ? { color: accent } : undefined}>
            {eyebrow}
          </p>
          <h2 className={styles.title} style={accent ? { color: accent } : undefined}>
            {title}
          </h2>
        </header>
        {children}
      </div>
    </section>
  );
}
