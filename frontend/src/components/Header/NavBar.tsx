'use client'

import { NavbarPage } from '@/types/header'
import { useEffect, useState } from 'react'
import Logo from './HeaderNavBarComponents/NavBarLogo'
import MobileMenu from './HeaderNavBarComponents/NavBarMenuMobile'
import Nav from './HeaderNavBarComponents/NavBarNavigation'
import Right from './HeaderNavBarComponents/NavBarRight'

export default function NavBar() {
	const [scrolled, setScrolled] = useState(false)
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50)
		}
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	const navbarPages: NavbarPage[] = [
		{ name: 'Главная', href: 'home', isActive: true },
		{ name: 'Проекты', href: 'projects', isActive: false },
		{ name: 'Биография', href: 'bio', isActive: false },
		{ name: 'Соц Сети', href: 'social', isActive: false },
	]

	const getMobileLinkStyles = (isActive: boolean) => {
		return `font-medium py-2 transition-colors ${
			isActive ? 'text-blue-600 font-bold' : 'text-gray-700 hover:text-gray-900'
		}`
	}

	return (
		<div
			className={`w-full fixed top-0 z-50 transition-all duration-500 ${
				scrolled
					? 'h-14 md:h-16 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200'
					: 'h-16 md:h-20 bg-transparent'
			}`}
		>
			<div className='container mx-auto px-4 sm:px-6 lg:px-8 h-full'>
				<div className='flex justify-between items-center h-full'>
					<Logo scrolled={scrolled} />

					<Nav navbarPages={navbarPages} scrolled={scrolled} />

					<Right
						scrolled={scrolled}
						setMobileMenuOpen={setMobileMenuOpen}
						mobileMenuOpen={mobileMenuOpen}
					/>
				</div>

				{mobileMenuOpen && (
					<MobileMenu
						navbarPages={navbarPages}
						setMobileMenuOpen={setMobileMenuOpen}
						getMobileLinkStyles={getMobileLinkStyles}
					/>
				)}
			</div>
		</div>
	)
}
