'use client'

import { ChangeEvent, useState } from 'react'
import { debounce } from 'lodash'
import { Search, Loader2, BookOpenText, Plus, LogOut } from 'lucide-react'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { useActions } from '@/hooks/useActions'
import SearchCard from '@/components/cards/search'
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
} from '@/components/ui/drawer'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import DialogDemo from '@/components/cards/card-model'
import { getRefresh } from '@/config/cookis.config'
import { useRouter } from 'next/navigation'

function GlobalSearch() {
  const { searchBlog } = useActions()
  const { search_blog, isLoading } = useTypedSelector(state => state.blog)
  const [query, setQuery] = useState('')
  const [openModel, setModelOpen] = useState(false)
  const { logout } = useActions()
  const {  user } = useTypedSelector(state => state.user)
  const [openDrawer, setOpenDrawer] = useState(false)
  const router = useRouter()
    const logoutUser = async () => {
      const refresh = getRefresh()
      logout(refresh)
      setOpenDrawer(false)

      router.push("/")
    }

 const handleSearch = debounce((e: ChangeEvent<HTMLInputElement>) => {
  const text = e.target.value.toLowerCase()
  setQuery(text)

  if (text.trim().length > 2) {
    searchBlog(text) 
  }
  else {
    searchBlog('') 
  }
}, 500)

  return (
    <Drawer open={openDrawer} onOpenChange={setOpenDrawer}>
     <DrawerTrigger asChild>
  <div
    onClick={() => setOpenDrawer(true)}
    className='hover:bg-blue-400/20 cursor-pointer rounded-sm transition-colors flex items-center gap-1 px-3 py-2'
  >
    <span className='hidden md:flex'>Search</span>
    <Search className='w-4 h-4' />
  </div>
</DrawerTrigger>
      <DrawerContent>
        <div className='container max-w-6xl mx-auto py-12'>
                 {user && (
  <div className="flex items-center gap-16 mb-7">
    <Link href={`/my_blogs/${user.id}`}>
      <Button className="w-[250px] justify-start gap-2" variant="outline">
        <BookOpenText size={16} />
        My Blogs
      </Button>
    </Link>

    <Dialog open={openModel} onOpenChange={setModelOpen}>
      <DialogTrigger asChild>
        <Button className="w-[250px] justify-start gap-2" variant="outline">
          <Plus size={16} />
          Create Blog
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create a Blog</DialogTitle>
          <DialogDescription>
            Fill out the form to create a new blog.
          </DialogDescription>
        </DialogHeader>

        <DialogDemo onClose={() => setModelOpen(false)} />

        <DialogFooter />
      </DialogContent>
    </Dialog>

    <Button
      disabled={isLoading}
      className="w-[250px] justify-start gap-2"
      variant="destructive"
      onClick={logoutUser}
    >
      <LogOut size={16} />
      {isLoading ? "Logging out..." : "Logout"}
    </Button>
  </div>
)}


          <h1 className='mb-4 text-2xl'>You can find blogs</h1>
          <Input
            className='bg-secondary'
            placeholder='Type to search blog...'
            onChange={handleSearch}
            disabled={isLoading}
          />

          {isLoading && <Loader2 className='animate-spin mt-4 mx-auto' />}

          {Array.isArray(search_blog) && search_blog.length > 0 && (
            <div className='text-2xl font-creteRound mt-8'>
              {search_blog.length} Results found for "{query}"
            </div>
          )}

          <div className='grid grid-cols-2 gap-10 md:grid-cols-4 lg:grid-cols-6 mt-3 mb-5'>
            {Array.isArray(search_blog) &&
              search_blog.map(post => <SearchCard key={post.slug} {...post} />)}
          </div>

          {Array.isArray(search_blog) && search_blog.length > 0 &&  <Separator className='mt-3' />}
        </div>
      </DrawerContent>
    </Drawer>
  )
}

export default GlobalSearch
