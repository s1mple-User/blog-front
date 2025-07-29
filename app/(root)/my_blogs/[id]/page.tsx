"use client"
import ProfileBlogCard from "@/components/cards/profile-blog"
import { useActions } from "@/hooks/useActions"
import { useTypedSelector } from "@/hooks/useTypedSelector"
import { useParams } from "next/navigation"
import { useEffect } from "react"
import { AnimatePresence } from "framer-motion"
import { TypeBlog } from "@/store/blog/blog.interface"

function MyBlogs() {
  const { get_all } = useActions()
  const { blog_profile } = useTypedSelector((state) => state.blog)
  const { user } = useTypedSelector((state) => state.user)

  const params = useParams()
  const id = params?.id as string

  useEffect(() => {
    if (!id) return
    get_all(id)
  }, [id])

  return (
<div className="mt-56 max-md:mt-32 max-sm:mt-24 px-4 sm:px-6 md:px-12">
  <h1 className="text-3xl font-creteRound max-sm:text-2xl text-center">
    Your Blogs
  </h1>

  <div className="grid grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1 gap-x-6 gap-y-24 mt-24 max-sm:mt-12">
    <AnimatePresence>
      {blog_profile && blog_profile.length > 0 ? (
        blog_profile.map((blog: TypeBlog) => (
          <ProfileBlogCard key={blog.id} {...blog} isVertical />
        ))
      ) : blog_profile ? (
        <h1 className="text-3xl font-bold mb-96 text-red-500 animate-pulse max-sm:text-2xl text-center">
          You have no blogs
        </h1>
      ) : (
        <div className="flex items-center justify-center h-64">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
        </div>
      )}
    </AnimatePresence>
  </div>
</div>
  )
}

export default MyBlogs
