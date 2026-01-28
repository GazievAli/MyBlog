import { useEffect, useState } from 'react'

// Добавляем тип для табов
export type SheetTab = 'bio' | 'stack'

interface AboutSheetProps {
    isOpen: boolean
    onClose: () => void
    initialTab?: SheetTab // <-- Новый проп
}

// ... (данные techStack и timeline остаются без изменений) ...
const techStack = {
    Frontend: ['Next.js 14', 'React', 'TypeScript', 'TailwindCSS', 'Framer Motion', 'Zustand'],
    Backend: ['Nest.js', 'Node.js', 'PostgreSQL', 'Prisma ORM', 'Docker', 'Redis'],
    'AI & Data': ['Python', 'PyTorch', 'Pandas', 'NumPy', 'Math Analysis', 'Jupyter'],
    Tools: ['Git', 'Figma', 'Linux', 'Postman', 'Vercel']
}

const timeline = [
    {
        year: '2023',
        title: 'Старт в IT',
        desc: 'Начало глубокого изучения программирования. Первые шаги в Python и базовом вебе.'
    },
    {
        year: '2024',
        title: 'Поступление в РТУ МИРЭА',
        desc: 'Факультет программной инженерии. Направление "Искусственный интеллект и анализ данных". Углубление в математику.'
    },
    {
        year: '2025',
        title: 'Fullstack Разработка',
        desc: 'Переход к сложным архитектурам. Изучение Nest.js и Next.js. Создание пет-проектов с микросервисной архитектурой.'
    },
    {
        year: 'Сейчас',
        title: 'AI Task Manager & Freelance',
        desc: 'Разработка собственной системы управления задачами с AI. Активное изучение Machine Learning для интеграции в веб.'
    }
]

export default function AboutSheet({ isOpen, onClose, initialTab = 'bio' }: AboutSheetProps) {
    const [activeTab, setActiveTab] = useState<SheetTab>('bio')
    const [isVisible, setIsVisible] = useState(false)

    // Обновляем активный таб, если меняется initialTab или при открытии
    useEffect(() => {
        if (isOpen) {
            setActiveTab(initialTab)
            setIsVisible(true)
            document.body.style.overflow = 'hidden'
        } else {
            const timer = setTimeout(() => setIsVisible(false), 500)
            document.body.style.overflow = 'unset'
            return () => clearTimeout(timer)
        }
    }, [isOpen, initialTab])

    if (!isVisible && !isOpen) return null

    return (
        <div className={`fixed inset-0 z-[100] flex justify-end transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>

            <div
                className='absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500'
                onClick={onClose}
            ></div>

            <div
                className={`
          relative w-full max-w-2xl h-full bg-[#0d1117] border-l border-white/10 shadow-2xl 
          transform transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]
          flex flex-col
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
            >
                <button
                    onClick={onClose}
                    className='absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors z-20'
                >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>

                {/* --- HEADER --- */}
                <div className='p-8 pb-4 border-b border-gray-800 bg-[#0d1117]/95 backdrop-blur z-10'>
                    <h2 className='text-3xl font-bold text-white mb-2'>
                        {activeTab === 'bio' ? 'Обо мне' : 'Мой Арсенал'}
                    </h2>
                    <p className='text-gray-400'>Газиев Али, 19 лет, Москва</p>

                    <div className='flex gap-6 mt-8 border-b border-gray-800'>
                        <button
                            onClick={() => setActiveTab('bio')}
                            className={`pb-3 text-sm font-medium transition-colors relative ${activeTab === 'bio' ? 'text-rose-400' : 'text-gray-500 hover:text-gray-300'}`}
                        >
                            Биография
                            {activeTab === 'bio' && <span className='absolute bottom-0 left-0 w-full h-0.5 bg-rose-500 rounded-t-full'></span>}
                        </button>
                        <button
                            onClick={() => setActiveTab('stack')}
                            className={`pb-3 text-sm font-medium transition-colors relative ${activeTab === 'stack' ? 'text-amber-400' : 'text-gray-500 hover:text-gray-300'}`}
                        >
                            Технологический стек
                            {activeTab === 'stack' && <span className='absolute bottom-0 left-0 w-full h-0.5 bg-amber-500 rounded-t-full'></span>}
                        </button>
                    </div>
                </div>

                {/* --- BODY --- */}
                <div className='flex-1 overflow-y-auto p-8 custom-scrollbar'>

                    {/* CONTENT: BIOGRAPHY */}
                    {activeTab === 'bio' && (
                        <div className='space-y-12 animate-fade-in'>
                            <div className='prose prose-invert'>
                                <p className='text-lg leading-relaxed text-gray-300'>
                                    Привет! Я студент РТУ МИРЭА, который превратил увлечение кодом в образ жизни.
                                    Моя суперсила — находить баланс между сложной математикой (которую я люблю) и красивыми пользовательскими интерфейсами.
                                </p>
                            </div>

                            <div className='space-y-8 relative'>
                                <div className='absolute left-[7px] top-2 bottom-2 w-[2px] bg-gray-800'></div>
                                {timeline.map((item, index) => (
                                    <div key={index} className='relative pl-8 group'>
                                        <div className='absolute left-0 top-1.5 w-4 h-4 rounded-full border-2 border-rose-500 bg-[#0d1117] group-hover:bg-rose-500 transition-colors'></div>
                                        <span className='text-xs font-mono text-rose-400 mb-1 block'>{item.year}</span>
                                        <h3 className='text-xl font-bold text-white mb-2'>{item.title}</h3>
                                        <p className='text-gray-400 text-sm leading-relaxed'>{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* CONTENT: STACK */}
                    {activeTab === 'stack' && (
                        <div className='grid gap-8 animate-fade-in'>
                            {Object.entries(techStack).map(([category, items]) => (
                                <div key={category} className='bg-[#161b22]/50 border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition-colors'>
                                    <h3 className='text-lg font-bold text-white mb-4 flex items-center gap-2'>
                                <span className={`w-2 h-2 rounded-full ${
                                    category === 'Frontend' ? 'bg-blue-500' :
                                        category === 'Backend' ? 'bg-rose-500' :
                                            category === 'AI & Data' ? 'bg-amber-500' : 'bg-gray-500'
                                }`}></span>
                                        {category}
                                    </h3>
                                    <div className='flex flex-wrap gap-2'>
                                        {items.map(tech => (
                                            <span key={tech} className='px-3 py-1.5 bg-[#0d1117] border border-gray-700 rounded-lg text-sm text-gray-300 font-mono'>
                                        {tech}
                                    </span>
                                        ))}
                                    </div>
                                </div>
                            ))}

                            <div className='mt-4 p-4 border border-rose-500/20 bg-rose-500/5 rounded-xl'>
                                <h4 className='text-rose-400 font-bold mb-2 text-sm uppercase tracking-wider'>Currently Learning</h4>
                                <p className='text-gray-300 text-sm'>
                                    Deep Learning (Neural Networks), Advanced Kubernetes, System Design for High Load.
                                </p>
                            </div>
                        </div>
                    )}
                </div>

            </div>
        </div>
    )
}