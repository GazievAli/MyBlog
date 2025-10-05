import { GitHubProps } from '@/types/about'
import GitIco from '../../UI/svg/Git'
import GitChart from './AboutCommitChart'
import GitInfo from './AboutGitInfo'

export default function GitHub({ gitHubStats }: GitHubProps) {
	return (
		<div className='mt-8 p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg'>
			<h3 className='text-2xl font-bold text-gray-900 mb-6 flex items-center'>
				<GitIco />
				GitHub Активность
			</h3>

			<GitInfo gitHubStats={gitHubStats} />

			<GitChart gitHubStats={gitHubStats} />
		</div>
	)
}
