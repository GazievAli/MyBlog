import { ReactNode } from 'react'

interface ButtonRoundedProps {
	children?: ReactNode
	color: 'red' | 'blue' | 'green' | 'yellow' | 'gray'
	buttonClicked?: () => void
}

export default function ButtonRound({
	children,
	color,
	buttonClicked,
}: ButtonRoundedProps) {
	const colorClasses = {
		red: 'bg-red-500',
		blue: 'bg-blue-500',
		green: 'bg-green-500',
		yellow: 'bg-yellow-500',
		gray: 'bg-gray-500',
	}

	return (
		<button
			className={`w-3 h-3 rounded-full cursor-pointer ${colorClasses[color]}`}
			onClick={buttonClicked}
		>
			{children}
		</button>
	)
}
