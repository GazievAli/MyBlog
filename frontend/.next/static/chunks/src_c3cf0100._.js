(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/business/terminalCommands.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
            commandList.push("".concat(name, " - ").concat(cmd.description));
        }
        return 'Доступные команды:\n' + commandList.join('\n');
    }
};
const clearCommand = {
    name: 'clear',
    description: 'Clears terminal history',
    execute: (args, terminal)=>{
        terminal.clearHistory();
        if (terminal.clearUICallBack) {
            terminal.clearUICallBack();
        }
        return '';
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/business/terminalLogic.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Terminal",
    ()=>Terminal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$business$2f$terminalCommands$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/business/terminalCommands.ts [app-client] (ecmascript)");
;
;
class Terminal {
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
            return "Command not found: ".concat(commandName);
        }
        const output = await command.execute(args, this);
        this.addToHistory(input, output);
        return output;
    }
    clearHistory() {
        this.history = [];
    }
    setClearUICallBack(callback) {
        this.clearUICallBack = callback;
    }
    registerCommand(command) {
        this.commands.set(command.name, command);
        console.log('Command "'.concat(command.name, '" registered successfully'));
    }
    registerDefaultCommands() {
        this.registerCommand(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$business$2f$terminalCommands$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["echoCommand"]);
        this.registerCommand(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$business$2f$terminalCommands$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["helpCommand"]);
        this.registerCommand(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$business$2f$terminalCommands$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearCommand"]);
        this.registerCommand(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$business$2f$terminalCommands$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sumCommand"]);
        this.registerCommand(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$business$2f$terminalCommands$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["minusCommand"]);
        this.registerCommand(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$business$2f$terminalCommands$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["multiplicationCommand"]);
        this.registerCommand(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$business$2f$terminalCommands$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["divisionCommand"]);
        this.registerCommand(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$business$2f$terminalCommands$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["powCommand"]);
        this.registerCommand(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$business$2f$terminalCommands$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sqrtCommand"]);
        this.registerCommand(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$business$2f$terminalCommands$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["randomCommand"]);
    }
    constructor(name){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "terminalName", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "commands", new Map());
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "history", []);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "clearUICallBack", void 0);
        this.terminalName = name;
        this.commands = new Map();
        this.registerDefaultCommands();
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/business/terminalHighlight.tsx [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Terminal/Line.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Line
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$business$2f$terminalHighlight$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/business/terminalHighlight.tsx [app-client] (ecmascript)");
;
;
function Line(param) {
    let { input, onInputChange, onKeyPress } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-blue-400",
                children: "visitor@portfolio"
            }, void 0, false, {
                fileName: "[project]/src/components/Terminal/Line.tsx",
                lineNumber: 12,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-white",
                children: ":"
            }, void 0, false, {
                fileName: "[project]/src/components/Terminal/Line.tsx",
                lineNumber: 13,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-cyan-400",
                children: "~"
            }, void 0, false, {
                fileName: "[project]/src/components/Terminal/Line.tsx",
                lineNumber: 14,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-white",
                children: "$"
            }, void 0, false, {
                fileName: "[project]/src/components/Terminal/Line.tsx",
                lineNumber: 15,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "ml-2 flex-1 relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 font-mono text-white pointer-events-none",
                        children: [
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$business$2f$terminalHighlight$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["highlightSyntax"])(input),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "ml-1 text-yellow-300 animate-pulse",
                                children: "_"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Terminal/Line.tsx",
                                lineNumber: 20,
                                columnNumber: 6
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Terminal/Line.tsx",
                        lineNumber: 18,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        value: input,
                        onChange: (e)=>onInputChange(e.target.value),
                        onKeyPress: onKeyPress,
                        className: "w-full bg-transparent text-transparent outline-none font-mono caret-transparent",
                        autoFocus: true,
                        spellCheck: false
                    }, void 0, false, {
                        fileName: "[project]/src/components/Terminal/Line.tsx",
                        lineNumber: 23,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Terminal/Line.tsx",
                lineNumber: 17,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Terminal/Line.tsx",
        lineNumber: 11,
        columnNumber: 3
    }, this);
}
_c = Line;
var _c;
__turbopack_context__.k.register(_c, "Line");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Terminal/Body.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Body
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$business$2f$terminalLogic$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/business/terminalLogic.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Terminal$2f$Line$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Terminal/Line.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function Body() {
    _s();
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [output, setOutput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const terminalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$business$2f$terminalLogic$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Terminal"]('web terminal'));
    const bodyRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Body.useEffect": ()=>{
            terminalRef.current.setClearUICallBack({
                "Body.useEffect": ()=>{
                    setOutput([]);
                }
            }["Body.useEffect"]);
        }
    }["Body.useEffect"], []);
    const handleCommand = async (command)=>{
        if (!command.trim()) return;
        if (command.trim() !== 'clear') {
            const result = await terminalRef.current.execute(command);
            setOutput((prev)=>[
                    ...prev,
                    "$ ".concat(command),
                    result
                ]);
        } else {
            await terminalRef.current.execute(command);
        }
        setInput('');
    };
    const handleKeyPress = (e)=>{
        if (e.key === 'Enter') {
            handleCommand(input);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Body.useEffect": ()=>{
            if (bodyRef.current) {
                bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
            }
        }
    }["Body.useEffect"], [
        output
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-4 h-80 font-mono text-green-400 overflow-y-auto",
        ref: bodyRef,
        children: [
            output.map((line, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-1",
                    children: line
                }, index, false, {
                    fileName: "[project]/src/components/Terminal/Body.tsx",
                    lineNumber: 48,
                    columnNumber: 5
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Terminal$2f$Line$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                input: input,
                onInputChange: setInput,
                onKeyPress: handleKeyPress
            }, void 0, false, {
                fileName: "[project]/src/components/Terminal/Body.tsx",
                lineNumber: 53,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Terminal/Body.tsx",
        lineNumber: 43,
        columnNumber: 3
    }, this);
}
_s(Body, "FuoWDeUui8aafQa/u9u0Dfrxi1A=");
_c = Body;
var _c;
__turbopack_context__.k.register(_c, "Body");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_c3cf0100._.js.map