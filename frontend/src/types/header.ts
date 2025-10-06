export interface NavbarPage {
	name: string
	href: string
	isActive: boolean
}

export interface LogoProps {
	scrolled: boolean
}

export interface NavProps {
	navbarPages: NavbarPage[]
	scrolled: boolean
}

export interface RightProps {
	scrolled: boolean
	setMobileMenuOpen: (open: boolean) => void
	mobileMenuOpen: boolean
}

export interface MobileMenuProps {
	navbarPages: NavbarPage[]
	getMobileLinkStyles: (isActive: boolean) => string
	setMobileMenuOpen: (open: boolean) => void
}

export interface ImageFieldProps {
	loaded: boolean
}

export interface TextFieldProps {
	loaded: boolean
}

export interface BaseComponentProps {
	styles: string
}

export interface CircleComponentProps extends BaseComponentProps {
	// Можно добавить специфичные props для кругов
}

export interface ParticleComponentProps extends BaseComponentProps {
	// Можно добавить специфичные props для частиц
}

// Типы для позиционирования
export interface PositionStyle {
	top?: string
	left?: string
	right?: string
	bottom?: string
	transform?: string
}

// Типы для анимационных задержек
export interface AnimationDelay {
	animationDelay?: string
}
