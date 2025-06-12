// src/commands/gen/feature/feature.action.ts
import * as fs from "fs";
import * as path from "path";
import { generateNameVariations } from "../../../utils/formatting";
import { featureConfig } from "./feature.config";

/**
 * Replaces placeholders in a string with actual values.
 */
function replacePlaceholders(
  content: string,
  variations: ReturnType<typeof generateNameVariations>
): string {
  return content.replace(
    /__(pascalCase|camelCase|plural|upperSnakeCase)__/g,
    (match, p1) => {
      return variations[p1 as keyof typeof variations];
    }
  );
}

/**
 * The main action for generating a feature.
 */
export function generateFeatureAction(featureName: string) {
  console.log(`Starting generation for feature: ${featureName}...`);

  const variations = generateNameVariations(featureName);
  // This correctly creates the feature folder inside the project where you run the command.
  const targetDir = path.join(
    process.cwd(),
    "src",
    "features",
    variations.camelCase
  );

  // 1. Create all necessary directories
  fs.mkdirSync(targetDir, { recursive: true });
  featureConfig.subfolders.forEach((subfolder) => {
    if (subfolder) {
      fs.mkdirSync(path.join(targetDir, subfolder), { recursive: true });
    }
  });

  // 2. Process and create files from templates
  Object.entries(featureConfig.templates).forEach(([templateName, config]) => {
    // --- THIS IS THE UPDATED LINE ---
    // It now reads from the foolproof '.ts.txt' extension.
    const templatePath = path.join(
      __dirname,
      "templates",
      `${templateName}.ts.txt`
    );
    // --- END OF UPDATE ---

    if (!fs.existsSync(templatePath)) {
      console.warn(`[Warning] Template file not found: ${templatePath}`);
      return;
    }

    const templateContent = fs.readFileSync(templatePath, "utf-8");

    const processedContent = replacePlaceholders(templateContent, variations);
    const finalFileName = replacePlaceholders(config.fileName, variations);

    const destinationPath = path.join(
      targetDir,
      config.destination,
      finalFileName
    );
    fs.writeFileSync(destinationPath, processedContent);
  });

  console.log(`Successfully created feature: ${variations.pascalCase}`);
  console.log(`Path: ${targetDir}`);
}
