import { readdirSync } from "node:fs";
import path from "node:path";

const PAGE_FILE = /^page\.(tsx|ts|jsx|js|mdx)$/;

/**
 * Finds every static page route by scanning the app directory, so new pages
 * appear in the sitemap automatically. Skips route groups' parentheses in the
 * URL, and ignores private (_x), parallel (@x) and dynamic ([x]) segments,
 * since dynamic routes can't be listed without their own data source.
 */
export function getStaticRoutes(appDir = path.join(process.cwd(), "app")): string[] {
  const routes: string[] = [];

  function walk(dir: string, segments: string[]) {
    const entries = readdirSync(dir, { withFileTypes: true });

    if (entries.some((entry) => entry.isFile() && PAGE_FILE.test(entry.name))) {
      routes.push("/" + segments.join("/"));
    }

    for (const entry of entries) {
      if (!entry.isDirectory()) continue;
      const { name } = entry;
      if (name.startsWith("_") || name.startsWith("@") || name.startsWith("[")) continue;
      const isGroup = name.startsWith("(") && name.endsWith(")");
      walk(path.join(dir, name), isGroup ? segments : [...segments, name]);
    }
  }

  walk(appDir, []);
  return routes.sort();
}
