'use client'

import styles from '@/styles/about.module.css'
import { Category, GitHubStats, PersonalInfo } from '@/types/about'
import { useEffect, useRef, useState } from 'react'
import AnimatedBg from './AboutAnimateBg'
import CurrentSkill from './AboutCurrectSkill'
import Header from './AboutHeader'
import PersonalInf from './AboutPersonalInf'
import STA from './AboutSTA'
import Skills from './AboutSkills'

export default function AboutMe() {
	const [activeCategory, setActiveCategory] = useState(0)
	const [isVisible, setIsVisible] = useState(false)
	const [gitHubStats, setGitHubStats] = useState<GitHubStats | null>(null)
	const sectionRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true)
					fetchGitHubStats()
				}
			},
			{ threshold: 0.1 }
		)

		if (sectionRef.current) {
			observer.observe(sectionRef.current)
		}

		return () => observer.disconnect()
	}, [])

	const fetchGitHubStats = async () => {
		try {
			const mockStats: GitHubStats = {
				totalCommits: 1274,
				commitActivity: [
					{ date: '2024-01', count: 45 },
					{ date: '2024-02', count: 67 },
					{ date: '2024-03', count: 89 },
					{ date: '2024-04', count: 76 },
					{ date: '2024-05', count: 92 },
					{ date: '2024-06', count: 115 },
				],
				repos: 24,
				stars: 18,
			}
			setGitHubStats(mockStats)
		} catch (error) {
			console.error('Error fetching GitHub stats:', error)
		}
	}

	const categories: Category[] = [
		{
			title: 'Frontend',
			icon: '🎨',
			skills: [
				{ name: 'React', level: 90 },
				{ name: 'Next.js', level: 85 },
				{ name: 'TypeScript', level: 80 },
				{ name: 'Tailwind CSS', level: 95 },
				{ name: 'JavaScript', level: 95 },
			],
			description: 'Создаю современные и отзывчивые интерфейсы',
			color: 'from-blue-500 to-cyan-500',
		},
		{
			title: 'Backend',
			icon: '⚙️',
			skills: [
				{ name: 'Node.js', level: 80 },
				{ name: 'NestJS', level: 75 },
				{ name: 'PostgreSQL', level: 70 },
				{ name: 'MongoDB', level: 65 },
				{ name: 'REST API', level: 85 },
			],
			description: 'Разрабатываю серверную логику и API',
			color: 'from-green-500 to-emerald-500',
		},
		{
			title: 'Инструменты',
			icon: '🛠️',
			skills: [
				{ name: 'Git', level: 90 },
				{ name: 'Docker', level: 70 },
				{ name: 'Linux', level: 75 },
				{ name: 'Figma', level: 80 },
				{ name: 'VS Code', level: 98 },
			],
			description: 'Работаю с современными инструментами',
			color: 'from-purple-500 to-pink-500',
		},
	]

	const personalInfo: PersonalInfo[] = [
		{
			icon: '🎯',
			title: 'Цель',
			text: 'Стать сильным fullstack разработчиком',
		},
		{
			icon: '❤️',
			title: 'Увлечения',
			text: 'Программирование, архитектура, новые технологии',
		},
		{ icon: '🚀', title: 'Подход', text: 'Постоянное обучение и практика' },
		{
			icon: '📚',
			title: 'Обучение',
			text: 'Изучаю лучшие практики и паттерны',
		},
	]

	return (
		<div
			ref={sectionRef}
			className={`${styles.about} relative min-h-screen overflow-hidden`}
		>
			<AnimatedBg />

			<div className='relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 min-h-screen flex flex-col justify-center'>
				<Header isVisible={isVisible} />

				<div className='flex-1 grid grid-cols-1 xl:grid-cols-3 gap-8 lg:gap-12 items-start'>
					<Skills
						isVisible={isVisible}
						categories={categories}
						gitHubStats={gitHubStats}
						activeCategory={activeCategory}
						setActiveCategory={setActiveCategory}
					/>

					<div
						className={`space-y-8 transition-all duration-1000 delay-500 ${
							isVisible
								? 'opacity-100 translate-x-0'
								: 'opacity-0 translate-x-10'
						}`}
					>
						<CurrentSkill
							categories={categories}
							activeCategory={activeCategory}
						/>

						<PersonalInf personalInfo={personalInfo} />
						<STA />
					</div>
				</div>
			</div>
		</div>
	)
}
