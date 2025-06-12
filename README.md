# Next.js App Toolkit CLI

A powerful CLI tool to accelerate Next.js development by scaffolding features, components, and more with a single command.

![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)
[![NPM Version](https://img.shields.io/npm/v/nextjs-app-toolkit.svg)](https://www.npmjs.com/package/nextjs-app-toolkit)

Next.js App Toolkit is a command-line interface (CLI) designed to supercharge your Next.js development workflow. Eliminate repetitive boilerplate setup and generate feature-rich modules instantly, allowing you to focus on building core application logic.

## Features

- **Rapid Scaffolding:** Generate entire feature modules, including hooks, services, state management, types, and configs, with a single command.
- **Best Practices Included:** The generated code follows modern Next.js App Router conventions, including templates for Server Actions, `revalidateTag` for caching, and React Query hooks.
- **Type-Safe by Default:** All generated files are TypeScript-based to ensure type safety from the ground up.
- **Developer-Friendly:** Provides a simple and intuitive command structure that's easy to remember and use.
- **Extensible Architecture:** Designed to be easily expanded with new generators for components, styles, contexts, and more.

---

## Installation

To use the toolkit, install it globally on your system via NPM.

```bash
npm install -g nextjs-app-toolkit
````

*(Note: The package name `nextjs-app-toolkit` is a placeholder until the package is published on NPM.)*

-----

## Usage

Navigate to the root directory of any Next.js project in your terminal and run the toolkit's commands.

### Example: Generate a "Payment" Feature

```bash
next-toolkit gen:feature payment
```

This command will instantly create a new, fully structured module inside your project.

### Generated Module Structure

The command above creates the following directory and files at `app/features/payment/`:

```
app/features/payment/
├── config/
│   └── tags.ts
├── hooks/
│   └── usePaymentList.ts
├── services/
│   └── paymentService.ts
├── state/
│   └── paymentSlice.ts
├── types/
│   └── paymentTypes.ts
└── index.ts
```

-----

## Commands API

| Command | Alias | Description |
| :--- | :--- | :--- |
| `gen:feature <name>` | `gf` | Generates a new, fully-featured module in `app/features/`. The `<name>` should be singular (e.g., `product`, `user`). |
| `gen:component <name>`| `gc` | *(Coming Soon)* Generates a React component file. |
| `init:redux` | | *(Coming Soon)* Sets up Redux Toolkit and a provider for the project. |

-----

## For Developers (Contributing)

Contributions are welcome\! If you'd like to help improve the toolkit, please follow these steps to set up a local development environment.

1.  **Clone the Repository:**

    ```bash
    git clone https://github.com/isweerasingha/nextjs-app-toolkit.git
    cd nextjs-app-toolkit
    ```

2.  **Install Dependencies:**

    ```bash
    npm install
    ```

3.  **Build the Project:**
    The build command compiles all TypeScript source files to JavaScript in the `dist/` folder and copies the necessary template files.

    ```bash
    npm run build
    ```

4.  **Link for Local Testing:**
    This command makes your local version of the toolkit available as a global command on your system.

    ```bash
    npm link
    ```

    After linking, any changes you make to the source code will be active after you run `npm run build` again.

-----

## Author

This project is maintained by **Isuru Weerasingha**.

  - **GitHub:** [@isweerasingha](https://github.com/isweerasingha)
  - **LinkedIn:** [linkedin.com/in/isweerasingha](https://www.linkedin.com/in/isweerasingha/)

## License

This project is licensed under the **GNU General Public License v3.0**. See the [LICENSE](https://www.google.com/search?q=LICENSE) file for the full license text.
