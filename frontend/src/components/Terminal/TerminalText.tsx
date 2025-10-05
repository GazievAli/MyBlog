export default function Text() {
	return (
		<div className='text-center max-w-2xl'>
			<p className='text-[#abb2bf] text-sm leading-6'>
				Интерактивный терминал с поддержкой математических операций, работы с
				историей команд и подсветкой синтаксиса. Используйте команду{' '}
				<code className='text-[#98c379] bg-[#2c313a] px-1 rounded'>help</code>{' '}
				для просмотра доступных команд.
			</p>
			<p className='text-[#5c6370] text-xs mt-3'>
				Поддерживаемые операции: сложение, вычитание, умножение, деление,
				возведение в степень, квадратный корень и случайные числа
			</p>
		</div>
	)
}
