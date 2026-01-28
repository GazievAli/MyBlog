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
        <div className='flex items-center justify-between px-5 py-3 bg-[#0d1117] border-b border-gray-800 select-none'>
            <div className='flex space-x-2 w-20'>
                <ButtonRound color='red' buttonClicked={hiddenTerminal} />
                {isFullScreen ? (
                    <ButtonRound color='yellow' buttonClicked={fullTerminal} />
                ) : (
                    <ButtonRound color='green' buttonClicked={fullTerminal} />
                )}
            </div>

            <div className='flex-1 flex justify-center'>
                <div className='flex items-center gap-2 text-gray-400 text-xs font-mono font-medium opacity-70'>
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {windowName}
                </div>
            </div>

            <div className='w-20'></div>
        </div>
    )
}