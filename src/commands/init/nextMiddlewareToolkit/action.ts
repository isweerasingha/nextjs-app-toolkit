import * as fs from "fs";
import * as path from "path";
import { middlewareToolkitConfig } from "./config";

// The action function now accepts an options object
export function initMiddlewareToolkitAction(options: { path: string }) {
  console.log(`🚀 Initializing Next.js Middleware Toolkit...`);

  // Determine the base path. Handle the special case where "/" means the project root.
  const basePath = options.path === "/" ? "" : options.path;

  const projectRoot = process.cwd();

  middlewareToolkitConfig.files.forEach((fileConfig) => {
    const templatePath = path.join(
      __dirname,
      "templates",
      `${fileConfig.templateName}.ts.txt`
    );
    if (!fs.existsSync(templatePath)) {
      console.warn(`[Warning] Template file not found: ${templatePath}`);
      return;
    }

    const templateContent = fs.readFileSync(templatePath, "utf-8");

    const destinationPathWithBase = fileConfig.destinationPath.replace(
      /^src/,
      basePath
    );

    const destinationDir = path.join(projectRoot, destinationPathWithBase);
    const destinationFile = path.join(destinationDir, fileConfig.outputName);

    fs.mkdirSync(destinationDir, { recursive: true });
    fs.writeFileSync(destinationFile, templateContent);
  });

  console.log(
    `✅ Middleware Toolkit initialized successfully in '${basePath || "./"}'!`
  );
  console.log("📍 Files created:");
  const finalPaths = middlewareToolkitConfig.files.map(
    (f) =>
      `   - ${path
        .join(basePath, f.destinationPath.replace(/^src/, ""), f.outputName)
        .replace(/\\/g, "/")}`
  );
  finalPaths.forEach((p) => console.log(p));
  console.log(
    "\nNext step: Update your middleware rules in the generated `middleware.ts` file."
  );
}
