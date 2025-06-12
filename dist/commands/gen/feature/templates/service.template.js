"use strict";
// src/commands/feature/templates/service.ts
"use server";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get__pascalCase__s = get__pascalCase__s;
const tags_1 = require("../config/tags");
const API_BASE_URL = "http://example.com/api";
async function get__pascalCase__s() {
    const res = await fetch(`${API_BASE_URL}/__plural__`, {
        next: { tags: [tags_1.__upperSnakeCase___TAG] },
    });
    if (!res.ok)
        throw new Error('Failed to fetch __plural__');
    return res.json();
}
// Add other CRUD function templates here...
