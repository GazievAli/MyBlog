import { Command } from './TerminalInterfaces'
import { Terminal } from './TerminalLogic'

// --- НОВЫЕ СИСТЕМНЫЕ КОМАНДЫ ---

export const lsCommand: Command = {
    name: 'ls',
    description: 'Показать содержимое текущей папки',
    execute: (args, terminal) => {
        return terminal.listDir()
    }
}

export const cdCommand: Command = {
    name: 'cd',
    description: 'Перейти в папку (cd foldername или cd ..)',
    execute: (args, terminal) => {
        if (!args[0]) return ''
        return terminal.changeDir(args[0])
    }
}

export const catCommand: Command = {
    name: 'cat',
    description: 'Прочитать содержимое файла',
    execute: (args, terminal) => {
        if (!args[0]) return 'Usage: cat <filename>'
        return terminal.readFile(args[0])
    }
}

export const pwdCommand: Command = {
    name: 'pwd',
    description: 'Показать текущий путь',
    execute: (args, terminal) => {
        return terminal.getPathString()
    }
}

export const neofetchCommand: Command = {
    name: 'neofetch',
    description: 'Информация о системе',
    execute: () => {
        return `
       .---.       user@gaziev.dev
      /     \\      ---------------
      | () () |     OS: NeuralOracle OS v1.0
       \\  ^  /      Kernel: Next.js 14
        |||||       Uptime: Forever
        |||||       Shell: ZSH (Web Emulation)
                    Resolution: 1920x1080
      ( Code )      CPU: Human Brain (19 y.o.)
       \`---\`        Memory: Infinite Learning
                    
                    Theme: Dark / Rose / Amber
                    Icons: FontAwesome
    `
    }
}

export const helpCommand: Command = {
    name: 'help',
    description: 'Показывает все доступные команды',
    execute: (args, terminal) => {
        const commands = Array.from(terminal.getCommands().values())
        return `
Available commands:

${commands.map(cmd => `  ${cmd.name.padEnd(10)} ${cmd.description}`).join('\n')}

Tips:
  - Используйте 'ls' чтобы увидеть файлы
  - Используйте 'cat <файл>' чтобы прочитать их
  - Используйте 'neofetch' для красоты
`
    },
}

// --- СТАРЫЕ (МАТЕМАТИЧЕСКИЕ) КОМАНДЫ ---
// (Оставляем их, чтобы функционал не пропал, но они теперь вторичны)

export const clearCommand: Command = {
    name: 'clear',
    description: 'Очистить терминал',
    execute: (args, terminal) => {
        terminal.clearHistory()
        terminal.clearUICallBack?.()
        return ''
    },
}

export const echoCommand: Command = {
    name: 'echo',
    description: 'Вывести текст',
    execute: (args) => args.join(' '),
}

export const dateCommand: Command = {
    name: 'date',
    description: 'Текущая дата',
    execute: () => new Date().toLocaleString('ru-RU'),
}

// Математику можно сократить или оставить как есть
const safeEval = (fn: () => number) => {
    try { return String(fn()) } catch { return 'Error' }
}

export const sumCommand: Command = {
    name: 'sum',
    description: 'Сложение (sum 2 2)',
    execute: (args) => safeEval(() => args.map(Number).reduce((a, b) => a + b, 0))
}

export const whoamiCommand: Command = {
    name: 'whoami',
    description: 'Кто я?',
    execute: () => 'root'
}

export const sudoCommand: Command = {
    name: 'sudo',
    description: 'Выполнить от имени суперпользователя',
    execute: () => 'Permission denied: you are viewing a portfolio, not a server :)'
}

// --- СБОРКА ВСЕХ КОМАНД ---

export const commandMap = {
    ls: lsCommand,
    cd: cdCommand,
    cat: catCommand,
    pwd: pwdCommand,
    neofetch: neofetchCommand,
    help: helpCommand,
    clear: clearCommand,
    echo: echoCommand,
    date: dateCommand,
    sum: sumCommand,
    whoami: whoamiCommand,
    sudo: sudoCommand
} as const

export const allCommands = Object.values(commandMap)
export const commands = Object.keys(commandMap)