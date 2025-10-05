'use client'

import Main from './Main'
import NavBar from './NavBar'

export default function Header() {
	return (
		<div className='w-full h-screen relative'>
			<NavBar />
			<Main />
		</div>
	)
}
