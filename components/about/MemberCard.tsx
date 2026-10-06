import styles from "./MemberCard.module.css";

type MemberCardProps = {
  name: string;
  role: string;
  bio: string[];
  skills: string[];
  accent: "green" | "sky";
};

export function MemberCard({ name, role, bio, skills, accent }: MemberCardProps) {
  return (
    <article className={`${styles.member} ${styles[accent]}`}>
      <div className={styles.top}>
        <div className={styles.portrait} aria-hidden="true">
          {name.charAt(0)}
        </div>
        <div>
          <h3>{name}</h3>
          <p className={styles.role}>{role}</p>
        </div>
      </div>
      {bio.map((paragraph) => (
        <p key={paragraph} className={styles.bio}>
          {paragraph}
        </p>
      ))}
      <ul className={styles.skills}>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </article>
  );
}
