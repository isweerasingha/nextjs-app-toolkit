"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateFeatureAction = generateFeatureAction;
// src/commands/gen/feature/feature.action.ts
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const formatting_1 = require("../../../utils/formatting");
const feature_config_1 = require("./feature.config");
/**
 * Replaces placeholders in a string with actual values.
 */
function replacePlaceholders(content, variations) {
    return content.replace(/__(pascalCase|camelCase|plural|upperSnakeCase)__/g, (match, p1) => {
        return variations[p1];
    });
}
/**
 * The main action for generating a feature.
 */
function generateFeatureAction(featureName) {
    console.log(`🚀 Starting generation for feature: ${featureName}...`);
    const variations = (0, formatting_1.generateNameVariations)(featureName);
    // This correctly creates the feature folder inside the project where you run the command.
    const targetDir = path.join(process.cwd(), 'app', 'features', variations.camelCase);
    // 1. Create all necessary directories
    fs.mkdirSync(targetDir, { recursive: true });
    feature_config_1.featureConfig.subfolders.forEach(subfolder => {
        if (subfolder) {
            fs.mkdirSync(path.join(targetDir, subfolder), { recursive: true });
        }
    });
    // 2. Process and create files from templates
    Object.entries(feature_config_1.featureConfig.templates).forEach(([templateName, config]) => {
        // --- THIS IS THE UPDATED LINE ---
        // It now reads from the foolproof '.ts.txt' extension.
        const templatePath = path.join(__dirname, 'templates', `${templateName}.ts.txt`);
        // --- END OF UPDATE ---
        if (!fs.existsSync(templatePath)) {
            console.warn(`[Warning] Template file not found: ${templatePath}`);
            return;
        }
        const templateContent = fs.readFileSync(templatePath, 'utf-8');
        const processedContent = replacePlaceholders(templateContent, variations);
        const finalFileName = replacePlaceholders(config.fileName, variations);
        const destinationPath = path.join(targetDir, config.destination, finalFileName);
        fs.writeFileSync(destinationPath, processedContent);
    });
    console.log(`✅ Successfully created feature: ${variations.pascalCase}`);
    console.log(`📍 Path: ${targetDir}`);
}
