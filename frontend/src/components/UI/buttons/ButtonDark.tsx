import { ReactNode } from 'react'

interface ButtonDarkProps {
	children: ReactNode
	scrolled: boolean
	className?: string
}

export default function ButtonDark({
	children,
	scrolled,
	className = '',
}: ButtonDarkProps) {
	return (
		<button
			className={`
				rounded-xl font-semibold transition-all duration-500 
				transform hover:scale-105 active:scale-95
				flex items-center justify-center
				backdrop-blur-sm border
				${className}
				${
					scrolled
						? 'bg-blue-600 hover:bg-blue-700 text-white border-blue-500 shadow-lg shadow-blue-500/25'
						: 'bg-white/10 hover:bg-white/20 text-white border-white/20 backdrop-blur-md'
				}
			`}
		>
			{children}
		</button>
	)
}
