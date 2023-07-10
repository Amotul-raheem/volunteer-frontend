/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        fontFamily: {
            'Quick': ['Quicksand', 'sans-serif'],
            'Abril': ['Abril Fatface', 'cursive']
        },
        backgroundImage: {
            'screen': "url('/public/images/screen.jpg')",
        },

        extend: {},
    },
    plugins: [],
}

