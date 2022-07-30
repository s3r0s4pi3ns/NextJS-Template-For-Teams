<p align="center">
  <a href="https://nextjs.org">
    <img src="https://assets.vercel.com/image/upload/v1607554385/repositories/next-js/next-logo.png" height="128">
    <h1 align="center">Next.js template to work in a developers team</h1>
  </a>
</p>

## The structure

This organization of the files gives life a basic configuration for working in teams of developers. **ESLint, prettier, husky and commitlint** help to keep a standard in the consequent code changes by multiple developers avoiding unnecessary conflicts regardless of the environment they use.

The project does not have too much boilerplate, just the configuration files and the initial setup of Next.js when you install it.

Typescript as a development language.

## Getting started

To take advantage of the _.npmrc_ and _.nvmrc_ files you need to install a node version manager like [nvm](https://github.com/nvm-sh/nvm) [fnm](https://github.com/jorgebucaran/nvm.fish#nvmfish) or [volta](https://volta.sh/).

Make sure you run `nvm use` to setup the restricted version defined on **.rc** files and **package.json** before run the project.

### To run the project

Install dependencies using `yarn`
Start coding using `yarn dev`

## package.json

The engines are restricted by default with this values but feel free to change and that suits your needs _(you may still need support for node 14 for example_.

```json
  "engines": {
    "node": ">=16.0.0",
    "yarn": ">=1.22.0",
    "npm": "please-use-yarn"
  },
  "scripts": {
    "dev": "cross-env NODE_OPTIONS='--inspect' next dev",
    "build": "cross-env NODE_ENV=production next build",
    "start": "next start",
    "lint": "next lint",
    "prettier": "prettier --write .",
    "fix-code": "yarn lint && yarn prettier",
    "prepare": "husky install"
  },
```

## Git hooks

[Husky](https://typicode.github.io/husky/) is configured with 3 basic hooks that can be totally configurable and expanded:

### pre-commit

This hook can be find on `.husky/pre-commit` and fix the code with help of prettier and lint before add the commit so everyone in the project is going to have the same code format.

## commit-msg

Validate the commit message with [commitlint](https://commitlint.js.org/), it can be configured on `commitlint.config.js`

- build: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- ci: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
- docs: Documentation only changes
- feat: A new feature
- fix: A bug fix
- perf: A code change that improves performance
- refactor: A code change that neither fixes a bug nor adds a feature
- style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- test: Adding missing tests or correcting existing tests
- security: Manage security vulnerabilities or improve the existing one for the future
- translation: All changes that relates to translations (i18n) in the system

## pre-push

Run the build before push to the git repository to make sure the entire code build keep working after the latest changes.
This is the perfect place where the test should run if you want to integrate them into your project.

## Security headers

A basic configuration defined on `next.config.js` to mitigate the most popular attacks your web application can receive. It's important to know if you're loading external assets, the domains must be allowed in the content policy section.

## Production ready

`Dockerfile.prod` from the official template you can find on [Next.js examples](https://github.com/vercel/next.js/blob/canary/examples/with-docker/Dockerfile)

If you want to run the image locally

```bash
# Build
 docker build -t nextjs-docker .
# Run
docker run -d -p 3000:3000 nextjs-docker
```
