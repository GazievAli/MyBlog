export * from './terminalLogic'

export interface TerminalProps {
	name: string
	hiddenTerminal: () => void
}

export interface BodyProps {
	name: string
	isFullScreen?: boolean
}

export interface NavBarProps {
	hiddenTerminal: () => void
	fullTerminal: () => void
	windowName: string
	isFullScreen: boolean
}

export interface LineProps {
	input: string
	onInputChange: (value: string) => void
	onKeyPress: (e: React.KeyboardEvent) => void
	name: string
	inputRef: React.RefObject<HTMLInputElement | null>
}

export interface TerminalInputProps {
	name: string
	safeLine: string
}

export interface TerminalOutputProps {
	safeLine: string
}

export interface LineTerminalPatternProps {
	name: string
}

export interface TerminalIcoProps {
	hideTerminal: () => void
}
