import { Token } from '@/store/user/user.interface'
import Cookies from 'js-cookie'

export const saveToken = (data: Token) => {
  const { refresh, access } = data

  Cookies.set('refresh', refresh, { expires: 30 }) 
  Cookies.set('access', access,{ expires: 0.009722 }) 
}

export const saveAccses = (access:string) => Cookies.set('access',access, { expires: 0.009722 })

export const removeToken = () => {
  Cookies.remove('refresh')
  Cookies.remove('access')
}


export const getAccses =() => {
    return Cookies.get("access")
}

export const getRefresh =() => {
    return Cookies.get("refresh")
}