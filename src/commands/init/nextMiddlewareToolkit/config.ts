export const middlewareToolkitConfig = {
  files: [
    {
      templateName: "middleware",
      destinationPath: "src",
      outputName: "middleware.ts",
    },
    {
      templateName: "toolkit",
      destinationPath: "src/utils/NextMiddlewareToolkit",
      outputName: "toolkit.ts",
    },
    {
      templateName: "types",
      destinationPath: "src/utils/NextMiddlewareToolkit",
      outputName: "types.ts",
    },
    {
      templateName: "index",
      destinationPath: "src/utils/NextMiddlewareToolkit",
      outputName: "index.ts",
    },
  ],
};
