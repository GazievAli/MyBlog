import { allCommands } from './terminalCommands'
import { Command, CommandHistory } from './terminalInterfaces'

export class Terminal {
	private terminalName: string
	private commands: Map<string, Command> = new Map()
	private history: CommandHistory[] = []
	public clearUICallBack?: () => void

	constructor(name: string) {
		this.terminalName = name
		this.commands = new Map()
		this.registerDefaultCommands()
	}

	public getName() {
		return this.terminalName
	}

	public getCommands() {
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

	public clearHistory() {
		this.history = []
	}

	public setClearUICallBack(callback: () => void) {
		this.clearUICallBack = callback
	}

	public registerCommand(command: Command) {
		this.commands.set(command.name, command)
		console.log(`Command "${command.name}" registered successfully`)
	}

	public registerDefaultCommands() {
		allCommands.forEach(command => this.registerCommand(command))
	}
}
