module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/src/business/terminalCommands.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clearCommand",
    ()=>clearCommand,
    "divisionCommand",
    ()=>divisionCommand,
    "echoCommand",
    ()=>echoCommand,
    "helpCommand",
    ()=>helpCommand,
    "minusCommand",
    ()=>minusCommand,
    "multiplicationCommand",
    ()=>multiplicationCommand,
    "powCommand",
    ()=>powCommand,
    "randomCommand",
    ()=>randomCommand,
    "sqrtCommand",
    ()=>sqrtCommand,
    "sumCommand",
    ()=>sumCommand
]);
const echoCommand = {
    name: 'echo',
    description: 'Prints back the input text',
    execute: (args)=>{
        return args.join(' ') || 'No text provided';
    }
};
const helpCommand = {
    name: 'help',
    description: 'Shows all available commands',
    execute: (args, terminal)=>{
        const commandList = [];
        for (const [name, cmd] of terminal.getCommands()){
            commandList.push(`${name} - ${cmd.description}`);
        }
        return 'Доступные команды:\n' + commandList.join('\n');
    }
};
const clearCommand = {
    name: 'clear',
    description: 'Clears terminal history',
    execute: (args, terminal)=>{
        terminal.clearHistory();
        return 'Terminal cleared';
    }
};
const sumCommand = {
    name: 'sum',
    description: 'sum numbers, for examle 4 3 5 -> 12',
    execute: (args, terminal)=>{
        let sum = 0;
        for(let i = 0; i < args.length; i++){
            const num = Number(args[i]);
            if (isNaN(num)) {
                return 'Error: all arguments must be numbers';
            }
            sum += num;
        }
        return String(sum);
    }
};
const minusCommand = {
    name: 'minus',
    description: 'minus numbers, for example 20 4 5 -> 11',
    execute: (args, terminal)=>{
        if (args.length === 0) {
            return 'Error: at least one number is required';
        }
        let result = Number(args[0]);
        if (isNaN(result)) {
            return 'error: all arguments must be numbers';
        }
        for(let i = 1; i < args.length; i++){
            const num = Number(args[i]);
            if (isNaN(num)) {
                return 'Error: all arguments must be numbers';
            }
            result -= num;
        }
        return String(result);
    }
};
const multiplicationCommand = {
    name: 'multiplication',
    description: 'multiplication numbers, for example 3 4 5 -> 60',
    execute: (args, terminal)=>{
        if (args.length === 0) {
            return 'Error: at least one number is required';
        }
        let result = Number(args[0]);
        if (isNaN(result)) {
            return 'error: all arguments must be numbers';
        }
        for(let i = 1; i < args.length; i++){
            let num = Number(args[i]);
            if (isNaN(num)) {
                return 'error: all arguments must be numbers';
            }
            result *= num;
        }
        return String(result);
    }
};
const divisionCommand = {
    name: 'division',
    description: 'division numbers, for example 20 5 2 -> 2',
    execute: (args, terminal)=>{
        if (args.length === 0) {
            return 'Error: at least one number is required';
        }
        let result = Number(args[0]);
        if (isNaN(result)) {
            return 'error: all arguments must be numbers';
        }
        for(let i = 1; i < args.length; i++){
            let num = Number(args[i]);
            if (isNaN(num)) {
                return 'error: all arguments must be numbers';
            }
            if (num == 0) {
                return 'Error: division by zero';
            }
            result /= num;
        }
        return String(result);
    }
};
const powCommand = {
    name: 'pow',
    description: '3 4 -> 81',
    execute: (args, terminal)=>{
        if (args.length != 2) {
            return 'Error: pow requires exactly 2 numbers (base and exponent)';
        }
        const base = Number(args[0]);
        const exponent = Number(args[1]);
        if (isNaN(base) || isNaN(exponent)) {
            return 'Error: both arguments must be numbers';
        }
        const result = Math.pow(Number(args[0]), Number(args[1]));
        return String(result);
    }
};
const sqrtCommand = {
    name: 'sqrt',
    description: '25 -> 5',
    execute: (args, terminal)=>{
        if (args.length !== 1) {
            return 'Error: sqrt requires exactly 1 number';
        }
        const num = Number(args[0]);
        if (isNaN(num)) {
            return 'Error: argument must be a number';
        }
        if (num < 0) {
            return 'Error: cannot calculate square root of negative number';
        }
        const result = Math.sqrt(num);
        return String(result);
    }
};
const randomCommand = {
    name: 'random',
    description: 'random int (start - end) - generates random number between start and end (inclusive)',
    execute: (args, terminal)=>{
        if (args.length !== 2) {
            return 'Error: random requires exactly 2 numbers (min and max)';
        }
        const min = Number(args[0]);
        const max = Number(args[1]);
        if (isNaN(min) || isNaN(max)) {
            return 'Error: both arguments must be numbers';
        }
        if (min > max) {
            return 'Error: min cannot be greater than max';
        }
        const result = Math.floor(Math.random() * (max - min + 1)) + min;
        return String(result);
    }
};
}),
"[project]/src/business/terminalLogic.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Terminal",
    ()=>Terminal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$business$2f$terminalCommands$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/business/terminalCommands.ts [app-ssr] (ecmascript)");
