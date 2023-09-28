const yaml = require('js-yaml');
const path = require('path');
const fs = require('fs');
const FIELDS_YAML_FILE_PATH = path.resolve('fixtures/data-provider.yaml');

export function loadFieldsConfigFromYaml(): Record<string, string> {
  const yamlData = fs.readFileSync(FIELDS_YAML_FILE_PATH, 'utf8');
  return yaml.load(yamlData) as Record<string, string>;
}

export function readFromYamlFilePath(arrayName: string): Record<string, string> {
  const dataArray = loadFieldsConfigFromYaml()[arrayName];
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




