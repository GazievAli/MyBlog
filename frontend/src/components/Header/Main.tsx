'use client'

import Image from 'next/image'
import Link from 'next/link'
import MatrixSnakes from './MatrixSnakes'

export default function Main() {
    return (
        <section className='relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#0d1117]'>

            <MatrixSnakes />

            <div className='absolute inset-0 z-[1] pointer-events-none'>
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

                <div className="absolute left-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-rose-600 opacity-20 blur-[100px]"></div>
                <div className="absolute right-0 bottom-0 -z-10 h-[310px] w-[310px] rounded-full bg-amber-500 opacity-10 blur-[100px] animate-pulse"></div>
            </div>

            <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20'>
                <div className='flex flex-col-reverse md:flex-row items-center justify-between gap-12'>

                    <div className='flex-1 text-center md:text-left min-w-0'>

                        <div className='inline-flex items-center px-3 py-1 rounded-full border border-rose-500/30 bg-rose-500/10 text-rose-400 text-xs font-medium mb-6 animate-fade-in-up'>
                            <span className="flex h-2 w-2 rounded-full bg-rose-500 mr-2 animate-pulse"></span>
                            Fullstack Developer
                        </div>

                        <h1 className='text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-tight animate-fade-in-up pb-2 whitespace-nowrap'>
                            <span className='text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-amber-200 to-rose-400 animate-gradient bg-300%'>
                                Газиев Али
                            </span>
                        </h1>

                        <p className='text-lg md:text-xl text-gray-400 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed animate-fade-in-up-delay'>
                            Слева — <span className='text-white font-semibold'>Next.js</span>, справа — <span className='text-rose-400 font-semibold'>Nest.js</span>.
                            <br className="hidden md:block" />
                            Создаю современные веб-приложения, которые работают быстро, выглядят стильно и не падают под нагрузкой.
                        </p>

                        <div className='flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in-up-delay'>
                            <Link
                                href="/projects"
                                className='px-8 py-3 rounded-lg bg-gradient-to-r from-rose-600 to-rose-500 hover:from-rose-500 hover:to-rose-400 text-white font-medium transition-all shadow-lg shadow-rose-500/25 active:scale-95 text-center'
                            >
                                Мои работы
                            </Link>

                            <a
                                href="https://github.com/GazievAli"
                                target="_blank"
                                rel="noopener noreferrer"
                                className='px-8 py-3 rounded-lg bg-[#1e222a] border border-gray-700 hover:border-gray-500 text-white font-medium transition-all active:scale-95 flex items-center justify-center gap-2'
                            >
                                GitHub
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                                </svg>
                            </a>
                        </div>

                        <div className='mt-12 flex items-center gap-8 justify-center md:justify-start border-t border-gray-800 pt-8 animate-fade-in-up-delay'>
                            <div>
                                <h3 className='text-2xl font-bold text-white'>19</h3>
                                <p className='text-sm text-gray-500'>Лет</p>
                            </div>
                            <div>
                                <h3 className='text-2xl font-bold text-white'>Fullstack</h3>
                                <p className='text-sm text-gray-500'>Developer</p>
                            </div>
                            <div>
                                <h3 className='text-2xl font-bold text-white flex gap-2'>
                                    <span className='text-white'>Next</span>
                                    <span className='text-rose-500'>Nest</span>
                                </h3>
                                <p className='text-sm text-gray-500'>Main Stack</p>
                            </div>
                        </div>

                    </div>

                    <div className='flex-1 relative w-full max-w-md animate-fade-in-up'>
                        <div className='absolute -inset-1 bg-gradient-to-r from-rose-600 to-amber-600 rounded-2xl blur opacity-30'></div>
                        <div className='relative aspect-square w-full bg-[#1e222a] rounded-2xl border border-gray-700 overflow-hidden shadow-2xl group'>
                            <Image
                                src='/main.png'
                                alt='Ali Gaziev'
                                fill
                                className='object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out'
                                priority
                            />

                            <div className='absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-2xl translate-y-2 group-hover:translate-y-0 transition-transform'>
                                <div className='flex gap-2 mb-3 border-b border-gray-700 pb-2'>
                                    <div className='w-3 h-3 rounded-full bg-red-500'></div>
                                    <div className='w-3 h-3 rounded-full bg-yellow-500'></div>
                                    <div className='w-3 h-3 rounded-full bg-green-500'></div>
                                </div>
                                <div className='space-y-1.5 font-mono text-xs text-gray-300'>
                                    <p><span className='text-purple-400'>const</span> <span className='text-amber-300'>dev</span> = &#123;</p>
                                    <p className='pl-4'>frontend: <span className='text-green-400'>'Next.js 14'</span>,</p>
                                    <p className='pl-4'>backend: <span className='text-rose-400'>'Nest.js'</span>,</p>
                                    <p className='pl-4'>status: <span className='text-blue-400'>'Online'</span></p>
                                    <p>&#125;</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}