import styles from "./Section.module.css";

type Props = {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
};

export default function Section({ id, eyebrow, title, children }: Props) {
  return (
    <section id={id} className={styles.section}>
      <div className="container">
        <header className={`${styles.head} reveal`}>
          <p className={styles.eyebrow}>{eyebrow}</p>
          <h2 className={styles.title}>{title}</h2>
        </header>
        {children}
      </div>
    </section>
  );
}
