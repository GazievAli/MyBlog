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
