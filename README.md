# TypeScript Boilderplate

- By Nick Gogan (gogannick@gmail.com) on 7/27/2018

This project can be used a base for TypeScript projects. It is also a useful study into putting together a minimalistic boilerplate for Angular projects.

- Note: It's best to let the [**angular-cli**](https://angular.io/guide/quickstart) generate your Angular projects.
- Note: It's also possible to [write **React** using Typescript]().

## Prerequisites

This guide assumes that **Windows** is used (Windows 7 or Windows 10). [**Node**](https://nodejs.org/en/) is used as the backend.

## Project Outline

```
.ts-node/      -> Caches output from ts-node for faster compilation
.vscode/       -> Holds configuration files for VSC
  - github-markdown.css   -> Styling for VSC's markdown preview
  - launch.json           -> VSC debugging configuration
  - vsicons.settings.json -> Configuration for VSC icons extension
dist/          -> Holds ES output files
node_modules   -> npm dependencies
.editorconfig
.gitattributes
.gitignore
app.ts         -> Main TS module
bad_example.ts -> Test file showcasing that linting works
package-lock.json
package.json
README.md
tsconfig.json
tslint.json
```

### [TypeScript](https://www.typescriptlang.org/)

The language is installed using npm (See the **package.json** for all project metadata and dependencies). Compiler configuration is kept in tsconfig.json. The more confusing lines are commented for clarity.

At dev-time, there are enforcments of code correctness (handled by the typescript compiler) and code style (handled by [**TSLint**](https://palantir.github.io/tslint/) and [**Prettier**](https://prettier.io/). See [this article](https://alexjoverm.github.io/2017/06/12/Use-Prettier-with-TSLint-and-be-happy/) for details).

### Linting and Code Style

The following packages are used:

- [**tslint**](https://palantir.github.io/tslint/)
- [**tslint-eslint-rules**](https://www.npmjs.com/package/tslint-eslint-rules)
- [**tslint-config-prettier**](https://www.npmjs.com/package/tslint-config-prettier)

**tslint.json** contains the TSLint configuration and mainly exists to make the three packages above play nice with each other. There are also a couple of extra rules that are pretty much optional, but nice to have. For a full list of rules, see the dependencies' sites.

- **Note**: The order in which these TSLint configuration packages appear in tslint.json's `extends` array is important.

In addition to the TSLint configuration dependencies above, the compiler requires type definition for Node. This is handled by **@types/Node**. The `typeRoots` property in tsconfig.json points to where npm installs these @types packages, so it will automatically work. At most, you may have to restart VSC to make the TSLint see the new type definitions.

The three packages above + the Node type definitions constitute the base for proper Linting and compiler

For Angular projects, the following can augment that base:

- [**tslint-angular**](https://github.com/mgechev/tslint-angular)
- **@types/Angular**

For React projects, the following can augment the base:

- [**tslint-react**](https://github.com/palantir/tslint-react)
- **@types/React**
- **@types/React-DOM**

In both the Angular and React cases, their specific TSLint configuration dependency should be added right before tslint-config-prettier. Ex:

```
{
  "extends": [
    "tslint:recommended",
    "tslint-eslint-rules",
    "tslint-angular",
    "tslint-config-prettier"
  ]
  ...
}
```

### Version Control

Version control is handled by **git** and all code/artifacts are stored in [**GitHub**](https://github.com/SinequaGogan/TypeScript-Training). Git configuration is handled in [**gitattributes**](https://git-scm.com/docs/gitattributes) and [**gitignore**](https://git-scm.com/docs/gitignore). The contents of each file is an aggregate from multiple sources and are intended to produce effects useful in Node, Angular, or React applications. They are fairly well documented, so inspect them for specifics.

## Visual Studio Code [(VSC)](https://code.visualstudio.com/)

It is assumed that VSC is the code editor used to develop on top of this boilerplate. However, the extensions involved are most likely available for other editors as well, just Google around. Note again that the angular-cli package is still the recommended way of creating a starter Angular project. If you want to understand how a minimalist Angular project would work (i.e. no Redux, no RxJS, no internationalization, etc...), then this boilerplate is for you. There is a dedicated section below that specifically deals with that.

### VSC Extensions

The following extensions are installed via **extensions.sh**:

**Node & Angular:**

1.  [**Angular Snippets**](https://marketplace.visualstudio.com/items?itemName=johnpapa.Angular2): Adds snippets for Angular for TypeScript and HTML.
2.  [**Angular Language Service**](https://marketplace.visualstudio.com/items?itemName=Angular.ng-template): This extension provides a rich editing experience for Angular templates, both inline and external templates. This extension is brought to you by members of the Angular team. It is fantastic at helping write solid code in the html templates.
3.  [**EditorConfig for VS Code**](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig): Great for maintaining consistent editor settings.
4.  [**angular2-inline**](https://marketplace.visualstudio.com/items?itemName=natewallace.angular2-inline): It extends the javascript and typescript languages to add Angular2 specific features for inline templates and stylesheets. When you define an inline template or inline style sheet using the backtick character(`) the content will be processed by this extension.
5.  [**Angular Support**](https://marketplace.visualstudio.com/items?itemName=vismalietuva.vscode-angular-support): Very lightweight language support for angular definitions.
6.  [**Babel JavaScript**](https://marketplace.visualstudio.com/items?itemName=mgmcdermott.vscode-language-babel): JavaScript syntax highlighting for ES201x, React JSX, Flow and GraphQL. In this project, needed for the ES201x part.
7.  [**Sass**](https://marketplace.visualstudio.com/items?itemName=robinbentley.sass-indented): Support for indented SCSS, which is now the standard way of writing Sass. A lot of Angular styling is done in Sass as opposed to CSS or PostCSS.
8.  [**postcss-sugarss-language**](https://marketplace.visualstudio.com/items?itemName=mhmadhamster.postcss-language): VSCode language support for PostCSS and SugarSS. For when styling is wanted in PostCSS.
9.  [**npm**](https://marketplace.visualstudio.com/items?itemName=eg2.vscode-npm-script): Supports running npm scripts defined in the package.json file and validating the installed modules against the dependencies defined in the package.json.
10. [**Npm Intellisense**](https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense): Visual Studio Code plugin that autocompletes npm modules in import statements.
11. [**Path Intellisense**](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense): Visual Studio Code plugin that autocompletes filenames.
12. [**TSLint**](https://marketplace.visualstudio.com/items?itemName=eg2.tslint): Integrates the tslint linter for the TypeScript language into VS Code.
13. [**ESLint**](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint): Integrates ESLint into VS Code.
14. [**Prettier - Code Formatter**](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode): VS Code package to format your JavaScript / TypeScript / CSS using Prettier.

**Useful tools:**

1.  [**Backer Pair Colorizer**](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer): Identifies matching brackets with the same color. I found this one especially useful.
2.  [**Auto Import**](https://marketplace.visualstudio.com/items?itemName=steoates.autoimport): Automatically finds, parses and provides code actions and code completion for all available imports. Works with Typescript and TSX.
3.  [**Auto Rename Tag**](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-**tag**): Automatically rename paired HTML/XML tag, same as Visual Studio IDE does.
4.  [**Auto Close Tag**](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag): Automatically add HTML/XML close tag, same as Visual Studio IDE or Sublime Text does.
5.  [**Git History**](https://marketplace.visualstudio.com/items?itemName=donjayamanne.githistory): View git log, file history, compare branches or commits.
6.  [**HTML Snippets**](https://marketplace.visualstudio.com/items?itemName=abusaidm.html-snippets): Adds rich language support for the HTML Markup.
7.  [**Bookmarks**](https://marketplace.visualstudio.com/items?itemName=alefragnani.Bookmarks): Mark lines and jump to them.
8.  [**Color Highlight**](https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight): Shows hex and rgb(a) colors directly in the editor.
9.  [**Markdown All in One**](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one): Useful when writing .md files like this one.
10. [**TODO Highlight**](https://marketplace.visualstudio.com/items?itemName=wayou.vscode-todo-highlight): Highlight TODO, FIXME and other annotations within your code.
11. [**XML Tools**](https://marketplace.visualstudio.com/items?itemName=DotJoshJohnson.xml)
12. [**YAML Support by Red Hat**](https://marketplace.visualstudio.com/items?itemName=redhat.vscode-yaml): Provides YAML support via yaml-language-server with built-in Kubernetes and Kedge syntax support.
13. [**DotENV**](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv): A port of DotENV for vscode.

**Nice to Have:**

1.  [**Wrap Selection**](https://marketplace.visualstudio.com/items?itemName=konstantin.wrapSelection): Allows you to wrap one or multiple selections with symbol/combination of symbols.
2.  [**Quokka**](https://marketplace.visualstudio.com/items?itemName=WallabyJs.quokka-vscode): A rapid prototyping playground in the editor. Check it out [here](https://quokkajs.com/docs/index.html).
3.  [**Flow Language Support**](https://marketplace.visualstudio.com/items?itemName=flowtype.flow-for-vscode): Flow-based type checking that runs on top of ES code. More [here](https://flow.org/en/).
4.  [**Shell Launcher**](https://marketplace.visualstudio.com/items?itemName=Tyriar.shell-launcher): Easily launch multiple shell configurations in the terminal.
5.  [**vscode-icons**](https://marketplace.visualstudio.com/items?itemName=robertohuertasm.vscode-icons): Nice icons in left panel.

## Build Workflow

The following dependencies are used in the **build flow**:

- [**npm-run-all**](https://www.npmjs.com/package/npm-run-all)
- [**rimraf**](https://www.npmjs.com/package/rimraf)

The pipeline is composed of 3 npm scripts that are run sequentially with the `npm start` command:

- **clean**: Removes contents of **dist/**
- **build**: Uses the typescript compiler to emit ES5. The compiler is configured in the [**tsconfig.json**](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) file.
- **serve**: Runs the output ES5 with Node.

## Debugging Workflow

The following dependencies are used in the [**debugging flow**](https://code.visualstudio.com/docs/editor/debugging):

- [**nodemon**](https://nodemon.io/): Nodemon is a utility that will monitor for any changes in your source and automatically restart your server.
- [**ts-node**](https://github.com/TypeStrong/ts-node): TypeScript execution and REPL for node.js, with source map support. Works with typescript@>=2.0

Debugging is handled by VSC, which makes use of the dependencies above. Configuration for the VSC Node debugger is specified in **.vscode/launch.json**. The flow goes like this

- VSC launches **nodemon** (specified with `runtimeExecutable`) with specific arguements (specified with `runtimeArgs`). The most important part is that nodemon then calls **ts-node**.
- ts-node is called by nodemon with its own arguements (specified with `args`).
- `env` holds environment variables that VSC injects at runtime. The `TS_NODE_CACHE_DIRECTORY` caches compiled ts-node code (i.e. emitted ES code)
- `"restart": true,` allows the debugger to restart and get back to the first breakpoint when nodemon restarts. Nodemon restarts when a .ts file is saved.
- `"sourceMaps": true` is required for VSC to debug the .ts files instead of the compiled ES output.

Note: VSC also supports task management in **.vscode/tasks.json** (e.g. running a build pipeline), but npm is used instead.

# TODO

- Add **Sources**
