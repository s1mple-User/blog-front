export interface TypeBlog {
    title: string
    description?: string
    author: UserType
    tag?: string[]
    image: { url: string }
    createdAt: string
    content: { html: string }
    slug: string
}


export interface Token {
    refresh:string
    access:string
}

export interface UserType {
    id:number
    email:string
    password:string
    name: string
    image: File |null |string
    bio?: string
    blogs?: TypeBlog[]
    tokens?:Token[]
}


export interface UserIntialStateType {
    user: null |UserType,
    isLoading: boolean,
   tokens: Token | null,
	error?: null | any,
    callback?:() => void
}

export interface LoginResponse {
  tokens: Token
  user: UserType
}