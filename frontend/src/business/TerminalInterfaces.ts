import { Terminal } from './TerminalLogic'

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

// Типы для файловой системы
export interface FileSystemNode {
    type: 'file' | 'dir'
    content?: string // Если файл
    children?: { [key: string]: FileSystemNode } // Если папка
}