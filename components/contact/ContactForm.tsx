"use client";

import { useState, type FormEvent } from "react";
import { buttonClassName } from "@/components/ui/Button";
import { Panel } from "@/components/ui/Panel";
import { formIntro, needs, timelines } from "@/content/contact";
import { site } from "@/content/site";
import styles from "./ContactForm.module.css";

export function ContactForm() {
  const [status, setStatus] = useState("");

  // No backend yet: open the visitor's email app with the form filled in.
  // To use a form service instead, post to it here and drop the mailto.
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const selectedNeeds = data.getAll("need").join(", ") || "Not specified";
    const body =
      `Name: ${data.get("name")}\nEmail: ${data.get("email")}` +
      `\nCompany: ${data.get("company") || "N/A"}\nNeeds: ${selectedNeeds}` +
      `\nLaunch window: ${data.get("timeline")}\n\n${data.get("message")}`;

    setStatus("Opening your email app...");
    window.location.href =
      `mailto:${site.email}?subject=` +
      encodeURIComponent(`New project inquiry from ${data.get("name")}`) +
      `&body=${encodeURIComponent(body)}`;
  }

  return (
    <Panel title={formIntro.title} description={formIntro.description}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.field}>
          <label htmlFor="name">Name</label>
          <input id="name" name="name" autoComplete="name" required placeholder="Your name" />
        </div>
        <div className={styles.field}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="you@company.com"
          />
        </div>
        <div className={`${styles.field} ${styles.full}`}>
          <label htmlFor="company">
            Company or website <small>(optional)</small>
          </label>
          <input id="company" name="company" placeholder="yourcompany.com" />
        </div>
        <fieldset className={`${styles.field} ${styles.full} ${styles.fieldset}`}>
          <legend>What do you need?</legend>
          <div className={styles.chips}>
            {needs.map((need, index) => (
              <span key={need}>
                <input type="checkbox" id={`need-${index}`} name="need" value={need} />
                <label htmlFor={`need-${index}`}>{need}</label>
              </span>
            ))}
          </div>
        </fieldset>
        <div className={`${styles.field} ${styles.full}`}>
          <label htmlFor="timeline">Ideal launch window</label>
          <select id="timeline" name="timeline">
            {timelines.map((timeline) => (
              <option key={timeline}>{timeline}</option>
            ))}
          </select>
        </div>
        <div className={`${styles.field} ${styles.full}`}>
          <label htmlFor="message">Project details</label>
          <textarea
            id="message"
            name="message"
            required
            placeholder="What's the goal? Who is it for? Anything you love or hate about your current site?"
          />
        </div>
        <div className={styles.send}>
          <button className={buttonClassName("primary")} type="submit">
            Send transmission
          </button>
          <p className={styles.status} role="status">
            {status}
          </p>
        </div>
      </form>
    </Panel>
  );
}
