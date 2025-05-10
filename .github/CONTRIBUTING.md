# Contributing Guidelines <!-- omit in toc -->

Before checking the contributing guideline, please read through our [Code of Conduct][code-of-conduct].

We encourage and value all types of contributions. Refer to the [Table of Contents](#table-of-contents) for guidance on how to start contributing to this project. Following the guidelines will make the experience smoother for everyone involved, and the community looks forward to your contributions!

## Table of Contents <!-- omit in toc -->

- [Development Contributions](#development-contributions)
    - [Repository Structure](#repository-structure)
    - [Project Conventions](#project-conventions)
    - [Development Workflow](#development-workflow)
        - [Running Scripts](#running-scripts)
        - [Creating a New Extension](#creating-a-new-extension)
    - [Open Tasks](#open-tasks)
- [Documentation Contributions](#documentation-contributions)
- [Support Contributions](#support-contributions)
    - [Answering Questions](#answering-questions)
    - [Validating Bug Reports](#validating-bug-reports)
    - [Contributing to Enhancement Suggestions](#contributing-to-enhancement-suggestions)

## Development Contributions

### Repository Structure

The project is organized across multiple repositories, based on the type and theme of the extensions:

- **Content Extensions:** Split into multiple repositories based on the theme of the target websites:

    - Extensions for websites with **generic themes** are grouped into [theme-specific repositories][generic-theme-repositories].

    - Extensions for websites with **non-generic or custom themes** are grouped together into [a single repository][general-extensions-repository].

- **Tracker Extensions:** [A dedicated repository][tracker-extensions-repository] for extensions that integrate with progress tracking services.

This modular structure keeps repositories focused, maintainable, and easier to contribute to. Always ensure you're working in the appropriate repository before making changes.

### Project Conventions

- **Layout:** Each repository follows a shared layout defined in the [template repository][template-repository]. To propose layout changes, open an issue or pull request in that repository.

- **Versioning:** We use [Semantic Versioning 2.0.0][semver-2.0.0] for extension versioning.

- **Branch Naming:** Branches should follow the [semantic branch naming][semantic-branch-names] convention.

- **Commit Messages:** Use [semantic commit messages][semantic-commit-messages] to keep the commit history clear and consistent.

- **Pull Requests:** Large pull requests that include multiple grouped changes must include a detailed description and any related issue or pull request links.

### Development Workflow

#### Running Scripts

Each repository includes useful development scripts. Refer to the `scripts` section in its `package.json` file to see what’s available (e.g., testing, bundling, formatting).

#### Creating a New Extension

1. Fork and clone the appropriate repository.
2. Run `npm install` (requires [Node.js][node.js] and npm).
3. Add your extension code to the `src` directory.
4. Run `npm test` and ensure all tests pass.
5. Commit and push your changes.
6. Open a pull request and contact a maintainer.

### Open Tasks

You're welcome to work on open bug fixes or approved feature suggestions. To coordinate or ask questions, join us on our [Discord server][discord-server].

## Documentation Contributions

We welcome contributions that improve, update, or correct the documentation.

## Support Contributions

### Answering Questions

Assist by answering questions from other community members. Questions can be asked in our [Discord server][discord-server] or in the [Q&A Discussions][q-a-discussions]. Your insights are always appreciated!

### Validating Bug Reports

Help ensure bugs can be addressed effectively by attempting to replicate reported issues and confirming their existence. Bug reports can be made in our [Discord server][discord-server] or in the [issue tracker][issue-tracker-bugs].

### Contributing to Enhancement Suggestions

Enhancement suggestions often need feedback and refinement. Contribute by reviewing and discussing these suggestions, offering your perspective, and proposing improvements. Enhancement suggestions can be made in our [Discord server][discord-server] or in the [issue tracker][issue-tracker-enhancements]. Your input helps shape the future of the project.

[code-of-conduct]: https://github.com/inkdex/extensions?tab=coc-ov-file#readme
[tracker-extensions-repository]: https://github.com/inkdex/tracker-extensions
[generic-theme-repositories]: https://github.com/orgs/inkdex/repositories?q=topic%3Ageneric
[general-extensions-repository]: https://github.com/inkdex/general-extensions
[template-repository]: https://github.com/inkdex/template-extensions
[semver-2.0.0]: https://semver.org/spec/v2.0.0.html
[semantic-branch-names]: https://gist.github.com/seunggabi/87f8c722d35cd07deb3f649d45a31082
[semantic-commit-messages]: https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716
[node.js]: https://nodejs.org
[discord-server]: https://discord.gg/inkdex
[q-a-discussions]: https://github.com/inkdex/extensions/discussions/categories/q-a
[issue-tracker-bugs]: https://github.com/inkdex/extensions/issues?q=is%3Aissue+is%3Aopen+label%3Abug
[issue-tracker-enhancements]: https://github.com/inkdex/extensions/issues?q=label%3Aenhancement
