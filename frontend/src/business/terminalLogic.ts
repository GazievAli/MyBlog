import {
	clearCommand,
	divisionCommand,
	echoCommand,
	helpCommand,
	minusCommand,
	multiplicationCommand,
	powCommand,
	randomCommand,
	sqrtCommand,
	sumCommand,
} from './terminalCommands'
import { Command, CommandHistory } from './terminalInterfaces'

export class Terminal {
	private terminalName: string
	private commands: Map<string, Command> = new Map()
	private history: CommandHistory[] = []

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

	public registerCommand(command: Command) {
		this.commands.set(command.name, command)
		console.log(`Command "${command.name}" registered successfully`)
	}

	public registerDefaultCommands() {
		this.registerCommand(echoCommand)
		this.registerCommand(helpCommand)
		this.registerCommand(clearCommand)
		this.registerCommand(sumCommand)
		this.registerCommand(minusCommand)
		this.registerCommand(multiplicationCommand)
		this.registerCommand(divisionCommand)
		this.registerCommand(powCommand)
		this.registerCommand(sqrtCommand)
		this.registerCommand(randomCommand)
	}
}
