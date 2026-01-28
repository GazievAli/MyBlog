import { useEffect, useState } from 'react'
import Body from './TerminalBody'
import NavBar from './TerminalNavBar'
import Text from './TerminalText'

interface TerminalProps {
    name: string
    hiddenTerminal: () => void
}

export default function Terminal({ name, hiddenTerminal }: TerminalProps) {
    const [fullTerm, setFullTerm] = useState(false)

    useEffect(() => {
        if (fullTerm) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }

        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [fullTerm])

    const toggleFullTerminal = () => {
        setFullTerm(prev => !prev)
    }

    const getTerminalStyle = () => {
        if (fullTerm) {
            return 'fixed inset-0 z-50 rounded-none w-screen h-screen'
        }
        return 'relative w-full max-w-5xl h-[500px] rounded-2xl shadow-2xl border border-gray-700/50 hover:border-gray-600 transition-all duration-300'
    }

    return (
        <section
            className={`w-full flex items-center justify-center p-4 transition-all duration-500 ${
                fullTerm ? 'fixed inset-0 z-50 bg-[#0d1117]' : 'py-32 bg-[#0d1117] relative'
            }`}
        >
            {!fullTerm && (
                <div className='absolute inset-0 overflow-hidden pointer-events-none'>
                    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-500/10 blur-[100px] rounded-full'></div>
                    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-amber-500/5 blur-[80px] rounded-full translate-x-20 translate-y-20'></div>
                </div>
            )}

            <div
                className={`${
                    fullTerm ? 'w-full h-full' : 'container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'
                } flex flex-col items-center justify-center`}
            >
                <div className={getTerminalStyle() + ' flex flex-col bg-[#161b22]/90 backdrop-blur-xl shadow-[0_0_50px_-12px_rgba(244,63,94,0.1)] overflow-hidden'}>
                    <NavBar
                        hiddenTerminal={hiddenTerminal}
                        fullTerminal={toggleFullTerminal}
                        windowName='user@gaziev-dev:~'
                        isFullScreen={fullTerm}
                    />
                    <Body name={name} isFullScreen={fullTerm} />
                </div>

                {!fullTerm && <Text />}
            </div>
        </section>
    )
}