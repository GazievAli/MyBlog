'use client'

import { useEffect, useState } from 'react'

interface ContactModalProps {
    isOpen: boolean
    onClose: () => void
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
    const [isVisible, setIsVisible] = useState(false)
    const [copiedField, setCopiedField] = useState<string | null>(null)

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true)
            document.body.style.overflow = 'hidden'
        } else {
            const timer = setTimeout(() => setIsVisible(false), 300)
            document.body.style.overflow = 'unset'
            return () => clearTimeout(timer)
        }
    }, [isOpen])

    const handleCopy = (text: string, field: string) => {
        navigator.clipboard.writeText(text)
        setCopiedField(field)
        setTimeout(() => setCopiedField(null), 2000)
    }

    if (!isVisible && !isOpen) return null

    return (
        <div className={`fixed inset-0 z-[100] flex items-center justify-center transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>

            {/* Затемнение фона */}
            <div
                className='absolute inset-0 bg-black/70 backdrop-blur-sm'
                onClick={onClose}
            ></div>

            {/* Окно */}
            <div className={`
        relative w-full max-w-md bg-[#161b22] border border-gray-700 rounded-2xl shadow-2xl p-6 m-4
        transform transition-all duration-300
        ${isOpen ? 'scale-100 translate-y-0' : 'scale-95 translate-y-4'}
      `}>

                {/* Кнопка закрытия */}
                <button
                    onClick={onClose}
                    className='absolute top-4 right-4 text-gray-400 hover:text-white transition-colors'
                >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>

                <h2 className='text-2xl font-bold text-white mb-2'>Связь со мной</h2>
                <p className='text-gray-400 text-sm mb-6'>
                    Выберите удобный способ связи. Я стараюсь отвечать быстро.
                </p>

                <div className='space-y-4'>

                    {/* Telegram */}
                    <div className='group p-4 bg-[#0d1117] border border-gray-800 rounded-xl hover:border-blue-500/50 transition-colors flex items-center justify-between'>
                        <div className='flex items-center gap-4'>
                            <div className='w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-400'>
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 11.944 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
                            </div>
                            <div>
                                <div className='text-xs text-gray-500 font-mono'>Telegram</div>
                                <a href="https://t.me/NeuralOracle" target="_blank" className='text-white font-medium hover:text-blue-400 transition-colors'>@NeuralOracle</a>
                            </div>
                        </div>
                        <button
                            onClick={() => handleCopy('@NeuralOracle', 'tg')}
                            className='p-2 text-gray-500 hover:text-white transition-colors'
                            title="Скопировать"
                        >
                            {copiedField === 'tg' ? (
                                <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                            ) : (
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                            )}
                        </button>
                    </div>

                    {/* Email */}
                    <div className='group p-4 bg-[#0d1117] border border-gray-800 rounded-xl hover:border-amber-500/50 transition-colors flex items-center justify-between'>
                        <div className='flex items-center gap-4'>
                            <div className='w-10 h-10 bg-amber-500/10 rounded-lg flex items-center justify-center text-amber-400'>
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                            </div>
                            <div className='overflow-hidden'>
                                <div className='text-xs text-gray-500 font-mono'>Email</div>
                                <a href="mailto:gaziev.ali.ccc@gmail.com" className='text-white font-medium hover:text-amber-400 transition-colors truncate block'>gaziev.ali.ccc@gmail.com</a>
                            </div>
                        </div>
                        <button
                            onClick={() => handleCopy('gaziev.ali.ccc@gmail.com', 'email')}
                            className='p-2 text-gray-500 hover:text-white transition-colors'
                        >
                            {copiedField === 'email' ? (
                                <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                            ) : (
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                            )}
                        </button>
                    </div>

                    {/* Phone */}
                    <div className='group p-4 bg-[#0d1117] border border-gray-800 rounded-xl hover:border-green-500/50 transition-colors flex items-center justify-between'>
                        <div className='flex items-center gap-4'>
                            <div className='w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center text-green-400'>
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                            </div>
                            <div>
                                <div className='text-xs text-gray-500 font-mono'>Phone</div>
                                <a href="tel:+79911767000" className='text-white font-medium hover:text-green-400 transition-colors'>+7(991) 176 70 00</a>
                            </div>
                        </div>
                        <button
                            onClick={() => handleCopy('+79911767000', 'phone')}
                            className='p-2 text-gray-500 hover:text-white transition-colors'
                        >
                            {copiedField === 'phone' ? (
                                <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                            ) : (
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                            )}
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}