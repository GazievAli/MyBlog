import { LogoProps } from '@/types/header'

export default function Logo({ scrolled }: LogoProps) {
	return (
		<div className='flex items-center'>
			<h1
				className={`text-xl md:text-2xl font-bold tracking-tight transition-all duration-500 ${
					scrolled ? 'text-gray-900' : 'text-white'
				}`}
			>
				Али Газиев
			</h1>
		</div>
	)
}
