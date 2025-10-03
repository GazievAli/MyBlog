import Image from 'next/image'
import ImageField from './Fields/ImageField'
import TextField from './Fields/TextField'

export default function Main() {
	return (
		<main className='w-full h-[calc(100vh-40px)] relative'>
			<Image
				src='/header-bg.jpg'
				alt='background'
				fill
				className='object-cover brightness-30'
				priority
			/>

			<div className='container mx-auto px-4 sm:px-6 lg:px-8 h-full relative z-10'>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-8 h-full items-center'>
					<TextField />
					<ImageField />
				</div>
			</div>
		</main>
	)
}
