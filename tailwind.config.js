/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                ivory: '#FAFAF8',
                charcoal: '#1A1A1A',
                'forest-canopy': '#2A3B2C',
                terracotta: '#CC7A52',
                'pale-sage': '#8FA08B',
            },
            fontFamily: {
                serif: ['"Playfair Display"', 'serif'],
                sans: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
