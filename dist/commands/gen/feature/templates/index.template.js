"use strict";
/**
 * Barrel file for the __pascalCase__ feature.
 * This file re-exports all the modules from this feature folder,
 * allowing for clean imports like:
 * import { use__pascalCase__List, __pascalCase__ } from 'app/features/__camelCase__';
 */
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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./hooks/use__pascalCase__List"), exports);
__exportStar(require("./services/__camelCase__Service"), exports);
__exportStar(require("./state/__camelCase__Slice"), exports);
__exportStar(require("./types/__camelCase__Types"), exports);
__exportStar(require("./config/tags"), exports);
