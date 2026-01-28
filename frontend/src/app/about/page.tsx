'use client'

import NavBar from '@/components/Header/NavBar'
import Footer from '@/components/Footer/Footer'
import Image from 'next/image'

// Обновленный таймлайн с твоей реальной историей
const timeline = [
    {
        year: '2014',
        title: 'Hello World (8 лет)',
        desc: 'Первое касание с кодом. Пока сверстники просто играли, я писал моды для Minecraft на Java и верстал первые страницы на HTML/CSS. Это заложило понимание того, как работает софт изнутри.'
    },
    {
        year: '2016-2018',
        title: 'Эпоха экспериментов (10 лет)',
        desc: 'Расширение кругозора. Изучал синтаксис Python, C++ и C#. Погрузился в динамику веба через JS и jQuery. Это было время чистого любопытства и поиска своего инструмента.'
    },
    {
        year: '2019',
        title: 'Академический старт',
        desc: 'Поступил в Многопрофильный лицей для одаренных детей (тех. профиль). С этого момента программирование перестало быть просто хобби и превратилось в системное изучение точных наук.'
    },
    {
        year: '2021',
        title: 'React & Алгоритмы (15 лет)',
        desc: 'Серьезный левел-ап. Овладел React на уровне создания приложений. Параллельно углубился в C# и структуры данных. Первые попытки в Data Analysis — стало понятно, что данные правят миром.'
    },
    {
        year: '2022',
        title: 'Fullstack Архитектура (16 лет)',
        desc: 'Выход за пределы браузера. Освоил Node.js (Express), работу с базами данных (PostgreSQL) и сетевые запросы (Axios). Начал строить полноценные клиент-серверные приложения.'
    },
    {
        year: '2024',
        title: 'РТУ МИРЭА & AI',
        desc: 'Поступление в университет на направление ИИ. Фундаментальная прокачка: линейная алгебра, матан, теорвер, сети и сложные алгоритмы. Эти знания стали базой для работы с нейросетями.'
    },
    {
        year: 'Сейчас',
        title: 'Polymath Engineer (19 лет)',
        desc: 'Синтез знаний. Пишу сложные проекты, используя Nest.js, Spring и Django. Интегрирую AI в веб, разрабатываю Desktop-приложения и экспериментирую с GameDev (Unity). Я не просто пишу код — я решаю инженерные задачи.'
    }
]

export default function AboutPage() {
    return (
        <div className="bg-[#0d1117] min-h-screen flex flex-col">
            <NavBar />

            <main className='flex-1 relative pt-32 pb-20'>
                {/* Фон */}
                <div className='absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none'></div>
                <div className='absolute top-40 right-0 w-[600px] h-[600px] bg-rose-600/5 blur-[120px] rounded-full pointer-events-none'></div>

                <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-5xl'>

                    {/* Заголовок */}
                    <div className='mb-16'>
                        <h1 className='text-4xl md:text-6xl font-bold text-white mb-6'>
                            Больше, чем <br />
                            <span className='text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-amber-300'>просто код.</span>
                        </h1>
                        <p className='text-xl text-gray-400 max-w-2xl leading-relaxed'>
                            Я разработчик, который верит в инженерный подход.
                            Мой путь начался в 8 лет, и сегодня я создаю системы, объединяющие мощь Backend-а, красоту Frontend-а и интеллект AI.
                        </p>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-12 gap-12'>
                        <div className='md:col-span-5 space-y-8'>
                            <div className='relative aspect-[3/4] w-full rounded-2xl overflow-hidden border border-gray-800 shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-500'>
                                <Image
                                    src='/main.png'
                                    alt='Ali Gaziev'
                                    fill
                                    className='object-cover'
                                />
                                <div className='absolute inset-0 bg-gradient-to-t from-[#0d1117] to-transparent opacity-60'></div>
                                <div className='absolute bottom-6 left-6'>
                                    <h3 className='text-white font-bold text-xl'>Газиев Али</h3>
                                    <p className='text-rose-400 font-mono text-sm'>Москва, Россия</p>
                                </div>
                            </div>

                            <div className='bg-[#161b22] border border-gray-800 rounded-2xl p-6'>
                                <h4 className='text-white font-bold mb-4'>Hard Skills Highlights</h4>
                                <div className='flex flex-wrap gap-2'>
                                    {['Algorithms', 'System Design', 'Math Analysis', 'Linear Algebra', 'Networking'].map(skill => (
                                        <span key={skill} className='px-3 py-1 bg-[#0d1117] border border-gray-700 rounded-lg text-sm text-gray-400'>
                                    {skill}
                                </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className='md:col-span-7'>
                            <h3 className='text-2xl font-bold text-white mb-8 flex items-center gap-3'>
                                <span className='text-rose-500'>#</span> История пути
                            </h3>

                            <div className='space-y-12 relative border-l border-gray-800 ml-3 pl-8 py-2'>
                                {timeline.map((item, index) => (
                                    <div key={index} className='relative group'>
                                        {/* Точка на таймлайне */}
                                        <div className='absolute -left-[39px] top-1.5 w-5 h-5 rounded-full border-4 border-[#0d1117] bg-gray-700 group-hover:bg-rose-500 transition-colors shadow-lg'></div>

                                        <span className='text-sm font-mono text-rose-400 mb-1 block'>{item.year}</span>
                                        <h4 className='text-xl font-bold text-white mb-3 group-hover:translate-x-2 transition-transform'>{item.title}</h4>
                                        <p className='text-gray-400 leading-relaxed text-base'>
                                            {item.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <div className='mt-16 p-8 bg-gradient-to-r from-rose-500/10 to-transparent border border-rose-500/20 rounded-2xl'>
                                <h4 className='text-white font-bold mb-2'>Есть идея для проекта?</h4>
                                <p className='text-gray-400 mb-6'>Мой бэкграунд позволяет решать задачи любой сложности: от простых сайтов до нейросетей.</p>
                                <div className='px-6 py-2 bg-rose-600/50 text-white rounded-lg font-medium inline-block cursor-default opacity-80'>
                                    Свяжитесь через меню сверху ↗
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </main>

            <Footer />
        </div>
    )
}