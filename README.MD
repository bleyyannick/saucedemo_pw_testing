# SauceDemo Playwright Tests

Ce projet est un projet d'automatisation de tests avec Playwright en TypeScript. Il contient plusieurs cas de tests classes selon leur importance (critique, importante, normale).

Les cas de tests detailles sont dans [test-cases-saucedemo.md](test-cases-saucedemo.md).

## Prerequis

- Node.js
- npm

## Installation

```bash
npm install
npx playwright install
```

## Executer les tests

```bash
npx playwright test
```

Executer un test specifique :

```bash
npx playwright test tests/example.spec.ts
```

Executer en mode headed :

```bash
npx playwright test --headed
```

Generer un rapport HTML :

```bash
npx playwright show-report
```

## CI avec GitHub Actions

Je veux faire tourner ces tests en CI avec GitHub Actions. Le workflow doit installer les dependances, installer Playwright, puis lancer `npx playwright test` sur chaque push et pull request.
