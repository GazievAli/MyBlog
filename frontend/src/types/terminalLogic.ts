export interface Command {
	name: string
	description: string
	execute: (args: string[], terminal?: ITerminal) => Promise<string> | string
}

export interface CommandHistory {
	command: string
	output: string
	timestamp: Date
}

export interface ITerminal {
	getName(): string
	getCommands(): Map<string, Command>
	execute(input: string): Promise<string>
	clearHistory(): void
	setClearUICallBack(callback: () => void): void
	registerCommand(command: Command): void
	registerDefaultCommands(): void
	clearUICallBack?: () => void
}

export interface CommandMap {
	[key: string]: Command
}

export interface MathCommand extends Command {
	execute: (args: string[]) => string
}

export interface SystemCommand extends Command {
	execute: (args: string[]) => string
}

export interface TextCommand extends Command {
	execute: (args: string[]) => string
}

export interface TerminalCommand extends Command {
	execute: (args: string[], terminal?: ITerminal) => Promise<string> | string
}
