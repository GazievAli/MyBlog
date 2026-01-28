import { ReactNode } from 'react'
import Link from 'next/link'

// --- Компонент иконки соцсети ---
const SocialLink = ({ href, icon, label }: { href: string; icon: ReactNode; label: string }) => (
    <a
        href={href}
        target='_blank'
        rel='noopener noreferrer'
        className='group flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300'
    >
        <div className='w-10 h-10 rounded-lg bg-[#161b22] border border-gray-800 flex items-center justify-center group-hover:border-rose-500/50 group-hover:shadow-[0_0_15px_rgba(244,63,94,0.2)] transition-all'>
            {icon}
        </div>
        <span className='font-mono text-sm group-hover:text-rose-400 transition-colors'>{label}</span>
    </a>
)

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className='w-full bg-[#0d1117] border-t border-gray-800/50 relative overflow-hidden mt-auto'>
            {/* Декоративная линия сверху с градиентом */}
            <div className='absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-rose-500/50 to-transparent'></div>

            {/* Фоновое свечение снизу */}
            <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-rose-600/5 blur-[100px] rounded-full pointer-events-none'></div>

            <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10'>
                <div className='grid grid-cols-1 md:grid-cols-12 gap-12'>

                    {/* КОЛОНКА 1: БРЕНДИНГ */}
                    <div className='md:col-span-5 space-y-6'>
                        <div>
                            <h2 className='text-2xl font-bold text-white mb-2'>Газиев Али</h2>
                            <p className='text-rose-400 font-mono text-sm'>Fullstack & AI Developer</p>
                        </div>
                        <p className='text-gray-400 leading-relaxed max-w-sm'>
                            Объединяю строгую математику и креативный фронтенд.
                            Создаю проекты, которые работают быстро и выглядят стильно.
                        </p>
                        <div className='flex items-center gap-2 text-xs font-mono text-gray-500'>
                            <span className='w-2 h-2 rounded-full bg-green-500 animate-pulse'></span>
                            <span>Status: Open for Work</span>
                        </div>
                    </div>

                    {/* КОЛОНКА 2: НАВИГАЦИЯ */}
                    <div className='md:col-span-3'>
                        <h3 className='text-white font-bold mb-6'>Меню</h3>
                        <ul className='space-y-4'>
                            {[
                                { name: 'Главная', path: '/' },
                                { name: 'Обо мне', path: '/about' },
                                { name: 'Мой Стек', path: '/stack' },
                                { name: 'Проекты', path: '/projects' }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link href={item.path} className='text-gray-400 hover:text-rose-400 transition-colors text-sm flex items-center gap-2 group'>
                                        <span className='w-0 group-hover:w-2 h-[1px] bg-rose-500 transition-all duration-300'></span>
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* КОЛОНКА 3: КОНТАКТЫ */}
                    <div className='md:col-span-4'>
                        <h3 className='text-white font-bold mb-6'>Контакты</h3>
                        <div className='flex flex-col gap-4'>

                            {/* Telegram */}
                            <SocialLink
                                href='https://t.me/NeuralOracle'
                                label='@NeuralOracle'
                                icon={
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 11.944 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
                                }
                            />

                            {/* Email */}
                            <SocialLink
                                href='mailto:gaziev.ali.ccc@gmail.com'
                                label='Email Me'
                                icon={
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                }
                            />

                            {/* Phone (ссылка tel:) */}
                            <SocialLink
                                href='tel:+79911767000'
                                label='+7(991) 176 70 00'
                                icon={
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                }
                            />

                        </div>
                    </div>

                </div>

                {/* НИЖНИЙ БАР */}
                <div className='mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-mono'>
                    <div>
                        &copy; {currentYear} Gaziev Ali. Все права защищены.
                    </div>
                    <div className='mt-2 md:mt-0 flex items-center gap-4'>
                        <span>Moscow, RU</span>
                        <span className='w-1 h-1 bg-gray-600 rounded-full'></span>
                        <span>Next.js • Tailwind • TypeScript</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}