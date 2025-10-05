'use client'

import { TerminalInputProps } from '@/types/terminal'
import { highlightSyntax } from './TerminalHighlight'
import LineTerminalPattern from './TerminalLinePattern'

export default function TerminalInput({ name, safeLine }: TerminalInputProps) {
	return (
		<div className='flex items-center'>
			<LineTerminalPattern name={name} />
			<span className='ml-2 text-white'>
				{highlightSyntax(safeLine.substring(2))}
			</span>
		</div>
	)
}
