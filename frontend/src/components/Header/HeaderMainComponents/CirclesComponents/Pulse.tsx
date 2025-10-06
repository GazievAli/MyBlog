export default function PulseElems({ styles }: any) {
	return (
		<>
			<div
				className={`absolute top-3/4 left-1/3 w-24 h-24 md:w-36 md:h-36 bg-rose-500/8 md:bg-rose-500/10 rounded-full ${styles.pulseFast} blur-xl md:blur-2xl`}
			></div>
			<div
				className={`absolute top-1/6 right-1/3 w-32 h-32 md:w-44 md:h-44 bg-indigo-500/6 md:bg-indigo-500/8 rounded-full ${styles.drift} ${styles.pulseSlow} blur-2xl md:blur-3xl`}
			></div>
		</>
	)
}
