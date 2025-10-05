import { Command, CommandHistory, ITerminal } from '@/types/terminalLogic'
import { allCommands } from './TerminalCommands'

export class Terminal implements ITerminal {
	private terminalName: string
	private commands: Map<string, Command> = new Map()
	private history: CommandHistory[] = []
	public clearUICallBack?: () => void

	constructor(name: string) {
		this.terminalName = name
		this.commands = new Map()
		this.registerDefaultCommands()
	}

	public getName(): string {
		return this.terminalName
	}

	public getCommands(): Map<string, Command> {
		return this.commands
	}

	private addToHistory(command: string, output: string): void {
		const historyEntry: CommandHistory = {
			command: command,
			output: output,
			timestamp: new Date(),
		}

		this.history.push(historyEntry)
	}

	public async execute(input: string): Promise<string> {
		const [commandName, ...args] = input.trim().split(' ')
		const command = this.commands.get(commandName)

		if (!command) {
			return `Command not found: ${commandName}`
		}

		const output = await command.execute(args, this)
		this.addToHistory(input, output)
		return output
	}

	public clearHistory(): void {
		this.history = []
	}

	public setClearUICallBack(callback: () => void): void {
		this.clearUICallBack = callback
	}

	public registerCommand(command: Command): void {
		this.commands.set(command.name, command)
		console.log(`Command "${command.name}" registered successfully`)
	}

	public registerDefaultCommands(): void {
		allCommands.forEach(command => this.registerCommand(command))
	}
}
