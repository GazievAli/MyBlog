import { GitChartProps } from '@/types/about'

export default function GitChart({ gitHubStats }: GitChartProps) {
	return (
		<div className='space-y-2'>
			<h4 className='font-semibold text-gray-900'>Активность по месяцам:</h4>
			<div className='flex items-end space-x-1 h-20'>
				{gitHubStats.commitActivity.map((month, index) => (
					<div key={index} className='flex-1 flex flex-col items-center'>
						<div
							className='w-full bg-gradient-to-t from-blue-500 to-purple-500 rounded-t transition-all duration-500'
							style={{ height: `${(month.count / 115) * 60}px` }}
						></div>
						<div className='text-xs text-gray-500 mt-1'>
							{month.date.split('-')[1]}
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
