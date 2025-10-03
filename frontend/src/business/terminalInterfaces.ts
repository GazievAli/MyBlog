import { Terminal } from './terminalLogic'

export interface Command {
	name: string
	description: string
	execute: (args: string[], terminal: Terminal) => string | Promise<string>
}

export interface CommandHistory {
	command: string
	output: string
	timestamp: Date
}
