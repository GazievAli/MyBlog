import { CurrentSkillProps } from '@/types/about'

export default function CurrentSkill({
	categories,
	activeCategory,
}: CurrentSkillProps) {
	return (
		<div className='bg-white rounded-2xl p-6 border border-gray-200 shadow-lg'>
			<div className='text-center mb-4'>
				<div className='text-4xl mb-3'>{categories[activeCategory].icon}</div>
				<h3 className='text-2xl font-bold text-gray-900 mb-2'>
					{categories[activeCategory].title}
				</h3>
				<p className='text-gray-600'>
					{categories[activeCategory].description}
				</p>
			</div>
		</div>
	)
}
