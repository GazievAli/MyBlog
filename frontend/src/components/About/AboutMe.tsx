import { ReactNode } from 'react'

// --- UI КОМПОНЕНТЫ ---

const GlassCard = ({
                       children,
                       className = ''
                   }: {
    children: ReactNode;
    className?: string
}) => (
    <div className={`
    relative overflow-hidden rounded-3xl border border-white/5 bg-[#161b22]/60 backdrop-blur-md p-8
    hover:border-white/10 transition-all duration-500 hover:shadow-2xl hover:shadow-rose-500/5 group
    ${className}
  `}>
        {/* Эффект шума на фоне */}
        <div className='absolute inset-0 opacity-[0.03] bg-[url("https://grainy-gradients.vercel.app/noise.svg")] pointer-events-none'></div>
        <div className='absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none'></div>
        <div className='relative z-10 h-full'>{children}</div>
    </div>
)

const SectionTitle = ({ subtitle, title }: { subtitle: string, title: ReactNode }) => (
    <div className='mb-12'>
        <h3 className='text-sm font-mono text-rose-400 tracking-[0.2em] uppercase mb-3 flex items-center gap-2'>
            <span className='w-8 h-[1px] bg-rose-500'></span>
            {subtitle}
        </h3>
        <h2 className='text-3xl md:text-5xl font-bold text-white leading-tight'>{title}</h2>
    </div>
)

const TechTag = ({ label, accent = 'gray' }: { label: string, accent?: 'rose' | 'amber' | 'blue' | 'green' | 'purple' | 'gray' }) => {
    const colors = {
        rose: 'text-rose-300 bg-rose-500/10 border-rose-500/20',
        amber: 'text-amber-300 bg-amber-500/10 border-amber-500/20',
        blue: 'text-blue-300 bg-blue-500/10 border-blue-500/20',
        green: 'text-emerald-300 bg-emerald-500/10 border-emerald-500/20',
        purple: 'text-purple-300 bg-purple-500/10 border-purple-500/20',
        gray: 'text-gray-300 bg-gray-500/10 border-gray-500/20',
    }
    return (
        <span className={`px-4 py-2 rounded-lg border text-sm font-mono font-medium ${colors[accent]} inline-block transition-transform hover:-translate-y-0.5`}>
            {label}
        </span>
    )
}

