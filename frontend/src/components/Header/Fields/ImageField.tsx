import { ImageFieldProps } from '@/types/header'
import Image from 'next/image'

export default function ImageField({ loaded }: ImageFieldProps) {
	return (
		<div
			className={`hidden lg:flex justify-end transition-all duration-1000 delay-300 ${
				loaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
			}`}
		>
			<div className='relative w-[70%] aspect-square mr-4'>
				<Image
					src='/legendaaa.jpg'
					alt='My Photo'
					fill
					className='object-cover rounded-lg shadow-xl'
				/>
			</div>
		</div>
	)
}
