import ButtonDark from '@/components/UI/buttons/ButtonDark'
import PhoneText from '@/components/UI/info/PhoneText'
import MessageIco from '@/components/UI/svg/Message'
import PhoneIco from '@/components/UI/svg/Phone'
import { RightProps } from '@/types/header'

export default function Right({
	scrolled,
	setMobileMenuOpen,
	mobileMenuOpen,
}: RightProps) {
	return (
		<div className='flex items-center space-x-3 md:space-x-4'>
			<div
				className={`hidden md:flex items-center transition-all duration-500 ${
					scrolled ? 'text-gray-700' : 'text-white/90'
				}`}
			>
				<PhoneIco className='w-5 h-5' />
				<p className='ml-2 font-medium'>
					<PhoneText>+7(991)176-70-00</PhoneText>
				</p>
			</div>

			<ButtonDark scrolled={scrolled} className='px-3 py-2 md:px-4 md:py-2'>
				<MessageIco className='w-4 h-4 md:w-5 md:h-5' />
				<span className='ml-2 text-sm md:text-base'>Написать</span>
			</ButtonDark>

			<button
				className='lg:hidden flex flex-col space-y-1 p-2'
				onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
			>
				<span
					className={`w-6 h-0.5 transition-all duration-300 ${
						scrolled ? 'bg-gray-900' : 'bg-white'
					}`}
				></span>
				<span
					className={`w-6 h-0.5 transition-all duration-300 ${
						scrolled ? 'bg-gray-900' : 'bg-white'
					}`}
				></span>
				<span
					className={`w-6 h-0.5 transition-all duration-300 ${
						scrolled ? 'bg-gray-900' : 'bg-white'
					}`}
				></span>
			</button>
		</div>
	)
}
