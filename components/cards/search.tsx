import { IBlog } from '@/types'
import { format } from 'date-fns'
import { CalendarDays } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { DrawerClose } from '../ui/drawer'
import { API_URL } from '@/config/api.config'

function SearchCard(blog: IBlog) {
	console.log("blog",blog.image);
	
	return (
		<Link href={`/blogs/${blog.slug}`}>
			<DrawerClose className='w-40 h-28'>
				<Image
				width={400}
				height={400}
					src={`${API_URL}/${blog.image}`}
					alt={blog.title}
					className='rounded-md shadow-xl dark:shadow-white/10 '
				/>
				<div>	
				<div className='flex items-center gap-2'>
					<CalendarDays className='w-4 h-4' />
					<p className='text-sm'>{blog.createdAt}</p>
				</div>
				<h1 className='font-creteRound'>{blog.title}</h1>
				</div>
			</DrawerClose>
		</Link>
	)
}

export default SearchCard
