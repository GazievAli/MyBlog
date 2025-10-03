import { Roboto_Mono } from 'next/font/google'
import { ReactNode } from 'react'

const robotoMono = Roboto_Mono({
	subsets: ['latin', 'cyrillic'],
	weight: ['400', '500', '600'],
})

interface PhoneTextProps {
	children: ReactNode
}

export default function PhoneText({ children }: PhoneTextProps) {
	return (
		<span className={`${robotoMono.className} border-b border-gray-300 pb-1`}>
			{children}
		</span>
	)
}
