'use client'

import styles from '@/styles/header.module.css'
import MainCircles from './CirclesComponents/MainCircles'
import OrbitalCircles from './CirclesComponents/OrbitalCircles'
import PulseElems from './CirclesComponents/Pulse'

export default function Circles() {
	return (
		<>
			<MainCircles styles={styles} />
			<OrbitalCircles styles={styles} />
			<PulseElems styles={styles} />
		</>
	)
}
