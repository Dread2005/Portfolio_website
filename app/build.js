import { mkdirSync, cpSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(fileURLToPath(import.meta.url));
const dist = resolve(root, 'dist');

mkdirSync(dist, { recursive: true });
cpSync(resolve(root, 'src'), dist, { recursive: true });
console.log('Build complete → dist/');
