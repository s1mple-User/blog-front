import { cn, getReadingTime } from '@/lib/utils'
import { IBlog } from '@/types'
import { format } from 'date-fns'
import { CalendarDays, Dot } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui/button'

interface Props extends IBlog {
	isVertical?: boolean
}


function BlogCard(blog: Props) {
	return (
		<div className="group  rounded-xl  overflow-hidden hover:shadow-lg transition-shadow duration-300 shadow-gray-400 shadow-lg">
			<Link href={`/blogs/${blog.slug}`}>
				<div className="relative w-96 h-64 md:h-72 overflow-hidden">
					<Image
						src={blog.image}
						alt={blog.title}
						fill
						className="object-cover transition-transform duration-300 group-hover:scale-105"
					/>
				</div>
			</Link>

			<div className="p-5 space-y-3">
				<Link href={`/blogs/${blog.slug}`}>
					<h2 className="text-2xl font-creteRound transition-colors">
					    {blog.title}
					</h2>
				</Link>

				<p className="text-muted-foreground text-sm line-clamp-3">
					{blog.description}
				</p>
				<Link href={`/blogs/${blog.slug}`}>
				<Button className='mt-6' variant={"ghost"} >More..</Button>
				</Link>
			</div>
		</div>
	)
}

export default BlogCard
