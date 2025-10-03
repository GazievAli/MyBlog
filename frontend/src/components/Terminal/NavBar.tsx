import ButtonRound from '../UI/buttons/ButtonRounded'

export default function NavBar() {
	return (
		<div className='flex items-center justify-between px-4 py-2 bg-gray-800'>
			<div className='flex-1 flex justify-center'>
				<div className='text-gray-300 text-sm'>терминал</div>
			</div>
			<div className='flex space-x-2'>
				<ButtonRound color='red'></ButtonRound>
				<ButtonRound color='yellow'></ButtonRound>
				<ButtonRound color='green'></ButtonRound>
			</div>
		</div>
	)
}
