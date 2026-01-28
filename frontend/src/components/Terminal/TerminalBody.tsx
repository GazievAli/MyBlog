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
        if (output.length === 0) {
            setOutput(['Добро пожаловать в NeuralOracle Terminal v2.0', 'Введите "help" для списка команд.'])
        }
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

    return (
        <div
            className={`flex-1 p-6 font-mono text-sm md:text-base text-[#abb2bf] overflow-y-auto cursor-text bg-[#0d1117]/50
          /* Кастомная полоса прокрутки */
          scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent
          ${isFullScreen ? 'min-h-0' : ''}`}
            ref={bodyRef}
            onClick={focusInput}
        >
            <div className='min-h-full pb-4'>
                {output.map((line, index) => {
                    const safeLine = line || ''
                    return (
                        <div key={index} className='mb-1.5 leading-relaxed break-words'>
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