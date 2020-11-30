This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Setting up Tailwind

```bash
npm install --save-dev autoprefixer postcss postcss-flexbugs-fixes postcss-preset-env tailwindcss
```

## VS Code Extension

Add a CSS/SCSS/Less linter otherwise VS Code will not like the @ directives in the CSS

[stylelint Extension for VS Code](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)

Make the following Workspace settings changes:
```
"css.validate": false,
"less.validate": false,
"scss.validate": false
```

Tailwind and postcss configuration

```js
// tailwind.config.js
module.exports = {
    purge: [
        './components/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: 'media', // 'media' or 'class'
    theme: {
        extend: {
            colors: {
                'accent-1': '#333',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
```

```js
// postcss.config.js
module.exports = {
    plugins: [
        'tailwindcss',
        'autoprefixer',
        'postcss-flexbugs-fixes',
        [
            'postcss-preset-env',
            {
                autoprefixer: {
                    flexbox: 'no-2009',
                },
                stage: 3,
                features: {
                    'custom-properties': false,
                },
            },
        ],
    ],
}
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
