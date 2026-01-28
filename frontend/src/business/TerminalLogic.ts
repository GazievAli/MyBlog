import { allCommands } from './TerminalCommands'
import { Command, CommandHistory, FileSystemNode } from './TerminalInterfaces'

// Виртуальная файловая система
const rootFileSystem: FileSystemNode = {
    type: 'dir',
    children: {
        'home': {
            type: 'dir',
            children: {
                'gaziev': {
                    type: 'dir',
                    children: {
                        'projects': {
                            type: 'dir',
                            children: {
                                'ai-task-manager.txt': {
                                    type: 'file',
                                    content: 'PROJECT: AI Task Manager\nSTACK: Nest.js, Python, PostgreSQL\nSTATUS: In Progress (75%)\nDESC: Умный планировщик задач, использующий ML для приоритизации.'
                                },
                                'portfolio.txt': {
                                    type: 'file',
                                    content: 'PROJECT: Personal Website\nSTACK: Next.js 14, Tailwind, TypeScript\nDESC: Вы сейчас находитесь здесь.'
                                }
                            }
                        },
                        'skills': {
                            type: 'dir',
                            children: {
                                'backend.txt': { type: 'file', content: '- Java (Spring Boot)\n- Nest.js (Node.js)\n- PostgreSQL / Redis\n- Docker / Kubernetes' },
                                'frontend.txt': { type: 'file', content: '- Next.js / React\n- TypeScript\n- TailwindCSS\n- Framer Motion' },
                                'ai-data.txt': { type: 'file', content: '- Python (Pandas, NumPy)\n- PyTorch\n- Math Analysis' }
                            }
                        },
                        'about.md': {
                            type: 'file',
                            content: '# Газиев Али\nFullstack Developer & AI Student.\n19 лет, Москва.\nУчусь в РТУ МИРЭА.'
                        },
                        'contacts.txt': {
                            type: 'file',
                            content: 'GitHub: github.com/your-repo\nEmail: contact@gaziev.dev\nTelegram: @your_tg'
                        }
                    }
                }
            }
        }
    }
}

export class Terminal {
    private terminalName: string
    private commands: Map<string, Command> = new Map()
    private history: CommandHistory[] = []

    // Состояние файловой системы
    private currentPath: string[] = ['home', 'gaziev']
    private fileSystem: FileSystemNode = rootFileSystem

    public clearUICallBack?: () => void

    constructor(name: string) {
        this.terminalName = name
        this.commands = new Map()
        this.registerDefaultCommands()
    }

    public getName() {
        return this.terminalName
    }

    // Получить текущую директорию как строку (например: ~/projects)
    public getPathString(): string {
        const path = '/' + this.currentPath.join('/')
        return path.replace('/home/gaziev', '~')
    }

    // Навигация по файловой системе
    public getDir(path: string[] = this.currentPath): FileSystemNode | null {
        let current = this.fileSystem

        // Начинаем с корня, если это не корневой узел
        if (path.length === 0) return current

        for (const part of path) {
            if (current.children && current.children[part]) {
                current = current.children[part]
            } else {
                return null
            }
        }
        return current
    }

    public changeDir(newPath: string): string {
        if (newPath === '..') {
            if (this.currentPath.length > 0) {
                this.currentPath.pop()
            }
            return ''
        }

        if (newPath === '~' || newPath === '/') {
            this.currentPath = ['home', 'gaziev']
            return ''
        }

        const currentDirNode = this.getDir()
        if (currentDirNode?.children && currentDirNode.children[newPath]) {
            if (currentDirNode.children[newPath].type === 'dir') {
                this.currentPath.push(newPath)
                return ''
            }
            return `cd: not a directory: ${newPath}`
        }

        return `cd: no such file or directory: ${newPath}`
    }

    public listDir(): string {
        const dir = this.getDir()
        if (!dir || !dir.children) return ''

        return Object.keys(dir.children).map(key => {
            const item = dir.children![key]
            // Папки выделяем цветом (добавляем / в конце)
            return item.type === 'dir' ? `${key}/` : key
        }).join('  ')
    }

    public readFile(fileName: string): string {
        const dir = this.getDir()
        if (!dir || !dir.children || !dir.children[fileName]) {
            return `cat: ${fileName}: No such file`
        }

        const file = dir.children[fileName]
        if (file.type === 'dir') {
            return `cat: ${fileName}: Is a directory`
        }

        return file.content || ''
    }

    // ... (Стандартные методы остались без изменений)
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
            return `Command not found: ${commandName}. Try "help".`
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
    }

    public registerDefaultCommands() {
        allCommands.forEach(command => this.registerCommand(command))
    }
}