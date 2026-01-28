export function DevLife() {
    return (
        <section className="py-24 bg-[#0d1117]">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-4xl font-bold text-white leading-tight">
                            Инженерия — это <br /> <span className="text-amber-400">дисциплина ума</span>
                        </h2>
                        <p className="text-gray-400 text-lg">
                            Мой путь начался с модов для Minecraft в 8 лет. С тех пор я прошел путь от обычного ученика до студента ИИ в РТУ МИРЭА. Университет помог мне структурировать знания в области алгоритмов, сетей и высшей математики.
                        </p>
                        <div className="grid grid-cols-2 gap-4 pt-4">
                            <div className="p-4 bg-[#161b22] rounded-xl border border-gray-800">
                                <div className="text-rose-500 font-bold text-2xl">10+</div>
                                <div className="text-gray-500 text-xs uppercase tracking-widest">Лет в коде</div>
                            </div>
                            <div className="p-4 bg-[#161b22] rounded-xl border border-gray-800">
                                <div className="text-amber-500 font-bold text-2xl">MIREA</div>
                                <div className="text-gray-500 text-xs uppercase tracking-widest">AI Specialization</div>
                            </div>
                        </div>
                    </div>

                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-rose-500 to-amber-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                        <div className="relative bg-[#11151c] border border-gray-800 rounded-2xl p-8 font-mono text-sm overflow-hidden">
                            <div className="text-blue-400">class</div> <div className="text-yellow-400">Developer</div> {"{"}
                            <div className="pl-4 text-gray-400 mt-2">
                                <span className="text-purple-400">constructor</span>() {"{"}
                                <div className="pl-4">
                                    this.name = <span className="text-green-400">'Ali Gaziev'</span>;<br />
                                    this.born = <span className="text-rose-400">2006-07-11</span>;<br />
                                    this.passion = [<span className="text-green-400">'Math'</span>, <span className="text-green-400">'AI'</span>, <span className="text-green-400">'ZSH'</span>];
                                </div>
                                {"}"}
                            </div>
                            <div className="pl-4 text-gray-400 mt-2">
                                <span className="text-blue-400">get</span> <span className="text-yellow-400">dailyRoutine</span>() {"{"}
                                <div className="pl-4">
                                    <span className="text-purple-400">return</span> [<span className="text-green-400">'Code'</span>, <span className="text-green-400">'Linear Algebra'</span>, <span className="text-green-400">'Faceit'</span>];
                                </div>
                                {"}"}
                            </div>
                            {"}"}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}