import { highlightSyntax } from './TerminalHighlight'

interface TerminalOutputProps {
	safeLine: string
}

export default function TerminalOutput({ safeLine }: TerminalOutputProps) {
	return (
		<div className='text-[#5c6370] flex items-start'>
			<span className='text-[#5c6370] mr-2 shrink-0'>&gt;&gt;&gt;</span>
			<div className='flex-1'>
				{safeLine.startsWith('>>> ')
					? highlightSyntax(safeLine.substring(4))
					: safeLine}
			</div>
		</div>
	)
}
