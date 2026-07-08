import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';

const SOURCE_URL = process.env.LAB_MIDIA_CATALOG_URL
  || 'https://raw.githubusercontent.com/fulviofb/lab-midia-ia/master/public-data/catalog.public.json';

const OUTPUT_PATH = resolve('public/data/catalog.public.json');

function validateCatalog(data) {
  if (!data || typeof data !== 'object') {
    throw new Error('Catalog payload is not an object');
  }
  if (!data.schema_version) {
    throw new Error('Missing schema_version');
  }
  if (!Array.isArray(data.items) || data.items.length === 0) {
    throw new Error('Missing non-empty items array');
  }
  if (!Array.isArray(data.categories) || data.categories.length === 0) {
    throw new Error('Missing non-empty categories array');
  }
}

async function main() {
  console.log(`[catalog] fetching ${SOURCE_URL}`);
  const response = await fetch(SOURCE_URL, {
    headers: { 'User-Agent': 'concafras-ia-catalog-fetcher' },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch catalog: ${response.status} ${response.statusText}`);
  }

  const data = await response.json();
  validateCatalog(data);

  await mkdir(dirname(OUTPUT_PATH), { recursive: true });
  await writeFile(OUTPUT_PATH, `${JSON.stringify(data, null, 2)}\n`, 'utf8');

  console.log(`[catalog] wrote ${OUTPUT_PATH}`);
  console.log(`[catalog] ${data.items.length} items, ${data.categories.length} categories, schema ${data.schema_version}`);
}

main().catch((error) => {
  console.error(`[catalog] ${error.message}`);
  process.exit(1);
});
