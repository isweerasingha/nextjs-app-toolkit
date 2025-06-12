#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const feature_action_1 = require("./commands/gen/feature/feature.action");
// Initialize the main command
const program = new commander_1.Command();
program
    .name("next-toolkit")
    .description("A CLI toolkit for accelerating Next.js development. Developed by I S Weerasingha")
    .version("1.0.0");
// Define the 'generate feature' command
program
    .command("gen:feature")
    .alias("gf")
    .description("Generate a new feature module.")
    .argument("<name>", 'The name of the feature (e.g., "product", "user")')
    .action(feature_action_1.generateFeatureAction);
// Add more commands here in the future...
// program.command('gen:component')...
// Parse command-line arguments
program.parse(process.argv);
