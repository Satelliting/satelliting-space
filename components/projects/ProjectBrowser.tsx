"use client";

import { useState, type CSSProperties } from "react";
import { categories, projects, type ProjectCategory } from "@/content/projects";
import { NextLaunch } from "./NextLaunch";
import { ProjectShowcase } from "./ProjectShowcase";
import styles from "./ProjectBrowser.module.css";

type Filter = "all" | ProjectCategory;

const options: { id: Filter; label: string }[] = [{ id: "all", label: "All" }, ...categories];

export function ProjectBrowser() {
  const [filter, setFilter] = useState<Filter>("all");
  const visible = projects.filter((project) => filter === "all" || project.category === filter);

  return (
    <>
      <div className={styles.filters} role="group" aria-label="Filter projects">
        <span>Filter:</span>
        {options.map((option) => (
          <button
            key={option.id}
            type="button"
            aria-pressed={filter === option.id}
            onClick={() => setFilter(option.id)}
          >
            {option.label}
          </button>
        ))}
      </div>
      <div className={styles.list}>
        {visible.map((project, index) => (
          <div
            // Keyed by filter so every card remounts and replays its entrance
            key={`${filter}-${project.id}`}
            className={styles.item}
            style={{ "--i": index } as CSSProperties}
          >
            <ProjectShowcase
              id={project.id}
              title={project.title}
              description={project.description}
              href={project.href}
              linkLabel={project.linkLabel}
              image={project.image}
              imageAlt={project.imageAlt}
              tags={[categories.find((c) => c.id === project.category)!.label, project.tag]}
              flip={index % 2 === 1}
            />
          </div>
        ))}
        <div
          key={`${filter}-next`}
          className={styles.item}
          style={{ "--i": visible.length } as CSSProperties}
        >
          <NextLaunch />
        </div>
      </div>
    </>
  );
}