;
class Terminal {
    terminalName;
    commands = new Map();
    history = [];
    constructor(name){
        this.terminalName = name;
        this.commands = new Map();
        this.registerDefaultCommands();
    }
    getName() {
        return this.terminalName;
    }
    getCommands() {
        return this.commands;
    }
    addToHistory(command, output) {
        const historyEntry = {
            command: command,
            output: output,
            timestamp: new Date()
        };
        this.history.push(historyEntry);
    }
    async execute(input) {
        const [commandName, ...args] = input.trim().split(' ');
        const command = this.commands.get(commandName);
        if (!command) {
            return `Command not found: ${commandName}`;
        }
        const output = await command.execute(args, this);
        this.addToHistory(input, output);
        return output;
    }
    clearHistory() {
        this.history = [];
    }
    registerCommand(command) {
        this.commands.set(command.name, command);
        console.log(`Command "${command.name}" registered successfully`);
    }
    registerDefaultCommands() {
        this.registerCommand(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$business$2f$terminalCommands$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["echoCommand"]);
        this.registerCommand(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$business$2f$terminalCommands$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["helpCommand"]);
        this.registerCommand(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$business$2f$terminalCommands$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearCommand"]);
        this.registerCommand(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$business$2f$terminalCommands$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sumCommand"]);
        this.registerCommand(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$business$2f$terminalCommands$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["minusCommand"]);
        this.registerCommand(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$business$2f$terminalCommands$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["multiplicationCommand"]);
        this.registerCommand(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$business$2f$terminalCommands$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["divisionCommand"]);
        this.registerCommand(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$business$2f$terminalCommands$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["powCommand"]);
        this.registerCommand(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$business$2f$terminalCommands$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sqrtCommand"]);
        this.registerCommand(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$business$2f$terminalCommands$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["randomCommand"]);
    }
}
}),
"[project]/src/components/Terminal/Body.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Body
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$business$2f$terminalLogic$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/business/terminalLogic.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
function Body() {
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [output, setOutput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const terminalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$business$2f$terminalLogic$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Terminal"]('web terminal'));
    const bodyRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleCommand = async (command)=>{
        if (!command.trim()) return;
        const result = await terminalRef.current.execute(command);
        setOutput((prev)=>[
                ...prev,
                `$ ${command}`,
                result
            ]);
        setInput('');
    };
    const handleKeyPress = (e)=>{
        if (e.key === 'Enter') {
            handleCommand(input);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (bodyRef.current) {
            bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
        }
    }, [
        output
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-4 h-80 font-mono text-green-400 overflow-y-auto",
        ref: bodyRef,
        children: [
            output.map((line, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-1",
                    children: line
                }, index, false, {
                    fileName: "[project]/src/components/Terminal/Body.tsx",
                    lineNumber: 38,
                    columnNumber: 5
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Line, {
                input: input,
                onInputChange: setInput,
                onKeyPress: handleKeyPress
            }, void 0, false, {
                fileName: "[project]/src/components/Terminal/Body.tsx",
                lineNumber: 44,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Terminal/Body.tsx",
        lineNumber: 32,
        columnNumber: 3
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__d8372ab9._.js.map