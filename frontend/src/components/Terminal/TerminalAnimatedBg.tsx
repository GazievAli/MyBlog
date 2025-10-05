export default function AnimatedBg() {
	return (
		<div className='absolute inset-0'>
			<div className='absolute top-1/4 left-1/4 w-72 h-72 bg-blue-800/3 rounded-full animate-float-1 blur-3xl'></div>
			<div className='absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-800/3 rounded-full animate-float-2 blur-3xl'></div>
			<div className='absolute top-1/2 left-1/3 w-80 h-80 bg-cyan-800/3 rounded-full animate-float-3 blur-3xl'></div>
		</div>
	)
}
