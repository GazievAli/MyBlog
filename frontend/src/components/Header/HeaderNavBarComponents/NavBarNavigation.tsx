import { NavProps } from '@/types/header'

export default function Nav({ navbarPages, scrolled }: NavProps) {
	const getLinkStyles = (isActive: boolean) => {
		const baseStyles = 'font-medium transition-all duration-300 hover:scale-105'

		if (isActive) {
			return scrolled
				? `${baseStyles} text-blue-600 font-bold scale-105`
				: `${baseStyles} text-white font-bold scale-105`
		} else {
			return scrolled
				? `${baseStyles} text-gray-700 hover:text-gray-900`
				: `${baseStyles} text-white/80 hover:text-white`
		}
	}

	return (
		<nav className='hidden lg:flex items-center space-x-8'>
			{navbarPages.map((page, index) => (
				<a
					key={index}
					href={'#' + page.href}
					className={getLinkStyles(page.isActive)}
				>
					{page.name}
				</a>
			))}
		</nav>
	)
}
