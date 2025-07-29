import { IAuthor } from "@/types";

export interface TypeBlog {
  id: number; 
  title: string;
  description?: string | null;
  author: IAuthor; 
  image: string; 
  createdAt: string; 
  content: string;
  slug: string;
}

export interface BlogPagination {
  count: number
  next: string | null
  previous: string | null
  results: TypeBlog[]
}

export interface IBlog_Search {
  id: number
  title: string
  image: string
  createdAt: string 
  slug: string
}

export interface BlogIntialStateType {
  blog:TypeBlog[] | []
  blog_detail:TypeBlog| null
  search_blog:IBlog_Search | {}
  blog_profile:TypeBlog[] | []
  isLoading:boolean
  error: any
  callback: () => void
}