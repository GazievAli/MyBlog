'use client'

import styles from '@/styles/header.module.css'
import ManyParticels from './LittleParticleComponents/ManyParticels'
import PulseParticels from './LittleParticleComponents/PulseParticles'

export default function Particles() {
	return (
		<>
			<PulseParticels styles={styles} />
			<ManyParticels styles={styles} />
		</>
	)
}
