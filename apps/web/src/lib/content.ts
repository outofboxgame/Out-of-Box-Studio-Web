import fs from 'fs';
import path from 'path';

const contentPath = path.resolve(process.cwd(), '../../content/site.json');

export type SiteContent = {
  about: {
    title: string;
    subtitle: string;
    philosophy: string[];
    howWeWork: { title: string; text: string }[];
  };
  story: {
    items: { title: string; points: string[] }[];
  };
  founder: {
    bio: string[];
    timeline: string[];
  };
  blog: { title: string; tagline: string };
  contact: { title: string; tagline: string; expectations: string };
  games: {
    list: { title: string; slug: string; hook: string; accent: 'blue' | 'indigo' | 'cyan' }[];
    details: Record<
      string,
      {
        title: string;
        tagline: string;
        description: string;
        trailerGradient: string;
        screenshots: string[];
      }
    >;
  };
};

export function readContent(): SiteContent {
  const raw = fs.readFileSync(contentPath, 'utf-8');
  return JSON.parse(raw);
}

export function writeContent(next: SiteContent) {
  fs.writeFileSync(contentPath, JSON.stringify(next, null, 2), 'utf-8');
}

