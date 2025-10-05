import {
	Command,
	CommandMap,
	ITerminal,
	MathCommand,
	SystemCommand,
	TerminalCommand,
	TextCommand,
} from '@/types/terminalLogic'

const validateNumbers = (
	args: string[],
	minCount: number = 1
): string | number[] => {
	if (args.length < minCount) {
		return `Ошибка: требуется минимум ${minCount} число(а)`
	}

	const numbers = args.map(Number)
	if (numbers.some(isNaN)) {
		return 'Ошибка: все аргументы должны быть числами'
	}

	return numbers
}

const executeWithValidation = (
	args: string[],
	operation: (numbers: number[]) => number,
	minCount: number = 1
): string => {
	const validationResult = validateNumbers(args, minCount)
	if (typeof validationResult === 'string') return validationResult

	try {
		return String(operation(validationResult))
	} catch (error) {
		return `Ошибка: ${
			error instanceof Error ? error.message : 'неизвестная ошибка'
		}`
	}
}

export const echoCommand: TextCommand = {
	name: 'echo',
	description: 'Печатает введенный текст',
	execute: (args: string[]): string =>
		args.join(' ') || 'Текст не предоставлен',
}

export const helpCommand: TerminalCommand = {
	name: 'help',
	description: 'Показывает все доступные команды',
	execute: (args: string[], terminal?: ITerminal): string => {
		if (!terminal) {
			return 'Ошибка: терминал не инициализирован'
		}

		const commands = Array.from(terminal.getCommands())

		return `Доступные команды:\n\n${commands
			.map(([name, cmd]) => `${name.padEnd(12)} - ${cmd.description}`)
			.join('\n')}\n\nИспользуйте: команда --help для подробной информации`
	},
}

export const clearCommand: TerminalCommand = {
	name: 'clear',
	description: 'Очищает историю терминала',
	execute: (args: string[], terminal?: ITerminal): string => {
		if (!terminal) {
			return 'Ошибка: терминал не инициализирован'
		}

		terminal.clearHistory()
		if (terminal.clearUICallBack) {
			terminal.clearUICallBack()
		}
		return ''
	},
}

export const sumCommand: MathCommand = {
	name: 'sum',
	description: 'Сумма чисел, например: 4 3 5 -> 12.',
	execute: (args: string[]): string =>
		executeWithValidation(args, numbers => numbers.reduce((a, b) => a + b, 0)),
}

export const minusCommand: MathCommand = {
	name: 'minus',
	description: 'Вычитание чисел, например: 20 4 5 -> 11.',
	execute: (args: string[]): string =>
		executeWithValidation(args, numbers => numbers.reduce((a, b) => a - b)),
}

export const multiplicationCommand: MathCommand = {
	name: 'multi',
	description: 'Умножение чисел, например: 3 4 5 -> 60.',
	execute: (args: string[]): string =>
		executeWithValidation(args, numbers => numbers.reduce((a, b) => a * b, 1)),
}

export const divisionCommand: MathCommand = {
	name: 'division',
	description: 'Деление чисел, например: 20 5 2 -> 2',
	execute: (args: string[]): string =>
		executeWithValidation(args, numbers => {
			if (numbers.slice(1).some(n => n === 0)) {
				throw new Error('деление на ноль')
			}
			return numbers.reduce((a, b) => a / b)
		}),
}

export const powCommand: MathCommand = {
	name: 'pow',
	description: 'Возведение в степень, например: 3 4 -> 81',
	execute: (args: string[]): string => {
		if (args.length !== 2) {
			return 'Ошибка: команда требует ровно 2 числа (основание и показатель)'
		}

		const validationResult = validateNumbers(args, 2)
		if (typeof validationResult === 'string') return validationResult

		const [base, exponent] = validationResult
		return String(Math.pow(base, exponent))
	},
}

export const sqrtCommand: MathCommand = {
	name: 'sqrt',
	description: 'Вычисление квадратного корня, например: 25 -> 5.',
	execute: (args: string[]): string => {
		if (args.length !== 1) {
			return 'Ошибка: команда требует ровно 1 число'
		}

		const validationResult = validateNumbers(args, 1)
		if (typeof validationResult === 'string') return validationResult

		const [num] = validationResult
		if (num < 0) {
			return 'Ошибка: нельзя вычислить корень из отрицательного числа'
		}

		return String(Math.sqrt(num))
	},
}

export const randomCommand: MathCommand = {
	name: 'random',
	description:
		'Генерирует случайное целое число между минимумом и максимумом (включительно)',
	execute: (args: string[]): string => {
		if (args.length !== 2) {
			return 'Ошибка: команда требует ровно 2 числа (минимум и максимум)'
		}

		const validationResult = validateNumbers(args, 2)
		if (typeof validationResult === 'string') return validationResult

		const [min, max] = validationResult
		if (min > max) {
			return 'Ошибка: минимум не может быть больше максимума'
		}

		return String(Math.floor(Math.random() * (max - min + 1)) + min)
	},
}

export const dateCommand: SystemCommand = {
	name: 'date',
	description: 'Показывает текущую дату и время',
	execute: (args: string[]): string => new Date().toLocaleString('ru-RU'),
}

export const reverseCommand: TextCommand = {
	name: 'reverse',
	description: 'Инвертирует вводимый текст',
	execute: (args: string[]): string =>
		args.length
			? args.join(' ').split('').reverse().join('')
			: 'Ошибка: требуется текст для обращения',
}

export const systemCommand: SystemCommand = {
	name: 'system',
	description: 'Показывает информацию о системе',
	execute: (args: string[]): string => {
		// Используем современные API вместо deprecated platform
		const userAgentData = (navigator as any).userAgentData
		const platformInfo = userAgentData
			? `${userAgentData.platform} (${userAgentData.manufacturer || 'Unknown'})`
			: 'Unknown Platform'

		return `Платформа: ${platformInfo}
Язык: ${navigator.language}
Онлайн: ${navigator.onLine ? 'Да' : 'Нет'}
Время: ${new Date().toLocaleString('ru-RU')}`.trim()
	},
}

export const commandMap: CommandMap = {
	echo: echoCommand,
	help: helpCommand,
	clear: clearCommand,
	sum: sumCommand,
	minus: minusCommand,
	multi: multiplicationCommand,
	division: divisionCommand,
	pow: powCommand,
	sqrt: sqrtCommand,
	random: randomCommand,
	date: dateCommand,
	reverse: reverseCommand,
	system: systemCommand,
} as const

export const allCommands: Command[] = Object.values(commandMap)
export const commands: string[] = Object.keys(commandMap)
