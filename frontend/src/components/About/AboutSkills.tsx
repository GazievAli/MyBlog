import { SkillsProps } from '@/types/about'
import Category from './AboutCategory'
import GitHub from './Git/AboutGitHub'

export default function Skills({
	isVisible,
	categories,
	gitHubStats,
	activeCategory,
	setActiveCategory,
}: SkillsProps) {
	return (
		<div
			className={`xl:col-span-2 space-y-6 transition-all duration-1000 delay-300 ${
				isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
			}`}
		>
			<h2 className='text-3xl font-bold text-gray-900 mb-8'>Навыки</h2>

			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
				{categories.map((category, index) => (
					<Category
						key={index}
						category={category}
						index={index}
						activeCategory={activeCategory}
						setActiveCategory={setActiveCategory}
					/>
				))}
			</div>

			{gitHubStats && <GitHub gitHubStats={gitHubStats} />}
		</div>
	)
}
