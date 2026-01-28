import Image from 'next/image'
import Link from 'next/link'

interface ProjectProps {
    title: string
    description: string
    tags: string[]
    image: string
    githubLink?: string
    demoLink?: string
    status: 'completed' | 'in-progress' | 'planned'
}

export default function ProjectCard({ project }: { project: ProjectProps }) {
    const statusColors = {
        completed: 'bg-green-500/10 text-green-400 border-green-500/20',
        'in-progress': 'bg-amber-500/10 text-amber-400 border-amber-500/20',
        planned: 'bg-gray-500/10 text-gray-400 border-gray-500/20',
    }

    const statusLabels = {
        completed: 'Завершен',
        'in-progress': 'В разработке',
        planned: 'Идея',
    }

    return (
        <div className='group relative flex flex-col bg-[#161b22] border border-gray-800 rounded-2xl overflow-hidden hover:border-rose-500/50 hover:shadow-[0_0_30px_rgba(244,63,94,0.1)] transition-all duration-300 h-full'>

            <div className='relative w-full h-48 overflow-hidden bg-[#0d1117]'>
                {project.image ? (
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className='object-cover group-hover:scale-105 transition-transform duration-500'
                    />
                ) : (
                    <div className='w-full h-full flex items-center justify-center text-gray-700 font-mono'>
                        NO IMAGE
                    </div>
                )}

                <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-mono font-bold border backdrop-blur-md ${statusColors[project.status]}`}>
                    {statusLabels[project.status]}
                </div>
            </div>

            <div className='p-6 flex flex-col flex-1'>
                <h3 className='text-2xl font-bold text-white mb-3 group-hover:text-rose-400 transition-colors'>
                    {project.title}
                </h3>
                <p className='text-gray-400 text-sm leading-relaxed mb-6 flex-1'>
                    {project.description}
                </p>

                <div className='flex flex-wrap gap-2 mb-6'>
                    {project.tags.map(tag => (
                        <span key={tag} className='px-2 py-1 text-xs font-mono text-blue-300 bg-blue-500/10 rounded border border-blue-500/10'>
                    {tag}
                </span>
                    ))}
                </div>

                <div className='flex items-center gap-4 mt-auto pt-4 border-t border-gray-800'>
                    {project.githubLink && (
                        <Link href={project.githubLink} target='_blank' className='flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors'>
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path></svg>
                            <span>Code</span>
                        </Link>
                    )}
                    {project.demoLink && (
                        <Link href={project.demoLink} target='_blank' className='flex items-center gap-2 text-sm text-rose-400 hover:text-rose-300 transition-colors ml-auto'>
                            <span>Live Demo</span>
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    )
}