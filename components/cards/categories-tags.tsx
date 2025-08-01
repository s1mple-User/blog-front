import { ICategoryAndTags } from '@/types'
import { Layers2, Tags } from 'lucide-react'
import Link from 'next/link'

interface Props extends ICategoryAndTags {
	type: 'categories' | 'tags'
}

function CategoriesTagsCard(item: Props) {
	return (
		<Link
			className='bg-secondary p-4  rounded-md shadow-xl flex items-center gap-4 justify-center hover:bg-secondary/80 
			transition-colors dark:shadow-white/10   flex-col space-y-1'
			href={`/${item.type}/${item.slug}`}
		>
			{item.type === 'tags' ? <Tags /> : <Layers2 />}
			<h1 className='text-xl font-creteRound '>{item.name}</h1>
			<p>{item.blogs.length} blogs</p>
			
		</Link>
	)
}

export default CategoriesTagsCard