export default function AboutMe() {
    return (
        <section className='w-full bg-[#0d1117] text-white overflow-hidden relative'>

            {/* Глобальный фон (пятна) */}
            <div className='absolute top-0 left-0 w-full h-[1000px] bg-gradient-to-b from-[#0d1117] to-transparent z-10'></div>
            <div className='absolute top-40 right-0 w-[500px] h-[500px] bg-rose-600/10 blur-[150px] rounded-full pointer-events-none'></div>
            <div className='absolute bottom-40 left-0 w-[500px] h-[500px] bg-amber-500/5 blur-[150px] rounded-full pointer-events-none'></div>

            <div className='relative z-20'>

                {/* --------------------------------------------------
            БЛОК 1: ИНТРО И ФИЛОСОФИЯ
            -------------------------------------------------- */}
                <div className='pt-32 pb-20 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-start'>
                        <div>
                            <h2 className='text-5xl md:text-7xl font-bold leading-[1.1] mb-8'>
                                Данные правят <br />
                                <span className='text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-amber-200 to-rose-400 animate-gradient bg-300%'>
                            этим миром.
                        </span>
                            </h2>
                            <div className='w-24 h-1.5 bg-gradient-to-r from-rose-500 to-amber-500 rounded-full mb-8'></div>
                            <p className='text-xl text-gray-300 leading-relaxed font-light'>
                                Я — разработчик с фокусом на <span className='text-white font-medium'>Искусственный Интеллект</span> и <span className='text-white font-medium'>Анализ Данных</span>.
                                Мне 19 лет, и я убежден: код без математического фундамента — это просто текст.
                            </p>
                        </div>

                        <div className='space-y-8 mt-4 lg:mt-0'>
                            <GlassCard className='bg-[#161b22]/80'>
                                <h3 className='text-xl font-bold text-white mb-4 flex items-center gap-3'>
                                    <span className='text-2xl'>🧠</span> Моя философия
                                </h3>
                                <p className='text-gray-400 leading-relaxed text-base'>
                                    Современная разработка — это не просто написание API. Это умение извлекать смысл из хаоса данных.
                                    Учась на направлении ИИ, я комбинирую строгую алгоритмическую базу с современными веб-технологиями.
                                    Моя цель — создавать интерфейсы, за которыми стоит мощная аналитическая логика, а не просто CRUD-операции.
                                </p>
                            </GlassCard>

                            <div className='grid grid-cols-2 gap-4'>
                                <div className='p-6 rounded-2xl border border-gray-800 bg-[#11151c]'>
                                    <div className='text-3xl font-bold text-rose-500 mb-1'>Frontend</div>
                                    <div className='text-sm text-gray-500'>Pixel Perfect & Fast</div>
                                </div>
                                <div className='p-6 rounded-2xl border border-gray-800 bg-[#11151c]'>
                                    <div className='text-3xl font-bold text-amber-500 mb-1'>AI & Data</div>
                                    <div className='text-sm text-gray-500'>Smart Algorithms</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* --------------------------------------------------
            БЛОК 2: МОЙ ПРОЦЕСС (WORKFLOW)
            -------------------------------------------------- */}
                <div className='py-24 bg-[#0a0d12] border-y border-white/5'>
                    <div className='container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl'>
                        <SectionTitle
                            subtitle='Workflow'
                            title={<>Как я превращаю <span className='text-gray-500'>идеи</span> в <span className='text-white'>систему</span></>}
                        />

                        <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
                            {[
                                { step: '01', title: 'Анализ', desc: 'Математическое моделирование задачи и проектирование структур данных.', color: 'text-blue-400' },
                                { step: '02', title: 'Архитектура', desc: 'Выбор стека (Nest/Next) и проектирование связей БД (PostgreSQL).', color: 'text-rose-400' },
                                { step: '03', title: 'Код', desc: 'Чистый TypeScript, строгая типизация и SOLID принципы.', color: 'text-amber-400' },
                                { step: '04', title: 'Оптимизация', desc: 'Рефакторинг, тесты и деплой через Docker контейнеры.', color: 'text-green-400' }
                            ].map((item, idx) => (
                                <div key={idx} className='relative p-6 rounded-2xl bg-[#161b22] border border-gray-800 hover:bg-[#1c2128] transition-colors group'>
                                    <div className={`text-5xl font-bold opacity-10 mb-4 font-mono ${item.color} group-hover:opacity-20 transition-opacity`}>{item.step}</div>
                                    <h3 className={`text-xl font-bold mb-3 ${item.color}`}>{item.title}</h3>
                                    <p className='text-gray-400 text-sm leading-relaxed'>{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>


                {/* --------------------------------------------------
            БЛОК 3: ТЕХНОЛОГИЧЕСКИЙ СТЕК (3 КОЛОНКИ)
            -------------------------------------------------- */}
                <div className='py-32 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl'>
                    <SectionTitle
                        subtitle='Hard Skills'
                        title='Арсенал технологий'
                    />

                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>

                        {/* FRONTEND */}
                        <GlassCard className='flex flex-col gap-6'>
                            <div className='w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20'>
                                <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                            </div>
                            <div>
                                <h3 className='text-2xl font-bold mb-2'>Frontend</h3>
                                <p className='text-gray-400 text-sm'>
                                    Реализую сложную клиентскую логику. Не просто верстка, а полноценные SPA/PWA приложения.
                                </p>
                            </div>
                            <div className='flex flex-wrap gap-2 mt-auto'>
                                <TechTag label='Next.js 14' accent='blue' />
                                <TechTag label='TypeScript' accent='blue' />
                                <TechTag label='Tailwind' accent='blue' />
                                <TechTag label='Framer Motion' accent='blue' />
                            </div>
                        </GlassCard>

                        {/* BACKEND */}
                        <GlassCard className='flex flex-col gap-6'>
                            <div className='w-12 h-12 rounded-xl bg-rose-500/10 flex items-center justify-center border border-rose-500/20'>
                                <svg className="w-6 h-6 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>
                            </div>
                            <div>
                                <h3 className='text-2xl font-bold mb-2'>Backend</h3>
                                <p className='text-gray-400 text-sm'>
                                    Строю отказоустойчивые API. Микросервисы, WebSocket, очереди задач и кэширование.
                                </p>
                            </div>
                            <div className='flex flex-wrap gap-2 mt-auto'>
                                <TechTag label='Nest.js' accent='rose' />
                                <TechTag label='PostgreSQL' accent='rose' />
                                <TechTag label='Docker' accent='rose' />
                                <TechTag label='Prisma' accent='rose' />
                            </div>
                        </GlassCard>

                        {/* DATA & AI */}
                        <GlassCard className='flex flex-col gap-6 relative overflow-hidden'>
                            {/* Подсветка для этой карточки */}
                            <div className='absolute -right-10 -top-10 w-32 h-32 bg-amber-500/20 blur-[50px] rounded-full'></div>

                            <div className='w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20'>
                                <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                            </div>
                            <div>
                                <h3 className='text-2xl font-bold mb-2'>AI & Data Science</h3>
                                <p className='text-gray-400 text-sm'>
                                    Моя профильная специальность. Работа с датасетами, алгоритмы ML и интеграция нейросетей в веб.
                                </p>
                            </div>
                            <div className='flex flex-wrap gap-2 mt-auto'>
                                <TechTag label='Python' accent='amber' />
                                <TechTag label='Pandas' accent='amber' />
                                <TechTag label='PyTorch' accent='amber' />
                                <TechTag label='Math' accent='amber' />
                            </div>
                        </GlassCard>
                    </div>
                </div>


                {/* --------------------------------------------------
            БЛОК 4: ОБРАЗОВАНИЕ И ЛИЧНОЕ (GRID)
            -------------------------------------------------- */}
                <div className='pb-32 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl'>
                    <div className='grid grid-cols-1 md:grid-cols-12 gap-6'>

                        {/* EDUCATION - MAIN BLOCK */}
                        <GlassCard className='md:col-span-8 bg-gradient-to-r from-[#161b22] to-[#1c1f28]'>
                            <div className='flex flex-col justify-center h-full'>
                                <h4 className='text-rose-400 font-mono text-sm mb-3 tracking-wider'>EDUCATION</h4>
                                <h3 className='text-3xl md:text-4xl font-bold mb-3 text-white'>РТУ МИРЭА</h3>
                                <p className='text-xl text-white font-medium mb-2'>
                                    Институт Информационных Технологий
                                </p>
                                <p className='text-gray-400 text-lg'>
                                    Направление: <span className='text-rose-300'>Искусственный интеллект и анализ данных</span>
                                </p>
                                <div className='mt-6 flex gap-3'>
                                    <span className='px-3 py-1 bg-white/5 border border-white/10 rounded text-xs text-gray-300'>3 семестр</span>
                                    <span className='px-3 py-1 bg-white/5 border border-white/10 rounded text-xs text-gray-300'>Москва</span>
                                </div>
                            </div>
                        </GlassCard>

                        {/* CURRENT PROJECT */}
                        <GlassCard className='md:col-span-4 relative overflow-hidden flex flex-col justify-between'>
                            <div className='absolute top-0 right-0 w-32 h-32 bg-rose-500/20 blur-[50px] rounded-full'></div>
                            <div>
                                <h4 className='text-green-400 font-mono text-xs mb-3 animate-pulse'>● ACTIVE DEVELOPMENT</h4>
                                <h3 className='text-xl font-bold mb-2'>AI Task Manager</h3>
                                <p className='text-gray-400 text-sm mb-4'>
                                    Умный планировщик задач, который понимает контекст и сортирует дела за вас.
                                </p>
                            </div>
                            <div className='w-full bg-[#0d1117] rounded-full h-2 overflow-hidden'>
                                <div className='bg-gradient-to-r from-rose-500 to-amber-500 w-[75%] h-full'></div>
                            </div>
                        </GlassCard>

                        {/* HOBBIES - WIDE */}
                        <GlassCard className='md:col-span-12'>
                            <div className='flex flex-col md:flex-row items-center gap-8'>
                                <div className='flex gap-4 shrink-0'>
                                    <div className='w-16 h-16 bg-[#0d1117] rounded-2xl flex items-center justify-center text-2xl border border-gray-800'>📐</div>
                                    <div className='w-16 h-16 bg-[#0d1117] rounded-2xl flex items-center justify-center text-2xl border border-gray-800'>🎮</div>
                                </div>
                                <div>
                                    <h3 className='text-2xl font-bold mb-2'>За пределами IDE</h3>
                                    <p className='text-gray-400 leading-relaxed max-w-3xl'>
                                        В свободное время я углубляюсь в высшую математику (дифференциальные уравнения и ряды — лучшая гимнастика для ума)
                                        или поднимаю рейтинг на <span className='text-white font-bold'>Faceit</span> в Counter-Strike.
                                        Дисциплина в киберспорте помогает держать фокус и в коде.
                                    </p>
                                </div>
                            </div>
                        </GlassCard>

                    </div>
                </div>

            </div>
        </section>
    )
}