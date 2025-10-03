import Body from './Body'
import NavBar from './NavBar'

export default function Terminal() {
	return (
		<section className='w-full min-h-screen bg-white flex items-center justify-center p-4'>
			<div className='container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center'>
				<div className='w-full max-w-4xl h-96 bg-gray-900 rounded-lg shadow-2xl overflow-hidden'>
					<NavBar />
					<Body />
				</div>
			</div>
		</section>
	)
}
