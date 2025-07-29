'use client'

import ModeToggle from '@/components/shared/mode-toggle'
import { navLinks } from '@/constants'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import GlobalSearch from './global-search'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { useTheme } from 'next-themes'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { getImage } from '@/store/user/user.action'
import { API_URL } from '@/config/api.config'


function Navbar() {
	const {tokens,user}= useTypedSelector(state => state.user)
	const pathname = usePathname()
	
	

	let urlImage = user?.image

	return (
	<div className="h-12 sm:h-16 md:h-[10vh] w-full fixed inset-x-0 top-0 z-40 bg-background/80 backdrop-blur-sm border-b px-4">
			<div className='container max-w-6xl mx-auto h-[10vh] w-full  flex items-center justify-between'>
				<Link href={'/'}>
					<h1 className='text-4xl font-creteRound'>Blog</h1>
				</Link>
				<div className='gap-2 hidden md:flex'>
					{navLinks.map(nav => (
						<Link
							key={nav.route}
							href={nav.route}
							className={cn(
								'hover:bg-blue-400/20 py-1 px-3 cursor-pointer rounded-sm transition-colors',
								pathname === nav.route && 'text-blue-400'
							)}
						>
							{nav.name}
						</Link>
					))}
				</div>
				<div className='flex items-center gap-5'>
					<GlobalSearch />
					{user ? (	
						<Avatar >
						    <Image
                           alt="User avatar"
                           src={user ? `${API_URL}${urlImage}`: "https://github.com/shadcn.png"} 
                           width={40}
                           height={40}
                          className="rounded-full" />
                    </Avatar>):(
					<Link href={'/auth/login'} >
					<Button variant={'outline'} className='w-20 shadow-md shadow-blue-600 '>
						Login
					</Button>
					</Link>
					)}
					<ModeToggle />
				</div>
			</div>
		</div>
	)
}

export default Navbar
