import { TextFieldProps } from '@/types/header'

export default function TextField({ loaded }: TextFieldProps) {
	return (
		<div
			className={`flex flex-col justify-center items-center transition-all duration-1000 ${
				loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
			}`}
		>
			<div className='w-full max-w-md text-left lg:text-left'>
				<h1 className='text-4xl sm:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold mb-4 bg-gradient-to-r from-amber-200 to-yellow-400 bg-clip-text text-transparent'>
					Али Газиев
				</h1>
				<p className='text-lg sm:text-xl lg:text-lg xl:text-xl 2xl:text-2xl text-white/90 leading-relaxed'>
					Слева — <span className='text-red-400'>Next</span>, справа —{' '}
					<span className='text-red-400'>Nest</span>, посередине — я и{' '}
					<span className='text-amber-200'>чашка кофе</span>. Создаю приложения,
					которые не стыдно показать маме. И да, мой код иногда работает с{' '}
					<span className='bg-gradient-to-r from-red-400 via-purple-500 to-blue-400 bg-clip-text text-transparent bg-size-200 animate-gradient'>
						ПЕРВОГО
					</span>{' '}
					раза!
				</p>
			</div>
		</div>
	)
}
