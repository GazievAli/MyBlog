export interface Skill {
	name: string
	level: number
}

export interface Category {
	title: string
	icon: string
	skills: Skill[]
	description: string
	color: string
}

export interface PersonalInfo {
	icon: string
	title: string
	text: string
}

export interface CommitActivity {
	date: string
	count: number
}

export interface GitHubStats {
	totalCommits: number
	commitActivity: CommitActivity[]
	repos: number
	stars: number
}

export interface CategoryProps {
	category: Category
	index: number
	activeCategory: number
	setActiveCategory: (index: number) => void
}

export interface CurrentSkillProps {
	categories: Category[]
	activeCategory: number
}

export interface HeaderProps {
	isVisible: boolean
}

export interface PersonalInfProps {
	personalInfo: PersonalInfo[]
}

export interface SkillsProps {
	isVisible: boolean
	categories: Category[]
	gitHubStats: GitHubStats | null
	activeCategory: number
	setActiveCategory: (index: number) => void
}

export interface GitChartProps {
	gitHubStats: GitHubStats
}

export interface GitHubProps {
	gitHubStats: GitHubStats
}

export interface GitInfoProps {
	gitHubStats: GitHubStats
}

export interface ContainerProps {
	children: React.ReactNode
	text: string
}
