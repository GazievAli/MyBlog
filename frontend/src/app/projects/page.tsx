'use client'

import { useState } from 'react'
import NavBar from '@/components/Header/NavBar'
import Footer from '@/components/Footer/Footer'
import ProjectCard from '@/components/Projects/ProjectCard'
import AboutSheet, { SheetTab } from '@/components/Overlays/AboutSheet'

// --- ДАННЫЕ ПРОЕКТОВ ---
const projectsData = [
    {
        title: 'AI Task Manager',
        description: 'Интеллектуальная система управления задачами. Использует NLP для анализа описания задач и автоматического назначения приоритетов.',
        tags: ['Nest.js', 'Python', 'PostgreSQL', 'OpenAI API'],
        image: '', // Добавь путь к картинке, например '/projects/ai-task.jpg'
        githubLink: 'https://github.com',
        status: 'in-progress' as const
    },
    {
        title: 'Personal Portfolio',
        description: 'Текущий сайт. Полностью кастомный дизайн, эмуляция терминала, интерактивные анимации и оптимизация производительности.',
        tags: ['Next.js 14', 'Tailwind', 'TypeScript', 'Framer Motion'],
        image: '',
        githubLink: 'https://github.com',
        demoLink: 'https://gaziev.dev',
        status: 'completed' as const
    },
    {
        title: 'University Schedule Bot',
        description: 'Telegram-бот для расписания РТУ МИРЭА. Парсинг данных с сайта вуза, уведомления о парах.',
        tags: ['Java', 'Spring Boot', 'Telegram API', 'Docker'],
        image: '',
        githubLink: 'https://github.com',
        status: 'completed' as const
    },
    {
        title: 'Neural Data Analyzer',
        description: 'Учебный проект по анализу больших данных. Кластеризация пользователей на основе их поведения.',
        tags: ['Python', 'Pandas', 'Scikit-learn', 'Jupyter'],
        image: '',
        status: 'planned' as const
    }
]

export default function ProjectsPage() {
    const [aboutSheetOpen, setAboutSheetOpen] = useState(false)
    const [activeSheetTab, setActiveSheetTab] = useState<SheetTab>('bio')

    const handleOpenAbout = () => {
        setActiveSheetTab('bio')
        setAboutSheetOpen(true)
    }

    const handleOpenStack = () => {
        setActiveSheetTab('stack')
        setAboutSheetOpen(true)
    }

    return (
        <div className="bg-[#0d1117] min-h-screen flex flex-col">

            <NavBar onOpenAbout={handleOpenAbout} onOpenStack={handleOpenStack} />

            <main className='flex-1 relative pt-32 pb-20'>
                {/* Декор фона */}
                <div className='absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none'></div>
                <div className='absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-rose-600/10 blur-[120px] rounded-full pointer-events-none'></div>

                <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>

                    <div className='text-center mb-16'>
                        <h1 className='text-4xl md:text-6xl font-bold text-white mb-4'>
                            Мои <span className='text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-amber-300'>Проекты</span>
                        </h1>
                        <p className='text-gray-400 max-w-2xl mx-auto text-lg'>
                            От университетских лабораторных до сложных систем.
                        </p>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {projectsData.map((project, index) => (
                            <ProjectCard key={index} project={project} />
                        ))}
                    </div>

                </div>
            </main>

            <Footer />

            <AboutSheet
                isOpen={aboutSheetOpen}
                onClose={() => setAboutSheetOpen(false)}
                initialTab={activeSheetTab}
            />
        </div>
    )
}