'use client'

import { commands } from '@/business/TerminalCommands'

export const highlightSyntax = (text: string) => {
	if (!text) return text

	const tokens = text.split(/(\s+)/)

	return tokens.map((token, index) => {
		if (/^\s+$/.test(token)) {
			return token
		}

		if (/^\d+$/.test(token)) {
			return (
				<span key={index} className='text-[#d19a66]'>
					{token}
				</span>
			)
		}

		if (commands.includes(token)) {
			return (
				<span key={index} className='text-[#98c379]'>
					{token}
				</span>
			)
		}

		const operators = ['+', '-', '*', '/']
		if (operators.includes(token)) {
			return (
				<span key={index} className='text-[#e06c75]'>
					{token}
				</span>
			)
		}

		if (token.startsWith('-')) {
			return (
				<span key={index} className='text-[#c678dd]'>
					{token}
				</span>
			)
		}

		return (
			<span key={index} className='text-[#abb2bf]'>
				{token}
			</span>
		)
	})
}
