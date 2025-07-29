import { ChildProps } from '@/types'

import Navbar from './_components/navbar'
import { AppSidebar } from './_components/app-saidbar'
import { Provider } from 'react-redux'
import { store } from '@/store/store'
import Footer from './_components/footer'

function Layout({ children }: ChildProps) {
	return (
	<>
			<Navbar />
			{children}
			<Footer/>
		</>
	)
}

export default Layout	
