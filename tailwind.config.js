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
        flexGrow: {
            0: 0,
            1: 1,
            2: 2,
            DEFAULT: 1,
            6: 6,
            9: 9,
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
