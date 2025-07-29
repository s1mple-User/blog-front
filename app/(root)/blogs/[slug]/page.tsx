'use client'

import { useEffect } from 'react'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { useActions } from '@/hooks/useActions'
import { useParams } from 'next/navigation'
import { CalendarDays, Clock, Minus } from 'lucide-react'
import Image from 'next/image'
import ShareBtns from '../../_components/share-btns'

function SlugPage() {
	const { slug } = useParams<{ slug: string }>()
	const { detail_blog } = useActions()
	const { blog_detail, isLoading, error } = useTypedSelector(state => state.blog)

	useEffect(() => {
		if (slug) detail_blog(slug)
	}, [slug])

	if (isLoading) {
		return <p className='text-center mt-20 text-muted-foreground'>Loading...</p>
	}

	if (error || !blog_detail) {
		return <p className='text-center mt-20 text-red-500'>Ошибка загрузки поста.</p>
	}

	return (
		<div className='pt-[15vh] max-w-5xl mx-auto'>
			<h1 className='lg:text-6xl md:text-5xl text-4xl font-creteRound'>
				{blog_detail.title}
			</h1>

			<div className='flex items-center flex-wrap max-md:justify-center gap-4 mt-4'>
				<Minus />
				<div className='flex items-center gap-2'>
					<Clock className='w-5 h-5' />
					<p>{blog_detail.content} символов</p>
				</div>
				<Minus />
				<div className='flex items-center gap-2'>
					<CalendarDays className='w-5 h-5' />
					<p>{new Date(blog_detail.createdAt).toLocaleDateString()}</p>
				</div>
			</div>

			<Image
				src={blog_detail.image}
				alt='cover'
				width={1120}
				height={795}
				className='mt-4 rounded-md'
			/>

			<div className='flex md:gap-12 max-md:flex-col-reverse mt-12 relative'>
				<div className='flex flex-col space-y-3'>
					<div className='sticky top-36'>
						<p className='text-lg uppercase text-muted-foreground'>Share</p>
						<ShareBtns />
					</div>
				</div>
				<div className='flex-1 prose dark:prose-invert'>
					<p>{blog_detail.content}</p>
				</div>
			</div>

			<div className='flex mt-6 gap-6 items-center max-md:flex-col'>
				{blog_detail.author && (
                 <div className='flex mt-6 gap-6 items-center max-md:flex-col'>
                     <Image
                      src={blog_detail.author.image}
                      alt='author'
                      width={155}
                      height={155}
                      className='rounded-md max-md:self-start'/>
                 <div className='flex-1 flex flex-col space-y-4'>
                   <h2 className='text-3xl font-creteRound'>{blog_detail.author.name}</h2>
                <p className='line-clamp-2 text-muted-foreground'>
                  {blog_detail.author.bio || 'No bio available.'}
                </p>
            </div></div>)}
			</div>
		</div>
	)
}

export default SlugPage
