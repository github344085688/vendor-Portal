/** @type {import('tailwindcss').Config} */
module.exports = {
    // 未使用的类名，不会打包到生产环境
    content: ["index.html", "./src/**/*.{html,js,ts,jsx,tsx,vue}"],
    theme: {
        extend: {
            colors: {
                primary: '#5c6ac4',
                secondary: '#ecc94b',
                white: '#ffffff',
            },
        },
    },
    plugins: [],
};

/*
theme: {
    fontFamily: {
        display: ['Inter', 'system-ui', 'sans-serif'],
            body: ['Inter', 'system-ui', 'sans-serif'],
    },
    colors: {
        primary: {
            50: '#f8fafc',
                100: '#f1f5f9',
                200: '#e2e8f0',
                300: '#cbd5e1',
                400: '#94a3b8',
                500: '#64748b',
                600: '#475569',
                700: '#334155',
                800: '#1e293b',
                900: '#0f172a',
        },
        secondary: {
            50: '#eff6ff',
                100: '#dbeafe',
                200: '#bfdbfe',
                300: '#93c5fd',
                400: '#60a5fa',
                500: '#3b82f6',
                600: '#2563eb',
                700: '#1d4ed8',
                800: '#1e40af',
                900: '#1e3a8a',
        },
    },
},*/
