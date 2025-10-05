'use client'

import { LineTerminalPatternProps } from '@/types/terminal'

export default function LineTerminalPattern({
	name,
}: LineTerminalPatternProps) {
	return (
		<>
			<span className='text-[#61afef] font-medium'>{name}@terminal</span>
			<span className='text-[#abb2bf] mx-1'>:</span>
			<span className='text-[#56b6c2]'>~</span>
			<span className='text-[#abb2bf] ml-1'>$</span>
		</>
	)
}
