// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            animation: {
                'gradient': 'gradient 8s linear infinite',
                'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
                'fade-in-up-delay': 'fadeInUp 0.8s ease-out 0.2s forwards', // с задержкой
                'blob': 'blob 7s infinite',
                'marquee': 'marquee 25s linear infinite',
                'shimmer': 'shimmer 2s linear infinite',
            },
            keyframes: {
                gradient: {
                    '0%, 100%': {
                        'background-size': '200% 200%',
                        'background-position': 'left center'
                    },
                    '50%': {
                        'background-size': '200% 200%',
                        'background-position': 'right center'
                    },
                },
                shimmer: {
                    from: { transform: 'translateX(-100%)' },
                    to: { transform: 'translateX(100%)' },
                },
                marquee: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-50%)' },
                },
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                blob: {
                    '0%': { transform: 'translate(0px, 0px) scale(1)' },
                    '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
                    '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
                    '100%': { transform: 'translate(0px, 0px) scale(1)' },
                }
            },
        },
    },
    plugins: [],
};
export default config;