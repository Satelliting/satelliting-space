import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { SectionHead } from "@/components/ui/SectionHead";
import { featuredProjects } from "@/content/projects";
import { ProjectCard } from "./ProjectCard";
import styles from "./Projects.module.css";

export function Projects() {
  return (
    <Section id="projects" padding="no-top">
      <SectionHead
        title="Recent launches"
        description="A snapshot of projects that show our range and craft."
      />
      <div className={styles.grid}>
        {featuredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            href={project.href}
            image={project.image}
            imageAlt={project.imageAlt}
          />
        ))}
      </div>
      <div className={styles.more}>
        <Button variant="ghost" href="/projects">
          View all projects
        </Button>
      </div>
    </Section>
  );
}
