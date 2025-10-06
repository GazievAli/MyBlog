export default function OrbitalCircles({ styles }: any) {
	return (
		<>
			<div className='hidden md:block'>
				<div
					className={`absolute top-1/2 left-1/2 w-16 h-16 lg:w-20 lg:h-20 bg-emerald-400/6 lg:bg-emerald-400/8 rounded-full ${styles.orbit} blur-lg lg:blur-xl`}
				></div>
				<div
					className={`absolute top-1/2 left-1/2 w-12 h-12 lg:w-16 lg:h-16 bg-amber-400/4 lg:bg-amber-400/6 rounded-full ${styles.orbitReverse} blur-md lg:blur-lg`}
				></div>
			</div>
		</>
	)
}
