import { Command } from './terminalInterfaces'
import { Terminal } from './terminalLogic'

export const echoCommand: Command = {
	name: 'echo',
	description: 'Prints back the input text',
	execute: (args: string[]) => {
		return args.join(' ') || 'No text provided'
	},
}

export const helpCommand: Command = {
	name: 'help',
	description: 'Shows all available commands',
	execute: (args: string[], terminal: Terminal) => {
		const commandList = []

		for (const [name, cmd] of terminal.getCommands()) {
			commandList.push(`${name} - ${cmd.description}`)
		}

		return 'Доступные команды:\n' + commandList.join('\n')
	},
}

export const clearCommand: Command = {
	name: 'clear',
	description: 'Clears terminal history',
	execute: (args: string[], terminal: Terminal) => {
		terminal.clearHistory()
		return 'Terminal cleared'
	},
}

export const sumCommand: Command = {
	name: 'sum',
	description: 'sum numbers, for examle 4 3 5 -> 12',
	execute: (args: string[], terminal: Terminal) => {
		let sum = 0
		for (let i = 0; i < args.length; i++) {
			const num = Number(args[i])
			if (isNaN(num)) {
				return 'Error: all arguments must be numbers'
			}
			sum += num
		}
		return String(sum)
	},
}

export const minusCommand: Command = {
	name: 'minus',
	description: 'minus numbers, for example 20 4 5 -> 11',
	execute: (args: string[], terminal: Terminal) => {
		if (args.length === 0) {
			return 'Error: at least one number is required'
		}

		let result = Number(args[0])
		if (isNaN(result)) {
			return 'error: all arguments must be numbers'
		}

		for (let i = 1; i < args.length; i++) {
			const num = Number(args[i])
			if (isNaN(num)) {
				return 'Error: all arguments must be numbers'
			}
			result -= num
		}

		return String(result)
	},
}

export const multiplicationCommand: Command = {
	name: 'multiplication',
	description: 'multiplication numbers, for example 3 4 5 -> 60',
	execute: (args: string[], terminal: Terminal) => {
		if (args.length === 0) {
			return 'Error: at least one number is required'
		}

		let result = Number(args[0])
		if (isNaN(result)) {
			return 'error: all arguments must be numbers'
		}

		for (let i = 1; i < args.length; i++) {
			let num = Number(args[i])
			if (isNaN(num)) {
				return 'error: all arguments must be numbers'
			}
			result *= num
		}

		return String(result)
	},
}

export const divisionCommand: Command = {
	name: 'division',
	description: 'division numbers, for example 20 5 2 -> 2',
	execute: (args: string[], terminal: Terminal) => {
		if (args.length === 0) {
			return 'Error: at least one number is required'
		}

		let result = Number(args[0])
		if (isNaN(result)) {
			return 'error: all arguments must be numbers'
		}

		for (let i = 1; i < args.length; i++) {
			let num = Number(args[i])
			if (isNaN(num)) {
				return 'error: all arguments must be numbers'
			}

			if (num == 0) {
				return 'Error: division by zero'
			}

			result /= num
		}

		return String(result)
	},
}

export const powCommand: Command = {
	name: 'pow',
	description: '3 4 -> 81',
	execute: (args: string[], terminal: Terminal) => {
		if (args.length != 2) {
			return 'Error: pow requires exactly 2 numbers (base and exponent)'
		}

		const base = Number(args[0])
		const exponent = Number(args[1])

		if (isNaN(base) || isNaN(exponent)) {
			return 'Error: both arguments must be numbers'
		}

		const result = Math.pow(Number(args[0]), Number(args[1]))
		return String(result)
	},
}

export const sqrtCommand: Command = {
	name: 'sqrt',
	description: '25 -> 5',
	execute: (args: string[], terminal: Terminal) => {
		if (args.length !== 1) {
			return 'Error: sqrt requires exactly 1 number'
		}

		const num = Number(args[0])

		if (isNaN(num)) {
			return 'Error: argument must be a number'
		}

		if (num < 0) {
			return 'Error: cannot calculate square root of negative number'
		}

		const result = Math.sqrt(num)
		return String(result)
	},
}

export const randomCommand: Command = {
	name: 'random',
	description:
		'random int (start - end) - generates random number between start and end (inclusive)',
	execute: (args: string[], terminal: Terminal) => {
		if (args.length !== 2) {
			return 'Error: random requires exactly 2 numbers (min and max)'
		}

		const min = Number(args[0])
		const max = Number(args[1])

		if (isNaN(min) || isNaN(max)) {
			return 'Error: both arguments must be numbers'
		}

		if (min > max) {
			return 'Error: min cannot be greater than max'
		}

		const result = Math.floor(Math.random() * (max - min + 1)) + min
		return String(result)
	},
}
