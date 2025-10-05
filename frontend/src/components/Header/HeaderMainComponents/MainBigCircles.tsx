export default function Circles() {
	return (
		<>
			<div className='absolute top-1/4 -left-4 md:-left-8 lg:-left-10 w-48 h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 bg-purple-600/10 rounded-full animate-float-slow blur-2xl lg:blur-3xl'></div>
			<div className='absolute bottom-1/4 -right-4 md:-right-8 lg:-right-10 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-blue-600/10 rounded-full animate-float-delayed blur-2xl lg:blur-3xl'></div>
			<div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 md:w-52 md:h-52 lg:w-64 lg:h-64 bg-violet-600/10 rounded-full animate-pulse-slow blur-2xl lg:blur-3xl'></div>
		</>
	)
}
