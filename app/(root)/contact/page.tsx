import ContactForm from '@/components/forms/contact'
import { Dot, Home, Mail, Phone } from 'lucide-react'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
	title: 'Связаться с нами',
}

function ContactPage() {
	return (
		<div className='max-w-6xl mx-auto'>
			<div className='relative min-h-[40vh] flex items-center justify-end flex-col'>
				<h2 className='text-center text-4xl section-title font-creteRound mt-2'>
					<span>Контакты</span>
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
					<p className='text-muted-foreground'>Контакты</p>
				</div>
			</div>

			<div className='grid grid-cols-2 max-md:grid-cols-1 gap-4 mt-6'>
				<div className='flex flex-col'>
					<h1 className='text-4xl font-creteRound'>Связаться с нами</h1>
					<p className='mt-2 text-muted-foreground'>
						Я здесь, чтобы помочь и ответить на любые ваши вопросы. С нетерпением жду вашего сообщения.
					</p>

					<div className='mt-12 flex items-center gap-3'>
						<Mail className='w-4 h-4' />
						<p className='text-sm'>info@sammi.ac</p>
					</div>
					<div className='flex items-center gap-3 mt-2'>
						<Phone className='w-4 h-4' />
						<p className='text-sm'>+98 02 296 4902</p>
					</div>
				</div>

				<div>
					<h1 className='text-4xl font-creteRound mb-2'>Форма обратной связи</h1>
					<ContactForm />
				</div>
			</div>
		</div>
	)
}

export default ContactPage
