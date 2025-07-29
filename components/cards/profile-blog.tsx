"use client"
import { cn, getReadingTime } from '@/lib/utils'
import { IBlog } from '@/types'
import { format } from 'date-fns'
import { CalendarDays, Clock, Dot, Layers2, Minus, Tag } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import { deleteBlog, get_all } from '@/store/blog/blog.action'
import { useAppDispatch } from '@/hooks/use-app-dispatch'
import { API_URL } from '@/config/api.config'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from '../ui/dialog'
import BlogUpdateModel from './update-card-model'
import { useState } from 'react'
import { useTypedSelector } from '@/hooks/useTypedSelector'


interface Blog {
	title:string
	content:string
	image:string
	createdAt:string
	slug:string
}

interface Props extends Blog {
	isVertical?: boolean
}

function ProfileBlogCard(blog: Props) {
	
	const [openModel,setModelOpen] =useState<boolean>(false)
	const [data,setData] =useState<any>({}) 
	const {user} =useTypedSelector(state => state.user)
	const dispatch = useAppDispatch()


const deleteDate = async (slug: string) => {
	
  await dispatch(deleteBlog(slug)).unwrap();
  if (user?.id) {
    await dispatch(get_all(user.id));        
  }
}

	console.log(blog.image);
	
	return (
		<div
			className={cn(
				'grid gap-4 group',
				blog.isVertical ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'
			)}
		>
			<Link href={`/blogs/${blog.slug}`}>
				<div className='relative bg-secondary rounded-lg'>
					<Image
						width={650}
						height={335}
						src={`${API_URL}${blog.image}`}
						alt={blog.title}
						className='px-2 md:px-7 rounded-lg hover:rounded-lg group-hover:-translate-y-7 w-[450px] h-[300px]
						 -translate-y-6 transition-all object-cover grayscale group-hover:grayscale-0
						  max-md:-translate-y-2 max-md:group-hover:-translate-y-3'
					/>
				</div>
			</Link>
			<div className='flex flex-col space-y-4'>
				<Link href={`/blogs/${blog.slug}`} className='flex flex-col space-y-4'>
					<div className='flex items-center gap-4'>
						<div className='flex items-center gap-2'>
							<CalendarDays className='w-5 h-5' />
							<p>{blog.createdAt}</p>
						</div>
						<Minus />
						<div className='flex items-center gap-2'>
							<Clock className='w-5 h-5' />
							<p>{getReadingTime(blog.content)} min read</p>
						</div>
					</div>

					<h2 className='text-3xl max-md:text-2xl font-creteRound group-hover:text-blue-500 transition-colors'>
						{blog.title}
					</h2>

				</Link>

				<div className='flex items-center gap-4'>  
					<Dialog  open={openModel} onOpenChange={setModelOpen}>
						 <Button
                           onClick={() => {
                           setData(blog)           
                          setModelOpen(true)}}
						  variant="outline"> Update</Button>
						<DialogContent>
							<BlogUpdateModel data={data} onClose={() => setModelOpen(false)} />
						</DialogContent>
					</Dialog>	 
	

					  <Dialog>
					  <DialogTrigger>
						 <Button variant={'destructive'}>Delete</Button>
					  </DialogTrigger>
					   <DialogContent>
                     <DialogTitle>Are you absolutely sure?</DialogTitle>
		            	<div className="flex items-center gap-6 mt-5">
				  <DialogClose asChild>
                  <Button type="button" variant="secondary">Close</Button>
                </DialogClose>
				 <Button onClick={() => deleteDate(blog.slug)} variant={'destructive'}>Delete</Button>
	                    </div>
                 </DialogContent>
               </Dialog>
				</div>
			</div>
		</div>
	)
}

export default ProfileBlogCard
