export interface ChildProps {
	children: React.ReactNode
}

export interface IArchivedBlog {
	year: string
	blogs: IBlog[]
}

export interface IBlog {
	title: string
	description?: string | null
	author: IAuthor
	image: string
	createdAt: string
	content:string 
	slug: string
}
export interface LoginFormValues {
  email: string
  password: string
}

export interface IAuthor {
	name: string
	image: string
	bio: string
	blogs: IBlog[]
	id: string
}

export interface ICategoryAndTags {
	name: string
	slug: string
	blogs:IBlog[]
}
