import { GitInfoProps } from '@/types/about'
import Container from './AboutGitInfoContainer'

export default function GitInfo({ gitHubStats }: GitInfoProps) {
	return (
		<div className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-6'>
			<Container text='Всего коммитов'>{gitHubStats.totalCommits}</Container>
			<Container text='Репозиториев'>{gitHubStats.repos}</Container>
			<Container text='Звезд'>{gitHubStats.stars}</Container>
			<Container text='За 6 месяцев'>
				{gitHubStats.commitActivity.reduce((sum, day) => sum + day.count, 0)}
			</Container>
		</div>
	)
}
