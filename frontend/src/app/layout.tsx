import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
	title: 'MyBlog',
	description: 'Nice to meet you!',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body>{children}</body>
		</html>
	)
}
