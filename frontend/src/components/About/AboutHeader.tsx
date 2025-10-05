import { HeaderProps } from '@/types/about'

export default function Header({ isVisible }: HeaderProps) {
	return (
		<div
			className={`text-center mb-12 lg:mb-16 transition-all duration-1000 ${
				isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
			}`}
		>
			<h1 className='text-4xl md:text-6xl font-bold text-gray-900 mb-6'>
				Обо{' '}
				<span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
					Мне
				</span>
			</h1>
			<p className='text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed'>
				Fullstack Developer с фокусом на создание качественных веб-приложений
			</p>
		</div>
	)
}
