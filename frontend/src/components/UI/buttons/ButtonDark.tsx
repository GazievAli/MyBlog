import { ReactNode } from 'react'

interface ButtonDarkProps {
	children: ReactNode
}

export default function ButtonDark({ children }: ButtonDarkProps) {
	return (
		<button className='flex p-3 bg-gray-900 text-white px-2 py-1 rounded-lg font-medium hover:bg-gray-800 active:scale-95 transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer'>
			{children}
		</button>
	)
}
