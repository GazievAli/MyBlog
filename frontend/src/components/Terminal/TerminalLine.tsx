import React from 'react'
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
        <div className='flex flex-row flex-wrap items-center'>
            <div className='flex-shrink-0 mr-2 select-none whitespace-nowrap'>
                <span className='text-rose-400 font-bold'>user@gaziev</span>
                <span className='text-gray-500'>:</span>
                <span className='text-amber-400'>~</span>
                <span className='text-gray-500 ml-1'>$</span>
            </div>

            <div className='flex-1 relative min-w-[100px]'>

                <div className='absolute inset-0 font-mono pointer-events-none whitespace-pre-wrap break-all z-0 flex items-center'>
                    <span>{highlightSyntax(input)}</span>
                    <span className='inline-block w-2.5 h-5 bg-rose-500 ml-0.5 animate-pulse shadow-[0_0_10px_rgba(244,63,94,0.8)] align-middle'></span>
                </div>
                <input
                    ref={inputRef}
                    type='text'
                    value={input}
                    onChange={e => onInputChange(e.target.value)}
                    onKeyPress={onKeyPress}
                    className='w-full bg-transparent text-transparent outline-none font-mono caret-transparent relative z-10 py-1'
                    autoFocus
                    spellCheck={false}
                    autoComplete='off'
                    autoCorrect='off'
                    autoCapitalize='off'
                />
            </div>
        </div>
    )
}