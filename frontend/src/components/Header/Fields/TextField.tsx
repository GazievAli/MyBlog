export default function TextField() {
	return (
		<div className='flex flex-col justify-center items-center'>
			<div className='w-full max-w-md text-center sm:text-left'>
				<h1 className='text-5xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-200 to-yellow-400 bg-clip-text text-transparent'>
					Али Газиев
				</h1>
				<p className='text-xl md:text-2xl text-white/90 leading-relaxed'>
					Слева — <span className='text-rose-400'>Next</span>, справа —{' '}
					<span className='text-rose-400'>Nest</span>, посередине — я и{' '}
					<span className='text-amber-200'>чашка кофе ☕</span>. Создаю
					приложения, которые не стыдно показать маме. И да, мой код иногда
					работает с{' '}
					<span className='bg-gradient-to-r from-red-400 via-purple-500 to-blue-400 bg-clip-text text-transparent bg-size-200 animate-gradient'>
						ПЕРВОГО
					</span>{' '}
					раза!
				</p>
			</div>
		</div>
	)
}
