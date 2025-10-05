'use client'

import { NavBarProps } from '@/types/terminal'
import ButtonRound from '../UI/buttons/ButtonRounded'

export default function NavBar({
	hiddenTerminal,
	fullTerminal,
	windowName,
	isFullScreen,
}: NavBarProps) {
	return (
		<div className='flex items-center justify-between px-4 py-3 bg-black/30 backdrop-blur-md border-b border-gray-700/30'>
			<div className='flex-1 flex justify-center'>
				<div className='text-[#8b949e] text-sm font-medium tracking-wide'>
					{windowName}
				</div>
			</div>
			<div className='flex space-x-2'>
				<ButtonRound color='red' buttonClicked={hiddenTerminal} />
				<ButtonRound
					color={isFullScreen ? 'yellow' : 'green'}
					buttonClicked={fullTerminal}
				/>
			</div>
		</div>
	)
}
