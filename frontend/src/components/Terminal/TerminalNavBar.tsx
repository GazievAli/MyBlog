import ButtonRound from '../UI/buttons/ButtonRounded'

interface NavBarProps {
	hiddenTerminal: () => void
	fullTerminal: () => void
	windowName: string
	isFullScreen: boolean
}

export default function NavBar({
	hiddenTerminal,
	fullTerminal,
	windowName,
	isFullScreen,
}: NavBarProps) {
	return (
		<div className='flex items-center justify-between px-4 py-3 bg-[#21252b] border-b border-gray-700'>
			<div className='flex-1 flex justify-center'>
				<div className='text-[#abb2bf] text-sm font-medium'>{windowName}</div>
			</div>
			<div className='flex space-x-2'>
				<ButtonRound color='red' buttonClicked={hiddenTerminal}></ButtonRound>

				{isFullScreen ? (
					<ButtonRound
						color='yellow'
						buttonClicked={fullTerminal}
					></ButtonRound>
				) : (
					<ButtonRound color='green' buttonClicked={fullTerminal}></ButtonRound>
				)}
			</div>
		</div>
	)
}
