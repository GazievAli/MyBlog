'use client'
import AboutMe from '@/components/About/AboutMe'
import Header from '@/components/Header/Header'
import Terminal from '@/components/Terminal/Terminal'
import TerminalIco from '@/components/Terminal/TerminalIco'
import { useState } from 'react'

export default function Home() {
	const [terminalActive, setTerminalActive] = useState(true)
	const [userName, setUserName] = useState('user')

	const hiddenTerminal = () => {
		setTerminalActive(!terminalActive)
	}

	return (
		<div>
			<Header />
			<AboutMe />
			{terminalActive ? (
				<Terminal name={userName} hiddenTerminal={hiddenTerminal} />
			) : (
				<TerminalIco hideTerminal={hiddenTerminal} />
			)}
		</div>
	)
}
