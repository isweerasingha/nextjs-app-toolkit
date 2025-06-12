"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.use__pascalCase__List = use__pascalCase__List;
const react_query_1 = require("@tanstack/react-query");
const __camelCase__Service_1 = require("../services/__camelCase__Service");
/**
 * Custom hook to fetch a list of __plural__.
 * Leverages React Query for caching, refetching, and other powerful features.
 */
function use__pascalCase__List() {
    return (0, react_query_1.useQuery)({
        // The query key is used by React Query to manage caching.
        queryKey: ['__plural__'],
        // The query function is the async function that fetches the data.
        queryFn: __camelCase__Service_1.get__pascalCase__s
    });
}
