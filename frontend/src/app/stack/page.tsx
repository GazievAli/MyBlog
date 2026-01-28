'use client'

import NavBar from '@/components/Header/NavBar'
import Footer from '@/components/Footer/Footer'

// Данные
const techCategories = [
    {
        title: 'Frontend Ecosystem',
        color: 'blue',
        desc: 'Создание интерфейсов, которые вызывают восторг.',
        items: ['Next.js 14', 'React', 'TypeScript', 'TailwindCSS', 'Framer Motion', 'Zustand', 'Shadcn UI', 'HTML5/CSS3']
    },
    {
        title: 'Backend & Infrastructure',
        color: 'rose',
        desc: 'Надежная серверная логика и архитектура.',
        items: ['Nest.js', 'Node.js', 'PostgreSQL', 'Prisma ORM', 'Docker', 'Redis', 'Nginx', 'Linux']
    },
    {
        title: 'AI & Data Science',
        color: 'amber',
        desc: 'Анализ данных и интеграция нейросетей.',
        items: ['Python', 'PyTorch', 'Pandas', 'NumPy', 'OpenAI API', 'LangChain', 'Jupyter', 'Matplotlib']
    },
    {
        title: 'DevOps & Tools',
        color: 'gray',
        desc: 'Инструменты, ускоряющие разработку.',
        items: ['Git / GitHub', 'Postman', 'Figma', 'VS Code', 'Webpack', 'Eslint/Prettier']
    }
]

export default function StackPage() {
    return (
        <div className="bg-[#0d1117] min-h-screen flex flex-col">
            <NavBar />

            <main className='flex-1 relative pt-32 pb-20'>
                <div className='absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none'></div>

                <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-6xl'>

                    <div className='text-center mb-20'>
                        <h1 className='text-4xl md:text-6xl font-bold text-white mb-6'>
                            Мой <span className='text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-rose-400'>Арсенал</span>
                        </h1>
                        <p className='text-gray-400 max-w-2xl mx-auto text-lg'>
                            Я выбираю инструменты не потому, что они популярны, а потому что они решают задачи бизнеса эффективно и надежно.
                        </p>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                        {techCategories.map((cat, idx) => (
                            <div
                                key={idx}
                                className='bg-[#161b22]/80 backdrop-blur-sm border border-gray-800 rounded-3xl p-8 hover:border-gray-600 transition-all duration-300 group'
                            >
                                <div className={`
                            w-12 h-12 rounded-xl flex items-center justify-center mb-6 
                            ${cat.color === 'blue' ? 'bg-blue-500/10 text-blue-400' :
                                    cat.color === 'rose' ? 'bg-rose-500/10 text-rose-400' :
                                        cat.color === 'amber' ? 'bg-amber-500/10 text-amber-400' : 'bg-gray-500/10 text-gray-400'}
                        `}>
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                                </div>

                                <h3 className='text-2xl font-bold text-white mb-2'>{cat.title}</h3>
                                <p className='text-gray-400 mb-8 h-10'>{cat.desc}</p>

                                <div className='flex flex-wrap gap-3'>
                                    {cat.items.map(item => (
                                        <span
                                            key={item}
                                            className={`
                                        px-3 py-1.5 rounded-lg text-sm font-mono border transition-colors
                                        ${cat.color === 'blue' ? 'border-blue-500/20 bg-blue-500/5 text-blue-300 group-hover:bg-blue-500/10' :
                                                cat.color === 'rose' ? 'border-rose-500/20 bg-rose-500/5 text-rose-300 group-hover:bg-rose-500/10' :
                                                    cat.color === 'amber' ? 'border-amber-500/20 bg-amber-500/5 text-amber-300 group-hover:bg-amber-500/10' : 'border-gray-500/20 bg-gray-500/5 text-gray-300 group-hover:bg-gray-500/10'}
                                    `}
                                        >
                                    {item}
                                </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className='mt-16 p-8 bg-[#161b22] border border-gray-800 rounded-3xl'>
                        <h3 className='text-xl font-bold text-white mb-6'>My Setup</h3>
                        <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm font-mono'>
                            <div className='flex items-center gap-4 text-gray-400'>
                                <span className='text-gray-600'>OS:</span> Windows 11 / WSL2 (Ubuntu)
                            </div>
                            <div className='flex items-center gap-4 text-gray-400'>
                                <span className='text-gray-600'>IDE:</span> VS Code + JetBrains IDEA
                            </div>
                            <div className='flex items-center gap-4 text-gray-400'>
                                <span className='text-gray-600'>Terminal:</span> Windows Terminal + ZSH
                            </div>
                        </div>
                    </div>

                </div>
            </main>

            <Footer />
        </div>
    )
}