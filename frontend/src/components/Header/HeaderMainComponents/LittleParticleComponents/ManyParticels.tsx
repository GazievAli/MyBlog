export default function ManyParticels({ styles }: any) {
	return (
		<>
			<div
				className={`absolute top-3/4 left-1/5 w-1.5 h-1.5 bg-green-300/40 rounded-full ${styles.twinkle}`}
				style={{ animationDelay: '1.5s' }}
			></div>
			<div
				className={`absolute top-1/5 right-1/5 w-2 h-2 bg-yellow-300/30 rounded-full ${styles.twinkle}`}
				style={{ animationDelay: '2.5s' }}
			></div>
			<div
				className={`absolute bottom-1/5 left-1/2 w-1 h-1 bg-pink-300/50 rounded-full ${styles.twinkle}`}
				style={{ animationDelay: '0.8s' }}
			></div>
			<div
				className={`absolute top-2/5 right-2/5 w-1.5 h-1.5 bg-orange-300/35 rounded-full ${styles.twinkle}`}
				style={{ animationDelay: '1.8s' }}
			></div>
		</>
	)
}
