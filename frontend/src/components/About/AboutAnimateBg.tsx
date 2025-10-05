export default function AnimatedBg() {
	return (
		<div className='absolute inset-0'>
			<div className='absolute top-10 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float'></div>
			<div className='absolute top-10 right-10 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float-delayed'></div>
			<div className='absolute bottom-10 left-1/2 w-72 h-72 bg-cyan-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float-slow'></div>
		</div>
	)
}
