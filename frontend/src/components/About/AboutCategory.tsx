import { CategoryProps } from '@/types/about'

export default function Category({
	category,
	index,
	activeCategory,
	setActiveCategory,
}: CategoryProps) {
	return (
		<div
			className={`p-6 rounded-2xl bg-white/80 backdrop-blur-sm border cursor-pointer transition-all duration-500 hover:scale-105 ${
				activeCategory === index
					? 'border-blue-500 shadow-xl scale-105'
					: 'border-gray-200 hover:border-gray-300 shadow-lg'
			}`}
			onClick={() => setActiveCategory(index)}
			onMouseEnter={() => setActiveCategory(index)}
		>
			<div className='flex items-center space-x-3 mb-4'>
				<span className='text-2xl'>{category.icon}</span>
				<h3 className='text-xl font-bold text-gray-900'>{category.title}</h3>
			</div>

			<p className='text-gray-600 text-sm mb-4'>{category.description}</p>

			<div className='space-y-3'>
				{category.skills.map((skill, skillIndex) => (
					<div key={skillIndex} className='space-y-1'>
						<div className='flex justify-between text-sm'>
							<span className='text-gray-700 font-medium'>{skill.name}</span>
							<span className='text-gray-500'>{skill.level}%</span>
						</div>
						<div className='w-full bg-gray-200 rounded-full h-2'>
							<div
								className={`bg-gradient-to-r ${category.color} h-2 rounded-full transition-all duration-1000 ease-out`}
								style={{ width: `${skill.level}%` }}
							></div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
