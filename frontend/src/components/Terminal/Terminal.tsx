'use client'

import styles from '@/styles/terminal.module.css'
import { TerminalProps } from '@/types/terminal'
import { useEffect, useState } from 'react'
import AnimatedBg from './TerminalAnimatedBg'
import Body from './TerminalBody'
import NavBar from './TerminalNavBar'
import Text from './TerminalText'

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
		return 'w-full max-w-4xl xl:max-w-5xl h-64 md:h-80 lg:h-96 xl:h-[28rem] rounded-xl md:rounded-2xl mb-6 md:mb-8'
	}

	return (
		<div
			className={`${styles.terminal} w-full min-h-screen relative overflow-hidden`}
		>
			<AnimatedBg />

			<div
				className={`${styles.terminalContainer} ${
					fullTerm
						? 'w-full h-full'
						: 'container mx-auto px-3 sm:px-4 md:px-6 lg:px-8'
				} flex flex-col items-center justify-center relative z-10 min-h-screen py-4 md:py-0`}
			>
				<div
					className={
						getTerminalStyle() +
						' bg-black/20 backdrop-blur-lg shadow-xl shadow-black/30 border border-gray-700/30 cursor-text transition-all duration-300 flex flex-col ' +
						styles.terminalWindow
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
		</div>
	)
}
