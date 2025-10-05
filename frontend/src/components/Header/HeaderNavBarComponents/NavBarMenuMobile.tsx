import { MobileMenuProps } from '@/types/header'

export default function MobileMenu({
	navbarPages,
	getMobileLinkStyles,
	setMobileMenuOpen,
}: MobileMenuProps) {
	return (
		<div className='lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-lg'>
			<div className='container mx-auto px-4 py-4'>
				<nav className='flex flex-col space-y-4'>
					{navbarPages.map((page, index) => (
						<a
							key={index}
							href={'#' + page.href}
							className={getMobileLinkStyles(page.isActive)}
							onClick={() => setMobileMenuOpen(false)}
						>
							{page.name}
						</a>
					))}
				</nav>
			</div>
		</div>
	)
}
