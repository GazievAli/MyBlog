'use client'

import styles from '@/styles/terminal.module.css'

export default function AnimatedBg() {
	return (
		<div className='absolute inset-0 overflow-hidden'>
			{/* Основные анимированные круги */}
			<div
				className={`${styles.float1} absolute top-1/4 left-1/4 w-48 h-48 md:w-72 md:h-72 bg-blue-500/10 md:bg-blue-500/10 rounded-full blur-2xl md:blur-3xl`}
			></div>
			<div
				className={`${styles.float2} absolute bottom-1/3 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-purple-500/8 md:bg-purple-500/10 rounded-full blur-2xl md:blur-3xl`}
			></div>
			<div
				className={`${styles.float3} absolute top-1/2 left-1/3 w-40 h-40 md:w-80 md:h-80 bg-cyan-500/8 md:bg-cyan-500/10 rounded-full blur-2xl md:blur-3xl`}
			></div>

			{/* Дополнительные круги (только на десктопе) */}
			<div className='hidden md:block'>
				<div
					className={`${styles.float4} absolute top-1/3 right-1/3 w-40 h-40 md:w-64 md:h-64 bg-indigo-500/6 md:bg-indigo-500/8 rounded-full blur-2xl md:blur-3xl`}
				></div>
				<div
					className={`${styles.float5} absolute bottom-1/4 left-1/5 w-56 h-56 md:w-88 md:h-88 bg-pink-500/6 md:bg-pink-500/8 rounded-full blur-2xl md:blur-3xl`}
				></div>
			</div>

			{/* Пульсирующие элементы */}
			<div
				className={`${styles.pulse1} absolute top-3/4 left-2/3 w-32 h-32 md:w-40 md:h-40 bg-emerald-400/5 md:bg-emerald-400/5 rounded-full blur-xl md:blur-2xl`}
			></div>
			<div
				className={`${styles.pulse2} absolute top-1/6 right-1/6 w-24 h-24 md:w-32 md:h-32 bg-amber-400/5 md:bg-amber-400/5 rounded-full blur-lg md:blur-2xl`}
			></div>

			{/* Анимированный градиентный оверлей */}
			<div className={`${styles.gradientOverlay} absolute inset-0`}></div>

			{/* Частицы */}
			<div className={`${styles.particles} absolute inset-0`}></div>

			{/* Мерцающие звезды (только на десктопе) */}
			<div className='hidden md:block'>
				<div className={`${styles.twinkleOverlay} absolute inset-0`}></div>
			</div>
		</div>
	)
}
