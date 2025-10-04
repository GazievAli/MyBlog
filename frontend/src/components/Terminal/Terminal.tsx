import Body from './Body'
import NavBar from './NavBar'
import Text from './Text'

interface TerminalProps {
	name: string
	hiddenTerminal: () => void
}

export default function Terminal({ name, hiddenTerminal }: TerminalProps) {
	return (
		<section className='w-full min-h-screen bg-gray-900 flex items-center justify-center p-4'>
			<div className='container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center'>
				<div className='w-full max-w-5xl h-64 md:h-[28rem] bg-[#282c34] rounded-lg shadow-2xl overflow-hidden border border-gray-700 cursor-text mb-6'>
					<NavBar hiddenTerminal={hiddenTerminal} />
					<Body name={name} />
				</div>

				<Text />
			</div>
		</section>
	)
}
