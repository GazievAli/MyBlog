'use client'

import { LineProps } from '@/types/terminal'
import { highlightSyntax } from './TerminalHighlight'
import LineTerminalPattern from './TerminalLinePattern'

export default function Line({
	input,
	onInputChange,
	onKeyPress,
	name,
	inputRef,
}: LineProps) {
	return (
		<div className='flex items-center'>
			<LineTerminalPattern name={name} />

			<div className='ml-2 flex-1 relative'>
				<div className='absolute inset-0 font-mono pointer-events-none'>
					{highlightSyntax(input)}
					<span className='ml-0.5 text-[#e5c07b] animate-pulse'>_</span>
				</div>

				<input
					ref={inputRef}
					type='text'
					value={input}
					onChange={e => onInputChange(e.target.value)}
					onKeyPress={onKeyPress}
					className='w-full bg-transparent text-transparent outline-none font-mono caret-transparent'
					autoFocus
					spellCheck={false}
				/>
			</div>
		</div>
	)
}
