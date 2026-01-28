
import { highlightSyntax } from './TerminalHighlight'

interface TerminalInputProps {
    name: string
    safeLine: string
}

export default function TerminalInput({ name, safeLine }: TerminalInputProps) {
    return (
        <div className='flex items-center flex-wrap'>
            <span className='text-rose-400 font-bold'>user@gaziev</span>
            <span className='text-gray-500'>:</span>
            <span className='text-amber-400'>~</span>
            <span className='text-gray-500 ml-1'>$</span>
            <span className='ml-2 text-white break-all'>
        {highlightSyntax(safeLine.replace('$ ', ''))}
      </span>
        </div>
    )
}