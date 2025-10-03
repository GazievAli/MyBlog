import ButtonDark from '../UI/buttons/ButtonDark'
import PhoneText from '../UI/info/PhoneText'
import MessageIco from '../UI/svg/Message'
import PhoneIco from '../UI/svg/Phone'

export default function NavBar() {
	return (
		<div className='w-full h-10'>
			<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex justify-between items-center h-10'>
					<div className='flex items-center'>
						<h1 className='text-2xl tracking-tight'>Али Газиев</h1>
					</div>
					<div className='flex items-center'></div>
					<div className='flex items-center'>
						<div className='hidden md:flex mr-3'>
							<PhoneIco />
							<p className='ml-2'>
								<PhoneText>+7(991)176-70-00</PhoneText>
							</p>
						</div>
						<div className='flex'>
							<ButtonDark>
								<MessageIco />
								<span className='ml-2'>Написать мне</span>
							</ButtonDark>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
