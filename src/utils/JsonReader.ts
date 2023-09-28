const path = require('path');
const fs = require('fs');
const FIELDS_JSON_FILE_PATH = path.resolve('fixtures/data-provider.json');

export function loadFieldsConfigFromJson(): Record<string, string> {
  const jsonData = fs.readFileSync(FIELDS_JSON_FILE_PATH, 'utf8');
  return JSON.parse(jsonData) as Record<string, string>;
}

export function readFromJsonFilePath(arrayName: string): Record<string, string> {
  const dataArray = loadFieldsConfigFromJson()[arrayName];
  if (Array.isArray(dataArray)) {
    const object: Record<string, string> = {};
    dataArray.forEach(item => {
      const [key, value] = Object.entries(item as Record<string, unknown>)[0];
      object[key] = value as string;
    });
    return object;
  }
  return {};
}
