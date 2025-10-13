<!-- omit in toc -->
# Contributing Guidelines

Before checking the contributing guideline, please read through our [Code of Conduct][code-of-conduct].

We encourage and value all types of contributions. Refer to the [Table of Contents](#table-of-contents)
for guidance on how to start contributing to this project. Following the guidelines
will make the experience smoother for everyone involved, and the community looks
forward to your contributions!

<!-- omit in toc -->
## Table of Contents

<!-- toc -->

- [Development Contributions](#development-contributions)
  * [Repository Organization](#repository-organization)
  * [Repository Conventions](#repository-conventions)
  * [Extension Conventions](#extension-conventions)
  * [Development Workflow](#development-workflow)
    + [Running Scripts](#running-scripts)
    + [Creating a New Extension](#creating-a-new-extension)
  * [Open Tasks](#open-tasks)
- [Documentation Contributions](#documentation-contributions)
- [Support Contributions](#support-contributions)
  * [Answering Questions](#answering-questions)
  * [Validating Bug Reports](#validating-bug-reports)
  * [Contributing to Enhancement Suggestions](#contributing-to-enhancement-suggestions)

<!-- tocstop -->

## Development Contributions

> [!NOTE]
> On [our website][inkdex-website] you can find more detailed documentation on [developing
extensions][inkdex-website-development-docs]. These guides will help you with adhering
to the guidelines found below.

### Repository Organization

The project is organized across multiple repositories, based on the type and theme
of the extensions:

- **Content Extensions:** Split into multiple repositories based on the theme of
the target websites:

  - Extensions for websites with **generic themes** are grouped into [theme-specific
  repositories][generic-theme-repositories].

  - Extensions for websites with **non-generic or custom themes** are grouped together
  into a [single repository][general-extensions-repository].

- **Tracker Extensions:** A [dedicated repository][tracker-extensions-repository]
for extensions that integrate with progress tracking services.

This modular structure keeps repositories focused, maintainable, and easier to contribute
to. Always ensure you're working in the appropriate repository before making changes.

### Repository Conventions

- **File Structure:** Each repository follows the file structure defined by the [template
repository][template-repository]. To propose file structure changes, open an issue
or discussion in that repository.

- **Branch Naming:** Branches within repositories in the [Inkdex Organization][inkdex-organization]
should follow the [Conventional Branch 1.0.0][conventional-branch-spec] specification
to ensure their purpose is clear and naming remains consistent.

- **Commit Messages:** Commit messages should follow the [Conventional Commit 1.0.0][conventional-commit-spec]
specification to keep the commit history clear and consistent.

- **Pull Requests:** Each pull request should be focused, clearly described, and
linked to related issues when applicable. Pull requests must pass all tests (see
the `test` [npm script](#running-scripts)) and receive at least one approved review
before merging.

### Extension Conventions

- **File Structure:** Each extension follows a standardized file structure. This
helps ensure readability, maintainability, and predictability across extensions.

**Simple structure** (suitable for smaller extensions; not all files may be required):

```sh
.
├── forms.ts
├── utils.ts
├── main.ts
├── models.ts
├── network.ts
├── parsers.ts
├── pbconfig.ts
└── static
    └── icon.png
```

**Advanced structure** (used for larger extensions; not all files in an implementation
directory may be required; the `shared` directory is optional):

```sh
.
├── implementations
│   ├── discover-section
│   │   ├── utils.ts
│   │   ├── main.ts
│   │   ├── models.ts
│   │   └── parsers.ts
│   ├── manga
│   │   ├── utils.ts
│   │   ├── main.ts
│   │   ├── models.ts
│   │   └── parsers.ts
│   ├── manga-progress
│   │   ├── forms.ts
│   │   ├── utils.ts
│   │   ├── main.ts
│   │   ├── models.ts
│   │   └── parsers.ts
│   ├── search-results
│   │   ├── utils.ts
│   │   ├── main.ts
│   │   ├── models.ts
│   │   └── parsers.ts
│   ├── settings-form
│   │   ├── forms.ts
│   │   ├── utils.ts
│   │   ├── main.ts
│   │   ├── models.ts
│   │   └── parsers.ts
│   └── shared
│       ├── utils.ts
│       ├── main.ts
│       ├── models.ts
│       └── parsers.ts
├── main.ts
├── pbconfig.ts
├── services
│   └── network.ts
└── static
    └── icon.png
```

> [!NOTE]
> The `forms.ts`, `utils.ts`, `models.ts`, `network.ts`, and `parsers.ts` files
can be turned into directories when organizing them into multiple sub-files improves
clarity or maintainability (like with multiple classes or large functions).

> [!NOTE]
> The contents of `utils.ts` can be moved into a global `src/utils` directory when
they need to be shared across extensions.

- **Branding:**

  - **Name:** The name defined in `pbconfig.ts` must exactly match the name used
  on the website. The directory and class names should be developer-friendly, in
  PascalCase, avoiding spaces and special characters.

  - **Logo:** The logo should be taken from the website whenever possible and must
  be a square PNG.

- **Requests Rate Limiting:** Always rate-limit outgoing requests to prevent overloading
websites during updates or migrations. You can use one of the following presets as
a guideline if the website doesn't share their rate limit publicly (adjust as needed):

  - **Strict:** 1 request per second

  - **Balanced:** 3 requests per second

  - **Loose:** 10 requests per second

- **Versioning:** We use the [Semantic Versioning 2.0.0][semver-2.0.0] specification
for extension versions.

### Development Workflow

#### Running Scripts

Each repository includes useful development scripts. Refer to the `scripts` section
in its `package.json` file to see what’s available (e.g., bundling, serving, formatting).

#### Creating a New Extension

1. Fork and clone the appropriate repository.
2. Run `npm install` (requires [Node.js][node.js] v22+ (latest LTS) and npm).
3. Add your extension code to the `src` directory.
4. Run `npm test` and ensure all tests pass ([husky][husky] is set up to remind you
about this with a pre-push hook).
5. Commit and push your changes.
6. Open a pull request.

A maintainer will then review your pull request and may request changes before merging.

### Open Tasks

You’re welcome to contribute by fixing open bug reports or implementing approved
feature suggestions. To coordinate or ask questions, please open or continue an Issue
or Discussion in the [extension repository][extension-repository], or reach out to
us on our [Discord server][discord-server].

## Documentation Contributions

You can find detailed documentation on [our website][inkdex-website], including guides
on [installing and using extensions][inkdex-website-usage-docs] as well as [developing
extensions][inkdex-website-development-docs]. We welcome and appreciate contributions
that help improve, update, or correct our documentation.

## Support Contributions

### Answering Questions

Assist by answering questions from other community members. Questions can be
asked in our [Discord server][discord-server] or in the [Q&A
Discussions][q-a-discussions]. Your insights are always appreciated!

### Validating Bug Reports

Help ensure bugs can be addressed effectively by attempting to replicate
reported issues and confirming their existence. Bug reports can be made in our
[Discord server][discord-server] or in the [issue tracker][issue-tracker-bugs].

### Contributing to Enhancement Suggestions

Enhancement suggestions often need feedback and refinement. Contribute by
reviewing and discussing these suggestions, offering your perspective, and
proposing improvements. Enhancement suggestions can be made in our [Discord
server][discord-server] or in the [issue tracker][issue-tracker-enhancements].
Your input helps shape the future of the project.

[code-of-conduct]: https://github.com/inkdex/extensions?tab=coc-ov-file#readme
[inkdex-website]: https://inkdex.github.io/installation
[inkdex-website-development-docs]: https://inkdex.github.io/development
[generic-theme-repositories]: https://github.com/orgs/inkdex/repositories?q=topic%3Ageneric
[general-extensions-repository]: https://github.com/inkdex/general-extensions
[tracker-extensions-repository]: https://github.com/inkdex/tracker-extensions
[template-repository]: https://github.com/inkdex/template-extensions
[inkdex-organization]: https://github.com/inkdex
[conventional-branch-spec]: https://conventional-branch.github.io
[conventional-commit-spec]: https://www.conventionalcommits.org/en/v1.0.0
[semver-2.0.0]: https://semver.org/spec/v2.0.0.html
[node.js]: https://nodejs.org
[husky]: https://typicode.github.io/husky
[extension-repository]: https://github.com/inkdex/extensions
[discord-server]: https://discord.gg/inkdex
[inkdex-website-usage-docs]: https://inkdex.github.io/installation
[q-a-discussions]: https://github.com/inkdex/extensions/discussions/categories/q-a
[issue-tracker-bugs]: https://github.com/inkdex/extensions/issues?q=is%3Aissue+is%3Aopen+label%3Abug
[issue-tracker-enhancements]: https://github.com/inkdex/extensions/issues?q=label%3Aenhancement
