export default function MainCircles({ styles }: any) {
	return (
		<>
			<div
				className={`absolute top-1/4 -left-4 md:-left-8 lg:-left-10 w-32 h-32 md:w-48 md:h-48 lg:w-60 lg:h-60 xl:w-72 xl:h-72 bg-purple-600/10 md:bg-purple-600/15 rounded-full ${styles.floatSlow} ${styles.pulseSlow} blur-xl md:blur-2xl lg:blur-3xl`}
			></div>

			<div
				className={`absolute bottom-1/4 -right-4 md:-right-8 lg:-right-10 w-40 h-40 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 bg-blue-600/8 md:bg-blue-600/12 rounded-full ${styles.floatDelayed} ${styles.pulseSlow} blur-xl md:blur-2xl lg:blur-3xl`}
			></div>

			<div
				className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 md:w-40 md:h-40 lg:w-52 lg:h-52 xl:w-64 xl:h-64 bg-violet-600/10 md:bg-violet-600/15 rounded-full ${styles.pulseSlow} blur-xl md:blur-2xl lg:blur-3xl`}
			></div>
		</>
	)
}
