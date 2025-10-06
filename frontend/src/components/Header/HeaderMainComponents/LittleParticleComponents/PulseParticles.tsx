export default function PulseParticels({ styles }: any) {
	return (
		<>
			<div
				className={`absolute top-1/3 left-1/4 w-2 h-2 bg-white/40 rounded-full ${styles.twinkle}`}
			></div>
			<div
				className={`absolute top-2/3 right-1/3 w-1 h-1 bg-blue-300/50 rounded-full ${styles.twinkle}`}
				style={{ animationDelay: '1s' }}
			></div>
			<div
				className={`absolute bottom-1/3 left-2/3 w-1.5 h-1.5 bg-purple-300/60 rounded-full ${styles.twinkle}`}
				style={{ animationDelay: '2s' }}
			></div>
			<div
				className={`absolute top-1/4 right-1/4 w-1 h-1 bg-cyan-300/50 rounded-full ${styles.twinkle}`}
				style={{ animationDelay: '0.5s' }}
			></div>
		</>
	)
}
