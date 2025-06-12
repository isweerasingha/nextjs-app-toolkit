// src/commands/feature/feature.config.ts

export const featureConfig = {
  // Sub-directories to be created within the feature folder
  subfolders: ["hooks", "services", "state", "utils", "config", "types"],

  // A map of template files to their destination subfolder and filename
  templates: {
    hook: {
      fileName: "use__pascalCase__List.ts",
      destination: "hooks",
    },
    service: {
      fileName: "__camelCase__Service.ts",
      destination: "services",
    },
    slice: {
      fileName: "__camelCase__Slice.ts",
      destination: "state",
    },
    types: {
      fileName: "__camelCase__Types.ts",
      destination: "types",
    },
    config: {
      fileName: "tags.ts",
      destination: "config",
    },
    utils: {
      fileName: "__camelCase__Utils.ts",
      destination: "utils",
    },
    index: {
      fileName: "index.ts",
      destination: "", // Place in the root of the feature folder
    },
  },
};
