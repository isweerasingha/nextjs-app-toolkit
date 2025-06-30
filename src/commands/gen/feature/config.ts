// src/commands/feature/feature.config.ts

export const featureConfig = {
  // Sub-directories to be created within the feature folder
  subfolders: ["hooks", "services", "state", "utils", "config", "types"],

  // A map of template files to their destination subfolder and filename
  templates: {
    hook: {
      fileName: "__camelCase__.hooks.ts",
      destination: "hooks",
    },
    service: {
      fileName: "__camelCase__.service.ts",
      destination: "services",
    },
    slice: {
      fileName: "__camelCase__.slice.ts",
      destination: "state",
    },
    types: {
      fileName: "__camelCase__.types.ts",
      destination: "types",
    },
    config: {
      fileName: "__camelCase__.config.ts",
      destination: "config",
    },
    utils: {
      fileName: "__camelCase__.utils.ts",
      destination: "utils",
    },
    index: {
      fileName: "index.ts",
      destination: "", // Place in the root of the feature folder
    },
  },
};
