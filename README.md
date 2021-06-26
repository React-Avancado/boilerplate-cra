![React Avançado](https://raw.githubusercontent.com/React-Avancado/boilerplate/master/public/img/logo-gh.svg)

This is a [Create React App](https://create-react-app.dev/) boilerplate with some configurations from React Avançado Course.

## What is inside?

This project uses lot of stuff as:

- [Create React App - CRA](https://create-react-app.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Router](https://reactrouter.com/web/guides/quick-start)
- [Styled Components](https://styled-components.com/)
- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- [Storybook](https://storybook.js.org/)
- [Eslint](https://eslint.org/)

## Folder Structure

```sh
├── README.md
├── generators # folder to our templates
├── public # folder with our assets
├── src
│   ├── App.tsx # main file to our SPA (We define routes/components here)
│   ├── components
│   │   └──Example
│   │       ├── index.tsx
│   │       ├── stories.tsx
│   │       ├── styles.ts
│   │       └── test.tsx
│   ├── index.tsx # main file to ReactDom.render
│   ├── pages # we separated our pages/views/screens here
│   │   └── About.tsx
│   └── styles # any styles that you want to share inside the app
│       └── global.ts
```

## Getting Started

First you can clone or use this template in your GitHub profile.

```sh
# install the deps
yarn

# run the project
yarn start
```

Other commands like `generating components` and test are listed below:

## Commands

- `start`: runs your application on `localhost:3000`
- `build`: creates the production build version
- `lint`: runs the linter in all components and pages
- `test`: runs jest to test all components and pages
- `generate <ComponentName>`: generates a new component under `src/components` folder
- `storybook`: runs storybook on `localhost:6006`
- `build-storybook`: create the build version of storybook

## Learn More

To learn more about the structure and other commands/modifications, see the [Create React App Documentation](https://create-react-app.dev/).
