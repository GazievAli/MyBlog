import { highlightSyntax } from './TerminalHighlight'

interface TerminalInputProps {
	name: string
	safeLine: string
}

export default function TerminalInput({ name, safeLine }: TerminalInputProps) {
	return (
		<div className='flex items-center'>
			<span className='text-[#61afef]'>{name}@terminal</span>
			<span className='text-[#abb2bf]'>:</span>
			<span className='text-[#56b6c2]'>~</span>
			<span className='text-[#abb2bf]'>$</span>
			<span className='ml-2 text-white'>
				{highlightSyntax(safeLine.substring(2))}
			</span>
		</div>
	)
}
