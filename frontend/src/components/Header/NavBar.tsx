'use client'

import { useEffect, useState } from 'react'
import ButtonDark from '../UI/buttons/ButtonDark'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ContactModal from '../Overlays/ContactModal' // <--- Импорт модалки

export default function NavBar() {
    const [scrolled, setScrolled] = useState(false)
    const [isContactOpen, setIsContactOpen] = useState(false) // <--- Состояние модалки
    const pathname = usePathname()

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const getLinkClass = (path: string) => {
        const isActive = pathname === path
        return `text-sm font-medium transition-colors relative group ${
            isActive ? 'text-white' : 'text-gray-400 hover:text-white'
        }`
    }

    const getUnderlineClass = (path: string) => {
        const isActive = pathname === path
        return `absolute -bottom-1 left-0 h-0.5 bg-rose-500 transition-all duration-300 ${
            isActive ? 'w-full' : 'w-0 group-hover:w-full'
        }`
    }

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                    scrolled
                        ? 'bg-[#0d1117]/80 backdrop-blur-md border-b border-gray-800 py-3'
                        : 'bg-transparent py-5'
                }`}
            >
                <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='flex justify-between items-center'>

                        <Link href="/" className='flex items-center gap-2 group cursor-pointer'>
                            <div className='w-8 h-8 bg-gradient-to-br from-rose-500 to-amber-500 rounded-lg flex items-center justify-center font-bold text-white text-lg group-hover:scale-105 transition-transform shadow-lg shadow-rose-500/20'>
                                А
                            </div>
                            <span className='text-xl font-bold tracking-tight text-white group-hover:text-gray-300 transition-colors'>
                Газиев Али
              </span>
                        </Link>

                        <div className='hidden md:flex items-center space-x-8'>
                            <Link href="/" className={getLinkClass('/')}>
                                Главная
                                <span className={getUnderlineClass('/')}></span>
                            </Link>
                            <Link href="/about" className={getLinkClass('/about')}>
                                Обо мне
                                <span className={getUnderlineClass('/about')}></span>
                            </Link>
                            <Link href="/stack" className={getLinkClass('/stack')}>
                                Стек
                                <span className={getUnderlineClass('/stack')}></span>
                            </Link>
                            <Link href="/projects" className={getLinkClass('/projects')}>
                                Проекты
                                <span className={getUnderlineClass('/projects')}></span>
                            </Link>
                        </div>

                        <div className='flex items-center'>
                            <div className='flex items-center'>
                                <ButtonDark onClick={() => setIsContactOpen(true)}>
                                    <span className="text-sm">Связаться</span>
                                </ButtonDark>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
        </>
    )
}