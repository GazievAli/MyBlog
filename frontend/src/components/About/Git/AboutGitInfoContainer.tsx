import { ContainerProps } from '@/types/about'

export default function Container({ children, text }: ContainerProps) {
	return (
		<div className='text-center p-4 rounded-xl bg-gray-50'>
			<div className='text-2xl font-bold text-gray-900'>{children}</div>
			<div className='text-sm text-gray-600'>{text}</div>
		</div>
	)
}
