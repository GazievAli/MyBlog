'use client'

import React from 'react'

interface ButtonProps {
    children: React.ReactNode
    onClick?: () => void
}

export default function ButtonDark({ children, onClick }: ButtonProps) {
    return (
        <button
            onClick={onClick}
            className="group cursor-pointer relative px-6 py-2.5 rounded-xl bg-[#050505] font-medium text-white transition-all duration-300 overflow-hidden border border-white/10 hover:border-rose-500/40 hover:shadow-[0_0_20px_rgba(244,63,94,0.15)] flex items-center gap-2"
        >
            <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/5 to-transparent z-0" />

            <span className="relative z-10 text-sm tracking-wide group-hover:text-rose-100 transition-colors">
        {children}
      </span>

            <div className="relative z-10 flex items-center justify-center w-4 h-4">
                <svg
                    className="w-4 h-4 text-gray-400 group-hover:text-rose-400 transition-transform duration-300 transform group-hover:translate-x-1.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                </svg>
            </div>

            <div className="absolute top-1.5 right-1.5">
        <span className="relative flex h-1 w-1">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-0 group-hover:opacity-75"></span>
          <span className="relative inline-flex rounded-full h-1 w-1 bg-rose-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
        </span>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-rose-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 scale-x-0 group-hover:scale-x-100" />
        </button>
    )
}