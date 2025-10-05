import { highlightSyntax } from './TerminalHighlight'

interface LineProps {
	input: string
	onInputChange: (value: string) => void
	onKeyPress: (e: React.KeyboardEvent) => void
	name: string
	inputRef: React.RefObject<HTMLInputElement | null>
}

export default function Line({
	input,
	onInputChange,
	onKeyPress,
	name,
	inputRef,
}: LineProps) {
	return (
		<div className='flex items-center'>
			<span className='text-[#61afef]'>{name}@terminal</span>
			<span className='text-[#abb2bf]'>:</span>
			<span className='text-[#56b6c2]'>~</span>
			<span className='text-[#abb2bf]'>$</span>

			<div className='ml-2 flex-1 relative'>
				<div className='absolute inset-0 font-mono pointer-events-none'>
					{highlightSyntax(input)}
					<span className='ml-1 text-[#e5c07b] animate-pulse'>_</span>
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
