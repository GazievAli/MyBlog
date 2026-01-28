export default function Text() {
    return (
        <div className='mt-8 max-w-2xl mx-auto'>
            <div className='bg-[#161b22] border border-gray-800 rounded-xl p-4 flex items-start gap-4 shadow-lg'>
                <div className='p-2 bg-rose-500/10 rounded-lg shrink-0'>
                    <svg className="w-5 h-5 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <div>
                    <h4 className='text-white text-sm font-bold mb-1'>Интерактивная консоль</h4>
                    <p className='text-gray-400 text-sm leading-relaxed'>
                        Попробуйте команды: <code className='text-amber-400 bg-amber-500/10 px-1.5 py-0.5 rounded'>help</code>,{' '}
                        <code className='text-amber-400 bg-amber-500/10 px-1.5 py-0.5 rounded'>whoami</code> (моё досье) или математику (например <code className='text-blue-400'>sum 2 2</code>).
                    </p>
                </div>
            </div>
        </div>
    )
}