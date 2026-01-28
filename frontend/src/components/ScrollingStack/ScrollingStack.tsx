const tools = ["Next.js", "NestJS", "TypeScript", "PostgreSQL", "Python", "Docker", "Spring", "Unity"]

export function ScrollingStack() {
    return (
        <section className="py-8 bg-[#0d1117] border-y border-gray-800/50 overflow-hidden relative">
            <div
                className="flex flex-nowrap w-max"
                style={{ animation: 'marquee 25s linear infinite' }}
            >
                {[...tools, ...tools, ...tools].map((tool, i) => (
                    <div key={i} className="flex items-center shrink-0">
                        <span className="text-xl md:text-2xl font-bold text-gray-500/20 mx-8 uppercase">
                            {tool}
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-800/50"></span>
                    </div>
                ))}
            </div>

            <style jsx>{`
                @keyframes marquee {
                    from { transform: translateX(0); }
                    to { transform: translateX(-33.33%); }
                }
            `}</style>
        </section>
    )
}