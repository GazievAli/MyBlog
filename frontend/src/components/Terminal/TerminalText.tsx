export default function Text() {
	return (
		<div className='text-center max-w-2xl mt-4 md:mt-6 lg:mt-8 px-4'>
			<p className='text-[#abb2bf] text-xs md:text-sm leading-5 md:leading-6'>
				Интерактивный терминал с поддержкой математических операций, работы с
				историей команд и подсветкой синтаксиса. Используйте команду{' '}
				<code className='text-[#98c379] bg-[#2c313a] px-1.5 py-0.5 md:px-2 md:py-1 rounded font-bold text-xs md:text-sm'>
					help
				</code>{' '}
				для просмотра доступных команд.
			</p>
			<p className='text-[#5c6370] text-xs mt-2 md:mt-3'>
				Поддерживаемые операции: сложение, вычитание, умножение, деление,
				возведение в степень, квадратный корень и случайные числа
			</p>
		</div>
	)
}
