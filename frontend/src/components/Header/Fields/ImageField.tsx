import Image from 'next/image'

export default function ImageField() {
	return (
		<div className='hidden md:flex justify-end'>
			<div className='relative w-[90%] aspect-square mr-4'>
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
