"use client"
import { useEffect, useRef } from 'react'
import BlogCard from '@/components/cards/blog'
import BgArrow from '@/components/shared/bg-arrow'
import { useActions } from '@/hooks/useActions'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import * as img from "@/public/blogs/ww.jpeg"
import Image from 'next/image'
import Link from 'next/link'
import * as img1 from "@/public/blogs/ss.webp"
import * as img2 from "@/public/blogs/images.jpeg"

function HomePage() {
	const { blog } = useTypedSelector(state => state.blog)
	const { get_all_blogs } = useActions()
	const boxRef = useRef<any>(null)

	useEffect(() => {
		get_all_blogs(null)
	}, [get_all_blogs])

	const scrollToBuild = () => {
		if (boxRef.current) {
			boxRef.current.scrollIntoView({ behavior: "smooth", block: "center" })
		}
	}

	return (
		<>
			<div className="container">
				<div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-28'>
					<div className='relative min-h-[70vh] w-full bg-gradient-to-br from-blue-600 to-indigo-500 rounded-2xl shadow-lg overflow-hidden'>
						<div className="pt-36 pb-20 px-6 md:px-12 text-white">
							<h1 ref={boxRef} className='font-creteRound text-4xl sm:text-5xl md:text-6xl font-bold mb-6'>
								Изучай программирование с нами!
							</h1>
							<p className='text-lg sm:text-xl max-w-2xl mb-3'>
								Добро пожаловать в мир кода — от основ до продвинутых технологий.
							</p>
							<p className='text-lg sm:text-xl max-w-2xl mb-3'>
								Мы собрали лучшие ресурсы, статьи и проекты для будущих и опытных разработчиков.
							</p>
							<p className='text-lg sm:text-xl max-w-2xl mb-6'>
								Погрузись в JavaScript, Python, C#, TypeScript и другие языки программирования.
							</p>
							<div className="flex flex-wrap gap-4">
								<Link href={"/about"}>
									<button className='w-60 font-semibold px-8 py-3 rounded-md bg-white text-black hover:text-gray-700 hover:bg-slate-200'>
										Подробнее
									</button>
								</Link>
								<Link href={"/contact"}>
									<button className='w-60 border border-white text-white font-semibold px-8 py-3 rounded-md hover:bg-white hover:text-black transition'>
										Связаться с нами
									</button>
								</Link>
							</div>
						</div>
						<BgArrow />
					</div>

					<h2 className='items-center flex ml-10 font-creteRound font-bold mt-24 mb-12'>
						<div>
							<span className='text-blue-500 text-4xl'>Популярные технологии</span>
							<p className='mt-5'>Мы подготовили статьи и примеры по самым востребованным технологиям фронтенда и бэкенда.</p>
						</div>
					</h2>

					<h2 className='items-center flex ml-10 font-creteRound font-bold mt-24 mb-12'>
						<div>
							<span className='text-blue-500 text-4xl ml-72'>Языки программирования</span>
							<p className='mt-5'>Python, JavaScript, TypeScript, C#, Java и другие — выбери то, что тебе ближе и начинай изучать!</p>
							<p className='text-center'>От синтаксиса до архитектуры проектов — мы расскажем обо всём.</p>
						</div>
					</h2>

					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
						{blog.slice(0, 3).map(post => (<BlogCard key={post.id} {...post} />))}
					</div>
				</div>

				<div>
					<h2 className='items-center flex ml-10 font-creteRound font-bold mt-24 mb-12'>
						<div className='ml-20'>
							<span className='text-blue-500 text-4xl ml-72'>Создаём цифровое будущее</span>
							<p className='mt-5'>Опираясь на опыт, мы создаём обучающие материалы и практические руководства по разработке ПО.</p>
							<p className='text-center'>Наши проекты помогают понять сложные темы просто.</p>
						</div>
					</h2>

					<div className="container ml-14">
						<div className="flex items-center mt-14">
							<Image className='w-4/12 h-80 object-cover' src={img} alt='Code image' />
							<div className='ml-10'>
								<span className='text-blue-500 text-4xl'>Современные подходы в IT</span>
								<p className='pt-4 w-[450px]'>
									Изучайте программирование шаг за шагом: от основ до профессиональной разработки. Наши материалы охватывают архитектуру, шаблоны, DevOps и многое другое.
								</p>
							</div>
						</div>

						<div className="flex items-center mt-14">
							<div className='mr-10'>
								<span className='text-blue-500 text-4xl'>Проекты, которые работают</span>
								<p className='pt-4 w-[500px]'>
									Мы публикуем примеры и исходный код реальных проектов: блог-платформы, CRM, e-commerce и многое другое. Погружайся в процесс с реальными задачами.
								</p>
							</div>
							<Image className='w-5/12 h-80' src={img1} alt='Project image' />
						</div>

						<div className="flex items-center mt-14">
							<Image className='w-4/12' src={img2} alt='Tools' />
							<div className='ml-16'>
								<h2 className='text-blue-500 text-4xl'>Понимание через практику</h2>
								<p className='pt-4 w-[500px]'>
									Все наши уроки сопровождаются примерами, чтобы вы могли сразу применить знания. Работа с API, создание UI, настройка серверов — всё на практике.
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className="relative h-80 w-full bg-gradient-to-br mt-16 from-blue-600 to-indigo-500 rounded-2xl shadow-lg overflow-hidden flex justify-center">
					<div className="mt-20">
						<h2 className='text-center text-5xl text-white'>Начни карьеру в IT уже сегодня!</h2>
						<p className='text-center mt-7 text-white'>
							Независимо от уровня — ты найдёшь полезный материал для роста.
						</p>
						<p className='text-center text-white'>
							Учись, практикуйся и стань частью глобального IT-сообщества.
						</p>
						<button onClick={scrollToBuild} className='w-60 font-semibold px-8 py-3 rounded-md ml-96 mt-9 bg-white text-black hover:text-gray-700 hover:bg-slate-200'>
							Начать изучение
						</button>
					</div>
				</div>

				<h2 className='items-center flex ml-48 font-creteRound font-bold mt-24 mb-12'>
					<div>
						<span className='text-blue-500 text-4xl ml-72'>Наше сообщество</span>
						<p className='mt-5'>Ты не один. Присоединяйся к сообществу разработчиков и расти вместе с нами.</p>
						<p className='text-center'>Участвуй в обсуждениях, делись кодом и получай фидбэк.</p>
					</div>
				</h2>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
					{blog.slice(3, 6).map(post => (<BlogCard key={post.id} {...post} />))}
				</div>
			</div>
		</>
	)
}

export default HomePage
