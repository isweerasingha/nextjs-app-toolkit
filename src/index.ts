#!/usr/bin/env node

import { Command } from "commander";
import { generateFeatureAction } from "./commands/gen/feature/action";
import { initMiddlewareToolkitAction } from "./commands/init/nextMiddlewareToolkit/action";

// Initialize the main command
const program = new Command();

program
  .name("next-toolkit")
  .description(
    "A CLI toolkit for accelerating Next.js development. Developed by I S Weerasingha"
  )
  .version("1.0.0");

// Define the 'generate feature' command
program
  .command("gen:feature")
  .alias("gf")
  .description("Generate a new feature module.")
  .argument("<name>", 'The name of the feature (e.g., "product", "user")')
  .action(generateFeatureAction);

program
  .command('init:middleware')
  .alias('im')
  .description('Initializes a robust Next.js Middleware setup.')
  // --- THIS IS THE UPDATED PART ---
  .option(
    '-p, --path <string>',
    "The base directory for generated files (e.g., 'src', 'lib', or '/')",
    'src'
  )
  .action((options) => {
    // Pass the received options to the action function
    initMiddlewareToolkitAction(options);
  });

// Add more commands here in the future...
// program.command('gen:component')...

// Parse command-line arguments
program.parse(process.argv);
