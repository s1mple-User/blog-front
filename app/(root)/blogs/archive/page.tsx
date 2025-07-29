
import { format } from 'date-fns'
import { Archive, Dot, Home } from 'lucide-react'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
	title: 'Archive blogs',
}

async function ArchivePage() {

	return (
		<div className='max-w-6xl mx-auto'>
			<div className='relative min-h-[40vh] flex items-center justify-end flex-col'>
				<p className='text-lg text-muted-foreground'>Showing posts from</p>
				<h2 className='text-center text-4xl section-title font-creteRound mt-2'>
					<span>Archive</span>
				</h2>

				<div className='flex gap-1 items-center mt-4'>
					<Home className='w-4 h-4' />
					<Link
						href={'/'}
						className='opacity-90 hover:underline hover:opacity-100'
					>
						Home
					</Link>
					<Dot />
					<Link
						href={'/blogs'}
						className='opacity-90 hover:underline hover:opacity-100'
					>
						Blogs
					</Link>
					<Dot />
					<p className='text-muted-foreground'>Archive</p>
				</div>
			</div>
		
		</div>
	)
}

export default ArchivePage
