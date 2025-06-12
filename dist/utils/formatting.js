"use strict";
// src/utils/formatting.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateNameVariations = generateNameVariations;
/**
 * Generates different case variations of a name.
 * @param {string} name - The base name.
 * @returns An object with name variations.
 */
function generateNameVariations(name) {
    const camelCase = name.charAt(0).toLowerCase() + name.slice(1);
    const pascalCase = name.charAt(0).toUpperCase() + name.slice(1);
    const plural = `${camelCase}s`;
    const upperSnakeCase = plural.toUpperCase();
    return {
        camelCase, // product
        pascalCase, // Product
        plural, // products
        upperSnakeCase, // PRODUCTS
    };
}
