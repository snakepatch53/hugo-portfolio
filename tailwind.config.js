/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                logo: ["logo", "sans-serif"],
                title: ["title", "sans-serif"],
                content: ["content", "sans-serif"],
            },
        },
    },
    plugins: [],
}

