'use client'
import AboutMe from '@/components/About/AboutMe'
import Header from '@/components/Header/Header'
import Terminal from '@/components/Terminal/Terminal'
import TerminalIco from '@/components/Terminal/TerminalIco'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

export default function Home() {
	const [terminalActive, setTerminalActive] = useState(true)
	const [userName, setUserName] = useState('user')
	const [currentSection, setCurrentSection] = useState(0)

	const pathname = usePathname()

	useEffect(() => {
		window.scrollTo(0, 0)

		const handleLoad = () => {
			window.scrollTo(0, 0)
		}

		window.addEventListener('load', handleLoad)

		return () => {
			window.removeEventListener('load', handleLoad)
		}
	}, [pathname])
	const isScrolling = useRef(false)

	const hiddenTerminal = () => {
		setTerminalActive(!terminalActive)
	}

	const scrollToSection = (sectionIndex: number) => {
		if (isScrolling.current) return

		const sections = document.querySelectorAll('section')
		if (sections[sectionIndex]) {
			isScrolling.current = true
			sections[sectionIndex].scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			})
			setCurrentSection(sectionIndex)

			setTimeout(() => {
				isScrolling.current = false
			}, 1000)
		}
	}

	useEffect(() => {
		const handleScroll = () => {
			if (isScrolling.current) return

			const sections = document.querySelectorAll('section')
			const scrollPosition = window.scrollY + window.innerHeight / 3

			let current = 0
			sections.forEach((section, index) => {
				const sectionTop = section.offsetTop
				const sectionHeight = section.offsetHeight

				if (
					scrollPosition >= sectionTop &&
					scrollPosition < sectionTop + sectionHeight
				) {
					current = index
				}
			})

			setCurrentSection(current)
		}

		window.addEventListener('scroll', handleScroll, { passive: true })
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			const sections = document.querySelectorAll('section')

			if (e.key === 'ArrowDown' && e.ctrlKey) {
				e.preventDefault()
				if (currentSection < sections.length - 1) {
					scrollToSection(currentSection + 1)
				}
			} else if (e.key === 'ArrowUp' && e.ctrlKey) {
				e.preventDefault()
				if (currentSection > 0) {
					scrollToSection(currentSection - 1)
				}
			} else if (e.key === 'Home' && e.ctrlKey) {
				e.preventDefault()
				scrollToSection(0)
			} else if (e.key === 'End' && e.ctrlKey) {
				e.preventDefault()
				scrollToSection(sections.length - 1)
			}
		}

		window.addEventListener('keydown', handleKeyDown)
		return () => window.removeEventListener('keydown', handleKeyDown)
	}, [currentSection])

	const ProgressIndicator = () => {
		const sections = [
			{ name: 'Главная', id: 'header' },
			{ name: 'Обо мне', id: 'about' },
			{ name: 'Терминал', id: 'terminal' },
		]

		return (
			<div className='fixed right-6 top-1/2 transform -translate-y-1/2 z-50 hidden lg:flex flex-col space-y-4'>
				{sections.map((section, index) => (
					<button
						key={index}
						onClick={() => scrollToSection(index)}
						className={`group relative flex items-center justify-center transition-all duration-300 ${
							currentSection === index ? 'scale-125' : 'hover:scale-110'
						}`}
						title={section.name}
					>
						<div
							className={`w-3 h-3 rounded-full transition-all duration-300 ${
								currentSection === index
									? 'bg-blue-600 shadow-lg shadow-blue-600/50'
									: 'bg-gray-400 hover:bg-gray-600'
							}`}
						/>
						<div className='absolute right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none'>
							<div className='bg-gray-900 text-white text-xs py-1 px-2 rounded whitespace-nowrap'>
								{section.name}
								{currentSection === index && ' ✓'}
							</div>
						</div>
					</button>
				))}
			</div>
		)
	}

	return (
		<div className='relative'>
			<ProgressIndicator />

			<section id='header'>
				<Header />
			</section>

			<section id='about'>
				<AboutMe />
			</section>

			<section id='terminal'>
				{terminalActive ? (
					<Terminal name={userName} hiddenTerminal={hiddenTerminal} />
				) : (
					<TerminalIco hideTerminal={hiddenTerminal} />
				)}
			</section>
		</div>
	)
}
