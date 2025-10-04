interface TerminalOcoProps {
	hideTerminal: () => void
}

export default function TerminalIco({ hideTerminal }: TerminalOcoProps) {
	return (
		<div className='fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50'>
			<button
				className='w-12 h-12 sm:w-14 sm:h-14 bg-gray-900 rounded-full sm:rounded-2xl shadow-2xl border border-gray-700 flex items-center justify-center hover:bg-gray-800 active:scale-95 transition-all duration-200 group'
				onClick={hideTerminal}
			>
				<svg
					className='w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-gray-300'
					fill='none'
					stroke='currentColor'
					viewBox='0 0 24 24'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={1.5}
						d='M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
					/>
				</svg>
			</button>
		</div>
	)
}
