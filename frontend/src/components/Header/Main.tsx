'use client'

import { useEffect, useState } from 'react'
import ImageField from './Fields/ImageField'
import TextField from './Fields/TextField'
import Circles from './HeaderMainComponents/MainBigCircles'
import Particles from './HeaderMainComponents/MainLittlePartile'
import ScrollIndicator from './HeaderMainComponents/MainScrollIndicator'
import styles from './styles/header.module.css'

export default function Main() {
	const [loaded, setLoaded] = useState(false)

	useEffect(() => {
		setLoaded(true)
	}, [])

	return (
		<main className={`${styles.main} w-full h-screen relative overflow-hidden`}>
			<div className='absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black'>
				<div className='absolute inset-0'>
					<Circles />
					<Particles />
					<div className='absolute inset-0 opacity-5 md:opacity-8 lg:opacity-10'>
						<div
							className={`absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent ${styles.shimmerSlow}`}
						></div>
					</div>
				</div>
			</div>

			<div className='container mx-auto px-4 sm:px-6 lg:px-8 h-full relative z-10'>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 h-full items-center'>
					<TextField loaded={loaded} />
					<ImageField loaded={loaded} />
				</div>
			</div>

			<ScrollIndicator />
		</main>
	)
}
