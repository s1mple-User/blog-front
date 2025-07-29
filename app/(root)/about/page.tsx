
import { Dot, Home } from 'lucide-react'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
	title: 'О нас',
}

async function AboutPage() {
	return (
		<div className='max-w-6xl mx-auto'>
			<div className='relative min-h-[40vh] flex items-center justify-center flex-col'>
				<h2 className='text-center text-4xl section-title font-creteRound'>
					<span>О нас</span>
				</h2>

				<div className='flex gap-1 items-center mt-4'>
					<Home className='w-4 h-4' />
					<Link
						href={'/'}
						className='opacity-90 hover:underline hover:opacity-100'
					>
						Главная
					</Link>
					<Dot />
					<p className='text-muted-foreground'>О нас</p>
				</div>
			</div>

			<h1 className='text-center text-4xl font-creteRound'>
				Мы команда  <br /> команда копирайтеров и дизайнеров.
			</h1>

			<div className='grid grid-cols-4 gap-4 min-h-96 mt-6'>
				<div className='col-span-2 max-md:col-span-4 relative h-80'>
					<Image
						src={'/about/01.jpg'}
						alt='о нас'
						fill
						className='rounded-md object-cover'
					/>
				</div>
				<div className='h-80 self-end relative max-md:col-span-2 max-md:h-72'>
					<Image
						src={'/about/00.jpg'}
						alt='о нас'
						fill
						className='rounded-md object-cover'
					/>
				</div>
				<div className='relative h-80 max-md:col-span-2 max-md:mb-8 max-md:h-72'>
					<Image
						src={'/about/02.jpg'}
						alt='о нас'
						fill
						className='rounded-md object-cover'
					/>
				</div>
			</div>

			<div className='max-w-6xl mx-auto mt-12 flex flex-col text-center space-y-4 text-muted-foreground mb-20'>
				<p>
					Если и есть место, где можно по-настоящему сойти с ума в творчестве — так это страница "О нас".
					Это твой шанс показать читателям, кто ты есть на самом деле.
					Фотографии, цитаты, вдохновляющая графика — всё, что тебя мотивирует, размести здесь по-своему.
				</p>
				<p>
					Я добавил плагин в настройку этой темы, который позволяет добавлять колонки в страницы и посты очень просто.
					Пусть креатив возьмёт верх, забудь о технической стороне — я всё предусмотрел.
				</p>
			</div>
		</div>
	)
}

export default AboutPage
