'use client'

import { Terminal } from '@/business/TerminalLogic'
import { useEffect, useRef, useState } from 'react'

import TerminalInput from './TerminalInput'
import Line from './TerminalLine'
import TerminalOutput from './TerminalOutput'

interface BodyProps {
	name: string
	isFullScreen?: boolean
}

export default function Body({ name, isFullScreen = false }: BodyProps) {
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
			const resultLines = result.split('\n')

			setOutput(prev => [
				...prev,
				`$ ${command}`,
				...resultLines.map(line => `>>> ${line}`),
			])
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
			className={`flex-1 p-4 font-mono text-[#abb2bf] overflow-y-auto cursor-text
				[&::-webkit-scrollbar]:w-2
				[&::-webkit-scrollbar-track]:bg-[#282c34]
				[&::-webkit-scrollbar-thumb]:bg-[#3e4451]
				[&::-webkit-scrollbar-thumb]:rounded-full
				[&::-webkit-scrollbar-thumb]:hover:bg-[#545862]
				${isFullScreen ? 'min-h-0' : ''}`}
			ref={bodyRef}
			onClick={handleTerminalClick}
			style={{ overflowY: 'auto' }}
		>
			<div className='min-h-full'>
				{output.map((line, index) => {
					const safeLine = line || ''

					return (
						<div key={index} className='mb-1'>
							{safeLine.startsWith('$ ') ? (
								<TerminalInput safeLine={safeLine} name={name} />
							) : (
								<TerminalOutput safeLine={safeLine} />
							)}
						</div>
					)
				})}

				<Line
					input={input}
					onInputChange={setInput}
					onKeyPress={handleKeyPress}
					name={name}
					inputRef={inputRef}
				/>
			</div>
		</div>
	)
}
