import { cp, mkdir } from 'node:fs/promises';
await mkdir('dist', { recursive: true });
for (const entry of ['index.html', 'activities.html', 'volunteers.html', 'about.html', 'detail.html', 'styles.css', 'script.js', 'assets']) await cp(entry, `dist/${entry}`, { recursive: true, force: true });
console.log('AgileTour Beijing built to dist/');
