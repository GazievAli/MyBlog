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
				<span key={index} className='text-[#d19a66] font-medium'>
					{token}
				</span>
			)
		}

		if (commands.includes(token)) {
			return (
				<span key={index} className='text-[#98c379] font-bold'>
					{token}
				</span>
			)
		}

		const operators = ['+', '-', '*', '/', '=']
		if (operators.includes(token)) {
			return (
				<span key={index} className='text-[#e06c75] font-bold'>
					{token}
				</span>
			)
		}

		if (token.startsWith('-')) {
			return (
				<span key={index} className='text-[#c678dd] font-medium'>
					{token}
				</span>
			)
		}

		if (token.startsWith('"') && token.endsWith('"')) {
			return (
				<span key={index} className='text-[#56b6c2]'>
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
