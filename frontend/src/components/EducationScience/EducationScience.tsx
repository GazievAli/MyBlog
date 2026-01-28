export function EducationScience() {
    const subjects = [
        { name: "Математический анализ", icon: "∫" },
        { name: "Линейная алгебра", icon: "matrix" },
        { name: "Теория вероятностей", icon: "P(x)" },
        { name: "Алгоритмы и структуры данных", icon: "{...}" }
    ]

    return (
        <section className="py-20 bg-[#0a0d12]">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    <div className="lg:col-span-4">
                        <h2 className="text-3xl font-bold text-white mb-6">Научный <span className="text-amber-400">базис</span></h2>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            Обучение в РТУ МИРЭА дает мне не только диплом, но и глубокое понимание того, как устроены
                            нейронные сети на уровне формул. Это позволяет мне не просто использовать библиотеки,
                            а оптимизировать их под задачи ИИ.
                        </p>
                        <div className="inline-block px-4 py-2 rounded-full border border-gray-800 bg-gray-900/50 text-xs text-gray-500 font-mono">
                            University: RTU MIREA • Faculty: IT
                        </div>
                    </div>

                    <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {subjects.map((sub) => (
                            <div key={sub.name} className="p-6 rounded-2xl border border-gray-800 bg-[#0d1117] hover:border-amber-500/30 transition-all group">
                                <div className="text-amber-500/50 font-mono text-sm mb-2 group-hover:text-amber-400 transition-colors">{sub.icon}</div>
                                <h3 className="text-white font-semibold">{sub.name}</h3>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    )
}