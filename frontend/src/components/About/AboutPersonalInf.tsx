import { PersonalInfProps } from '@/types/about'

export default function PersonalInf({ personalInfo }: PersonalInfProps) {
	return (
		<div className='bg-white rounded-2xl p-6 border border-gray-200 shadow-lg'>
			<h3 className='text-2xl font-bold text-gray-900 mb-6 text-center'>
				Обо Мне
			</h3>
			<div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
				{personalInfo.map((info, index) => (
					<div
						key={index}
						className='text-center p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors'
					>
						<div className='text-2xl mb-2'>{info.icon}</div>
						<h4 className='font-bold text-gray-900 text-sm mb-1'>
							{info.title}
						</h4>
						<p className='text-gray-600 text-xs'>{info.text}</p>
					</div>
				))}
			</div>
		</div>
	)
}
