export default function ScrollIndicator() {
	return (
		<div className='hidden lg:flex absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce'>
			<div className='w-6 h-10 border-2 border-white/30 rounded-full flex justify-center backdrop-blur-sm'>
				<div className='w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse'></div>
			</div>
		</div>
	)
}
