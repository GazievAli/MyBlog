'use client'

import { Terminal } from '@/business/TerminalLogic'
import { useEffect, useRef, useState } from 'react'
import Line from './Line'
import { highlightSyntax } from './TerminalHighlight'

interface BodyProps {
	name: string
}

export default function Body({ name }: BodyProps) {
	const [input, setInput] = useState('')
	const [output, setOutput] = useState<string[]>([])
	const terminalRef = useRef(new Terminal('web terminal'))
	const bodyRef = useRef<HTMLDivElement>(null)
	const inputRef = useRef<HTMLInputElement>(null)

	useEffect(() => {
		terminalRef.current.setClearUICallBack(() => {
			setOutput([])
		})
	}, [])

	const handleCommand = async (command: string) => {
		if (!command.trim()) return

		const result = await terminalRef.current.execute(command)

		if (command.trim() !== 'clear') {
			setOutput(prev => [...prev, `$ ${command}`, `>>> ${result}`])
		} else {
			await terminalRef.current.execute(command)
		}
		setInput('')
	}

	const handleKeyPress = (e: React.KeyboardEvent) => {
		if (e.key === 'Enter') {
			handleCommand(input)
		}
	}

	const focusInput = () => {
		if (inputRef.current) {
			inputRef.current.focus()
		}
	}

	const handleTerminalClick = () => {
		focusInput()
	}

	useEffect(() => {
		if (bodyRef.current) {
			bodyRef.current.scrollTop = bodyRef.current.scrollHeight
		}
	}, [output])

	return (
		<div
			className='p-4 h-48 md:h-[24rem] font-mono text-[#abb2bf] overflow-y-auto cursor-text
				[&::-webkit-scrollbar]:w-2
				[&::-webkit-scrollbar-track]:bg-[#282c34]
				[&::-webkit-scrollbar-thumb]:bg-[#3e4451]
				[&::-webkit-scrollbar-thumb]:rounded-full
				[&::-webkit-scrollbar-thumb]:hover:bg-[#545862]'
			ref={bodyRef}
			onClick={handleTerminalClick}
		>
			{output.map((line, index) => (
				<div key={index} className='mb-1'>
					{line.startsWith('$ ') ? (
						<div className='flex items-center'>
							<span className='text-[#61afef]'>{name}@terminal</span>
							<span className='text-[#abb2bf]'>:</span>
							<span className='text-[#56b6c2]'>~</span>
							<span className='text-[#abb2bf]'>$</span>
							<span className='ml-2 text-white'>
								{highlightSyntax(line.substring(2))}
							</span>
						</div>
					) : (
						<div className='text-[#5c6370]'>
							{line.startsWith('>>> ')
								? highlightSyntax(line.substring(4))
								: line}
						</div>
					)}
				</div>
			))}

			<Line
				input={input}
				onInputChange={setInput}
				onKeyPress={handleKeyPress}
				name='user'
				inputRef={inputRef}
			/>
		</div>
	)
}
