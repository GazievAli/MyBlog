import { useEffect, useState } from 'react'
import Body from './TerminalBody'
import NavBar from './TerminalNavBar'
import Text from './TerminalText'

interface TerminalProps {
	name: string
	hiddenTerminal: () => void
}

export default function Terminal({ name, hiddenTerminal }: TerminalProps) {
	const [fullTerm, setFullTerm] = useState(false)

	useEffect(() => {
		if (fullTerm) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'unset'
		}

		return () => {
			document.body.style.overflow = 'unset'
		}
	}, [fullTerm])

	const toggleFullTerminal = () => {
		setFullTerm(prev => !prev)
	}

	const getTerminalStyle = () => {
		if (fullTerm) {
			return 'w-screen h-screen fixed inset-0 z-50 rounded-none'
		}
		return 'w-full max-w-5xl h-64 md:h-[28rem] rounded-lg mb-6'
	}

	return (
		<section
			className={`w-full min-h-screen bg-gray-900 flex items-center justify-center p-4 ${
				fullTerm ? 'fixed inset-0 z-40' : ''
			}`}
		>
			<div
				className={`${
					fullTerm ? 'w-full h-full' : 'container mx-auto px-4 sm:px-6 lg:px-8'
				} flex flex-col items-center justify-center`}
			>
				<div
					className={
						getTerminalStyle() +
						' bg-[#282c34] shadow-2xl border border-gray-700 cursor-text transition-all duration-300 flex flex-col'
					}
				>
					<NavBar
						hiddenTerminal={hiddenTerminal}
						fullTerminal={toggleFullTerminal}
						windowName='Терминал'
						isFullScreen={fullTerm}
					/>
					<Body name={name} isFullScreen={fullTerm} />
				</div>

				{!fullTerm && <Text />}
			</div>
		</section>
	)
}
