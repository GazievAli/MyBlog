'use client'

import styles from '@/styles/header.module.css'
import { useEffect, useState } from 'react'
import ImageField from './Fields/ImageField'
import TextField from './Fields/TextField'
import Circles from './HeaderMainComponents/MainBigCircles'
import Particles from './HeaderMainComponents/MainLittlePartile'
import ScrollIndicator from './HeaderMainComponents/MainScrollIndicator'

export default function Main() {
	const [loaded, setLoaded] = useState(false)

	useEffect(() => {
		setLoaded(true)
	}, [])

	return (
		<main className={`${styles.main} w-full h-screen relative overflow-hidden`}>
			{/* Темный градиентный фон с анимацией */}
			<div className='absolute inset-0 bg-gradient-to-br from-gray-950 via-black to-gray-900'>
				{/* Анимированный градиентный оверлей */}
				<div className={`absolute inset-0 ${styles.gradientFlow}`}></div>

				{/* Поле частиц */}
				<div className={`absolute inset-0 ${styles.particleField}`}></div>

				{/* Основные анимированные элементы */}
				<div className='absolute inset-0'>
					<Circles />
					<Particles />

					{/* Дополнительные анимированные элементы (только на десктопе) */}
					<div className='hidden md:block'>
						<div
							className={`absolute top-1/3 right-1/4 w-32 h-32 bg-indigo-500/8 rounded-full ${styles.floatReverse} blur-3xl`}
						></div>
						<div
							className={`absolute bottom-1/3 left-1/4 w-24 h-24 bg-pink-500/6 rounded-full ${styles.drift} blur-2xl`}
						></div>
						<div
							className={`absolute top-2/3 left-1/2 w-28 h-28 bg-cyan-500/8 rounded-full ${styles.orbit} blur-3xl`}
						></div>
					</div>

					{/* Мерцающий оверлей (очень прозрачный) */}
					<div className='absolute inset-0 opacity-[0.003]'>
						<div
							className={`absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent ${styles.shimmerSlow}`}
						></div>
					</div>
				</div>
			</div>

			{/* Контент */}
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
